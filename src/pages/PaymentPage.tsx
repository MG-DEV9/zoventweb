import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SITE_INFO } from '../data/zoventsData';
import { api, assetUrl, ApiError, PaymentRecord } from '../lib/api';
import { loadRazorpay, RazorpayFailedResponse } from '../lib/razorpay';
import { computeCharges } from '@/shared/paymentMath.js';

const RED = '#520818';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const statusColors: Record<PaymentRecord['status'], { bg: string; text: string }> = {
  Paid: { bg: '#dcfce7', text: '#15803d' },
  Partial: { bg: '#dbeafe', text: '#1d4ed8' },
  Pending: { bg: '#fef9c3', text: '#a16207' },
};

interface PaymentPageProps {
  initialReference?: string;
  onNavigate: (path: string) => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ initialReference, onNavigate }) => {
  const [reference, setReference] = useState(initialReference || '');
  const [payment, setPayment] = useState<PaymentRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedInstIdx, setSelectedInstIdx] = useState<number>(-1);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [client, setClient] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    if (payment?.installments?.length) {
      const idx = payment.installments.findIndex((i) => i.status === 'Pending');
      setSelectedInstIdx(idx >= 0 ? idx : -1);
    } else {
      setSelectedInstIdx(-1);
    }
  }, [payment]);

  const activeBase = useMemo(() => {
    if (payment?.installments?.length && selectedInstIdx >= 0 && selectedInstIdx < payment.installments.length) {
      return payment.installments[selectedInstIdx].amount;
    }
    return payment?.remainingAmount ?? payment?.totalAmount ?? payment?.baseAmount ?? 0;
  }, [payment, selectedInstIdx]);

  const amountBreakdown = useMemo(
    () =>
      computeCharges(activeBase, {
        gstApplicable: payment?.gstApplicable,
        gstRate: payment?.gstRate,
        gatewayFeeApplicable: payment?.gatewayFeeApplicable,
        gatewayFeeRate: payment?.gatewayFeeRate,
      }),
    [activeBase, payment]
  );

  // Once an invoice is fully settled, show what was actually collected
  // (gross + taxes/charges actually charged on each payment) instead of the
  // "next amount due" breakdown above, which would otherwise show zeros.
  const paidSummary = useMemo(() => {
    if (!payment || !payment.paidAmount) return null;
    const chargeOpts = {
      gstApplicable: payment.gstApplicable,
      gstRate: payment.gstRate,
      gatewayFeeApplicable: payment.gatewayFeeApplicable,
      gatewayFeeRate: payment.gatewayFeeRate,
    };
    const gross = payment.paidAmount;
    const charges = payment.installments?.length
      ? payment.installments
          .filter((i) => i.status === 'Paid')
          .reduce((sum, i) => {
            const c = computeCharges(i.amount, chargeOpts);
            return sum + c.fee + c.gst;
          }, 0)
      : (() => {
          const c = computeCharges(gross, chargeOpts);
          return c.fee + c.gst;
        })();
    return { gross, charges, total: gross + charges };
  }, [payment]);

  const fetchPayment = useCallback(
    async (id: string) => {
      const trimmed = id.trim().toUpperCase();
      if (!trimmed) {
        setError('Please enter your payment reference ID.');
        return;
      }
      setLoading(true);
      setError('');
      setSuccess('');
      try {
        const data = await api.getPayment(trimmed);
        setPayment(data);
        setReference(trimmed);
        setClient((c) => ({ ...c, name: c.name || data.clientName }));
        onNavigate(`/payment/${trimmed}`);
      } catch (err) {
        setPayment(null);
        setError(err instanceof ApiError ? err.message : 'Unable to reach the payment server. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [onNavigate]
  );

  useEffect(() => {
    if (initialReference) fetchPayment(initialReference);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialReference]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPayment(reference);
  };

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClient((c) => ({ ...c, [name]: value }));
    setFieldErrors((fe) => ({ ...fe, [name]: undefined }));
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payment) {
      setError('Please fetch a valid payment reference first.');
      return;
    }

    const errs: typeof fieldErrors = {};
    if (!client.name.trim()) errs.name = 'Full name is required.';
    if (!client.phone.trim()) errs.phone = 'Mobile number is required.';
    else if (!/^[6-9]\d{9}$/.test(client.phone.trim())) errs.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (client.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client.email.trim())) errs.email = 'Enter a valid email address.';
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    setPaying(true);
    setError('');
    setSuccess('');
    try {
      await loadRazorpay();

      const instIdx = payment.installments?.length && selectedInstIdx >= 0 ? selectedInstIdx : null;
      const instLabel = instIdx !== null ? payment.installments![instIdx].label : null;

      const order = await api.createOrder({
        paymentId: payment.paymentId,
        amount: amountBreakdown.total,
        gstApplied: Boolean(payment.gstApplicable),
        clientName: client.name,
        clientEmail: client.email,
        clientPhone: client.phone,
        clientMessage: client.message,
        installmentIdx: instIdx,
      });

      const rzp = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID as string,
        amount: order.amount,
        currency: order.currency,
        name: SITE_INFO.name,
        description: instLabel ? `${payment.paymentId} — ${instLabel}` : `Reference: ${payment.paymentId}`,
        order_id: order.orderId,
        prefill: { name: client.name, email: client.email, contact: client.phone },
        theme: { color: RED },
        modal: {
          escape: false,
          ondismiss: () => {
            setPaying(false);
            setError('Payment was cancelled. You can try again when ready.');
          },
        },
        handler: async (response) => {
          try {
            await api.verifyPayment({
              ...response,
              paymentId: payment.paymentId,
              amount: amountBreakdown.total,
              installmentIdx: instIdx,
            });
            setPaying(false);
            setSuccess(`Payment successful${instLabel ? ` for ${instLabel}` : ''}! ID: ${response.razorpay_payment_id}. Thank you!`);
            fetchPayment(payment.paymentId);
          } catch (err) {
            setPaying(false);
            const detail = err instanceof ApiError ? err.message : 'Unknown verification error.';
            setError(`Payment was received but could not be verified: ${detail}`);
          }
        },
      });
      rzp.on('payment.failed', (r: RazorpayFailedResponse) => {
        setPaying(false);
        setError(`Payment failed: ${r.error?.description || 'Unknown error'}. Please try again.`);
      });
      rzp.open();
    } catch (err) {
      setPaying(false);
      setError(err instanceof ApiError ? err.message : 'Could not start payment. Please try again.');
    }
  };

  const hasInstallments = !!payment?.installments?.length;
  const pendingInstallments = payment?.installments?.filter((i) => i.status === 'Pending') || [];
  const allPaid = payment?.status === 'Paid';

  const inputCls =
    'w-full px-4 py-3 text-sm border outline-none transition-colors bg-[#FAF8F5] border-[#E0D9CF] text-[#1E1919] placeholder-[#9E9798] focus:border-[#520818]';

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">[ SECURE PAYMENT ]</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">PAY ZOVENT.</h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            Enter your payment reference ID to load your invoice details and pay securely via Razorpay.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-6 items-start max-w-5xl mx-auto">
          {/* LEFT: lookup + client fields + pay */}
          <div className="p-8 bg-[#F2E6EA] border border-[rgba(82,8,24,0.1)]">
            <form onSubmit={handleLookup} className="space-y-3 mb-6">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: RED }}>
                Payment Reference ID
              </label>
              <div className="flex gap-2">
                <input
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className={inputCls}
                  placeholder="ZOV-MICE-0001"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 px-5 py-3 text-[11px] tracking-[0.15em] font-bold uppercase transition-colors disabled:opacity-60 bg-[#520818] hover:bg-[#1A0A0E] text-white"
                >
                  {loading ? '...' : 'FIND'}
                </button>
              </div>
            </form>

            {error && (
              <div className="mb-4 px-4 py-3 text-[12px] border bg-red-50 border-red-300 text-red-800">{error}</div>
            )}
            {success && (
              <div className="mb-4 px-4 py-3 text-[12px] border flex gap-2 items-start bg-green-50 border-green-300 text-green-700">
                <span>✓</span>
                <span>{success}</span>
              </div>
            )}

            {payment && (
              <form onSubmit={handlePay} className="space-y-3 border-t pt-5 border-[rgba(82,8,24,0.1)]">
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-3" style={{ color: RED }}>
                  Your Details
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <input
                      name="name"
                      value={client.name}
                      onChange={handleClientChange}
                      className={`${inputCls} ${fieldErrors.name ? 'border-red-400' : ''}`}
                      placeholder="Full name *"
                    />
                    {fieldErrors.name && <p className="mt-1 text-[10px] text-red-500">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={client.email}
                      onChange={handleClientChange}
                      className={`${inputCls} ${fieldErrors.email ? 'border-red-400' : ''}`}
                      placeholder="Email (optional)"
                    />
                    {fieldErrors.email && <p className="mt-1 text-[10px] text-red-500">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      value={client.phone}
                      onChange={handleClientChange}
                      className={`${inputCls} ${fieldErrors.phone ? 'border-red-400' : ''}`}
                      placeholder="Mobile number *"
                    />
                    {fieldErrors.phone && <p className="mt-1 text-[10px] text-red-500">{fieldErrors.phone}</p>}
                  </div>
                  <div className="col-span-2">
                    <textarea
                      name="message"
                      value={client.message}
                      onChange={handleClientChange}
                      className={`${inputCls} resize-none`}
                      rows={2}
                      placeholder="Message for our team (optional)"
                    />
                  </div>
                </div>

                {allPaid ? (
                  <div className="px-4 py-3 text-[12px] border flex gap-2 items-center bg-green-50 border-green-300 text-green-700">
                    ✓ This invoice has been fully paid.
                  </div>
                ) : pendingInstallments.length === 0 && hasInstallments ? (
                  <div className="px-4 py-3 text-[12px] border flex gap-2 items-center bg-green-50 border-green-300 text-green-700">
                    ✓ All installments have been paid.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={paying || (hasInstallments && selectedInstIdx < 0)}
                    className="w-full py-3.5 text-[12px] tracking-[0.15em] font-bold uppercase transition-colors disabled:opacity-60 flex items-center justify-center gap-2 bg-[#520818] hover:bg-[#1A0A0E] text-white"
                  >
                    {paying && <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />}
                    {!paying && '🔒 '}
                    {hasInstallments && selectedInstIdx >= 0
                      ? `PAY ${payment.installments![selectedInstIdx].label} — ${fmt(amountBreakdown.total)}`
                      : `PAY ${fmt(amountBreakdown.total)}`}
                  </button>
                )}
              </form>
            )}

            {!payment && !loading && (
              <div className="mt-4 py-8 text-center border border-dashed border-[rgba(82,8,24,0.2)]">
                <p className="text-[12px] mb-2 text-[#7A7374]">Enter a reference ID above to load payment details.</p>
                <button onClick={() => onNavigate('/contact')} className="text-[11px] underline" style={{ color: RED }}>
                  Need Help?
                </button>
              </div>
            )}

            <div className="flex items-start gap-3 mt-5 pt-4 border-t border-[rgba(82,8,24,0.1)]">
              <span style={{ color: RED }}>🔒</span>
              <p className="text-[11px] leading-relaxed text-[#7A7374]">
                Secured by Razorpay. We never store your card or UPI credentials.
              </p>
            </div>
          </div>

          {/* RIGHT: invoice details */}
          <div className="p-8 bg-white border border-[#E3DDD4]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {payment ? (
              <>
                <div className="flex flex-wrap justify-between items-start gap-3 pb-5 mb-5 border-b border-[#E8E2D9]">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] mb-1 text-[#8C8485]">Reference</p>
                    <h2 className="text-2xl sm:text-3xl text-[#1E1919] font-normal">{payment.paymentId}</h2>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="px-3 py-1 text-[9px] uppercase tracking-widest font-bold"
                      style={{ backgroundColor: statusColors[payment.status].bg, color: statusColors[payment.status].text }}
                    >
                      {payment.status}
                    </span>
                    {payment.invoiceUrl && (
                      <a
                        href={assetUrl(payment.invoiceUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] tracking-[0.1em] uppercase font-semibold underline"
                        style={{ color: RED }}
                      >
                        View Invoice ↗
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-4 text-[13px] mb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest mb-1 text-[#8C8485]">Client</p>
                    <p className="font-normal">{payment.clientName}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest mb-1 text-[#8C8485]">Service</p>
                    <p className="font-normal">{payment.service}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[9px] uppercase tracking-widest mb-1 text-[#8C8485]">Description</p>
                    <p className="text-[#5C5556]">{payment.description}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest mb-1 text-[#8C8485]">Due Date</p>
                    <p>{new Date(payment.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>

                {hasInstallments && (
                  <div className="mb-5">
                    <p className="text-[9px] uppercase tracking-widest mb-3 text-[#8C8485]">Select Installment</p>
                    <div className="grid grid-cols-2 gap-2">
                      {payment.installments!.map((inst, idx) => {
                        const isPaid = inst.status === 'Paid';
                        const isSelected = selectedInstIdx === idx;
                        const isOverdue = !isPaid && new Date(inst.dueDate) < new Date();
                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={isPaid}
                            onClick={() => setSelectedInstIdx(idx)}
                            className="text-left p-3 border transition-all"
                            style={{
                              backgroundColor: isPaid ? '#f0fdf4' : isSelected ? RED : '#fff',
                              borderColor: isPaid ? '#86efac' : isSelected ? RED : 'rgba(82,8,24,0.15)',
                              cursor: isPaid ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className="text-[10px] uppercase tracking-widest font-bold"
                                style={{ color: isPaid ? '#15803d' : isSelected ? '#fff' : '#1E1919' }}
                              >
                                {inst.label}
                              </span>
                              {isPaid && <span className="text-[10px] text-green-700">✓</span>}
                            </div>
                            <p className="text-[17px] font-semibold tracking-tight" style={{ color: isPaid ? '#15803d' : isSelected ? '#fff' : '#1E1919' }}>
                              {fmt(inst.amount)}
                            </p>
                            <p
                              className="text-[9px] mt-0.5"
                              style={{
                                color: isPaid ? '#15803d' : isOverdue ? '#dc2626' : isSelected ? 'rgba(255,255,255,0.7)' : 'rgba(26,10,14,0.4)',
                              }}
                            >
                              {isPaid && inst.paidOn
                                ? `Paid ${new Date(inst.paidOn).toLocaleDateString('en-IN')}`
                                : isOverdue
                                  ? `Overdue · ${new Date(inst.dueDate).toLocaleDateString('en-IN')}`
                                  : `Due ${new Date(inst.dueDate).toLocaleDateString('en-IN')}`}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[10px] mt-2 pt-2 border-t border-[rgba(82,8,24,0.08)] text-[#7A7374]">
                      <span>
                        {payment.installments!.filter((i) => i.status === 'Paid').length} of {payment.installments!.length} paid
                      </span>
                      <span className="text-red-600 font-semibold">
                        Remaining: {fmt(payment.remainingAmount ?? Math.max(0, (payment.totalAmount || payment.baseAmount) - (payment.paidAmount || 0)))}
                      </span>
                    </div>
                  </div>
                )}

                {allPaid && paidSummary ? (
                  <div className="py-4 space-y-2.5 text-[13px] border-t border-b border-[#E8E2D9]">
                    <div className="flex justify-between items-baseline text-[#5C5556]">
                      <span className="text-[11px] uppercase tracking-wide">Gross Amount</span>
                      <span className="text-[15px] font-medium text-[#1E1919]">{fmt(paidSummary.gross)}</span>
                    </div>
                    {paidSummary.charges > 0 && (
                      <div className="flex justify-between items-baseline text-[#5C5556]">
                        <span className="text-[11px] uppercase tracking-wide">Taxes &amp; Charges</span>
                        <span className="text-[15px] font-medium text-[#1E1919]">{fmt(paidSummary.charges)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-2.5 font-semibold text-[20px] text-[#1E1919] border-t border-[#E8E2D9]">
                      <span className="text-[13px] uppercase tracking-wide font-semibold">Grand Total Paid</span>
                      <span>{fmt(paidSummary.total)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-4 space-y-2.5 text-[13px] border-t border-b border-[#E8E2D9]">
                    <div className="flex justify-between items-baseline text-[#5C5556]">
                      <span className="text-[11px] uppercase tracking-wide">
                        {hasInstallments && selectedInstIdx >= 0 ? payment.installments![selectedInstIdx].label : 'Base amount'}
                      </span>
                      <span className="text-[15px] font-medium text-[#1E1919]">{fmt(activeBase)}</span>
                    </div>
                    {!!payment.paidAmount && payment.paidAmount > 0 && (
                      <div className="flex justify-between items-baseline">
                        <span className="text-[11px] uppercase tracking-wide" style={{ color: '#15803d' }}>
                          Already Paid
                        </span>
                        <span className="text-[15px] font-medium" style={{ color: '#15803d' }}>
                          {fmt(payment.paidAmount)}
                        </span>
                      </div>
                    )}
                    {(amountBreakdown.fee > 0 || amountBreakdown.gst > 0) && (
                      <div className="flex justify-between items-baseline text-[#5C5556]">
                        <span className="text-[11px] uppercase tracking-wide">Taxes &amp; Charges</span>
                        <span className="text-[15px] font-medium text-[#1E1919]">{fmt(amountBreakdown.fee + amountBreakdown.gst)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-2.5 font-semibold text-[20px] text-[#1E1919] border-t border-[#E8E2D9]">
                      <span className="text-[13px] uppercase tracking-wide font-semibold">Total Payable</span>
                      <span>{fmt(amountBreakdown.total)}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="min-h-[320px] flex items-center justify-center text-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl text-[#1E1919] font-normal mb-2">Find Your Invoice</h2>
                  <p className="text-[13px] text-[#5C5556] max-w-[280px] mx-auto">
                    Use the reference ID from your Zovent payment link to load the invoice details.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#7A7374]">
            Need Help? Contact our billing desk at{' '}
            <a href={`mailto:${SITE_INFO.email}`} className="text-[#520818] underline">
              {SITE_INFO.email}
            </a>{' '}
            or call {SITE_INFO.phone}.
          </p>
        </div>
      </section>
    </div>
  );
};
