import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { SITE_INFO } from '../data/zoventsData';
import { submitLead, ApiError } from '../lib/api';

export const ContactPage: React.FC = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please share your event or travel requirements';
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
    setIsSubmitting(true);
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
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof ApiError ? err.message : 'Unable to submit your enquiry right now. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ GET IN TOUCH ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">
            LET’S PLAN SOMETHING EXCEPTIONAL.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            Directly connect with our senior planner. We structure proposals tailored to your strategic milestones, headcount, and destination preferences.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info Grid */}
      <section className="py-20 lg:py-28 max-w-[1440px] mx-auto px-6 lg:px-12 bg-[#F2E6EA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Proposal Request Form */}
          <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E3DDD4] p-8 sm:p-12 shadow-sm">
            <div className="pb-6 mb-8 border-b border-[#E8E2D9] flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8485] mb-1">
                  [ REQUEST A PROPOSAL ]
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal">
                  Tell us about your event.
                </h2>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#736B6C] font-semibold">
                * Required
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EEF4EA] flex items-center justify-center text-[#2A751C] mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-3xl text-[#1E1919] font-normal mb-2">
                  Proposal Request Submitted
                </h3>
                <p className="text-sm text-[#5C5556] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, {formData.fullName}. Your brief has been routed to our senior planning desk. A dedicated event specialist will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      email: '',
                      phone: '',
                      eventType: 'Corporate Conference / Meeting',
                      expectedDate: '',
                      estimatedDelegates: '',
                      message: ''
                    });
                  }}
                  className="text-xs uppercase tracking-wider font-semibold text-[#520818] hover:underline cursor-pointer"
                >
                  Submit Another Enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.company ? 'border-red-500' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Type & Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#E0D9CF] text-xs text-[#1E1919] focus:outline-none focus:border-[#520818] transition-colors"
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Expected Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Q4 2026 or Nov 15"
                      value={formData.expectedDate}
                      onChange={(e) => setFormData({ ...formData, expectedDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E0D9CF] text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Estimated Pax.
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 250"
                      value={formData.estimatedDelegates}
                      onChange={(e) => setFormData({ ...formData, estimatedDelegates: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E0D9CF] text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Provide context regarding target location, destination preferences, key objectives and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#E0D9CF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} /> {submitError}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest py-4 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-75"
                >
                  <span>{isSubmitting ? 'Transmitting Brief...' : '[ SUBMIT ENQUIRY ] →'}</span>
                  <ArrowUpRight size={15} />
                </button>

              </form>
            )}
          </div>

          {/* Right: Offices, Direct Line, Response Time */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Response Time & Direct Line Card */}
            <div className="bg-[#1C0409] text-white p-8 sm:p-10 shadow-lg">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-2">
                <Clock size={14} />
                <span>[ RESPONSE TIME ]</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal mb-2">
                WITHIN 24 HOURS.
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                All enquiries are reviewed directly by a event & Holiday specialist .
              </p>

              <div className="pt-6 border-t border-white/15">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-1">
                  [ DIRECT LINE ]
                </p>
                <a 
                  href={`tel:${SITE_INFO.phone}`} 
                  className="font-timesnewroman text-2xl sm:text-3xl text-white hover:text-[#D7B4BC] transition-colors block"
                >
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Offices List */}
            <div className="bg-[#FCFBF8] border border-[#E3DDD4] p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8485] mb-6">
                [ OUR OFFICES ]
              </p>

              <div className="space-y-6">
                {SITE_INFO.offices.map((office) => (
                  <div key={office.city} className="pb-5 border-b border-[#EFE9E0] last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin size={14} className="text-[#520818]" />
                      <h4 className="font-serif text-xl text-[#1E1919] font-normal">
                        {office.city}
                      </h4>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8C8485] mb-1.5">
                      {office.label}
                    </p>
                    <p className="text-xs text-[#5C5556] mb-2">
                      {office.address}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-[#520818]">
                      <a href={`tel:${office.phone}`} className="hover:underline">
                        {office.phone}
                      </a>
                      {office.landline && (
                        <>
                          <span>·</span>
                          <a href={`tel:${office.landline}`} className="hover:underline">
                            {office.landline}
                          </a>
                        </>
                      )}
                      <span>·</span>
                      <a href={`mailto:${office.email}`} className="hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
