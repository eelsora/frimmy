import type { CSSProperties } from "react";

// Frimmy wordmark — expressive, chubby, decorated. Ported from design-source/brand.jsx.
export interface WordmarkProps {
  size?: number;
  style?: CSSProperties;
  showOrnaments?: boolean;
  shadow?: boolean;
}

export function Wordmark({ size = 88, style = {}, showOrnaments = true, shadow = true }: WordmarkProps) {
  const dropOff = Math.round(size * 0.085);

  const ltr = (color: string, rot: number, dy = 0): CSSProperties => ({
    fontFamily: "var(--font-display)",
    fontSize: size,
    lineHeight: 0.85,
    color,
    display: "inline-block",
    transform: `rotate(${rot}deg) translateY(${dy}px)`,
    transformOrigin: "50% 75%",
  });

  const tomatoDot = (
    <svg viewBox="0 0 40 40" width={size * 0.34} height={size * 0.34}>
      <defs>
        <radialGradient id="wm-tom-fill" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FF9D8A" />
          <stop offset="55%" stopColor="#EF4F3A" />
          <stop offset="100%" stopColor="#A82712" />
        </radialGradient>
        <radialGradient id="wm-leaf-fill" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#B6EF93" />
          <stop offset="100%" stopColor="#2F7820" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="26" r="13" fill="url(#wm-tom-fill)" />
      <ellipse cx="14" cy="20" rx="4" ry="2.5" fill="#fff" opacity="0.7" />
      <circle cx="25" cy="30" r="1.4" fill="#fff" opacity="0.6" />
      <path d="M 20 12 Q 14 7 9 9 Q 13 14 17 13 Q 13 8 20 12 Q 27 8 23 13 Q 27 14 31 9 Q 26 7 20 12 Z" fill="url(#wm-leaf-fill)" />
      <path d="M 20 9 L 20 16" stroke="#2F7820" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const leafCrown = (
    <svg viewBox="0 0 40 30" width={size * 0.36} height={size * 0.28}>
      <defs>
        <radialGradient id="wm-crown-leaf" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#B6EF93" />
          <stop offset="100%" stopColor="#2F7820" />
        </radialGradient>
      </defs>
      <path d="M 8 22 C 0 16, 2 6, 10 6 C 16 8, 14 18, 10 22 Z" fill="url(#wm-crown-leaf)" />
      <path d="M 20 22 C 14 14, 14 2, 22 2 C 30 4, 26 18, 22 22 Z" fill="url(#wm-crown-leaf)" />
      <path d="M 30 22 C 24 18, 26 10, 32 10 C 38 12, 36 20, 32 22 Z" fill="url(#wm-crown-leaf)" />
      <path d="M 10 18 L 9 9" stroke="#2F7820" strokeWidth="1" strokeLinecap="round" />
      <path d="M 22 20 L 21 6" stroke="#2F7820" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  const tongueCurl = (
    <svg viewBox="0 0 60 50" width={size * 0.5} height={size * 0.42}>
      <defs>
        <linearGradient id="wm-tongue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF8FA8" />
          <stop offset="100%" stopColor="#FF5577" />
        </linearGradient>
      </defs>
      <path d="M 6 26 Q 18 6 30 14 Q 42 22 50 8" stroke="url(#wm-tongue)" strokeWidth={size * 0.1} strokeLinecap="round" fill="none" />
      <circle cx="50" cy="8" r={size * 0.04} fill="#FFC93C" />
    </svg>
  );

  const steam = (
    <svg viewBox="0 0 20 30" width={size * 0.18} height={size * 0.3}>
      <path d="M 6 28 Q 14 22 8 14 Q 2 8 10 2" stroke="#9C8567" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.45" />
    </svg>
  );

  const sparkle = (c: string, sz: number) => (
    <svg viewBox="0 0 24 24" width={sz} height={sz}>
      <path d="M 12 2 L 14 10 L 22 12 L 14 14 L 12 22 L 10 14 L 2 12 L 10 10 Z" fill={c} />
    </svg>
  );

  const richLetter = (rot: number, dy: number, gradient: string): CSSProperties => ({
    fontFamily: "var(--font-display)",
    fontSize: size,
    lineHeight: 0.85,
    display: "inline-block",
    transform: `rotate(${rot}deg) translateY(${dy}px)`,
    transformOrigin: "50% 75%",
    background: gradient,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  });

  const carrotGrad = "linear-gradient(180deg, #FF9358 0%, #FF6A26 50%, #E04E14 100%)";
  const coralGrad = "linear-gradient(180deg, #FFB68C 0%, #FF8E5A 100%)";

  return (
    <div style={{ position: "relative", display: "inline-block", ...style }}>
      {shadow && (
        <div aria-hidden style={{ position: "absolute", top: dropOff, left: 0, color: "#2A1E0F", opacity: 0.16, filter: "blur(0.5px)", pointerEvents: "none" }}>
          <div style={{ display: "inline-flex", alignItems: "baseline", letterSpacing: "-0.04em" }}>
            <span style={ltr("#2A1E0F", -4, -2)}>F</span>
            <span style={ltr("#2A1E0F", 2, 0)}>r</span>
            <span style={ltr("#2A1E0F", -1, 0)}>ı</span>
            <span style={ltr("#2A1E0F", 1, 0)}>m</span>
            <span style={ltr("#2A1E0F", -2, 1)}>m</span>
            <span style={ltr("#2A1E0F", 4, -2)}>y</span>
          </div>
        </div>
      )}

      <div style={{ position: "relative", display: "inline-flex", alignItems: "baseline", letterSpacing: "-0.04em" }}>
        <span style={{ position: "relative", ...richLetter(-4, -2, carrotGrad) }}>
          F
          {showOrnaments && (
            <span style={{ position: "absolute", top: `-${size * 0.34}px`, left: `${size * 0.05}px`, transform: "rotate(-8deg)", lineHeight: 0, pointerEvents: "none", animation: "wiggle 3s infinite" }}>{leafCrown}</span>
          )}
        </span>

        <span style={richLetter(2, 0, coralGrad)}>r</span>

        <span style={{ position: "relative", ...richLetter(-1, 0, coralGrad) }}>
          ı
          {showOrnaments && (
            <span style={{ position: "absolute", left: "50%", top: `-${size * 0.22}px`, transform: "translateX(-50%) rotate(-12deg)", lineHeight: 0, pointerEvents: "none", animation: "bob 2.8s infinite" }}>{tomatoDot}</span>
          )}
        </span>

        <span style={{ position: "relative", ...richLetter(1, 0, coralGrad) }}>
          m
          {showOrnaments && (
            <span style={{ position: "absolute", top: `-${size * 0.28}px`, left: `${size * 0.15}px`, pointerEvents: "none", animation: "float-up 3s 0.3s infinite" }}>{steam}</span>
          )}
        </span>

        <span style={richLetter(-2, 1, coralGrad)}>m</span>

        <span style={{ position: "relative", ...richLetter(4, -2, carrotGrad) }}>
          y
          {showOrnaments && (
            <span style={{ position: "absolute", right: `-${size * 0.42}px`, top: `${size * 0.05}px`, transform: "rotate(-4deg)", lineHeight: 0, pointerEvents: "none", animation: "wiggle 2.6s 0.4s infinite" }}>{tongueCurl}</span>
          )}
        </span>
      </div>

      {showOrnaments && (
        <>
          <span aria-hidden style={{ position: "absolute", top: `-${size * 0.15}px`, left: `-${size * 0.15}px`, animation: "wiggle 2.4s infinite", lineHeight: 0 }}>{sparkle("#FFC93C", size * 0.22)}</span>
          <span aria-hidden style={{ position: "absolute", bottom: `-${size * 0.12}px`, left: `${size * 0.42}px`, animation: "wiggle 3.2s 0.8s infinite", lineHeight: 0 }}>{sparkle("#FF7A3D", size * 0.14)}</span>
          <span aria-hidden style={{ position: "absolute", top: `${size * 0.1}px`, right: `${size * 0.55}px`, animation: "wiggle 3s 0.4s infinite", lineHeight: 0, opacity: 0.7 }}>{sparkle("#EF4F3A", size * 0.12)}</span>
        </>
      )}
    </div>
  );
}
