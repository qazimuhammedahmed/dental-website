// Original hand-drawn SVG illustrations used as stand-ins for real photography.
// Flat, geometric style so they read as intentional brand art rather than
// stock photos. Replace with real photos per the TODO comments where used.

type IllustrationProps = {
  className?: string;
};

const palette = {
  brand900: "#102542",
  brand800: "#17376f",
  brand700: "#1c4a9c",
  brand600: "#235fc4",
  brand500: "#3679e0",
  brand400: "#5897f2",
  brand300: "#8ab8fb",
  brand200: "#b9d4fd",
  brand100: "#dbe9fe",
  brand50: "#eef5ff",
  coral500: "#f9603c",
  coral400: "#ff7a59",
  coral300: "#ff9c80",
  coral200: "#ffc0ad",
  gold400: "#e8b84b",
  skin: "#e3ab7d",
  skinShadow: "#c98f61",
  white: "#ffffff",
};

function Frame({
  children,
  className,
  viewBox,
}: {
  children: React.ReactNode;
  className?: string;
  viewBox: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      role="img"
      preserveAspectRatio="xMidYMid slice"
    >
      {children}
    </svg>
  );
}

// Portrait-oriented friendly dentist avatar for headshot slots.
export function DentistAvatarIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 300 400" className={className}>
      <rect width="300" height="400" fill={palette.brand100} />
      <circle cx="150" cy="150" r="130" fill={palette.brand200} opacity="0.6" />
      {/* shoulders / scrubs */}
      <path
        d="M40 400c0-70 49-120 110-120s110 50 110 120z"
        fill={palette.brand600}
      />
      <path
        d="M110 288c12 10 28 16 40 16s28-6 40-16l-6 30c-10 8-22 12-34 12s-24-4-34-12z"
        fill={palette.brand700}
      />
      {/* neck */}
      <rect x="132" y="230" width="36" height="50" rx="14" fill={palette.skinShadow} />
      {/* head */}
      <ellipse cx="150" cy="190" rx="62" ry="68" fill={palette.skin} />
      {/* hair */}
      <path
        d="M92 175c-4-46 26-78 58-78s62 32 58 78c-6-18-20-30-30-24-6-14-20-22-28-22s-22 8-28 22c-10-6-24 6-30 24z"
        fill={palette.brand900}
      />
      {/* smile */}
      <path
        d="M126 208c8 10 18 15 24 15s16-5 24-15"
        stroke={palette.brand900}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* eyes */}
      <circle cx="128" cy="182" r="5" fill={palette.brand900} />
      <circle cx="172" cy="182" r="5" fill={palette.brand900} />
      {/* dental mirror prop */}
      <g transform="translate(206 250) rotate(20)">
        <rect x="-4" y="0" width="8" height="70" rx="4" fill={palette.brand50} />
        <circle cx="0" cy="-10" r="16" fill={palette.brand50} stroke={palette.brand300} strokeWidth="3" />
      </g>
      <circle cx="240" cy="70" r="10" fill={palette.gold400} opacity="0.8" />
      <circle cx="256" cy="100" r="5" fill={palette.coral300} opacity="0.8" />
    </Frame>
  );
}

// Building facade with signage, palm accent for a Huntington Beach feel.
export function OfficeExteriorIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 400 300" className={className}>
      <rect width="400" height="300" fill={palette.brand50} />
      <rect x="0" y="220" width="400" height="80" fill={palette.brand100} />
      {/* building */}
      <rect x="60" y="70" width="280" height="160" rx="6" fill={palette.white} stroke={palette.brand200} strokeWidth="2" />
      <rect x="60" y="70" width="280" height="34" fill={palette.brand600} />
      <rect x="150" y="80" width="100" height="16" rx="4" fill={palette.white} opacity="0.9" />
      {/* windows */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={90 + i * 65}
          y={130}
          width="46"
          height="60"
          rx="4"
          fill={palette.brand100}
          stroke={palette.brand300}
          strokeWidth="2"
        />
      ))}
      {/* door */}
      <rect x="176" y="190" width="48" height="40" rx="3" fill={palette.brand700} />
      {/* awning */}
      <path d="M150 104 L250 104 L262 128 L138 128 Z" fill={palette.coral500} />
      {/* palm tree */}
      <rect x="40" y="150" width="8" height="80" rx="3" fill={palette.brand800} />
      <g fill={palette.brand500}>
        <ellipse cx="30" cy="150" rx="26" ry="10" transform="rotate(-20 30 150)" />
        <ellipse cx="58" cy="150" rx="26" ry="10" transform="rotate(20 58 150)" />
        <ellipse cx="44" cy="140" rx="10" ry="24" />
      </g>
      <circle cx="360" cy="50" r="18" fill={palette.gold400} opacity="0.85" />
    </Frame>
  );
}

// Waiting room: sofa, plant, wall art.
export function ReceptionIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 400 300" className={className}>
      <rect width="400" height="300" fill={palette.brand50} />
      <rect x="0" y="240" width="400" height="60" fill={palette.brand100} />
      {/* wall art */}
      <rect x="60" y="40" width="90" height="60" rx="6" fill={palette.white} stroke={palette.brand200} strokeWidth="2" />
      <circle cx="105" cy="70" r="18" fill={palette.coral300} opacity="0.7" />
      {/* sofa */}
      <rect x="150" y="170" width="200" height="70" rx="16" fill={palette.brand600} />
      <rect x="150" y="150" width="200" height="40" rx="16" fill={palette.brand500} />
      <rect x="160" y="150" width="55" height="90" rx="14" fill={palette.brand700} />
      <rect x="285" y="150" width="55" height="90" rx="14" fill={palette.brand700} />
      {/* plant */}
      <rect x="330" y="220" width="26" height="26" rx="4" fill={palette.brand800} />
      <g fill={palette.brand500}>
        <ellipse cx="343" cy="190" rx="10" ry="24" />
        <ellipse cx="325" cy="200" rx="20" ry="9" transform="rotate(-25 325 200)" />
        <ellipse cx="361" cy="200" rx="20" ry="9" transform="rotate(25 361 200)" />
      </g>
      {/* side table */}
      <rect x="60" y="210" width="60" height="8" rx="4" fill={palette.brand300} />
      <rect x="70" y="218" width="8" height="26" fill={palette.brand300} />
      <rect x="102" y="218" width="8" height="26" fill={palette.brand300} />
    </Frame>
  );
}

// Treatment room: chair, overhead light, instrument tray.
export function TreatmentRoomIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 400 300" className={className}>
      <rect width="400" height="300" fill={palette.brand50} />
      <rect x="0" y="230" width="400" height="70" fill={palette.brand100} />
      {/* chair base */}
      <rect x="150" y="220" width="90" height="18" rx="6" fill={palette.brand800} />
      <rect x="185" y="180" width="20" height="46" fill={palette.brand700} />
      {/* chair back + seat */}
      <path d="M120 220 L140 130 Q145 118 158 118 L210 118 Q222 118 224 132 L230 220 Z" fill={palette.brand500} />
      <rect x="118" y="205" width="120" height="22" rx="10" fill={palette.brand600} />
      {/* headrest */}
      <rect x="150" y="96" width="56" height="30" rx="12" fill={palette.brand400} />
      {/* overhead light arm */}
      <path d="M300 40 Q310 100 260 120" stroke={palette.brand300} strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="255" cy="122" r="24" fill={palette.brand200} stroke={palette.brand400} strokeWidth="4" />
      <circle cx="255" cy="122" r="10" fill={palette.white} />
      {/* tray */}
      <rect x="60" y="170" width="70" height="10" rx="4" fill={palette.brand300} />
      <rect x="90" y="150" width="6" height="30" fill={palette.brand300} />
      <rect x="55" y="155" width="80" height="16" rx="4" fill={palette.white} stroke={palette.brand200} strokeWidth="2" />
      <circle cx="70" cy="163" r="3.5" fill={palette.coral400} />
      <circle cx="85" cy="163" r="3.5" fill={palette.brand600} />
      <circle cx="100" cy="163" r="3.5" fill={palette.gold400} />
      <circle cx="115" cy="163" r="3.5" fill={palette.coral400} />
    </Frame>
  );
}

// Dentist + assistant working together, abstract patient chair silhouette.
export function TeamAtWorkIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 400 300" className={className}>
      <rect width="400" height="300" fill={palette.brand50} />
      <rect x="0" y="250" width="400" height="50" fill={palette.brand100} />
      {/* patient chair silhouette */}
      <ellipse cx="200" cy="240" rx="120" ry="16" fill={palette.brand200} opacity="0.6" />
      <path d="M140 240 L155 160 Q158 150 168 150 L232 150 Q242 150 244 162 L250 240 Z" fill={palette.brand200} />
      {/* dentist */}
      <g transform="translate(105 70)">
        <ellipse cx="30" cy="30" rx="26" ry="28" fill={palette.skin} />
        <path d="M4 30c0-20 12-34 26-34s26 14 26 34" fill={palette.brand900} />
        <rect x="10" y="55" width="40" height="90" rx="16" fill={palette.white} stroke={palette.brand200} strokeWidth="3" />
        <rect x="10" y="55" width="40" height="20" rx="10" fill={palette.brand600} />
      </g>
      {/* assistant */}
      <g transform="translate(255 85)">
        <ellipse cx="26" cy="26" rx="22" ry="24" fill={palette.skinShadow} />
        <path d="M2 26c0-18 10-30 24-30s24 12 24 30" fill={palette.brand800} />
        <rect x="4" y="48" width="44" height="80" rx="16" fill={palette.brand400} />
        <circle cx="26" cy="12" r="20" fill="none" stroke={palette.white} strokeWidth="3" opacity="0.5" />
      </g>
      <circle cx="340" cy="60" r="12" fill={palette.gold400} opacity="0.8" />
      <circle cx="60" cy="50" r="8" fill={palette.coral300} opacity="0.8" />
    </Frame>
  );
}

// --- Dental-work themed illustrations ---

export function WhiteningIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" fill={palette.brand50} />
      <circle cx="150" cy="150" r="100" fill={palette.brand100} />
      <path
        d="M90 130c0-30 27-40 60-40s60 10 60 40c0 45-20 90-60 90s-60-45-60-90z"
        fill={palette.white}
        stroke={palette.brand200}
        strokeWidth="3"
      />
      <path d="M150 92v128" stroke={palette.brand100} strokeWidth="3" />
      {Array.from({ length: 4 }).map((_, i) => (
        <path
          key={i}
          d={`M${210 + i * 14} ${70 - i * 6}l6 22-16-8-6-22z`}
          fill={palette.gold400}
        />
      ))}
      <circle cx="80" cy="70" r="10" fill={palette.coral300} opacity="0.8" />
    </Frame>
  );
}

export function ImplantIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" fill={palette.brand50} />
      <circle cx="150" cy="150" r="100" fill={palette.brand100} />
      {/* crown */}
      <path d="M115 90c0-14 16-22 35-22s35 8 35 22c0 20-14 40-35 40s-35-20-35-40z" fill={palette.white} stroke={palette.brand300} strokeWidth="3" />
      {/* abutment */}
      <path d="M138 128 L162 128 L156 152 L144 152 Z" fill={palette.brand300} />
      {/* implant screw */}
      <rect x="140" y="150" width="20" height="70" rx="4" fill={palette.brand600} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="136" y={158 + i * 12} width="28" height="5" rx="2" fill={palette.brand800} />
      ))}
      {/* gum line */}
      <path d="M90 150c20-14 40-14 60 0s40 14 60 0v20c-20 14-40 14-60 0s-40-14-60 0z" fill={palette.coral300} opacity="0.7" />
    </Frame>
  );
}

export function AlignerIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" fill={palette.brand50} />
      <circle cx="150" cy="150" r="100" fill={palette.brand100} />
      <path
        d="M85 130c10-18 35-28 65-28s55 10 65 28c6 12-2 24-14 22-8 22-32 36-51 36s-43-14-51-36c-12 2-20-10-14-22z"
        fill={palette.white}
        stroke={palette.brand300}
        strokeWidth="3"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={100 + i * 18}
          y={128}
          width="14"
          height="34"
          rx="4"
          fill={palette.brand50}
          stroke={palette.brand200}
          strokeWidth="2"
        />
      ))}
      <path
        d="M70 118c8-24 40-40 80-40s72 16 80 40"
        fill="none"
        stroke={palette.brand400}
        strokeWidth="4"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </Frame>
  );
}

export function XrayIllustration({ className }: IllustrationProps) {
  return (
    <Frame viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" fill={palette.brand900} />
      <rect x="40" y="40" width="220" height="220" rx="10" fill={palette.brand800} stroke={palette.brand600} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${70 + i * 40} 90)`}>
          <path d="M0 0c-10 0-16 14-16 34s6 50 16 66c10-16 16-46 16-66s-6-34-16-34z" fill={palette.brand300} opacity={0.85} />
          <path d="M-6 90 L-4 120 M6 90 L4 120" stroke={palette.brand300} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        </g>
      ))}
      <rect x="40" y="40" width="220" height="220" rx="10" fill="none" stroke={palette.brand500} strokeWidth="1" opacity="0.4" />
    </Frame>
  );
}
