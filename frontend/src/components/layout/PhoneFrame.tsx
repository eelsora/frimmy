import type { ReactNode } from "react";

/**
 * PhoneFrame — centers the app inside a device-sized frame on desktop.
 * The OS status bar / notch / home indicator are drawn by the real device,
 * so we don't simulate them here; we only provide the scrollable screen area.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="frimmy-stage">
      <div className="phone-frame">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
