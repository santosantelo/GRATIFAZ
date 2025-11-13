import React from 'react';

const Logo: React.FC<{className?: string}> = ({className = ''}) => {
  return (
    <div className={`relative font-extrabold text-white text-center leading-none ${className}`}>
      <span className="text-5xl tracking-tighter">Grati</span>
      <div className="relative inline-block">
        <span className="text-5xl tracking-tighter">faz</span>
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 transform">
          <div className="px-3 py-0.5 bg-gradient-to-r from-secondary-light to-primary-light rounded-full shadow-md">
            <span className="text-sm font-bold tracking-wide">projeto</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;