declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  modal?: { escape?: boolean; ondismiss?: () => void };
  handler?: (response: RazorpaySuccessResponse) => void;
}

export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface RazorpayFailedResponse {
  error: { description: string; code?: string };
}

export interface RazorpayInstance {
  open(): void;
  on(event: 'payment.failed', handler: (response: RazorpayFailedResponse) => void): void;
}

const SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';
let loadPromise: Promise<void> | null = null;

export function loadRazorpay(): Promise<void> {
  if (typeof window !== 'undefined' && window.Razorpay) {
    return Promise.resolve();
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Razorpay SDK failed to load. Check your network connection.'));
      document.body.appendChild(script);
    });
  }

  return loadPromise;
}
