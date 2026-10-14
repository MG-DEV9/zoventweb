import React from 'react';

interface ServiceTickerProps {
  onSelectService: (serviceId: string) => void;
}

export const ServiceTicker: React.FC<ServiceTickerProps> = ({ onSelectService }) => {
  const items = [
    { num: '01', name: 'Corporate Events', id: 'corporate-events' },
    { num: '02', name: 'M.I.C.E.', id: 'mice' },
    { num: '03', name: 'Corporate Travel', id: 'corporate-travel' },
    { num: '04', name: 'Holidays', id: 'holidays' },
    { num: '05', name: 'Social Occasions', id: 'social-occasions' }
  ];

  return (
    <div className="bg-[#520818] text-white border-y border-[#3E0411]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectService(item.id)}
              className="py-5 px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-3.5 group hover:bg-[#630B1F] transition-colors cursor-pointer text-left w-full"
            >
              <span className="font-serif text-xs md:text-sm text-[#D7B4BC] tracking-wider font-light">
                {item.num}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider font-medium text-white/95 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
