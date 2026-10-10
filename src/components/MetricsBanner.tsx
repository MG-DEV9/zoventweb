import React from 'react';

export const MetricsBanner: React.FC = () => {
  const metrics = [
    { value: '15+', label: 'Years of Delivery' },
    { value: '380+', label: 'Mandates Completed' },
    { value: '42', label: 'Cities Activated' },
    { value: '86%', label: 'Repeat and Referral' }
  ];

  return (
    <section className="bg-[#520818] text-white py-16 lg:py-20 border-b border-[#3E0411]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:border-r border-white/20 lg:pr-12">
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#D7B4BC] mb-3">
              Measured in Momentum
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white mb-4">
              Experience that shows up in the detail.
            </h2>
            <p className="text-xs uppercase tracking-wider text-white/60">
              Selected delivery record, 2011–2026
            </p>
          </div>

          {/* Right 4 Stats */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {metrics.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight tabular-nums mb-2">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#D7B4BC] leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
