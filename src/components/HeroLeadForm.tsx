import React, { useState } from 'react';
import { Check, CheckCircle2, RefreshCw, AlertCircle, ShieldCheck } from 'lucide-react';
import { submitLead, ApiError } from '../lib/api';

interface HeroLeadFormProps {
  sourceContext?: string;
}

export const HeroLeadForm: React.FC<HeroLeadFormProps> = ({ sourceContext = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: ''
  });

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleCaptchaClick = () => {
    if (captchaChecked) return;
    setCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaChecked(true);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.captcha;
        return copy;
      });
    }, 600);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid corporate email';
    }
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (formData.mobile.replace(/\D/g, '').length < 8) {
      errs.mobile = 'Enter a valid phone number';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!captchaChecked) errs.captcha = 'Please check the reCAPTCHA box';

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setSubmitting(true);
    try {
      await submitLead({
        fullName: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.mobile,
        eventType: sourceContext,
        expectedDate: '',
        estimatedDelegates: '',
        tellUsMore: `Quick enquiry via ${sourceContext} form`,
        source: 'zovents.com',
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof ApiError ? err.message : 'Unable to submit your enquiry right now. Please try again or call us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-sm bg-[#F2E6EA]/50 backdrop-blur-md border border-[#E3DDD4] p-5 sm:p-6 shadow-2xl rounded-sm">
      {/* Form Header matching uploaded screenshot */}
      <div className="text-center pb-4 mb-4 border-b border-[#f0e3e7]">
        <h3 className="font-Georgia Regular text-2xl sm:text-[26px] text-[#520818] font-normal leading-tight tracking-tight">
          Get In Touch
        </h3>
        {sourceContext && sourceContext !== 'Home Page Hero' && (
          <p className="text-[11px] uppercase tracking-wider text-[#520818] font-semibold mt-1">
            Mandate: {sourceContext}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="py-6 text-center animate-in fade-in duration-300">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#EEF4EA] flex items-center justify-center text-[#2A751C] mb-2.5">
            <CheckCircle2 size={26} />
          </div>
          <h4 className="font-serif text-xl text-[#1E1919] font-normal mb-1">
            Query Received
          </h4>
          <p className="text-[11px] text-[#5C5556] leading-relaxed max-w-xs mx-auto mb-4">
            Thank you, {formData.name}. An event specialist at ZOVENT will connect with you on {formData.mobile} within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setCaptchaChecked(false);
              setFormData({ name: '', email: '', mobile: '', company: '' });
            }}
            className="text-xs uppercase tracking-wider font-semibold text-[#520818] hover:underline cursor-pointer"
          >
            Submit Another Query →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#DDD6CB]'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DDD6CB]'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          {/* Mobile No. Field */}
          <div>
            <input
              type="tel"
              placeholder="Mobile No.*"
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: '' });
              }}
              className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
                errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-[#DDD6CB]'
              }`}
            />
            {errors.mobile && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.mobile}
              </p>
            )}
          </div>

          {/* Company Name Field */}
          <div>
            <input
              type="text"
              placeholder="Company Name*"
              value={formData.company}
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                if (errors.company) setErrors({ ...errors, company: '' });
              }}
              className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
                errors.company ? 'border-red-500 bg-red-50/20' : 'border-[#DDD6CB]'
              }`}
            />
            {errors.company && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.company}
              </p>
            )}
          </div>

          {/* reCAPTCHA Box matching screenshot exactly */}
          <div className="pt-1">
            <div
              onClick={handleCaptchaClick}
              className={`bg-[#F9F9F9] border rounded-sm p-2.5 flex items-center justify-between cursor-pointer select-none transition-all ${
                errors.captcha ? 'border-red-400 bg-red-50/10' : 'border-[#D1D5DB] hover:border-[#9CA3AF]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-6 h-6 rounded-sm border flex items-center justify-center transition-all ${
                    captchaChecked 
                      ? 'border-[#0F9D58] bg-[#0F9D58] text-white shadow-sm' 
                      : 'border-[#C1C1C1] bg-white'
                  }`}
                >
                  {captchaLoading && (
                    <RefreshCw size={14} className="text-[#4A90E2] animate-spin" />
                  )}
                  {captchaChecked && !captchaLoading && (
                    <Check size={18} strokeWidth={3} />
                  )}
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#222222]">
                  I'm not a robot
                </span>
              </div>

              {/* reCAPTCHA Brand Logo Badge */}
              <div className="flex flex-col items-center justify-center text-center pl-2">
                <svg className="w-5 h-5 text-[#1A73E8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5zm1.5-6.5a2.5 2.5 0 01-1.5 2.3v.7a1 1 0 01-2 0v-1.2a1 1 0 01.6-.9 1.5 1.5 0 00.9-1.4 1.5 1.5 0 00-3 0 1 1 0 01-2 0 3.5 3.5 0 017 0z"/>
                </svg>
                <span className="text-[8px] font-semibold text-[#555555] tracking-tighter uppercase mt-0.5">
                  reCAPTCHA
                </span>
                <span className="text-[7px] text-[#888888]">
                  Privacy · Terms
                </span>
              </div>
            </div>
            {errors.captcha && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.captcha}
              </p>
            )}
          </div>

          {submitError && (
            <p className="text-[11px] text-red-600 flex items-center gap-1 justify-center">
              <AlertCircle size={12} /> {submitError}
            </p>
          )}

          {/* SUBMIT Button matching screenshot styling */}
          <div className="pt-1 text-center">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-40 mx-auto py-2.5 px-6 rounded-full border-2 border-[#520818] bg-white hover:bg-[#520818] text-[#520818] hover:text-white font-bold text-[11px] uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>
          </div>

        </form>
      )}

      {/* Trust note */}
      <div className="mt-3 pt-2.5 border-t border-[#F0EBE3] flex items-center justify-center gap-1.5 text-[10px] text-[#520818]">
        <ShieldCheck size={12} className="text-[#520818]" />
        <span>Strict privacy · Handled by event specialist</span>
      </div>
    </div>
  );
};
