import React, { useState } from 'react';

interface CreditCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (amount: number) => void;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [amount, setAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAmountClick = (value: string) => {
    setAmount(value);
    if (value !== 'custom') {
      setCustomAmount('');
    }
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalAmount = amount === 'custom' ? (customAmount || '0') : amount;
    const numericAmount = parseInt(finalAmount, 10);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (numericAmount > 0) {
        onSuccess(numericAmount);
      }
      setTimeout(() => {
        onClose();
        // Reset state after closing
        setTimeout(() => {
            setIsSuccess(false);
            setAmount('25');
            setCustomAmount('');
        }, 300);
      }, 2000);
    }, 1500);
  };
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cc-modal-title"
    >
      <div
        className="relative m-4 p-1 rounded-2xl bg-gradient-to-r from-primary to-secondary animate-gradient-border"
        style={{ backgroundSize: '200% 200%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg relative max-w-sm w-full">
            <button onClick={onClose} className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors" aria-label="Fechar modal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 id="cc-modal-title" className="text-2xl font-bold text-dark-gray mb-4 text-center">Doar com Cartão</h2>
            
            {isSuccess ? (
              <div className="text-center py-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-semibold text-dark-gray mt-4">Doação Realizada!</p>
                <p className="text-gray-600">Muito obrigado pela sua contribuição.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valor da Doação (BRL)</label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {['25', '50', '100'].map(val => (
                       <button type="button" key={val} onClick={() => handleAmountClick(val)} className={`p-2 rounded-lg border text-sm font-semibold transition-colors ${amount === val ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}>R$ {val}</button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    onFocus={() => handleAmountClick('custom')}
                    placeholder="Outro Valor"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">Nome no Cartão</label>
                  <input type="text" id="card-name" required className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Nome Completo" />
                </div>
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Número do Cartão</label>
                  <input type="text" id="card-number" required pattern="[\d ]{13,19}" title="Digite um número de cartão válido" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Validade</label>
                    <input type="text" id="expiry-date" required pattern="\d{2}\s*\/\s*\d{2}" title="Use o formato MM/AA" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="MM/AA" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="text" id="cvv" required pattern="\d{3,4}" title="Digite 3 ou 4 dígitos" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="123" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Processando...' : `Doar R$ ${amount === 'custom' ? (customAmount || '0') : amount}`}
                </button>
              </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default CreditCardModal;