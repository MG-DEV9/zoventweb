import React from 'react';
import { X, ArrowUpRight, Check, Compass, Calendar, Moon } from 'lucide-react';
import { HolidayDestination } from '../types';

interface ItineraryModalProps {
  destination: HolidayDestination | null;
  onClose: () => void;
  onPlanTrip: (destinationTitle: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({ destination, onClose, onPlanTrip }) => {
  if (!destination) return null;

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

        {/* Hero Header with Media */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-[#2D2627]">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 mb-2">
              <span className="bg-black/30 backdrop-blur-sm px-2.5 py-0.5 border border-white/20">
                {destination.region}
              </span>
              <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2.5 py-0.5 border border-white/20">
                <Moon size={11} /> {destination.nights}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              {destination.title}
            </h2>
            <p className="text-sm text-white/80 mt-1 max-w-xl font-light">
              {destination.summary}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4 flex items-center gap-2">
              <Compass size={14} className="text-[#520818]" />
              <span>Signature Experiences & Access</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#423C3D] bg-[#F5EFE6] p-3">
                  <Check size={14} className="text-[#520818] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day by Day Pacing */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4 flex items-center gap-2">
              <Calendar size={14} className="text-[#520818]" />
              <span>Considered Route & Pacing</span>
            </h3>
            <div className="space-y-4 border-l border-[#DED7CD] pl-5 ml-2">
              {destination.itinerary.map((step, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#520818] ring-4 ring-[#FAF8F5]" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#520818] block mb-0.5">
                    {step.day}
                  </span>
                  <h4 className="font-serif text-lg text-[#1E1919] font-medium">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#5E5758] mt-1 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Stays */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
              Curated Heritage & Sanctuary Stays
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.curatedStays.map((stay, i) => (
                <span key={i} className="text-xs bg-[#EFE9E0] text-[#2C2728] px-3 py-1.5 font-medium">
                  {stay}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#7A7374]">
              Every itinerary is customized to your travel window, pace, and companions.
            </p>
            <button
              onClick={() => {
                onClose();
                onPlanTrip(destination.title);
              }}
              className="w-full sm:w-auto bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Customise This Route</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
