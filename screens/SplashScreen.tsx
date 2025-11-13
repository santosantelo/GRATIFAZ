import React from 'react';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  const imageUrl = "https://images.unsplash.com/photo-1763055587581-2e37e6a9bc69?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className={`absolute inset-0 z-50 overflow-hidden bg-gray-50 transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isVisible}
    >
      <div
        className="w-full h-full bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

export default SplashScreen;