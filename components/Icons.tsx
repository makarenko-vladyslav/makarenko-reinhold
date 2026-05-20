
"use client";
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LogoMark = ({ className = "w-8 h-8" }: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="32" height="32" rx="8" fill="currentColor" />
    <path d="M16 6L24 12V22C24 24.2091 22.2091 26 20 26H12C9.79086 26 8 24.2091 8 22V12L16 6Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 16L15 19L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconHomeCheck = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinejoin="round"/>
    <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconCalendarSync = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinejoin="round"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
    <path d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0" strokeLinecap="round"/>
    <path d="M14 14l1.5-1.5" strokeLinecap="round"/>
  </svg>
);

export const IconBuilding = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" strokeLinejoin="round"/>
    <path d="M9 22v-4h6v4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeLinecap="round"/>
  </svg>
);

export const IconSparkle = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" strokeLinejoin="round"/>
    <path d="M5 3l.5 1.5.5-1.5L5 3z" fill="currentColor"/>
    <path d="M19 19l.5 1.5.5-1.5L19 19z" fill="currentColor"/>
  </svg>
);

export const IconLeaf = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M11 20A7 7 0 014 13V4h9a7 7 0 017 7v9h-9z" strokeLinejoin="round"/>
    <path d="M11 20v-8" strokeLinecap="round"/>
    <path d="M11 12l4-4" strokeLinecap="round"/>
  </svg>
);

export const IconKey = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconClock = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" strokeLinejoin="round"/>
    <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconCheck = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
  </svg>
);

export const IconX = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
  </svg>
);

export const IconChevronDown = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMapPin = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" strokeLinejoin="round"/>
  </svg>
);

export const IconPhone = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMail = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round"/>
    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const getIconByName = (name: string, className?: string) => {
  switch (name) {
    case 'home-check': return <IconHomeCheck className={className} />;
    case 'calendar-sync': return <IconCalendarSync className={className} />;
    case 'building': return <IconBuilding className={className} />;
    case 'sparkle': return <IconSparkle className={className} />;
    case 'leaf': return <IconLeaf className={className} />;
    case 'key': return <IconKey className={className} />;
    case 'clock': return <IconClock className={className} />;
    case 'shield': return <IconShield className={className} />;
    default: return <IconSparkle className={className} />;
  }
};
