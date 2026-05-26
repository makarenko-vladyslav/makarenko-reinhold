"use client";
import React from 'react';

// Custom SVG Icons
export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4C16 4 8 12 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 12 16 4 16 4Z" />
    <path d="M16 14L12 18" />
    <path d="M20 12L18 14" />
    <circle cx="24" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const HomeSparkle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
    <path d="M9 22V12H15V22" />
    <path d="M19 4L20 5L21 4L20 3L19 4Z" fill="currentColor" />
    <path d="M4 5L4.5 6L5 5L4.5 4L4 5Z" fill="currentColor" />
  </svg>
);

export const CalendarCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16L11 18L15 14" />
  </svg>
);

export const Building = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22V18H15V22" />
    <path d="M8 6H8.01" />
    <path d="M16 6H16.01" />
    <path d="M8 10H8.01" />
    <path d="M16 10H16.01" />
    <path d="M8 14H8.01" />
    <path d="M16 14H16.01" />
  </svg>
);

export const Sparkles = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" />
    <path d="M5 5L6 7L8 8L6 9L5 11L4 9L2 8L4 7L5 5Z" />
    <path d="M19 19L20 21L22 22L20 23L19 25L18 23L16 22L18 21L19 19Z" />
  </svg>
);

export const WindowIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M16 6L18 8" />
    <path d="M15 9L18 12" />
  </svg>
);

export const Cabin = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10L12 2L22 10" />
    <path d="M4 10V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10" />
    <path d="M10 22V14H14V22" />
    <path d="M15 5V3H19V8.2" />
  </svg>
);

export const ShieldCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22S8 18 8 12V6L12 2L16 6V12C16 18 12 22 12 22Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

export const BadgeCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15 5L19 4.5L19.5 8.5L23 11L20.5 14.5L21 18.5L17 19L15 22L12 19.5L9 22L7 19L3 18.5L3.5 14.5L1 11L4.5 8.5L5 4.5L9 5L12 2Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

export const Umbrella = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12A10 10 0 0 0 2 12H22Z" />
    <path d="M12 12V20A2 2 0 0 0 14 22" />
    <path d="M12 2V4" />
  </svg>
);

export const Leaf = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2C18.5 7.14 15.56 11.23 11 12.7" />
    <path d="M11 20C14.866 20 18 16.866 18 13C18 9.13401 14.866 6 11 6C7.13401 6 4 9.13401 4 13C4 16.866 7.13401 20 11 20Z" />
    <path d="M11 20V13" />
  </svg>
);

export const IconMap: Record<string, React.FC<{className?: string}>> = {
  "home-sparkle": HomeSparkle,
  "calendar-check": CalendarCheck,
  "building": Building,
  "sparkles": Sparkles,
  "window": WindowIcon,
  "cabin": Cabin,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  "umbrella": Umbrella,
  "leaf": Leaf
};
