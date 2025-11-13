import React from 'react';
import type { View } from '../types';
import { HomeIcon, HeartIcon, ListIcon, BookIcon, NewsIcon } from './Icons';

interface BottomNavProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  const activeColor = isActive ? 'text-primary' : 'text-gray-500';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-1/5 h-16 transition-colors duration-200 ease-in-out focus:outline-none ${activeColor} hover:text-primary`}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon}
      <span className="text-xs font-medium mt-1">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { view: 'home', label: 'Início', Icon: HomeIcon },
    { view: 'projects', label: 'Projetos', Icon: ListIcon },
    { view: 'news', label: 'Notícias', Icon: NewsIcon },
    { view: 'contribute', label: 'Doar', Icon: HeartIcon },
    { view: 'diary', label: 'Diário', Icon: BookIcon },
  ];

  return (
    <footer className="absolute bottom-4 inset-x-4 max-w-md mx-auto h-16 bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-200/50">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map(({ view, label, Icon }) => (
          <NavItem
            key={view}
            label={label}
            isActive={activeView === view}
            onClick={() => setActiveView(view as View)}
            icon={<Icon className="w-6 h-6" />}
          />
        ))}
      </div>
    </footer>
  );
};

export default BottomNav;