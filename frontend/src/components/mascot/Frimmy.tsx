import type { CSSProperties, ReactNode } from "react";

// Frimmy — chubby cream FRIDGE mascot. Ported from design-source/mascot.jsx.
export type FrimmyMood = "happy" | "wink" | "love" | "think" | "sleep" | "star";

export interface FrimmyProps {
  size?: number;
  mood?: FrimmyMood;
  style?: CSSProperties;
}

export function Frimmy({ size = 180, mood = "happy", style = {} }: FrimmyProps) {
  const w = size, h = size;

  const eyeOpen = (cx: number, cy: number) => (
    <g>
      <ellipse cx={cx} cy={cy} rx="5" ry="6.5" fill="#2A1607" />
      <ellipse cx={cx + 1.6} cy={cy - 2.4} rx="2" ry="2.4" fill="#fff" />
      <circle cx={cx - 1.8} cy={cy + 2.2} r="1" fill="#fff" opacity="0.85" />
    </g>
  );
  const eyeClosed = (cx: number, cy: number) => (
    <path d={`M ${cx - 5.5} ${cy + 0.5} Q ${cx} ${cy - 5.5} ${cx + 5.5} ${cy + 0.5}`} stroke="#2A1607" strokeWidth="2.8" strokeLinecap="round" fill="none" />
  );
  const eyeSleep = (cx: number, cy: number) => (
    <path d={`M ${cx - 5.5} ${cy - 0.5} Q ${cx} ${cy + 4.5} ${cx + 5.5} ${cy - 0.5}`} stroke="#2A1607" strokeWidth="2.8" strokeLinecap="round" fill="none" />
  );
  const eyeHeart = (cx: number, cy: number) => (
    <path
      d={`M ${cx} ${cy + 6}
          C ${cx - 8} ${cy - 1}, ${cx - 9} ${cy - 8}, ${cx - 3} ${cy - 7}
          C ${cx - 1} ${cy - 6}, ${cx} ${cy - 4}, ${cx} ${cy - 3}
          C ${cx} ${cy - 4}, ${cx + 1} ${cy - 6}, ${cx + 3} ${cy - 7}
          C ${cx + 9} ${cy - 8}, ${cx + 8} ${cy - 1}, ${cx} ${cy + 6} Z`}
      fill="#EF4F3A"
    />
  );
  const eyeStar = (cx: number, cy: number) => (
    <path
      d={`M ${cx} ${cy - 7} L ${cx + 2} ${cy - 2} L ${cx + 7} ${cy - 1} L ${cx + 3} ${cy + 2} L ${cx + 4} ${cy + 7} L ${cx} ${cy + 4} L ${cx - 4} ${cy + 7} L ${cx - 3} ${cy + 2} L ${cx - 7} ${cy - 1} L ${cx - 2} ${cy - 2} Z`}
      fill="#FFC93C" stroke="#2A1607" strokeWidth="0.6"
    />
  );

  const EX = 62, EY = 38, EX2 = 98;
  let leftEye: ReactNode, rightEye: ReactNode, mouth: ReactNode, extras: ReactNode = null;

  const smileHappy = (
    <g>
      <path d="M 70 47 Q 80 56 90 47 Q 80 52 70 47 Z" fill="#FF7A88" />
      <path d="M 70 47 Q 80 56 90 47" stroke="#2A1607" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </g>
  );
  const smileSmall = (
    <path d="M 75 48 Q 80 52 85 48" stroke="#2A1607" strokeWidth="2.2" strokeLinecap="round" fill="none" />
  );
  const smileWide = (
    <g>
      <path d="M 68 46 Q 80 58 92 46 Q 80 54 68 46 Z" fill="#FF7A88" />
      <path d="M 68 46 Q 80 58 92 46" stroke="#2A1607" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>
  );

  if (mood === "wink") {
    leftEye = eyeOpen(EX, EY); rightEye = eyeClosed(EX2, EY); mouth = smileHappy;
  } else if (mood === "sleep") {
    leftEye = eyeSleep(EX, EY); rightEye = eyeSleep(EX2, EY); mouth = smileSmall;
    extras = (
      <g style={{ animation: "bob 3s infinite" }}>
        <text x="124" y="22" fontFamily="var(--font-display)" fontSize="14" fill="#2A1607" fontWeight="800">z</text>
        <text x="132" y="12" fontFamily="var(--font-display)" fontSize="10" fill="#2A1607" fontWeight="800" opacity="0.7">z</text>
      </g>
    );
  } else if (mood === "love") {
    leftEye = eyeHeart(EX, EY); rightEye = eyeHeart(EX2, EY); mouth = smileWide;
  } else if (mood === "think") {
    leftEye = eyeOpen(EX, EY); rightEye = eyeOpen(EX2, EY); mouth = smileSmall;
  } else if (mood === "star") {
    leftEye = eyeStar(EX, EY); rightEye = eyeStar(EX2, EY); mouth = smileWide;
  } else {
    leftEye = eyeOpen(EX, EY); rightEye = eyeOpen(EX2, EY); mouth = smileHappy;
  }

  return (
    <svg width={w} height={h} viewBox="0 0 180 180" style={style}>
      <defs>
        <radialGradient id="frB" cx="35%" cy="22%" r="80%">
          <stop offset="0%" stopColor="#FFFCF4" />
          <stop offset="48%" stopColor="#FFF1D5" />
          <stop offset="100%" stopColor="#D9B576" />
        </radialGradient>
        <linearGradient id="frBody2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(160,100,40,0.20)" />
        </linearGradient>
        <radialGradient id="frDoor" cx="35%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#FFFCF4" />
          <stop offset="100%" stopColor="#E2BC7D" />
        </radialGradient>
        <linearGradient id="frInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E7C892" />
          <stop offset="100%" stopColor="#B68852" />
        </linearGradient>
        <radialGradient id="frLeaf" cx="30%" cy="20%" r="90%">
          <stop offset="0%" stopColor="#B6EF93" />
          <stop offset="60%" stopColor="#6CC04A" />
          <stop offset="100%" stopColor="#2F7820" />
        </radialGradient>
        <linearGradient id="frGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="frCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA0B5" />
          <stop offset="100%" stopColor="rgba(255,160,181,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="90" cy="166" rx="48" ry="6" fill="#3B2410" opacity="0.18" />

      <g transform="translate(80 16)">
        <path d="M -8 4 C -18 -2, -18 -12, -10 -12 C -4 -10, -4 -2, -6 4 Z" fill="url(#frLeaf)" />
        <path d="M -11 -4 C -10 -8, -8 -10, -6 -10" stroke="#2F7820" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 0 6 C -6 -2, -6 -18, 4 -20 C 12 -18, 10 -2, 4 6 Z" fill="url(#frLeaf)" />
        <path d="M 2 -2 C 3 -10, 5 -15, 7 -17" stroke="#2F7820" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 14 6 C 24 2, 24 -8, 16 -10 C 10 -8, 10 0, 12 6 Z" fill="url(#frLeaf)" />
        <path d="M 17 -2 C 17 -6, 19 -8, 21 -8" stroke="#2F7820" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.7" />
        <rect x="-1" y="3" width="3" height="4" rx="1" fill="#3F8E2D" />
      </g>

      <rect x="40" y="16" width="80" height="138" rx="18" fill="url(#frB)" />
      <rect x="40" y="16" width="80" height="138" rx="18" fill="url(#frBody2)" />

      <line x1="44" y1="56" x2="116" y2="56" stroke="#C49E5E" strokeWidth="0.8" opacity="0.55" strokeLinecap="round" />
      <rect x="74" y="58" width="12" height="2.2" rx="1.1" fill="#C49E5E" opacity="0.55" />

      <g>
        <rect x="44" y="62" width="68" height="88" rx="8" fill="url(#frInner)" />
        <rect x="44" y="88" width="68" height="2" fill="#7A5022" opacity="0.55" />
        <rect x="44" y="116" width="68" height="2" fill="#7A5022" opacity="0.55" />
        <rect x="44" y="62" width="68" height="6" fill="rgba(0,0,0,0.18)" />
        <rect x="44" y="62" width="6" height="88" fill="rgba(0,0,0,0.12)" />

        <g>
          <circle cx="55" cy="79" r="5.5" fill="#EF4F3A" />
          <ellipse cx="53" cy="77" rx="1.5" ry="1" fill="#fff" opacity="0.7" />
          <path d="M 53 74 L 54 72 M 56 74 L 57 72" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <g>
          <path d="M 68 81 Q 66 78 68 75 Q 72 73 76 75 Q 78 78 76 81 Q 78 84 75 86 Q 70 87 67 85 Q 66 83 68 81 Z" fill="#FFC93C" />
          <ellipse cx="69" cy="79" rx="1.2" ry="2.5" fill="#fff" opacity="0.55" />
          <path d="M 71 73 Q 72 71 73 73" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </g>
        <g>
          <path d="M 86 75 L 102 75 L 104 86 Q 95 87 86 86 Z" fill="#FFD86B" stroke="#C28A0E" strokeWidth="0.5" />
          <circle cx="93" cy="80" r="1" fill="#C28A0E" opacity="0.6" />
          <circle cx="99" cy="82" r="0.8" fill="#C28A0E" opacity="0.6" />
        </g>

        <g>
          <circle cx="55" cy="104" r="5.5" fill="#FFE08A" stroke="#F2A800" strokeWidth="0.6" />
          <path d="M 55 99 L 55 109 M 50 104 L 60 104 M 51.5 100 L 58.5 108 M 58.5 100 L 51.5 108" stroke="#F2A800" strokeWidth="0.6" />
        </g>
        <g>
          <circle cx="72" cy="103" r="4" fill="#6CC04A" />
          <circle cx="76" cy="105" r="3.2" fill="#5BA640" />
          <circle cx="69" cy="106" r="2.8" fill="#5BA640" />
          <circle cx="73" cy="107" r="2.4" fill="#7DAF42" />
        </g>
        <g>
          <circle cx="92" cy="105" r="5" fill="#FF9C5C" />
          <ellipse cx="90" cy="103" rx="1.4" ry="1" fill="#fff" opacity="0.6" />
          <path d="M 92 101 L 93 99" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        <g>
          <rect x="50" y="124" width="11" height="14" rx="1.5" fill="#FFFBF0" stroke="#C4D2E5" strokeWidth="0.5" />
          <rect x="51.5" y="129" width="8" height="4" rx="0.5" fill="#FF7A3D" />
        </g>
        <g>
          <ellipse cx="74" cy="131" rx="4" ry="5.5" fill="#7DAF42" />
          <ellipse cx="74" cy="132" rx="1.8" ry="2.3" fill="#7A4A22" />
        </g>
        <g>
          <circle cx="92" cy="132" r="3.5" fill="#EF4F3A" />
          <circle cx="98" cy="134" r="3" fill="#EF4F3A" />
          <ellipse cx="91" cy="131" rx="0.9" ry="0.6" fill="#fff" opacity="0.7" />
        </g>
      </g>

      <g transform="rotate(28 116 108)">
        <rect x="116" y="62" width="36" height="92" rx="6" fill="url(#frDoor)" stroke="#C49E5E" strokeWidth="0.6" />
        <rect x="120" y="66" width="28" height="84" rx="4" fill="rgba(120,70,20,0.12)" />
        <rect x="144" y="100" width="3" height="16" rx="1.5" fill="#9C7240" />
        <ellipse cx="122" cy="78" rx="6" ry="2.5" fill="#fff" opacity="0.45" />
      </g>

      <ellipse cx="62" cy="24" rx="22" ry="6" fill="url(#frGloss)" opacity="0.7" />

      <ellipse cx="48" cy="44" rx="6.5" ry="4" fill="url(#frCheek)" />
      <ellipse cx="112" cy="44" rx="6.5" ry="4" fill="url(#frCheek)" />
      {leftEye}
      {rightEye}
      {mouth}

      <ellipse cx="56" cy="156" rx="10" ry="4.5" fill="url(#frDoor)" />
      <ellipse cx="104" cy="156" rx="10" ry="4.5" fill="url(#frDoor)" />

      {extras}
    </svg>
  );
}
