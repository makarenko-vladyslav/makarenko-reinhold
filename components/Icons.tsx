"use client";

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12L14 16L12 17L14 18L16 22L18 18L20 17L18 16L16 12Z" fill="currentColor" />
  </svg>
);

export const IconSparkle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z" strokeLinejoin="round"/>
    <path d="M18 18L19 15L22 16L19 17L18 20L17 17L14 16L17 15L18 18Z" strokeLinejoin="round"/>
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconLeaf = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22C12 22 12 16 12 12C12 8 16 4 20 4C20 4 20 8 16 12C12 16 12 22 12 22Z" strokeLinejoin="round"/>
    <path d="M12 22C12 22 12 16 12 12C12 8 8 4 4 4C4 4 4 8 8 12C12 16 12 22 12 22Z" strokeLinejoin="round"/>
  </svg>
);

export const IconLock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);

export const IconMap = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21C12 21 19 14 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 14 12 21 12 21Z" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const IconEye = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const IconCalendar = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2V6M8 2V6M3 10H21" strokeLinecap="round"/>
  </svg>
);

export const IconWindow = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M12 3V21M3 12H21" strokeLinecap="round"/>
    <path d="M15 6L18 9" strokeLinecap="round"/>
  </svg>
);

export const IconHome = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" strokeLinejoin="round"/>
    <path d="M9 21V12H15V21" strokeLinejoin="round"/>
  </svg>
);

export const IconBuilding = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 22V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V22" strokeLinejoin="round"/>
    <path d="M4 22H20" strokeLinecap="round"/>
    <path d="M8 6H10M14 6H16M8 10H10M14 10H16M8 14H10M14 14H16M8 18H10M14 18H16" strokeLinecap="round"/>
  </svg>
);

export const IconTool = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14.7 6.3C14.7 6.3 16.5 4.5 18 6C19.5 7.5 17.7 9.3 17.7 9.3L10 17H7V14L14.7 6.3Z" strokeLinejoin="round"/>
    <path d="M16 8L18 10" strokeLinecap="round"/>
  </svg>
);

export const IconStairs = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 21H9V15H15V9H21V3" strokeLinejoin="round"/>
  </svg>
);

export const IconChevronDown = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round"/>
  </svg>
);

export const IconClose = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round"/>
  </svg>
);

export const IconPhone = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92V19.92C22 20.4723 21.5523 20.92 21 20.92C10.5066 20.92 2 12.4134 2 1.92C2 1.36772 2.44772 0.919998 3 0.919998H6C6.55228 0.919998 7 1.36772 7 1.92C7 3.42 7.24 4.86 7.68 6.22C7.81 6.64 7.71 7.11 7.38 7.44L5.59 9.23C7.66 13.25 10.75 16.34 14.77 18.41L16.56 16.62C16.89 16.29 17.36 16.19 17.78 16.32C19.14 16.76 20.58 17 22 17C22.5523 17 23 17.4477 23 18V16.92H22Z" strokeLinejoin="round"/>
  </svg>
);

export const IconMail = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const getIconByName = (name: string, className?: string) => {
  switch (name) {
    case 'sparkle': return <IconSparkle className={className} />;
    case 'shield': return <IconShield className={className} />;
    case 'leaf': return <IconLeaf className={className} />;
    case 'lock': return <IconLock className={className} />;
    case 'map': return <IconMap className={className} />;
    case 'eye': return <IconEye className={className} />;
    case 'calendar': return <IconCalendar className={className} />;
    case 'window': return <IconWindow className={className} />;
    case 'home': return <IconHome className={className} />;
    case 'building': return <IconBuilding className={className} />;
    case 'tool': return <IconTool className={className} />;
    case 'stairs': return <IconStairs className={className} />;
    default: return <IconSparkle className={className} />;
  }
};
