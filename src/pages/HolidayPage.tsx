import React, { useState } from 'react';
import { ArrowUpRight, Compass, Moon, MapPin, Calendar, Check } from 'lucide-react';
import { HOLIDAY_DESTINATIONS } from '../data/content';
import { HolidayDestination } from '../types';
import { ItineraryModal } from '../components/ItineraryModal';
import { useSEO } from '../hooks/useSEO';

interface HolidayPageProps {
  onOpenQuote: (destinationTitle?: string) => void;
}

export const HolidayPage: React.FC<HolidayPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Curated Corporate & Private Holidays',
    description: 'Hand-crafted holiday itineraries and incentive travel experiences across India and beyond — planned by ZOVENT with precision and care.',
    path: '/holiday',
  });

  const [selectedDest, setSelectedDest] = useState<HolidayDestination | null>(null);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ HOLIDAYS ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">
            GO FURTHER. NEVER HURRIED.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            Considered routes, characterful stays and local access — shaped around how you like to travel, not a fixed template.
          </p>
        </div>
      </section>

      {/* Curated Routes Grid */}
      <section className="py-20 lg:py-28 max-w-[1440px] mx-auto px-6 lg:px-12 bg-[#F2E6EA]">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
            [ SIGNATURE ITINERARIES ]
          </p>
          <h2 className="font-Cormorant Garamond Medium text-4xl sm:text-5xl text-[#520818] font-normal">
            Easy Getaways, Endless Memories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOLIDAY_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="bg-[#FCFBF8] border border-[#E5DFD5] group cursor-pointer hover:border-[#520818] transition-all hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className=" font-Georgia Regular  w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-white font-medium">
                  <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-white/20">
                    {dest.region}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-white/20">
                    {dest.nights}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-Georgia Regular  text-2xl text-white font-normal mb-1">
                    {dest.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed mb-6">
                  {dest.summary}
                </p>

                <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#520818]">
                    VIEW ITINERARY →
                  </span>
                  <ArrowUpRight size={16} className="text-[#8C8485] group-hover:text-[#520818]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom planning banner */}
        <div className="mt-20 bg-[#520818] text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-2">
              EXCLUSIVE GETAWAYS
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2">
              Have a specific destination or milestone in mind?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Extraordinary Destinations. Thoughtfully Curated.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Private Holiday / Travel')}
            className="bg-white hover:bg-[#F2ECE3] text-[#1E1919] text-xs uppercase font-medium tracking-widest px-8 py-4 shrink-0 transition-colors cursor-pointer"
          >
            Design a Custom Journey →
          </button>
        </div>
      </section>

      {/* Itinerary Modal */}
      <ItineraryModal
        destination={selectedDest}
        onClose={() => setSelectedDest(null)}
        onPlanTrip={(title) => {
          setSelectedDest(null);
          onOpenQuote(`Holiday: ${title}`);
        }}
      />
    </div>
  );
};
