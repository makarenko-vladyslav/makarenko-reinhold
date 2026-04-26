"use client";

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 4L19.5 13.5L29 16L19.5 18.5L16 28L12.5 18.5L3 16L12.5 13.5L16 4Z" fill="currentColor" />
    <path d="M25 6L26.5 9.5L30 10.5L26.5 11.5L25 15L23.5 11.5L20 10.5L23.5 9.5L25 6Z" fill="currentColor" opacity="0.6" />
    <path d="M7 22L8 24.5L10.5 25.5L8 26.5L7 29L6 26.5L3.5 25.5L6 24.5L7 22Z" fill="currentColor" opacity="0.4" />
  </svg>
);

export const SprayIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M10 5H14V8H10V5Z" />
    <path d="M12 2V5" />
    <path d="M16 5L18 3" />
    <path d="M8 5L6 3" />
    <path d="M7 11C7 9.34315 8.34315 8 10 8H14C15.6569 8 17 9.34315 17 11V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V11Z" />
    <path d="M12 12V18" strokeDasharray="2 2" />
    <circle cx="19" cy="9" r="1" fill="currentColor" stroke="none" />
    <circle cx="21" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="19" cy="15" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" strokeLinejoin="round" />
    <path d="M19 4L20 6.5L22.5 7.5L20 8.5L19 11L18 8.5L15.5 7.5L18 6.5L19 4Z" strokeLinejoin="round" />
    <path d="M5 18L5.5 19.5L7 20L5.5 20.5L5 22L4.5 20.5L3 20L4.5 19.5L5 18Z" strokeLinejoin="round" />
  </svg>
);

export const BoxBroomIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 10H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V10Z" />
    <path d="M4 10L8 5H16L20 10" />
    <path d="M12 10V15" />
    <path d="M15 2L13 10" />
    <path d="M11 2H19" />
    <path d="M13 2L15 6" />
    <path d="M17 2L15 6" />
  </svg>
);

export const WindowIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12H21" />
    <path d="M12 3V21" />
    <path d="M16 6L18 8" />
    <path d="M6 16L8 18" />
    <path d="M15 15L21 9" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 17L17 13" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarIcon = ({ className = "w-5 h-5", filled = false }: { className?: string, filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinejoin="round" />
  </svg>
);
