import React from 'react';

interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22V12h6v10" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

export const NewsIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-13.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>
);

export const QrCodeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 4h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17v0.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 4h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7v0.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 14h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7v0.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 14h3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 14v0.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 17v0.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h3" />
    </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 10h20M6 14h2" />
    </svg>
);

export const RepeatIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 1l4 4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
);


export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M12.04,2C6.58,2,2.13,6.45,2.13,12c0,1.75,0.45,3.39,1.26,4.86L2,22l5.26-1.38c1.42,0.76,3,1.18,4.78,1.18 c5.46,0,9.91-4.45,9.91-9.91C21.95,6.45,17.5,2,12.04,2z M12.04,20.15c-1.5,0-2.92-0.43-4.18-1.19l-4.52,1.18l1.21-4.41 c-0.85-1.34-1.32-2.91-1.32-4.54c0-4.5,3.66-8.16,8.16-8.16c4.5,0,8.16,3.66,8.16,8.16C20.2,16.49,16.54,20.15,12.04,20.15z M16.56,14.26c-0.16-0.08-0.93-0.46-1.07-0.51c-0.14-0.05-0.25-0.08-0.36,0.08c-0.11,0.16-0.41,0.51-0.5,0.61 c-0.1,0.1-0.19,0.11-0.35,0.03c-0.16-0.08-0.69-0.25-1.31-0.8c-0.48-0.43-0.81-0.96-0.9-1.12c-0.1-0.16-0.01-0.25,0.07-0.32 c0.07-0.07,0.16-0.19,0.25-0.28c0.08-0.09,0.11-0.16,0.16-0.26c0.05-0.11,0.03-0.2,0-0.28C11.5,10.6,11.01,9.4,10.8,8.88 c-0.21-0.53-0.43-0.45-0.59-0.46c-0.14-0.01-0.3,0-0.45,0s-0.39,0.06-0.59,0.3c-0.2,0.24-0.76,0.75-0.76,1.82 C8,11.7,8.78,12.8,8.89,13c0.11,0.19,1.52,2.3,3.68,3.21c0.51,0.21,0.91,0.34,1.22,0.43c0.49,0.15,0.94,0.13,1.29,0.08 c0.39-0.06,1.18-0.48,1.35-0.94c0.17-0.46,0.17-0.85,0.11-0.94C16.92,14.41,16.72,14.34,16.56,14.26z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
    </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 6l-4-4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v12" />
    </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);