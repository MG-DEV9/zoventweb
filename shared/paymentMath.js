/**
 * Single source of truth for the gateway-fee + GST math applied on top of a
 * base amount (an invoice total or a single installment). Used by both the
 * public payment page and the admin payments dashboard — keeping this in one
 * place avoids the two surfaces drifting apart on how much a client is
 * actually charged.
 *
 * @param {number} base - the amount before fee/tax (an installment amount,
 *   or the invoice's remaining/total amount)
 * @param {object} [opts]
 * @param {boolean} [opts.gstApplicable=false]
 * @param {number}  [opts.gstRate=18] - percent, only used when gstApplicable is true
 * @param {boolean} [opts.gatewayFeeApplicable=true]
 * @param {number}  [opts.gatewayFeeRate=2] - percent, only used when gatewayFeeApplicable is true
 * @returns {{ fee: number, feeRate: number, gst: number, rate: number, total: number }}
 */
export function computeCharges(base, opts = {}) {
  const { gstApplicable = false, gstRate = 18, gatewayFeeApplicable = true, gatewayFeeRate = 2 } = opts;

  const feeRate = gatewayFeeApplicable ? gatewayFeeRate ?? 2 : 0;
  const fee = feeRate > 0 ? Math.round(base * (feeRate / 100)) : 0;

  // GST is computed on (base + fee), matching how Razorpay-style gateway
  // charges are conventionally taxed on top of the base amount.
  const rate = gstApplicable ? gstRate ?? 18 : 0;
  const gst = rate > 0 ? Math.round((base + fee) * (rate / 100)) : 0;

  return { fee, feeRate, gst, rate, total: base + fee + gst };
}
