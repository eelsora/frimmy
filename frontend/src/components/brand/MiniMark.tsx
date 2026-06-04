import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { fonts } from "@/lib/theme";

export type MiniMarkVariant = "carrot" | "sun" | "leaf" | "cream";

export interface MiniMarkProps {
  size?: number;
  variant?: MiniMarkVariant;
}

const palettes: Record<MiniMarkVariant, { bg1: string; bg2: string; stroke: string; glyph: string }> = {
  carrot: { bg1: "#FF7A3D", bg2: "#FFB061", stroke: "#C9491A", glyph: "#FFF7E2" },
  sun: { bg1: "#FFE08A", bg2: "#FFC93C", stroke: "#C28A0E", glyph: "#2A1E0F" },
  leaf: { bg1: "#A8E58A", bg2: "#6CC04A", stroke: "#3F8E2D", glyph: "#FFF7E2" },
  cream: { bg1: "#FFFBF1", bg2: "#FFE6C2", stroke: "#E8C58A", glyph: "#FF7A3D" },
};

export function MiniMark({ size = 44, variant = "carrot" }: MiniMarkProps) {
  const p = palettes[variant] ?? palettes.carrot;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.36,
        position: "relative",
        boxShadow: `0px ${size * 0.07}px 0px ${p.stroke}`,
      }}
    >
      <LinearGradient
        colors={[p.bg1, p.bg2]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={{ flex: 1, borderRadius: size * 0.36, alignItems: "center", justifyContent: "center" }}
      >
        {/* gloss */}
        <View style={{ position: "absolute", top: size * 0.08, left: size * 0.18, width: size * 0.4, height: size * 0.18, borderRadius: size * 0.2, backgroundColor: "rgba(255,255,255,0.55)" }} />
        {/* leaf accent */}
        <View style={{ position: "absolute", top: -size * 0.06, right: -size * 0.04, transform: [{ rotate: "20deg" }] }}>
          <Svg width={size * 0.34} height={size * 0.34} viewBox="0 0 20 20">
            <Path d="M 10 18 C 2 12, 2 6, 8 4 C 14 5, 14 11, 10 18 Z" fill="#6CC04A" />
            <Path d="M 9 14 L 9 6" stroke="#2F7820" strokeWidth="1" strokeLinecap="round" fill="none" />
          </Svg>
        </View>
        <Text style={{ fontFamily: fonts.display, fontSize: size * 0.62, color: p.glyph, letterSpacing: -size * 0.03 }}>F</Text>
      </LinearGradient>
    </View>
  );
}
