// Original recreation of the California Dental Group of Huntington Beach
// logo (tooth/light-bulb mark with a rising sun), redrawn as SVG so it
// scales cleanly at any size. TODO: swap for the practice's official logo
// artwork file if a vector/high-res original becomes available.

type LogoProps = {
  className?: string;
};

const brand = "#235fc4";
const brandDark = "#17376f";
const mint = "#e3f7f6";
const sun = "#ffd400";

function Mark({ cx = 50, cy = 50, scale = 1 }: { cx?: number; cy?: number; scale?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale}) translate(-50 -50)`}>
      {/* tooth / bulb outline */}
      <path
        d="M31 33c-4-15 7-25 19-25s23 10 19 25c8 5 9 20 0 26-1 11-9 20-19 20s-18-9-19-20c-9-6-8-21 0-26z"
        fill="none"
        stroke={brand}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* rising sun */}
      <circle cx="50" cy="52" r="12" fill={sun} />
      <g stroke={sun} strokeWidth="3.5" strokeLinecap="round">
        <path d="M50 32v-6" />
        <path d="M34 40l-5-4" />
        <path d="M66 40l5-4" />
        <path d="M29 52h-6" />
        <path d="M71 52h6" />
      </g>
      {/* base bars */}
      <rect x="36" y="86" width="28" height="6" rx="3" fill={brand} />
      <rect x="39" y="95" width="22" height="6" rx="3" fill={brand} />
      <rect x="42" y="104" width="16" height="6" rx="3" fill={brand} />
    </g>
  );
}

// Compact mark only — used where space is tight (header, favicon).
export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 100 115" className={className} role="img" aria-label="California Dental Group of Huntington Beach logo">
      <Mark cx={50} cy={50} scale={0.85} />
    </svg>
  );
}

// Full circular badge with arced practice name — used where there's more room (footer).
export function LogoBadge({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="California Dental Group of Huntington Beach logo">
      <defs>
        <path id="logo-arc-top" d="M 22,100 A 78,78 0 0 1 178,100" fill="none" />
        <path id="logo-arc-bottom" d="M 22,112 A 78,78 0 0 0 178,112" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="96" fill={mint} stroke={brand} strokeWidth="1.5" opacity="0.9" />
      <Mark cx={100} cy={98} scale={1.5} />
      <text fill={brandDark} fontSize="13.5" fontWeight="700" letterSpacing="1.5">
        <textPath href="#logo-arc-top" startOffset="50%" textAnchor="middle">
          CALIFORNIA DENTAL GROUP
        </textPath>
      </text>
      <text fill={brand} fontSize="13" fontWeight="700" letterSpacing="1.5">
        <textPath href="#logo-arc-bottom" startOffset="50%" textAnchor="middle">
          OF HUNTINGTON BEACH
        </textPath>
      </text>
    </svg>
  );
}
