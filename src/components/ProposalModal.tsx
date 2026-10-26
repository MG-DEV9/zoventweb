import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_INFO } from '../data/zoventsData';
import { submitLead, ApiError } from '../lib/api';

interface ProposalModalProps {
  isOpen: boolean;
  prefillService?: string;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, prefillService, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    eventType: 'Corporate Conference / Meeting',
    expectedDate: '',
    estimatedDelegates: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (prefillService) {
      setFormData(prev => ({ ...prev, eventType: prefillService }));
    }
  }, [prefillService]);

  if (!isOpen) return null;

  const eventTypes = [
    'Corporate Conference / Meeting',
    'M.I.C.E. Programme',
    'Offsite / Team Building',
    'Brand Activation',
    'Award Ceremony / Gala',
    'Corporate Travel',
    'Holidays',
    'Other'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please share your event requirements';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setSubmitError('');
    setSubmitting(true);
    try {
      await submitLead({
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        expectedDate: formData.expectedDate,
        estimatedDelegates: formData.estimatedDelegates,
        tellUsMore: formData.message,
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-auto bg-[#FCFBF8] text-[#1E1919] border border-[#E3DDD4] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF8F5] text-[#524B4C] hover:bg-[#520818] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="pb-5 mb-6 border-b border-[#E8E2D9]">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8485] mb-1">
            [ REQUEST A PROPOSAL ]
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal">
            Start a project with ZOVENT.
          </h2>
          <p className="text-xs text-[#5C5556] mt-1">
            Response within 24 hours from a senior Executive.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 size={40} className="text-[#2A751C] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#1E1919] mb-2 font-normal">
              Proposal Request Received
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5556] max-w-sm mx-auto mb-6">
              Thank you, {formData.fullName}. Our executive planning team is reviewing your brief and will be in touch shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-[#520818] text-white text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818]"
                />
                {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818]"
                />
                {errors.company && <p className="text-[10px] text-red-600 mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818]"
                />
                {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818]"
                />
                {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Event / Service
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818]"
                >
                  {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Expected Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nov 2026"
                  value={formData.expectedDate}
                  onChange={(e) => setFormData({ ...formData, expectedDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                  Delegates
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500"
                  value={formData.estimatedDelegates}
                  onChange={(e) => setFormData({ ...formData, estimatedDelegates: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#666061] mb-1">
                Brief / Requirements *
              </label>
              <textarea
                rows={3}
                placeholder="Objectives, locations, desired inclusions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818] resize-none"
              />
              {errors.message && <p className="text-[10px] text-red-600 mt-1">{errors.message}</p>}
            </div>

            {submitError && (
              <p className="text-[11px] text-red-600 flex items-center gap-1.5">
                <AlertCircle size={12} /> {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest py-3.5 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-75"
            >
              <span>{submitting ? 'Transmitting...' : 'Submit Proposal Request →'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
