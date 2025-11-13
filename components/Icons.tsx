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


// FIX: Add missing icon components to resolve import errors in AuthScreen.
export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const LockClosedIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

// FIX: Add missing icon components to resolve import errors.
export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.096c-3.264 0-3.66.014-4.944.076C2.825 1.444.954 3.314.77 7.55c-.062 1.284-.076 1.68-.076 4.944s.014 3.66.076 4.944c.184 4.236 2.055 6.106 6.29 6.29 1.284.062 1.68.076 4.944.076s3.66-.014 4.944-.076c4.236-.184 6.106-2.055 6.29-6.29.062-1.284.076-1.68.076-4.944s-.014-3.66-.076-4.944C23.046 3.314 21.175 1.444 16.944 1.26c-1.284-.062-1.68-.076-4.944-.076z" />
        <path d="M12 6.848c-2.835 0-5.152 2.316-5.152 5.152s2.317 5.152 5.152 5.152 5.152-2.317 5.152-5.152-2.317-5.152-5.152-5.152zm0 8.818c-2.025 0-3.666-1.641-3.666-3.666s1.641-3.666 3.666-3.666 3.666 1.641 3.666 3.666-1.641 3.666-3.666 3.666z" />
        <path d="M16.949 6.105c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z" />
    </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M12.04 2A10.02 10.02 0 0 0 2 12c0 1.8.48 3.47 1.34 4.95L2 22l5.25-1.38c1.4.78 3.02 1.23 4.75 1.23h.01c5.46 0 9.9-4.45 9.9-9.9C22 6.45 17.5 2 12.04 2zM12 20.15c-1.5 0-2.92-.41-4.14-1.15l-.3-.18-3.07.8.82-3.02-.2-.32a8.16 8.16 0 0 1-1.25-4.38c0-4.42 3.6-8 8-8s8 3.58 8 8-3.6 8-8 8zm4.4-5.32c-.22-.11-.9-1.29-1.04-1.44s-.24-.22-.34-.11c-.1.11-.4.49-.49.59-.09.1-.18.11-.33.05s-1.35-.5-2.57-1.58c-.96-.84-1.61-1.88-1.8-2.2s-.19-.52-.08-.68c.1-.15.22-.38.33-.51s.15-.22.22-.38c.08-.15.04-.28-.01-.38s-.34-.81-.46-.92c-.12-.11-.25-.1-.38-.1s-.22-.01-.33-.01-.28.04-.42.22-.54.52-.54 1.26.55 2.92 1.24 3.61c.69.69 2.12 2.66 4.18 3.72.6.33 1.15.54 1.54.68.75.28 1.42.24 1.95.15.59-.1.9-1.07 1.04-1.22.14-.15.14-.28.1-.38s-.09-.11-.2-.22z" />
    </svg>
);