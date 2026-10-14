import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, Lock, CreditCard, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { DEMO_INVOICES, SITE_INFO } from '../data/zoventsData';
import { useSEO } from '../hooks/useSEO';

export const PaymentPage: React.FC = () => {
  useSEO({
    title: 'Secure Payment',
    description: 'Securely pay your ZOVENT invoice online.',
    path: '/payment',
    noIndex: true,
  });

  const [refInput, setRefInput] = useState('');
  const [invoice, setInvoice] = useState<typeof DEMO_INVOICES[string] | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [paying, setPaying] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);

  const handleSearch = (overrideId?: string) => {
    const searchId = (overrideId || refInput).trim().toUpperCase();
    if (!searchId) {
      setErrorMsg('Please enter a valid payment Booking/Reference ID');
      setInvoice(null);
      return;
    }

    if (DEMO_INVOICES[searchId]) {
      setInvoice(DEMO_INVOICES[searchId]);
      setErrorMsg('');
      setPaidSuccess(DEMO_INVOICES[searchId].status === 'PAID');
    } else {
      setErrorMsg(`No invoice found for reference "${searchId}". Try sample IDs below.`);
      setInvoice(null);
    }
  };

  const handleSimulatePayment = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPaidSuccess(true);
      if (invoice) {
        invoice.status = 'PAID';
      }
    }, 1200);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ SECURE PAYMENT ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">
            PAY ZOVENT.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            Enter your payment Booking/Reference ID to load your invoice details and pay securely.
          </p>
        </div>
      </section>

      {/* Main Payment Container */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12 max-w-4xl bg-[#F2E6EA]">
        <div className="bg-[#FCFBF8] border border-[#E3DDD4] p-8 sm:p-12 shadow-sm">
          
          {/* Reference ID Search Form */}
          <div className="mb-10">
            <label className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#666061] mb-3">
              PAYMENT BOOKING/REFERENCE ID
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. ZOV-2026-8812"
                value={refInput}
                onChange={(e) => {
                  setRefInput(e.target.value);
                  setErrorMsg('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-4 py-3.5 bg-[#FAF8F5] border border-[#E0D9CF] text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] uppercase tracking-wider"
              />
              <button
                onClick={() => handleSearch()}
                className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Search size={14} />
                <span>[ FIND ]</span>
              </button>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-600 mt-2 flex items-center gap-1.5">
                <AlertCircle size={14} />
                <span>{errorMsg}</span>
              </p>
            )}

            {/* Quick Demo Preloads */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#7A7374]">
              <span>Sample Invoice IDs:</span>
              <button
                onClick={() => {
                  setRefInput('ZOV-2026-8812');
                  handleSearch('ZOV-2026-8812');
                }}
                className="px-2.5 py-1 bg-[#F0EBE1] hover:bg-[#E5DFD5] text-[#1E1919] font-mono text-[11px] cursor-pointer"
              >
                ZOV-2026-8812 (TechCore Summit)
              </button>
              <button
                onClick={() => {
                  setRefInput('ZOV-2026-9401');
                  handleSearch('ZOV-2026-9401');
                }}
                className="px-2.5 py-1 bg-[#F0EBE1] hover:bg-[#E5DFD5] text-[#1E1919] font-mono text-[11px] cursor-pointer"
              >
                ZOV-2026-9401 (Meridian Offsite)
              </button>
            </div>
          </div>

          {/* Invoice Results Card */}
          {invoice ? (
            <div className="border-t border-[#E8E2D9] pt-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D9]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C8485] font-semibold">
                    INVOICE REFERENCE: {invoice.refId}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal mt-1">
                    {invoice.eventName}
                  </h3>
                  <p className="text-xs text-[#5C5556] mt-0.5">
                    Client: {invoice.clientName} · Due Date: {invoice.dueDate}
                  </p>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-bold ${
                    paidSuccess ? 'bg-[#EEF4EA] text-[#2A751C]' : 'bg-[#FFF3E0] text-[#E65100]'
                  }`}>
                    {paidSuccess ? 'PAID & CONFIRMED' : 'PAYMENT DUE'}
                  </span>
                  <p className="font-serif text-3xl sm:text-4xl text-[#520818] font-medium mt-1">
                    {invoice.amount}
                  </p>
                </div>
              </div>

              {/* Line Items */}
              <div className="py-6 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8C8485]">
                  Itemised Mandate Schedule
                </p>
                {invoice.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-[#F5F0E8] last:border-b-0">
                    <span className="text-[#3A3535]">{it.description}</span>
                    <span className="font-mono text-[#1E1919] font-medium">{it.amount}</span>
                  </div>
                ))}
              </div>

              {/* Payment Action */}
              <div className="pt-6 border-t border-[#E8E2D9]">
                {paidSuccess ? (
                  <div className="bg-[#EEF4EA] p-6 text-center border border-[#A7C897]/50">
                    <CheckCircle2 size={32} className="text-[#2A751C] mx-auto mb-2" />
                    <p className="font-serif text-xl text-[#1E1919]">Payment Confirmed</p>
                    <p className="text-xs text-[#5C5556] mt-1">
                      Receipt generated and dispatched to {invoice.clientName}. Thank you.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button
                      onClick={handleSimulatePayment}
                      disabled={paying}
                      className="w-full bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest py-4 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-75"
                    >
                      {paying ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Routing to Razorpay Gateway...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard size={15} />
                          <span>Pay {invoice.amount} via Razorpay Gateway →</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#7A7374] text-center">
                      Supports UPI, Corporate NetBanking, Visa, Mastercard, and RuPay.
                    </p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="py-12 text-center border-t border-[#E8E2D9]">
              <p className="text-sm text-[#7A7374] font-light">
                Enter a reference ID above to load payment details.
              </p>
            </div>
          )}

          {/* Trust and Help Footnotes matching transcript */}
          <div className="mt-12 pt-8 border-t border-[#E8E2D9] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#6B6364]">


            <div className="flex items-start gap-2.5">
              <ShieldCheck size={15} className="text-[#520818] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1E1919]">Find Your Invoice</p>
                <p className="mt-0.5">Use the reference ID from your Zovent payment link to load the invoice details.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 text-center">
            <p className="text-xs text-[#7A7374]">
              Need Help? Contact our billing desk at <a href={`mailto:${SITE_INFO.email}`} className="text-[#520818] underline">{SITE_INFO.email}</a> or call {SITE_INFO.phone}.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
