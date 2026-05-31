import type { CSSProperties, ReactNode } from "react";

/**
 * ScreenBG — root wrapper for every Frimmy screen. Applies the warm cream
 * gradient and the `.frimmy` base styles. Grows with its content so absolutely
 * positioned bottom bars sit after the content while short screens still fill
 * the device viewport. Ported from design-source/screens-a.jsx.
 */
export interface ScreenBGProps {
  children: ReactNode;
  gradient?: string;
  style?: CSSProperties;
}

export function ScreenBG({ children, gradient, style }: ScreenBGProps) {
  const bg = gradient || "linear-gradient(180deg, #FFF1DC 0%, #FFE6C2 100%)";
  return (
    <div
      className="frimmy"
      style={{
        background: bg,
        width: "100%",
        height: "auto",
        minHeight: "100%",
        overflow: "visible",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
