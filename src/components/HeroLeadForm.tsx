import React, { useState } from 'react';
import { Check, CheckCircle2, RefreshCw, AlertCircle, ShieldCheck } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none bg-white/95 backdrop-blur-md border border-[#E3DDD4] p-6 sm:p-8 shadow-2xl rounded-sm">
      {/* Form Header matching uploaded screenshot */}
      <div className="text-center pb-5 mb-5 border-b border-[#F0EBE3]">
        <h3 className="font-serif text-3xl sm:text-[34px] text-[#1E1919] font-normal leading-tight tracking-tight">
          Get In Touch
        </h3>
        {sourceContext && sourceContext !== 'Home Page Hero' && (
          <p className="text-[11px] uppercase tracking-wider text-[#520818] font-semibold mt-1">
            Mandate: {sourceContext}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="py-8 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF4EA] flex items-center justify-center text-[#2A751C] mb-3">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="font-serif text-2xl text-[#1E1919] font-normal mb-1">
            Query Received
          </h4>
          <p className="text-xs text-[#5C5556] leading-relaxed max-w-xs mx-auto mb-6">
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
        <form onSubmit={handleSubmit} className="space-y-4">
          
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
              className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
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
              className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
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
              className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
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
              className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#8A8485] focus:outline-none focus:border-[#520818] transition-colors rounded-sm ${
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
              className={`bg-[#F9F9F9] border rounded-sm p-3.5 flex items-center justify-between cursor-pointer select-none transition-all ${
                errors.captcha ? 'border-red-400 bg-red-50/10' : 'border-[#D1D5DB] hover:border-[#9CA3AF]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`w-7 h-7 rounded-sm border flex items-center justify-center transition-all ${
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
                <span className="text-xs sm:text-[13px] font-medium text-[#222222]">
                  I'm not a robot
                </span>
              </div>

              {/* reCAPTCHA Brand Logo Badge */}
              <div className="flex flex-col items-center justify-center text-center pl-2">
                <svg className="w-6 h-6 text-[#1A73E8]" viewBox="0 0 24 24" fill="currentColor">
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

          {/* SUBMIT Button matching screenshot styling */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-48 mx-auto py-3 px-8 rounded-full border-2 border-[#520818] bg-white hover:bg-[#520818] text-[#520818] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
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
      <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-center gap-1.5 text-[11px] text-[#7A7374]">
        <ShieldCheck size={13} className="text-[#520818]" />
        <span>Strict privacy · Handled by event specialist</span>
      </div>
    </div>
  );
};
