import React from 'react';
import { InstagramIcon } from './Icons';

interface RecurringDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecurringDonationModal: React.FC<RecurringDonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recurring-modal-title"
    >
      <div
        className="relative m-4 p-1 rounded-2xl bg-gradient-to-r from-primary to-secondary animate-gradient-border"
        style={{ backgroundSize: '200% 200%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg relative max-w-xs w-full">
            <button onClick={onClose} className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors" aria-label="Fechar modal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 id="recurring-modal-title" className="text-2xl font-bold text-dark-gray mb-4">Doação Recorrente</h2>
            
            <p className="text-gray-600 mb-6">
              Torne-se um doador recorrente e nos ajude a planejar nossas ações com mais segurança. Para mais informações e para se cadastrar, entre em contato conosco pelo Instagram.
            </p>
            
            <a 
              href="https://www.instagram.com/projetogratifaz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 shadow-lg"
            >
              <InstagramIcon className="w-6 h-6" />
              <span>Ver no Instagram</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default RecurringDonationModal;