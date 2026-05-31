import type { ReactNode } from "react";
import Svg, { Path, Circle, Ellipse, Rect, Line, G, Defs, RadialGradient, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

export type FrimmyMood = "happy" | "wink" | "love" | "think" | "sleep" | "star";

export interface FrimmyProps {
  size?: number;
  mood?: FrimmyMood;
}

export function Frimmy({ size = 180, mood = "happy" }: FrimmyProps) {
  const eyeOpen = (cx: number, cy: number) => (
    <G>
      <Ellipse cx={cx} cy={cy} rx="5" ry="6.5" fill="#2A1607" />
      <Ellipse cx={cx + 1.6} cy={cy - 2.4} rx="2" ry="2.4" fill="#fff" />
      <Circle cx={cx - 1.8} cy={cy + 2.2} r="1" fill="#fff" opacity={0.85} />
    </G>
  );
  const eyeClosed = (cx: number, cy: number) => (
    <Path d={`M ${cx - 5.5} ${cy + 0.5} Q ${cx} ${cy - 5.5} ${cx + 5.5} ${cy + 0.5}`} stroke="#2A1607" strokeWidth="2.8" strokeLinecap="round" fill="none" />
  );
  const eyeSleep = (cx: number, cy: number) => (
    <Path d={`M ${cx - 5.5} ${cy - 0.5} Q ${cx} ${cy + 4.5} ${cx + 5.5} ${cy - 0.5}`} stroke="#2A1607" strokeWidth="2.8" strokeLinecap="round" fill="none" />
  );
  const eyeHeart = (cx: number, cy: number) => (
    <Path d={`M ${cx} ${cy + 6} C ${cx - 8} ${cy - 1}, ${cx - 9} ${cy - 8}, ${cx - 3} ${cy - 7} C ${cx - 1} ${cy - 6}, ${cx} ${cy - 4}, ${cx} ${cy - 3} C ${cx} ${cy - 4}, ${cx + 1} ${cy - 6}, ${cx + 3} ${cy - 7} C ${cx + 9} ${cy - 8}, ${cx + 8} ${cy - 1}, ${cx} ${cy + 6} Z`} fill="#EF4F3A" />
  );
  const eyeStar = (cx: number, cy: number) => (
    <Path d={`M ${cx} ${cy - 7} L ${cx + 2} ${cy - 2} L ${cx + 7} ${cy - 1} L ${cx + 3} ${cy + 2} L ${cx + 4} ${cy + 7} L ${cx} ${cy + 4} L ${cx - 4} ${cy + 7} L ${cx - 3} ${cy + 2} L ${cx - 7} ${cy - 1} L ${cx - 2} ${cy - 2} Z`} fill="#FFC93C" stroke="#2A1607" strokeWidth="0.6" />
  );

  const EX = 62, EY = 38, EX2 = 98;
  let leftEye: ReactNode, rightEye: ReactNode, mouth: ReactNode, extras: ReactNode = null;

  const smileHappy = (
    <G>
      <Path d="M 70 47 Q 80 56 90 47 Q 80 52 70 47 Z" fill="#FF7A88" />
      <Path d="M 70 47 Q 80 56 90 47" stroke="#2A1607" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </G>
  );
  const smileSmall = (
    <Path d="M 75 48 Q 80 52 85 48" stroke="#2A1607" strokeWidth="2.2" strokeLinecap="round" fill="none" />
  );
  const smileWide = (
    <G>
      <Path d="M 68 46 Q 80 58 92 46 Q 80 54 68 46 Z" fill="#FF7A88" />
      <Path d="M 68 46 Q 80 58 92 46" stroke="#2A1607" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </G>
  );

  if (mood === "wink") {
    leftEye = eyeOpen(EX, EY); rightEye = eyeClosed(EX2, EY); mouth = smileHappy;
  } else if (mood === "sleep") {
    leftEye = eyeSleep(EX, EY); rightEye = eyeSleep(EX2, EY); mouth = smileSmall;
    extras = (
      <G>
        <SvgText x="124" y="22" fontFamily="System" fontSize="14" fill="#2A1607" fontWeight="800">z</SvgText>
        <SvgText x="132" y="12" fontFamily="System" fontSize="10" fill="#2A1607" fontWeight="800" opacity={0.7}>z</SvgText>
      </G>
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
    <Svg width={size} height={size} viewBox="0 0 180 180">
      <Defs>
        <RadialGradient id="frB" cx="35%" cy="22%" r="80%">
          <Stop offset="0%" stopColor="#FFFCF4" /><Stop offset="48%" stopColor="#FFF1D5" /><Stop offset="100%" stopColor="#D9B576" />
        </RadialGradient>
        <LinearGradient id="frBody2" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#A06428" stopOpacity={0} /><Stop offset="100%" stopColor="#A06428" stopOpacity={0.2} />
        </LinearGradient>
        <RadialGradient id="frDoor" cx="35%" cy="25%" r="85%">
          <Stop offset="0%" stopColor="#FFFCF4" /><Stop offset="100%" stopColor="#E2BC7D" />
        </RadialGradient>
        <LinearGradient id="frInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#E7C892" /><Stop offset="100%" stopColor="#B68852" />
        </LinearGradient>
        <RadialGradient id="frLeaf" cx="30%" cy="20%" r="90%">
          <Stop offset="0%" stopColor="#B6EF93" /><Stop offset="60%" stopColor="#6CC04A" /><Stop offset="100%" stopColor="#2F7820" />
        </RadialGradient>
        <LinearGradient id="frGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#fff" stopOpacity={0.85} /><Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <RadialGradient id="frCheek" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor="#FFA0B5" /><Stop offset="100%" stopColor="#FFA0B5" stopOpacity={0} />
        </RadialGradient>
      </Defs>

      <Ellipse cx="90" cy="166" rx="48" ry="6" fill="#3B2410" opacity={0.18} />

      <G transform="translate(80 16)">
        <Path d="M -8 4 C -18 -2, -18 -12, -10 -12 C -4 -10, -4 -2, -6 4 Z" fill="url(#frLeaf)" />
        <Path d="M -11 -4 C -10 -8, -8 -10, -6 -10" stroke="#2F7820" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity={0.7} />
        <Path d="M 0 6 C -6 -2, -6 -18, 4 -20 C 12 -18, 10 -2, 4 6 Z" fill="url(#frLeaf)" />
        <Path d="M 2 -2 C 3 -10, 5 -15, 7 -17" stroke="#2F7820" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity={0.7} />
        <Path d="M 14 6 C 24 2, 24 -8, 16 -10 C 10 -8, 10 0, 12 6 Z" fill="url(#frLeaf)" />
        <Path d="M 17 -2 C 17 -6, 19 -8, 21 -8" stroke="#2F7820" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity={0.7} />
        <Rect x="-1" y="3" width="3" height="4" rx="1" fill="#3F8E2D" />
      </G>

      <Rect x="40" y="16" width="80" height="138" rx="18" fill="url(#frB)" />
      <Rect x="40" y="16" width="80" height="138" rx="18" fill="url(#frBody2)" />

      <Line x1="44" y1="56" x2="116" y2="56" stroke="#C49E5E" strokeWidth="0.8" opacity={0.55} strokeLinecap="round" />
      <Rect x="74" y="58" width="12" height="2.2" rx="1.1" fill="#C49E5E" opacity={0.55} />

      <G>
        <Rect x="44" y="62" width="68" height="88" rx="8" fill="url(#frInner)" />
        <Rect x="44" y="88" width="68" height="2" fill="#7A5022" opacity={0.55} />
        <Rect x="44" y="116" width="68" height="2" fill="#7A5022" opacity={0.55} />
        <Rect x="44" y="62" width="68" height="6" fill="#000" opacity={0.18} />
        <Rect x="44" y="62" width="6" height="88" fill="#000" opacity={0.12} />

        <G>
          <Circle cx="55" cy="79" r="5.5" fill="#EF4F3A" />
          <Ellipse cx="53" cy="77" rx="1.5" ry="1" fill="#fff" opacity={0.7} />
          <Path d="M 53 74 L 54 72 M 56 74 L 57 72" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" />
        </G>
        <G>
          <Path d="M 68 81 Q 66 78 68 75 Q 72 73 76 75 Q 78 78 76 81 Q 78 84 75 86 Q 70 87 67 85 Q 66 83 68 81 Z" fill="#FFC93C" />
          <Ellipse cx="69" cy="79" rx="1.2" ry="2.5" fill="#fff" opacity={0.55} />
          <Path d="M 71 73 Q 72 71 73 73" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </G>
        <G>
          <Path d="M 86 75 L 102 75 L 104 86 Q 95 87 86 86 Z" fill="#FFD86B" stroke="#C28A0E" strokeWidth="0.5" />
          <Circle cx="93" cy="80" r="1" fill="#C28A0E" opacity={0.6} />
          <Circle cx="99" cy="82" r="0.8" fill="#C28A0E" opacity={0.6} />
        </G>

        <G>
          <Circle cx="55" cy="104" r="5.5" fill="#FFE08A" stroke="#F2A800" strokeWidth="0.6" />
          <Path d="M 55 99 L 55 109 M 50 104 L 60 104 M 51.5 100 L 58.5 108 M 58.5 100 L 51.5 108" stroke="#F2A800" strokeWidth="0.6" />
        </G>
        <G>
          <Circle cx="72" cy="103" r="4" fill="#6CC04A" />
          <Circle cx="76" cy="105" r="3.2" fill="#5BA640" />
          <Circle cx="69" cy="106" r="2.8" fill="#5BA640" />
          <Circle cx="73" cy="107" r="2.4" fill="#7DAF42" />
        </G>
        <G>
          <Circle cx="92" cy="105" r="5" fill="#FF9C5C" />
          <Ellipse cx="90" cy="103" rx="1.4" ry="1" fill="#fff" opacity={0.6} />
          <Path d="M 92 101 L 93 99" stroke="#3F8E2D" strokeWidth="1.2" strokeLinecap="round" />
        </G>

        <G>
          <Rect x="50" y="124" width="11" height="14" rx="1.5" fill="#FFFBF0" stroke="#C4D2E5" strokeWidth="0.5" />
          <Rect x="51.5" y="129" width="8" height="4" rx="0.5" fill="#FF7A3D" />
        </G>
        <G>
          <Ellipse cx="74" cy="131" rx="4" ry="5.5" fill="#7DAF42" />
          <Ellipse cx="74" cy="132" rx="1.8" ry="2.3" fill="#7A4A22" />
        </G>
        <G>
          <Circle cx="92" cy="132" r="3.5" fill="#EF4F3A" />
          <Circle cx="98" cy="134" r="3" fill="#EF4F3A" />
          <Ellipse cx="91" cy="131" rx="0.9" ry="0.6" fill="#fff" opacity={0.7} />
        </G>
      </G>

      <G transform="rotate(28 116 108)">
        <Rect x="116" y="62" width="36" height="92" rx="6" fill="url(#frDoor)" stroke="#C49E5E" strokeWidth="0.6" />
        <Rect x="120" y="66" width="28" height="84" rx="4" fill="#784614" opacity={0.12} />
        <Rect x="144" y="100" width="3" height="16" rx="1.5" fill="#9C7240" />
        <Ellipse cx="122" cy="78" rx="6" ry="2.5" fill="#fff" opacity={0.45} />
      </G>

      <Ellipse cx="62" cy="24" rx="22" ry="6" fill="url(#frGloss)" opacity={0.7} />

      <Ellipse cx="48" cy="44" rx="6.5" ry="4" fill="url(#frCheek)" />
      <Ellipse cx="112" cy="44" rx="6.5" ry="4" fill="url(#frCheek)" />
      {leftEye}
      {rightEye}
      {mouth}

      <Ellipse cx="56" cy="156" rx="10" ry="4.5" fill="url(#frDoor)" />
      <Ellipse cx="104" cy="156" rx="10" ry="4.5" fill="url(#frDoor)" />

      {extras}
    </Svg>
  );
}
