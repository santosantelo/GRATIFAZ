import React, { useState } from 'react';
import type { Project } from '../types';
import { QrCodeIcon, RepeatIcon, InstagramIcon, ClipboardIcon, ClipboardCheckIcon, HeartIcon } from '../components/Icons';
import PixModal from '../components/PixModal';
import RecurringDonationModal from '../components/RecurringDonationModal';
import InfoModal from '../components/InfoModal';
import Confetti from '../components/Confetti';

// Log Donation Modal Component - To register a donation made externally
interface LogDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

const LogDonationModal: React.FC<LogDonationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Por favor, insira um valor válido.');
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        onConfirm(numericAmount);
        
        setTimeout(() => {
            onClose();
            // Reset state after closing
            setTimeout(() => {
                setIsSuccess(false);
                setAmount('');
                setName('');
            }, 300);
        }, 6000);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="log-donation-modal-title"
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
            <h2 id="log-donation-modal-title" className="text-2xl font-bold text-dark-gray mb-4 text-center">Fiz minha parte</h2>
            
            {isSuccess ? (
              <>
                <Confetti />
                <div className="text-center py-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-2xl font-bold text-dark-gray mt-4">Obrigado, {name || 'por fazer a diferença'}!</p>
                  <p className="text-gray-600 mt-2 mb-4">Sua contribuição foi registrada com sucesso.</p>
                  <div className="bg-primary/10 border-l-4 border-primary text-primary-dark p-4 rounded-r-lg shadow-sm text-left">
                      <p className="italic">"Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."</p>
                      <p className="text-right text-sm font-semibold mt-2">- 2 Coríntios 9:7</p>
                  </div>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="donator-name" className="block text-sm font-medium text-gray-700 mb-2">Seu nome (Opcional)</label>
                  <input
                    type="text"
                    id="donator-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full p-3 bg-white text-dark-gray border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="donation-amount" className="block text-sm font-medium text-gray-700 mb-2">Qual valor você doou? (BRL)</label>
                  <input
                    type="number"
                    id="donation-amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ex: 50.00"
                    className="w-full p-3 bg-white text-dark-gray border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:bg-primary/50"
                >
                  {isSubmitting ? 'Finalizando...' : 'Finalizar'}
                </button>
              </form>
            )}
        </div>
      </div>
    </div>
  );
};

// Volunteer Modal Component
interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="volunteer-modal-title"
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
            <h2 id="volunteer-modal-title" className="text-2xl font-bold text-dark-gray mb-4">Seja Voluntário(a)</h2>
            
            <p className="text-gray-600 mb-6">
              Sua ajuda é fundamental! O trabalho voluntário transforma vidas, incluindo a sua. Entre em contato conosco pelo Instagram para saber como participar das nossas ações.
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


interface ContributeScreenProps {
  project?: Project;
  onDonate: (projectId: number, amount: number) => void;
}

const ContributeScreen: React.FC<ContributeScreenProps> = ({ project, onDonate }) => {
  const [pixCopied, setPixCopied] = useState(false);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [isRecurringModalOpen, setIsRecurringModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isLogDonationModalOpen, setIsLogDonationModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState<any>(null);

  const pixKey = 'projetogratifaz@gmail.com';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy PIX key: ', err);
      alert('Não foi possível copiar a chave PIX.');
    });
  };
  
  const handleLogDonationConfirm = (amount: number) => {
    if (project) {
      onDonate(project.id, amount);
    }
  };

  const handleCopyInstagramLink = () => {
    const url = 'https://www.instagram.com/projetogratifaz/';
    navigator.clipboard.writeText(url).then(() => {
        alert('Link do Instagram copiado para a área de transferência!');
    }).catch(err => {
        console.error('Failed to copy link: ', err);
        alert('Não foi possível copiar o link.');
    });
  };

  const handleOpenInfoModal = (type: 'items' | 'share') => {
    if (type === 'items') {
      setInfoModalData({
        title: 'Doação de Itens',
        content: 'Sua doação de itens como alimentos não perecíveis, roupas em bom estado e produtos de higiene é fundamental para o amparo das famílias. Nosso objetivo é garantir que todos tenham o suporte material necessário para recomeçar.',
        buttonText: 'Combinar no Instagram',
        action: 'https://www.instagram.com/projetogratifaz/',
        buttonIcon: <InstagramIcon className="w-6 h-6" />,
      });
    } else if (type === 'share') {
      setInfoModalData({
        title: 'Divulgue o Projeto',
        content: 'Ajude a divulgar o projeto! Copie nosso link do Instagram e compartilhe com seus amigos e familiares para que mais pessoas possam conhecer e apoiar nossa causa.',
        buttonText: 'Copiar Link do Instagram',
        action: handleCopyInstagramLink,
        buttonIcon: <InstagramIcon className="w-6 h-6" />,
      });
    }
  };


  return (
    <>
      <PixModal isOpen={isPixModalOpen} onClose={() => setIsPixModalOpen(false)} />
      <RecurringDonationModal isOpen={isRecurringModalOpen} onClose={() => setIsRecurringModalOpen(false)} />
      <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} />
      <LogDonationModal isOpen={isLogDonationModalOpen} onClose={() => setIsLogDonationModalOpen(false)} onConfirm={handleLogDonationConfirm} />
      {infoModalData && (
        <InfoModal
          isOpen={!!infoModalData}
          onClose={() => setInfoModalData(null)}
          title={infoModalData.title}
          buttonText={infoModalData.buttonText}
          action={infoModalData.action}
          buttonIcon={infoModalData.buttonIcon}
        >
          <p className="text-gray-600 mb-6">{infoModalData.content}</p>
        </InfoModal>
      )}

      <div className="animate-fade-in">
        <header className="p-6 pt-12">
          <h1 className="text-4xl font-bold text-dark-gray">Contribuir</h1>
        </header>
        
        <div className="p-6 pt-0 space-y-8">
          {project && (
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg shadow-sm">
              <h2 className="font-bold text-primary-dark">Apoiando: {project.title}</h2>
              <p className="text-sm text-primary-dark/80 mt-1">{project.description}</p>
            </div>
          )}

          <div>
              <h2 className="px-1 pb-2 text-lg font-semibold text-gray-600">Formas de Ajudar</h2>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-3">
                  <button 
                    onClick={() => setIsPixModalOpen(true)}
                    className="w-full flex items-center justify-center gap-3 bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75">
                  <QrCodeIcon className="w-6 h-6" />
                  <span>Doar com PIX</span>
                  </button>
                  <div className="text-center p-3 bg-gray-100 rounded-lg flex items-center justify-between border border-gray-200">
                      <div className="text-left">
                          <p className="text-xs text-gray-500">Chave PIX (E-mail)</p>
                          <p className="font-mono text-dark-gray break-all text-sm sm:text-base">{pixKey}</p>
                      </div>
                      <button onClick={handleCopyPix} title="Copiar Chave PIX" className="p-2 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors ml-2 flex-shrink-0">
                          {pixCopied ? <ClipboardCheckIcon className="w-6 h-6 text-green-500" /> : <ClipboardIcon className="w-6 h-6 text-gray-600" />}
                      </button>
                  </div>
                  <button 
                    onClick={() => setIsLogDonationModalOpen(true)}
                    disabled={!project}
                    className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ClipboardCheckIcon className="w-6 h-6" />
                    <span>Fiz minha parte</span>
                  </button>
                  <button 
                    onClick={() => setIsRecurringModalOpen(true)}
                    className="w-full flex items-center justify-center gap-3 bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75">
                  <RepeatIcon className="w-6 h-6" />
                  <span>Doação Recorrente</span>
                  </button>
                  <button 
                    onClick={() => setIsVolunteerModalOpen(true)}
                    className="w-full flex items-center justify-center gap-3 bg-ios-blue text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75">
                    <HeartIcon className="w-6 h-6" />
                    <span>Seja Voluntário(a)</span>
                  </button>
              </div>
          </div>

          <div>
              <h2 className="px-1 pb-2 text-lg font-semibold text-gray-600">Outras Formas de Ajudar</h2>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-3">
                  <button 
                    onClick={() => handleOpenInfoModal('items')}
                    className="w-full text-left p-4 bg-gray-100 rounded-lg flex flex-col justify-center h-28 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200 no-underline"
                  >
                      <h3 className="font-semibold text-dark-gray text-center">Doação de Itens</h3>
                      <p className="text-sm text-gray-600 mt-1 text-center">Entre em contato para saber dos itens que mais precisamos.</p>
                  </button>
                  <button 
                    onClick={() => handleOpenInfoModal('share')}
                    className="w-full text-left p-4 bg-gray-100 rounded-lg flex flex-col justify-center h-28 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200"
                  >
                      <h3 className="font-semibold text-dark-gray text-center">Divulgue o Projeto</h3>
                      <p className="text-sm text-gray-600 mt-1 text-center">Compartilhe nossa causa e ajude a alcançar mais corações.</p>
                  </button>
              </div>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Siga e Contate-nos</h3>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/projetogratifaz/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110 active:scale-100">
                <InstagramIcon className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeScreen;