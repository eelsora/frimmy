import type { CSSProperties } from "react";

// YummyStamp — tilted sticker badge. Ported from design-source/brand.jsx.
export interface YummyStampProps {
  text?: string;
  rot?: number;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

export function YummyStamp({ text = "yummy!", rot = -8, color = "#FFC93C", size = 28, style = {} }: YummyStampProps) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", padding: `${size * 0.16}px ${size * 0.45}px`,
      borderRadius: 999, background: color, color: "#2A1E0F",
      border: "2.5px solid #2A1E0F", transform: `rotate(${rot}deg)`,
      fontFamily: "var(--font-display)", fontSize: size, lineHeight: 1,
      letterSpacing: "-0.02em", boxShadow: "4px 4px 0 #2A1E0F",
      ...style,
    }}>{text}</div>
  );
}
