// MiniMark — compact "F" letterform inside a chubby circle.
// Used as the AI sender avatar in chat. Ported from design-source/brand.jsx.
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
  const p = palettes[variant] || palettes.carrot;
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.36,
      background: `linear-gradient(140deg, ${p.bg1}, ${p.bg2})`,
      position: "relative", display: "grid", placeItems: "center",
      boxShadow: `0 ${size * 0.07}px 0 ${p.stroke}, 0 ${size * 0.14}px ${size * 0.32}px -${size * 0.1}px rgba(60,35,10,0.35)`,
      flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", top: size * 0.08, left: size * 0.18,
        width: size * 0.4, height: size * 0.18, borderRadius: "50%",
        background: "rgba(255,255,255,0.55)", filter: "blur(2px)",
      }} />
      <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 20 20"
        style={{ position: "absolute", top: -size * 0.06, right: -size * 0.04, transform: "rotate(20deg)" }}>
        <path d="M 10 18 C 2 12, 2 6, 8 4 C 14 5, 14 11, 10 18 Z" fill="#6CC04A" />
        <path d="M 9 14 L 9 6" stroke="#2F7820" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: size * 0.62, color: p.glyph,
        lineHeight: 1, transform: "translateY(2%)", letterSpacing: "-0.06em",
      }}>F</span>
    </div>
  );
}
