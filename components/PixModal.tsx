import React, { useState, useEffect } from 'react';
import { ClipboardIcon, ClipboardCheckIcon } from './Icons';

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PixModal: React.FC<PixModalProps> = ({ isOpen, onClose }) => {
  const [pixCopied, setPixCopied] = useState(false);
  const pixKey = 'projetogratifaz@gmail.com';
  const qrCodeUrl = "https://images.unsplash.com/vector-1763056729561-fea71acaf2e1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    if (!isOpen) {
      setPixCopied(false);
    }
  }, [isOpen]);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy PIX key: ', err);
      alert('Não foi possível copiar a chave PIX.');
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pix-modal-title"
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
            <h2 id="pix-modal-title" className="text-2xl font-bold text-dark-gray mb-4">Doar com PIX</h2>
            <p className="text-sm text-gray-600 mb-4">Escaneie o QR Code com o app do seu banco.</p>
            <img src={qrCodeUrl} alt="QR Code para doação PIX" className="w-48 h-48 mx-auto rounded-lg border-2 border-gray-200 object-cover" />
            
            <div className="mt-5 text-center p-3 bg-gray-100 rounded-lg flex items-center justify-between border border-gray-200">
                <div className="text-left">
                    <p className="text-xs text-gray-500">Ou copie a Chave (E-mail)</p>
                    <p className="font-mono text-dark-gray break-all text-sm">{pixKey}</p>
                </div>
                <button onClick={handleCopyPix} title="Copiar Chave PIX" className="p-2 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors ml-2 flex-shrink-0">
                    {pixCopied ? <ClipboardCheckIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-gray-600" />}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PixModal;