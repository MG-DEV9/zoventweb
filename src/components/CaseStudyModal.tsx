import React from 'react';
import { X, ArrowUpRight, Check, MapPin, Users, Clock } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBriefMandate: (mandateName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onBriefMandate }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FCFBF8] text-[#1E1919] shadow-2xl border border-[#E0D9CF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-[#2D2627]">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] block mb-2">
              {caseStudy.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#E8E2D9] text-xs">
            {caseStudy.delegates && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#8C8485] font-semibold flex items-center gap-1 mb-1">
                  <Users size={12} /> Scale
                </p>
                <p className="font-medium text-[#1E1919]">{caseStudy.delegates}</p>
              </div>
            )}
            {caseStudy.duration && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#8C8485] font-semibold flex items-center gap-1 mb-1">
                  <Clock size={12} /> Duration
                </p>
                <p className="font-medium text-[#1E1919]">{caseStudy.duration}</p>
              </div>
            )}
            {caseStudy.location && (
              <div className="col-span-2 sm:col-span-2">
                <p className="text-[10px] uppercase tracking-wider text-[#8C8485] font-semibold flex items-center gap-1 mb-1">
                  <MapPin size={12} /> Location
                </p>
                <p className="font-medium text-[#1E1919]">{caseStudy.location}</p>
              </div>
            )}
          </div>

          {/* Narrative */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
              The Strategic Challenge & Brief
            </h3>
            <p className="text-sm sm:text-base text-[#3E3839] leading-relaxed">
              {caseStudy.extendedText || caseStudy.description}
            </p>
          </div>

          {/* Key Deliverables */}
          {caseStudy.scope && (
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
                Mandate Execution Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#423C3D] bg-[#F5EFE6] p-3">
                    <Check size={14} className="text-[#520818] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantified Outcomes */}
          {caseStudy.metrics && (
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4">
                Verified Outcomes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] border border-[#E3DDD4] p-4 text-center">
                    <span className="font-serif text-2xl sm:text-3xl text-[#520818] block font-light mb-1">
                      {m.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#736B6C]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#7A7374]">
              Mandates executed under full NDA confidentiality guidelines.
            </p>
            <button
              onClick={() => {
                onClose();
                onBriefMandate(caseStudy.title);
              }}
              className="w-full sm:w-auto bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Brief a Similar Mandate</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
