import React from 'react';
import { ArrowLeft, Shield, FileText, RefreshCw } from 'lucide-react';
import { SITE_INFO } from '../data/zoventsData';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refunds';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-20 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 max-w-4xl">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C8485] hover:text-[#520818] mb-6 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>BACK TO HOME</span>
          </button>

          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-2">
            [ LEGAL & COMPLIANCE ]
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.08] mb-4">
            {type === 'privacy' && 'PRIVACY POLICY'}
            {type === 'terms' && 'TERMS OF SERVICE'}
            {type === 'refunds' && 'REFUNDS & CANCELLATIONS'}
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#736B6C]">
            {type === 'refunds' ? 'EFFECTIVE DATE: 28-OCT-2025' : 'LAST UPDATED: 2026'}
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto bg-[#FCFBF8] border border-[#E3DDD4] p-8 sm:p-12 shadow-sm">
          
          {type === 'privacy' && (
            <div className="space-y-8 text-sm text-[#474142] leading-[1.8]">
              <p>
                At Zovent, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and secure your data.
              </p>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  1. INFORMATION WE COLLECT
                </h3>
                <p>
                  • <strong>Personal Information:</strong> Name, email address, phone number, and payment details.<br />
                  • <strong>Usage Data:</strong> Information about your interactions with our website.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  2. HOW WE USE YOUR INFORMATION
                </h3>
                <p>
                  • To process bookings and payments.<br />
                  • To communicate updates and promotional offers.<br />
                  • To improve our website and services.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  3. DATA SHARING
                </h3>
                <p>
                  We do not sell or rent your personal information. However, we may share it with:<br />
                  • Trusted third-party service providers to process bookings.<br />
                  • Legal authorities if required by law.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  4. DATA SECURITY
                </h3>
                <p>
                  We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  5. COOKIES
                </h3>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can adjust your browser settings to disable cookies if preferred.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  6. YOUR RIGHTS
                </h3>
                <p>
                  • <strong>Access:</strong> Request a copy of the personal information we hold.<br />
                  • <strong>Correction:</strong> Update or correct inaccuracies in your data.<br />
                  • <strong>Deletion:</strong> Request the deletion of your data, subject to legal obligations.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  7. CHANGES TO THIS POLICY
                </h3>
                <p>
                  We reserve the right to update this policy. Significant changes will be notified on our website.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  8. CONTACT US
                </h3>
                <p>
                  If you have questions about this policy or how your data is handled, please contact us at:<br />
                  Email: <a href="mailto:info@zovents.com" className="text-[#520818] underline">info@zovents.com</a><br />
                  Phone: +91 8800753816 / +91 7980067782
                </p>
              </div>

              <p className="pt-4 text-xs text-[#7A7374] border-t border-[#EDE8E1]">
                By using our website, you consent to the terms outlined in this Privacy Policy.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-8 text-sm text-[#474142] leading-[1.8]">
              <p>
                Welcome to Zovent! By accessing and using our website or services, you agree to comply with the following terms and conditions. Please read them carefully before proceeding.
              </p>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  1. ACCEPTANCE OF TERMS
                </h3>
                <p>
                  By using Zovent, you agree to these terms. If you do not accept these terms, you must refrain from using our services.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  2. ELIGIBILITY
                </h3>
                <p>
                  Our services are intended for individuals aged 18 years or older. By accessing our website, you confirm that you meet this requirement.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  3. BOOKING AND PAYMENT
                </h3>
                <p>
                  • All bookings are subject to availability.<br />
                  • Payments must be completed using the approved payment methods listed on our website.<br />
                  • Non-refundable deposits may apply to specific trips.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  4. CANCELLATION AND REFUND POLICY
                </h3>
                <p>
                  • Cancellation requests must be made in writing.<br />
                  • Refund eligibility will be based on the terms specified in the booking agreement.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  5. INTELLECTUAL PROPERTY
                </h3>
                <p>
                  All content, including logos, images, and text, is the property of Zovent and is protected under copyright laws.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  6. LIMITATION OF LIABILITY
                </h3>
                <p>
                  Zovent is not responsible for losses caused by delays, cancellations, or unforeseen circumstances beyond our control.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  7. PRIVACY
                </h3>
                <p>
                  Your personal data is handled in accordance with our Privacy Policy. Please refer to it for more details.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  8. MODIFICATIONS TO TERMS
                </h3>
                <p>
                  Zovent reserves the right to update these terms at any time without prior notice. Continued use of the website constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  9. GOVERNING LAW
                </h3>
                <p>
                  These terms are governed by the laws of India. Any disputes will be resolved in accordance with Indian legal procedures.
                </p>
              </div>
            </div>
          )}

          {type === 'refunds' && (
            <div className="space-y-8 text-sm text-[#474142] leading-[1.8]">
              <p>
                At ZOVENT, we strive to deliver seamless and memorable experiences for every client. As our events and travel arrangements involve advance bookings, vendor commitments, logistics planning, and operational costs, the following refund and cancellation policy shall apply to all confirmed bookings and agreements.
              </p>
              <p>
                By confirming a booking and making payment to Zovent, the Client agrees to the terms mentioned below.
              </p>

              <div>
                <h3 className="font-serif text-2xl text-[#1E1919] font-medium mb-4">
                  CANCELLATION CLAUSE
                </h3>
                <p className="mb-4">
                  If the Client wishes to cancel the Agreement/Booking, the following cancellation and refund conditions shall apply:
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-[#FAF8F5] border border-[#E3DDD4]">
                    <h4 className="font-bold text-[#1E1919] mb-1">
                      1. CANCELLATION 45 DAYS PRIOR TO THE EVENT
                    </h4>
                    <p>
                      If cancellation is made 45 days or more before the scheduled event date, the Client shall be eligible for a refund of <strong>50%</strong> of the amount already received by Zovent. The remaining amount shall be retained towards administrative expenses, vendor commitments, and processing charges.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border border-[#E3DDD4]">
                    <h4 className="font-bold text-[#1E1919] mb-1">
                      2. CANCELLATION WITHIN 45 DAYS OF THE EVENT
                    </h4>
                    <p>
                      If cancellation is made less than 45 days before the scheduled event date, the Client shall be eligible for a refund of <strong>25%</strong> of the amount already received by Zovent. The balance amount shall be treated as cancellation and operational charges.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border border-[#E3DDD4]">
                    <h4 className="font-bold text-[#1E1919] mb-1">
                      3. CANCELLATION WITHIN 15 DAYS OF THE EVENT
                    </h4>
                    <p>
                      If cancellation is made less than 15 days before the scheduled event date, <strong>no refund</strong> shall be provided. The entire amount collected by ZOVENT shall be considered as cancellation charges due to committed vendor payments, operational expenses, and logistical arrangements.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-3">
                  ADDITIONAL TERMS
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All cancellation requests must be submitted in writing via email or official communication channels of Zovent.</li>
                  <li>Refunds, wherever applicable, shall be processed within 7-14 business days from the date of cancellation approval.</li>
                  <li>Any non-refundable vendor charges, government taxes, permit fees, or third-party booking charges already incurred may be deducted additionally wherever applicable.</li>
                  <li>In case of unforeseen circumstances, natural calamities, government restrictions, or force majeure events, refund decisions shall be subject to vendor policies and management discretion.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E8E2D9]">
                <h3 className="font-serif text-xl text-[#1E1919] font-medium mb-2">
                  CONTACT INFORMATION
                </h3>
                <p>
                  For cancellation requests or refund-related queries, please contact:<br />
                  Company: <strong>ZOVENT PRIVATE LIMITED</strong><br />
                  Email: <a href="mailto:info@zovents.com" className="text-[#520818] underline">info@zovents.com</a><br />
                  Phone: {SITE_INFO.phone}<br />
                  Website: https://www.zovents.com/
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
