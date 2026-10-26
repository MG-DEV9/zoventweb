import { ADMIN_TOKEN_KEY } from '../pages/admin/adminAuth';

const API_URL = ((import.meta.env.VITE_API_URL as string) || 'http://localhost:5000/api').replace(/\/$/, '');

type ApiErrorPayload = { message?: string };

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

// ── Types ──────────────────────────────────────────────────────────────────────
export interface Installment {
  label: string;
  amount: number;
  dueDate: string;
  status: 'Pending' | 'Paid';
  paidOn?: string;
  razorpayPaymentId?: string;
}

export interface PaymentRecord {
  _id?: string;
  paymentId: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  service: string;
  description: string;
  totalAmount: number;
  baseAmount: number;
  dueDate: string;
  status: 'Pending' | 'Partial' | 'Paid';
  gstApplicable?: boolean;
  gstRate?: number;
  gatewayFeeApplicable?: boolean;
  gatewayFeeRate?: number;
  paidAmount?: number;
  remainingAmount?: number;
  installments?: Installment[];
  lastPaidAt?: string;
  razorpayPaymentId?: string;
  invoiceUrl?: string;
  invoiceFileName?: string;
}

export interface AdminUser {
  username: string;
}

const withoutMongoId = <T extends { _id?: string }>(record: T) => {
  const { _id: _ignored, ...cleanRecord } = record;
  return cleanRecord;
};

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem(ADMIN_TOKEN_KEY);
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, { ...init, headers });
  const payload = await response.json().catch(() => ({} as ApiErrorPayload));

  if (!response.ok) {
    throw new ApiError((payload as ApiErrorPayload).message || `Request failed (${response.status})`, response.status);
  }
  return payload as T;
}

export const api = {
  login: (username: string, password: string) =>
    request<{ token: string; admin: AdminUser }>('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),

  listPayments: (params?: { status?: string; search?: string }) => {
    const query = new URLSearchParams();
    if (params?.status && params.status !== 'ALL') query.set('status', params.status);
    if (params?.search) query.set('search', params.search);
    return request<PaymentRecord[]>(`/payments${query.size ? `?${query}` : ''}`);
  },

  getPayment: (paymentId: string) => request<PaymentRecord>(`/payments/${encodeURIComponent(paymentId)}`),

  createPayment: (record: Partial<PaymentRecord>) =>
    request<PaymentRecord>('/payments', { method: 'POST', body: JSON.stringify(withoutMongoId(record)) }),

  updatePayment: (paymentId: string, record: Partial<PaymentRecord>) =>
    request<PaymentRecord>(`/payments/${encodeURIComponent(paymentId)}`, {
      method: 'PUT',
      body: JSON.stringify(withoutMongoId(record)),
    }),

  deletePayment: (paymentId: string) =>
    request<{ message: string }>(`/payments/${encodeURIComponent(paymentId)}`, { method: 'DELETE' }),

  createOrder: (data: Record<string, unknown>) =>
    request<{ orderId: string; amount: number; currency: string }>('/razorpay/create-order', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  verifyPayment: (data: Record<string, unknown>) =>
    request<{ message: string; razorpay_payment_id: string }>('/razorpay/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  uploadInvoice: async (paymentId: string, file: File) => {
    const token = localStorage.getItem(ADMIN_TOKEN_KEY);
    const body = new FormData();
    body.append('invoice', file);
    const response = await fetch(`${API_URL}/payments/${encodeURIComponent(paymentId)}/invoice`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body,
    });
    const payload = await response.json().catch(() => ({} as ApiErrorPayload));
    if (!response.ok) {
      throw new ApiError((payload as ApiErrorPayload).message || `Request failed (${response.status})`, response.status);
    }
    return payload as PaymentRecord;
  },
};

/** Origin to prepend to server-relative asset paths such as invoiceUrl (e.g. "/uploads/..."). */
export const ASSET_ORIGIN = API_URL.replace(/\/api$/, '');
export const assetUrl = (path: string) => `${ASSET_ORIGIN}${path}`;

export const clearAdminSession = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

// ── Lead capture — writes enquiries from any site (zovent, mangalgatha, …)
// straight into the shared CRM's Firestore `leads` collection via the REST
// API, so the superadmin panel can triage and assign them ───────────────────
const FIRESTORE_LEADS_URL = 'https://firestore.googleapis.com/v1/projects/zovent-crm/databases/(default)/documents/leads';

export interface LeadPayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  expectedDate: string;
  estimatedDelegates: string;
  tellUsMore: string;
  source: string;
}

export async function submitLead(payload: LeadPayload) {
  const leadId = `ZV-${Math.floor(100 + Math.random() * 900)}`;
  const now = new Date().toISOString();

  const response = await fetch(FIRESTORE_LEADS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        leadId: { stringValue: leadId },
        name: { stringValue: payload.fullName },
        contactNumber: { stringValue: payload.phone },
        email: { stringValue: payload.email },
        company: { stringValue: payload.company || '' },
        department: { stringValue: 'M.I.C.E/Corporate' },
        typeOfEvent: { stringValue: payload.eventType || 'Corporate Event' },
        eventDate: payload.expectedDate ? { stringValue: payload.expectedDate } : { nullValue: null },
        noOfPax: payload.estimatedDelegates ? { stringValue: payload.estimatedDelegates } : { stringValue: '' },
        otherRequirements: { stringValue: payload.tellUsMore || '' },
        referredBy: { stringValue: 'website' },
        referrerName: { stringValue: 'Zovents.com' },
        source: { stringValue: payload.source },
        assignedTo: { nullValue: null },
        isAssigned: { booleanValue: false },
        status: { stringValue: 'new' },
        result: { stringValue: '' },
        remarks: { stringValue: `Website proposal from Zovents.com. Details: ${payload.tellUsMore || ''}` },
        createdAt: { timestampValue: now },
        updatedAt: { timestampValue: now },
      },
    }),
  });

  const body = await response.json().catch(() => ({} as { error?: { message?: string } }));
  if (!response.ok) {
    throw new ApiError((body as { error?: { message?: string } }).error?.message || `Request failed (${response.status})`, response.status);
  }
  return { success: true as const, leadId };
}

// ── Holiday Packages (public) ─────────────────────────────────────────────────
export interface HolidayPackage {
  _id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  image?: string;
  description?: string;
  inclusions: string[];
  active: boolean;
}

export async function listHolidayPackages() {
  const response = await fetch(`${API_URL}/holidays`);
  const body = await response.json().catch(() => ({} as ApiErrorPayload));
  if (!response.ok) {
    throw new ApiError((body as ApiErrorPayload).message || `Request failed (${response.status})`, response.status);
  }
  return body as { packages: HolidayPackage[] };
}

export { API_URL };
