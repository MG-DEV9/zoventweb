import test from 'node:test';
import assert from 'node:assert/strict';
import { syncInstallments } from './installmentSync.js';

test('returns null for an empty or missing installments array', () => {
  assert.equal(syncInstallments([]), null);
  assert.equal(syncInstallments(undefined), null);
  assert.equal(syncInstallments(null), null);
});

test('all pending -> status Pending, paidAmount 0', () => {
  const r = syncInstallments([
    { amount: 1000, status: 'Pending' },
    { amount: 2000, status: 'Pending' },
  ]);
  assert.deepEqual(r, { status: 'Pending', paidAmount: 0 });
});

test('some paid -> status Partial, paidAmount sums only the paid ones', () => {
  const r = syncInstallments([
    { amount: 1000, status: 'Paid' },
    { amount: 2000, status: 'Pending' },
    { amount: 3000, status: 'Pending' },
  ]);
  assert.deepEqual(r, { status: 'Partial', paidAmount: 1000 });
});

test('all paid -> status Paid, paidAmount is the full sum', () => {
  const r = syncInstallments([
    { amount: 1000, status: 'Paid' },
    { amount: 2000, status: 'Paid' },
  ]);
  assert.deepEqual(r, { status: 'Paid', paidAmount: 3000 });
});

test('single installment, paid -> status Paid', () => {
  const r = syncInstallments([{ amount: 5000, status: 'Paid' }]);
  assert.deepEqual(r, { status: 'Paid', paidAmount: 5000 });
});

test('order of installments does not affect the result', () => {
  const a = syncInstallments([
    { amount: 100, status: 'Paid' },
    { amount: 200, status: 'Pending' },
  ]);
  const b = syncInstallments([
    { amount: 200, status: 'Pending' },
    { amount: 100, status: 'Paid' },
  ]);
  assert.deepEqual(a, b);
});
