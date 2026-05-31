import { View, Text } from "react-native";
import Svg, { Path, Circle, Defs, RadialGradient, LinearGradient, Stop } from "react-native-svg";
import { fonts } from "@/lib/theme";

export interface WordmarkProps {
  size?: number;
  showOrnaments?: boolean;
}

const CARROT = "#FF6A26";
const CORAL = "#FF8E5A";

function LeafCrown({ s }: { s: number }) {
  return (
    <Svg width={s * 0.36} height={s * 0.28} viewBox="0 0 40 30">
      <Defs>
        <RadialGradient id="wm-crown" cx="30%" cy="20%" r="80%">
          <Stop offset="0%" stopColor="#B6EF93" /><Stop offset="100%" stopColor="#2F7820" />
        </RadialGradient>
      </Defs>
      <Path d="M 8 22 C 0 16, 2 6, 10 6 C 16 8, 14 18, 10 22 Z" fill="url(#wm-crown)" />
      <Path d="M 20 22 C 14 14, 14 2, 22 2 C 30 4, 26 18, 22 22 Z" fill="url(#wm-crown)" />
      <Path d="M 30 22 C 24 18, 26 10, 32 10 C 38 12, 36 20, 32 22 Z" fill="url(#wm-crown)" />
    </Svg>
  );
}

function TomatoDot({ s }: { s: number }) {
  return (
    <Svg width={s * 0.34} height={s * 0.34} viewBox="0 0 40 40">
      <Defs>
        <RadialGradient id="wm-tom" cx="35%" cy="30%" r="80%">
          <Stop offset="0%" stopColor="#FF9D8A" /><Stop offset="55%" stopColor="#EF4F3A" /><Stop offset="100%" stopColor="#A82712" />
        </RadialGradient>
        <RadialGradient id="wm-tleaf" cx="30%" cy="20%" r="80%">
          <Stop offset="0%" stopColor="#B6EF93" /><Stop offset="100%" stopColor="#2F7820" />
        </RadialGradient>
      </Defs>
      <Circle cx="20" cy="26" r="13" fill="url(#wm-tom)" />
      <Circle cx="14" cy="20" r="3" fill="#fff" opacity={0.7} />
      <Path d="M 20 12 Q 14 7 9 9 Q 13 14 17 13 Q 13 8 20 12 Q 27 8 23 13 Q 27 14 31 9 Q 26 7 20 12 Z" fill="url(#wm-tleaf)" />
    </Svg>
  );
}

function TongueCurl({ s }: { s: number }) {
  return (
    <Svg width={s * 0.5} height={s * 0.42} viewBox="0 0 60 50">
      <Defs>
        <LinearGradient id="wm-tongue" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#FF8FA8" /><Stop offset="100%" stopColor="#FF5577" />
        </LinearGradient>
      </Defs>
      <Path d="M 6 26 Q 18 6 30 14 Q 42 22 50 8" stroke="url(#wm-tongue)" strokeWidth={s * 0.1} strokeLinecap="round" fill="none" />
      <Circle cx="50" cy="8" r={s * 0.04} fill="#FFC93C" />
    </Svg>
  );
}

function Sparkle({ c, sz }: { c: string; sz: number }) {
  return (
    <Svg width={sz} height={sz} viewBox="0 0 24 24">
      <Path d="M 12 2 L 14 10 L 22 12 L 14 14 L 12 22 L 10 14 L 2 12 L 10 10 Z" fill={c} />
    </Svg>
  );
}

export function Wordmark({ size = 88, showOrnaments = true }: WordmarkProps) {
  const letter = (ch: string, color: string, rot: number, dy = 0) => (
    <Text
      style={{
        fontFamily: fonts.display,
        fontSize: size,
        lineHeight: size * 1.02,
        color,
        transform: [{ rotate: `${rot}deg` }, { translateY: dy }],
        marginHorizontal: -size * 0.015,
      }}
    >
      {ch}
    </Text>
  );

  return (
    <View style={{ position: "relative", alignSelf: "flex-start" }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {letter("F", CARROT, -4, -size * 0.02)}
        {letter("r", CORAL, 2, 0)}
        {letter("ı", CORAL, -1, 0)}
        {letter("m", CORAL, 1, 0)}
        {letter("m", CORAL, -2, size * 0.01)}
        {letter("y", CARROT, 4, -size * 0.02)}
      </View>

      {showOrnaments && (
        <>
          <View style={{ position: "absolute", top: -size * 0.18, left: size * 0.04, transform: [{ rotate: "-8deg" }] }}>
            <LeafCrown s={size} />
          </View>
          <View style={{ position: "absolute", top: -size * 0.16, left: size * 1.18, transform: [{ rotate: "-12deg" }] }}>
            <TomatoDot s={size} />
          </View>
          <View style={{ position: "absolute", top: size * 0.18, right: -size * 0.34 }}>
            <TongueCurl s={size} />
          </View>
          <View style={{ position: "absolute", top: -size * 0.16, left: -size * 0.14 }}>
            <Sparkle c="#FFC93C" sz={size * 0.22} />
          </View>
          <View style={{ position: "absolute", bottom: -size * 0.06, left: size * 0.5 }}>
            <Sparkle c="#FF7A3D" sz={size * 0.14} />
          </View>
        </>
      )}
    </View>
  );
}
