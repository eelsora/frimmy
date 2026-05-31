// UI / line icons — chunky strokes. Ported from design-source/mascot.jsx.
export type IconName =
  | "home" | "fridge" | "chat" | "profile" | "plus" | "minus" | "close"
  | "back" | "search" | "camera" | "mic" | "heart" | "time" | "flame"
  | "check" | "arrow-right" | "sparkle" | "send" | "people" | "leaf";

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  filled?: boolean;
}

export function Icon({ name, size = 24, color = "currentColor", filled = false }: IconProps) {
  const s = size;
  const w = filled ? 0 : 2.4;
  const common = {
    fill: filled ? color : "none",
    stroke: color,
    strokeWidth: w,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (name) {
    case "home":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M3 11 L12 3 L21 11 V20 a1 1 0 0 1 -1 1 H4 a1 1 0 0 1 -1 -1 Z" {...common} /></svg>;
    case "fridge":
      return <svg width={s} height={s} viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="3" {...common} /><path d="M5 10 H19 M9 6 V8 M9 13 V16" {...common} /></svg>;
    case "chat":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M4 5 a2 2 0 0 1 2 -2 H18 a2 2 0 0 1 2 2 V15 a2 2 0 0 1 -2 2 H10 L5 21 V17 a0 0 0 0 0 0 0 a0 0 0 0 1 0 0 Z" {...common} /></svg>;
    case "profile":
      return <svg width={s} height={s} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" {...common} /><path d="M4 21 c1 -5 6 -7 8 -7 s7 2 8 7" {...common} /></svg>;
    case "plus":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 5 V19 M5 12 H19" {...common} /></svg>;
    case "minus":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M5 12 H19" {...common} /></svg>;
    case "close":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M6 6 L18 18 M18 6 L6 18" {...common} /></svg>;
    case "back":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M15 5 L8 12 L15 19" {...common} /></svg>;
    case "search":
      return <svg width={s} height={s} viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" {...common} /><path d="M16 16 L21 21" {...common} /></svg>;
    case "camera":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M3 8 a2 2 0 0 1 2 -2 H8 L10 4 H14 L16 6 H19 a2 2 0 0 1 2 2 V18 a2 2 0 0 1 -2 2 H5 a2 2 0 0 1 -2 -2 Z" {...common} /><circle cx="12" cy="13" r="3.5" {...common} /></svg>;
    case "mic":
      return <svg width={s} height={s} viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3" {...common} /><path d="M5 11 a7 7 0 0 0 14 0 M12 18 V22" {...common} /></svg>;
    case "heart":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 20 C 5 14, 3 10, 5 6 C 7 3, 11 4, 12 7 C 13 4, 17 3, 19 6 C 21 10, 19 14, 12 20 Z" {...common} /></svg>;
    case "time":
      return <svg width={s} height={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" {...common} /><path d="M12 7 V12 L15 14" {...common} /></svg>;
    case "flame":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 3 c2 4 6 5 6 11 a6 6 0 0 1 -12 0 c0 -3 2 -4 3 -7 c2 2 1 5 3 -4 Z" {...common} /></svg>;
    case "check":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M5 12 L10 17 L19 7" {...common} /></svg>;
    case "arrow-right":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M5 12 H19 M13 6 L19 12 L13 18" {...common} /></svg>;
    case "sparkle":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z M19 16 L19.7 18.3 L22 19 L19.7 19.7 L19 22 L18.3 19.7 L16 19 L18.3 18.3 Z" {...common} fill={filled ? color : "none"} /></svg>;
    case "send":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M4 12 L20 4 L14 20 L11 13 Z" {...common} /></svg>;
    case "people":
      return <svg width={s} height={s} viewBox="0 0 24 24"><circle cx="9" cy="9" r="3.5" {...common} /><circle cx="17" cy="10" r="2.5" {...common} /><path d="M3 19 c1 -3 4 -4 6 -4 s5 1 6 4 M15 19 c0 -2 2 -3 4 -3" {...common} /></svg>;
    case "leaf":
      return <svg width={s} height={s} viewBox="0 0 24 24"><path d="M20 4 C 10 4, 4 10, 4 20 C 14 20, 20 14, 20 4 Z M4 20 L 12 12" {...common} /></svg>;
    default:
      return <svg width={s} height={s} />;
  }
}
