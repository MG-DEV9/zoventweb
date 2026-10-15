import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'crypto';
import { verifyRazorpaySignature } from './razorpaySignature.js';

const SECRET = 'test_secret_key';

function sign(orderId, paymentId, secret = SECRET) {
  return crypto.createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest('hex');
}

test('accepts a correctly signed payment', () => {
  const orderId = 'order_abc123';
  const paymentId = 'pay_xyz789';
  const signature = sign(orderId, paymentId);

  assert.equal(verifyRazorpaySignature({ orderId, paymentId, signature, secret: SECRET }), true);
});

test('rejects a tampered signature', () => {
  const orderId = 'order_abc123';
  const paymentId = 'pay_xyz789';
  const signature = sign(orderId, paymentId);
  const tampered = signature.slice(0, -2) + (signature.slice(-2) === '00' ? '11' : '00');

  assert.equal(verifyRazorpaySignature({ orderId, paymentId, signature: tampered, secret: SECRET }), false);
});

test('rejects a signature produced with the wrong secret', () => {
  const orderId = 'order_abc123';
  const paymentId = 'pay_xyz789';
  const signature = sign(orderId, paymentId, 'a_different_secret');

  assert.equal(verifyRazorpaySignature({ orderId, paymentId, signature, secret: SECRET }), false);
});

test('rejects a signature for a different payment id (replay across orders)', () => {
  const orderId = 'order_abc123';
  const signature = sign(orderId, 'pay_xyz789');

  assert.equal(
    verifyRazorpaySignature({ orderId, paymentId: 'pay_different', signature, secret: SECRET }),
    false
  );
});

test('rejects when any required field is missing', () => {
  assert.equal(verifyRazorpaySignature({ orderId: '', paymentId: 'pay_1', signature: 'abc', secret: SECRET }), false);
  assert.equal(verifyRazorpaySignature({ orderId: 'o1', paymentId: '', signature: 'abc', secret: SECRET }), false);
  assert.equal(verifyRazorpaySignature({ orderId: 'o1', paymentId: 'p1', signature: '', secret: SECRET }), false);
  assert.equal(verifyRazorpaySignature({ orderId: 'o1', paymentId: 'p1', signature: 'abc', secret: '' }), false);
});

test('rejects a non-hex signature without throwing', () => {
  assert.doesNotThrow(() => {
    verifyRazorpaySignature({ orderId: 'o1', paymentId: 'p1', signature: 'not-hex-at-all', secret: SECRET });
  });
});
