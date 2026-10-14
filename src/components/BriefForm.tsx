import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, AlertCircle, Mail, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/zoventsData';

interface BriefFormProps {
  prefillService?: string;
  onSubmitted?: () => void;
}

export const BriefForm: React.FC<BriefFormProps> = ({ prefillService, onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Corporate Events',
    timing: '',
    context: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, service: prefillService }));
    }
  }, [prefillService]);

  const serviceOptions = [
    'Corporate Events',
    'M.I.C.E.',
    'Corporate Conferences',
    'Offsites & Team Building',
    'Brand Activations',
    'Award Ceremonies',
    'Corporate Travel',
    'Holidays',
    'Social Occasions'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid corporate email address';
    }
    if (!formData.timing.trim()) errs.timing = 'Preferred timing is required';
    if (!formData.context.trim()) errs.context = 'Please share a brief context for your mandate';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate sending brief to ZOVENT planning desk
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSubmitted) onSubmitted();
    }, 900);
  };

  return (
    <section id="contact-brief" className="bg-[#520818] text-white py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#D7B4BC] mb-4">
                Begin with the Brief
              </p>
              
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.08] mb-6 text-balance">
                Let’s give your next plan real momentum.
              </h2>
              
              <p className="text-base text-white/80 leading-relaxed mb-12 max-w-md">
                Share the objective, audience and timing. A ZOVENT lead will respond within one business day with the right next step.
              </p>
            </div>

            {/* Direct Contact Links matching screenshot */}
            <div className="pt-8 border-t border-white/20 flex flex-wrap items-center gap-8 text-xs font-medium tracking-wider">
              <a 
                href="mailto:hello@zovent.com" 
                className="hover:text-[#D7B4BC] transition-colors flex items-center gap-2 text-white/90"
              >
                <Mail size={14} className="text-[#D7B4BC]" />
                <span>hello@zovent.com</span>
              </a>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="hover:text-[#D7B4BC] transition-colors flex items-center gap-2 text-white/90"
              >
                <Phone size={14} className="text-[#D7B4BC]" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cream/White Form Card matching screenshot */}
          <div className="lg:col-span-7 bg-[#FCFBF8] text-[#1E1919] p-8 sm:p-10 lg:p-12 shadow-2xl">
            
            {/* Form Header */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E2D9]">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal">
                Tell us what you're planning
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8485] font-semibold">
                All Fields Required
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF4EA] flex items-center justify-center text-[#3D7A28] mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-3xl text-[#1E1919] mb-2 font-normal">
                  Brief Received
                </h4>
                <p className="text-sm text-[#5C5556] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, {formData.name}. A dedicated ZOVENT partner director has received your mandate outline and will contact you within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      service: 'Corporate Events',
                      timing: '',
                      context: ''
                    });
                  }}
                  className="text-xs uppercase tracking-wider font-semibold text-[#520818] hover:underline"
                >
                  Submit another mandate outline
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E0D9CF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Service Dropdown and Preferred Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      I'm Planning
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E0D9CF] text-sm text-[#1E1919] focus:outline-none focus:border-[#520818] transition-colors appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#7A7374]">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                      Preferred Timing
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Month or date"
                        value={formData.timing}
                        onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors ${
                          errors.timing ? 'border-red-500 bg-red-50/20' : 'border-[#E0D9CF]'
                        }`}
                      />
                      <Calendar 
                        size={16} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8485] pointer-events-none" 
                      />
                    </div>
                    {errors.timing && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.timing}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Context Textarea */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#666061] mb-2">
                    A Little Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Audience, location, scale and what success should look like..."
                    value={formData.context}
                    onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1919] placeholder-[#9E9798] focus:outline-none focus:border-[#520818] transition-colors resize-none ${
                      errors.context ? 'border-red-500 bg-red-50/20' : 'border-[#E0D9CF]'
                    }`}
                  />
                  {errors.context && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.context}
                    </p>
                  )}
                </div>

                {/* Bottom Action and Privacy Note matching screenshot */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#7A7374] max-w-xs leading-normal">
                    Your brief stays private and is reviewed by our planning team.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-75 shrink-0 group"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Send Enquiry'}</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
