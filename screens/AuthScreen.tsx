import React, { useState } from 'react';
import type { AuthView } from '../types';
import Logo from '../components/Logo';
import { MailIcon, LockClosedIcon, UserIcon } from '../components/Icons';

interface AuthScreenProps {
  onAuthSuccess: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [authView, setAuthView] = useState<AuthView>('login');
  const [isLoading, setIsLoading] = useState(false);

  // Mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess();
    }, 1500);
  };
  
  const renderLogin = () => (
    <div key="login" className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark-gray text-center mb-1">Bem-vindo(a) de volta!</h2>
      <p className="text-gray-600 text-center mb-6">Faça login para continuar sua jornada.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
            <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" placeholder="E-mail" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Senha" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div className="text-right">
            <button type="button" onClick={() => setAuthView('forgot')} className="text-sm font-medium text-primary hover:underline">Esqueceu a senha?</button>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:opacity-50">
            {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem uma conta?{' '}
        <button onClick={() => setAuthView('signup')} className="font-semibold text-primary hover:underline">Cadastre-se</button>
      </p>
    </div>
  );

  const renderSignUp = () => (
    <div key="signup" className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark-gray text-center mb-1">Crie sua conta</h2>
      <p className="text-gray-600 text-center mb-6">Comece a transformar gratidão em ação.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
            <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Nome completo" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div className="relative">
            <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" placeholder="E-mail" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Senha" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:opacity-50">
            {isLoading ? 'Criando...' : 'Criar Conta'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Já tem uma conta?{' '}
        <button onClick={() => setAuthView('login')} className="font-semibold text-primary hover:underline">Faça login</button>
      </p>
    </div>
  );

  const renderForgotPassword = () => (
    <div key="forgot" className="animate-fade-in">
        <h2 className="text-2xl font-bold text-dark-gray text-center mb-1">Recuperar Senha</h2>
        <p className="text-gray-600 text-center mb-6">Insira seu e-mail para receber um link de recuperação.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
                <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input type="email" placeholder="E-mail" required className="w-full p-3 pl-11 bg-gray-100 text-dark-gray border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75 disabled:opacity-50">
                {isLoading ? 'Enviando...' : 'Enviar Link'}
            </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
            Lembrou a senha?{' '}
            <button onClick={() => setAuthView('login')} className="font-semibold text-primary hover:underline">Faça login</button>
        </p>
    </div>
  );

  const renderContent = () => {
    switch(authView) {
      case 'signup':
        return renderSignUp();
      case 'forgot':
        return renderForgotPassword();
      case 'login':
      default:
        return renderLogin();
    }
  };

  return (
    <div className="absolute inset-0 z-30 h-full w-full flex flex-col items-center justify-center p-6 bg-gray-50 animate-fade-in">
        <header className="absolute top-16 sm:top-20 text-center">
            <style>{`.font-extrabold.text-white { color: #1C1C1E !important; }`}</style>
            <Logo />
            <p className="text-secondary-dark font-medium mt-4">Transforme gratidão em ação</p>
        </header>
        
        <main className="w-full max-w-sm">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/80">
                {renderContent()}
            </div>
        </main>
    </div>
  );
};

export default AuthScreen;