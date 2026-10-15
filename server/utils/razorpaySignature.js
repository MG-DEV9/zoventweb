import crypto from 'crypto';

/**
 * Verifies a Razorpay checkout signature using the documented
 * HMAC-SHA256(order_id + "|" + payment_id, key_secret) scheme.
 *
 * Extracted as a pure function (no Express req/res, no DB) so the
 * verification logic itself can be tested without a live Razorpay account
 * or a database.
 */
export function verifyRazorpaySignature({ orderId, paymentId, signature, secret }) {
  if (!orderId || !paymentId || !signature || !secret) {
    return false;
  }

  const expected = crypto.createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest('hex');

  // Constant-time comparison to avoid leaking signature bytes via timing.
  const expectedBuf = Buffer.from(expected, 'hex');
  const actualBuf = Buffer.from(signature, 'hex');
  if (expectedBuf.length !== actualBuf.length) {
    return false;
  }
  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}
