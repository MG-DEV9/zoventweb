/**
 * Re-derives a payment's overall status and paidAmount from its
 * installments array. Pure function — takes a plain array, returns a plain
 * result, and never touches a Mongoose document — so it's testable without a
 * database and safe to reuse anywhere installment state changes.
 *
 * @param {{ amount: number, status: 'Pending' | 'Paid' }[]} installments
 * @returns {{ status: 'Pending' | 'Partial' | 'Paid', paidAmount: number } | null}
 *   null when there are no installments (caller should leave the payment's
 *   existing status/paidAmount untouched in that case).
 */
export function syncInstallments(installments) {
  if (!installments || installments.length === 0) {
    return null;
  }

  const paidAmount = installments.filter((i) => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const paidCount = installments.filter((i) => i.status === 'Paid').length;
  const total = installments.length;

  let status;
  if (paidCount === 0) status = 'Pending';
  else if (paidCount === total) status = 'Paid';
  else status = 'Partial';

  return { status, paidAmount };
}
