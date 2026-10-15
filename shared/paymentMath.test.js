import test from 'node:test';
import assert from 'node:assert/strict';
import { computeCharges } from './paymentMath.js';

test('no GST, no gateway fee', () => {
  const r = computeCharges(10000, { gstApplicable: false, gatewayFeeApplicable: false });
  assert.equal(r.fee, 0);
  assert.equal(r.gst, 0);
  assert.equal(r.total, 10000);
});

test('defaults: gateway fee applies at 2% even when not explicitly configured', () => {
  const r = computeCharges(10000, {});
  assert.equal(r.feeRate, 2);
  assert.equal(r.fee, 200);
  assert.equal(r.gst, 0);
  assert.equal(r.total, 10200);
});

test('GST applies on (base + fee), not on base alone', () => {
  const r = computeCharges(10000, { gstApplicable: true, gstRate: 18, gatewayFeeApplicable: true, gatewayFeeRate: 2 });
  assert.equal(r.fee, 200); // 2% of 10000
  assert.equal(r.gst, 1836); // 18% of (10000 + 200) = 1836
  assert.equal(r.total, 12036);
});

test('gatewayFeeApplicable=false zeroes the fee regardless of a stored rate', () => {
  const r = computeCharges(5000, { gatewayFeeApplicable: false, gatewayFeeRate: 5 });
  assert.equal(r.fee, 0);
  assert.equal(r.feeRate, 0);
});

test('custom gateway fee rate is respected', () => {
  const r = computeCharges(10000, { gatewayFeeApplicable: true, gatewayFeeRate: 3 });
  assert.equal(r.fee, 300);
});

test('regression: gstApplicable=false must not apply GST even if a stale gstRate is present', () => {
  // This is the exact bug found when the public payment page and the admin
  // modal computed this independently: one of them keyed off `gstRate` being
  // non-null instead of checking `gstApplicable` first.
  const r = computeCharges(10000, { gstApplicable: false, gstRate: 18 });
  assert.equal(r.gst, 0);
  assert.equal(r.rate, 0);
});

test('gstApplicable=true with no explicit rate defaults to 18%', () => {
  const r = computeCharges(1000, { gstApplicable: true, gatewayFeeApplicable: false });
  assert.equal(r.rate, 18);
  assert.equal(r.gst, 180);
});

test('rounding: fractional fee and GST amounts round to whole rupees', () => {
  const r = computeCharges(333, { gstApplicable: true, gstRate: 5, gatewayFeeApplicable: true, gatewayFeeRate: 2 });
  // fee = round(333 * 0.02) = round(6.66) = 7
  assert.equal(r.fee, 7);
  // gst = round((333 + 7) * 0.05) = round(17) = 17
  assert.equal(r.gst, 17);
  assert.equal(r.total, 333 + 7 + 17);
});

test('base amount of 0 produces all-zero charges', () => {
  const r = computeCharges(0, { gstApplicable: true, gatewayFeeApplicable: true });
  assert.equal(r.fee, 0);
  assert.equal(r.gst, 0);
  assert.equal(r.total, 0);
});
