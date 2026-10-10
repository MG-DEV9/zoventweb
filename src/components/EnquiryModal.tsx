import React from 'react';
import { X } from 'lucide-react';
import { BriefForm } from './BriefForm';

interface EnquiryModalProps {
  isOpen: boolean;
  prefillService?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, prefillService, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl my-auto bg-[#520818] shadow-2xl border border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close brief modal"
        >
          <X size={20} />
        </button>

        <div className="max-h-[92vh] overflow-y-auto">
          <BriefForm 
            prefillService={prefillService} 
            onSubmitted={() => {
              setTimeout(() => {
                onClose();
              }, 2200);
            }} 
          />
        </div>
      </div>
    </div>
  );
};
