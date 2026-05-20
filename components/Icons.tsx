"use client";

// Custom SVG Icons for the specific niche
export const IconMap: Record<string, React.ReactNode> = {
  moving: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <path d="M16 19l-4-2-4 2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3v4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  regular: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  office: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22v-4h6v4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M12 14h.01M16 14h.01M8 14h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="3" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6l3 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M2 20h20M5 20V8l7-5 7 5v12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11v4M10 13h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M6 3h12l4 6-10 13L2 9Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 3 8 9l4 13M12.5 3l3.5 6-4 13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 9h20" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};
