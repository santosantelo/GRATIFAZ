import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  action: string | (() => void | Promise<void>);
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, children, buttonText, buttonIcon, action }) => {
  if (!isOpen) return null;

  const handleAction = async () => {
    if (typeof action === 'function') {
      await action();
    }
    // If action is a URL, the <a> tag handles it.
    // Close the modal after the action for a better UX, especially for function calls.
    onClose();
  };

  const buttonClasses = "w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 shadow-lg";

  const buttonContent = (
    <>
      {buttonIcon}
      <span>{buttonText}</span>
    </>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
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
          <h2 id="info-modal-title" className="text-2xl font-bold text-dark-gray mb-4">{title}</h2>
          
          {children}
          
          {typeof action === 'string' ? (
            <a href={action} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
              {buttonContent}
            </a>
          ) : (
            <button onClick={handleAction} className={buttonClasses}>
              {buttonContent}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;