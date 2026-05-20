"use client";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IconHouseSparkle({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 5l1-1m0 0l1-1m-1 1l1 1m-1-1l-1 1" strokeLinecap="round" strokeLinejoin="round" className="text-accent animate-pulse-slow"/>
      <path d="M5 5l.5-.5m0 0l.5-.5m-.5.5l.5.5m-.5-.5l-.5.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent animate-pulse-slow" style={{ animationDelay: '1s' }}/>
    </svg>
  );
}

export function IconCalendarCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
    </svg>
  );
}

export function IconBuilding({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWindow({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6l3 3M16 5l3 3" strokeLinecap="round" strokeLinejoin="round" className="text-accent opacity-50"/>
    </svg>
  );
}

export function IconShieldCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
    </svg>
  );
}

export function IconDocument({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconIdCard({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 18v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1M15 10h4M15 14h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLeaf({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
      <path d="M11 20A7 7 0 0 1 4 13c0-4.5 4-9 8-9s8 4.5 8 9a7 7 0 0 1-7 7v0z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22v-9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13c-2.5 0-4.5-2-4.5-4.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
    </svg>
  );
}

export function getIconByName(name: string, className?: string) {
  switch (name) {
    case 'house-sparkle': return <IconHouseSparkle className={className} />;
    case 'calendar-check': return <IconCalendarCheck className={className} />;
    case 'building': return <IconBuilding className={className} />;
    case 'window': return <IconWindow className={className} />;
    case 'shield-check': return <IconShieldCheck className={className} />;
    case 'document': return <IconDocument className={className} />;
    case 'id-card': return <IconIdCard className={className} />;
    case 'leaf': return <IconLeaf className={className} />;
    default: return <IconHouseSparkle className={className} />;
  }
}
