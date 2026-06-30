"use client";

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top-right corner — thin rings */}
      <svg className="absolute -top-10 -right-10 w-96 h-96 text-heading opacity-[0.15]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      {/* Left side — diagonal lines */}
      <svg className="absolute top-1/4 -left-5 w-64 h-64 text-heading opacity-[0.12]" viewBox="0 0 100 100" fill="none">
        <line x1="10" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="0" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="30" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      {/* Center-right — cross marks */}
      <svg className="absolute top-[45%] right-[8%] w-24 h-24 text-heading opacity-[0.15]" viewBox="0 0 40 40" fill="none">
        <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="0.6" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="0.6" />
      </svg>
      <svg className="absolute top-[52%] right-[14%] w-12 h-12 text-heading opacity-[0.1]" viewBox="0 0 40 40" fill="none">
        <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Bottom-left — dotted arc */}
      <svg className="absolute bottom-[12%] -left-10 w-80 h-80 text-heading opacity-[0.12]" viewBox="0 0 200 200" fill="none">
        <path d="M20,180 Q20,20 180,20" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 6" />
      </svg>

      {/* Mid-left — diamond */}
      <svg className="absolute top-[60%] left-[5%] w-20 h-20 text-heading opacity-[0.15]" viewBox="0 0 40 40" fill="none">
        <polygon points="20,5 35,20 20,35 5,20" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      {/* Top-left — scattered dots */}
      <svg className="absolute top-[10%] left-[12%] w-40 h-40 text-heading opacity-[0.15]" viewBox="0 0 80 80" fill="none">
        <circle cx="10" cy="15" r="2.5" fill="currentColor" />
        <circle cx="35" cy="8" r="2" fill="currentColor" />
        <circle cx="55" cy="25" r="2.5" fill="currentColor" />
        <circle cx="20" cy="45" r="2" fill="currentColor" />
        <circle cx="65" cy="50" r="2.5" fill="currentColor" />
        <circle cx="45" cy="65" r="2" fill="currentColor" />
        <circle cx="70" cy="20" r="1.5" fill="currentColor" />
        <circle cx="15" cy="70" r="2" fill="currentColor" />
      </svg>

      {/* Right side — staggered horizontal lines */}
      <svg className="absolute top-[75%] right-[3%] w-48 h-28 text-heading opacity-[0.12]" viewBox="0 0 100 60" fill="none">
        <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="25" x2="100" y2="25" stroke="currentColor" strokeWidth="0.5" />
        <line x1="40" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="0.5" />
        <line x1="60" y1="55" x2="100" y2="55" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Bottom-right — triangle */}
      <svg className="absolute bottom-[6%] right-[12%] w-20 h-20 text-heading opacity-[0.12]" viewBox="0 0 40 40" fill="none">
        <polygon points="20,5 35,35 5,35" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      {/* Hero area — large faint dashed circle */}
      <svg className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] text-heading opacity-[0.07]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 5" />
      </svg>

      {/* Mid-right — hexagon */}
      <svg className="absolute top-[30%] right-[4%] w-24 h-24 text-heading opacity-[0.1]" viewBox="0 0 50 50" fill="none">
        <polygon points="25,3 45,15 45,35 25,47 5,35 5,15" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
