"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "@/components/mascot/Icon";

/**
 * NavHeader — top navigation row with a back button, centered title and an
 * optional trailing slot. Reused by the detail / flow screens that aren't tabs.
 */
export interface NavHeaderProps {
  title?: string;
  /** trailing element (e.g. heart, send, "모두 읽음"). */
  right?: ReactNode;
  /** href to push instead of router.back(). */
  backHref?: string;
  /** close (X) icon instead of back chevron. */
  closeIcon?: boolean;
}

export function NavHeader({ title, right, backHref, closeIcon = false }: NavHeaderProps) {
  const router = useRouter();
  const onBack = () => (backHref ? router.push(backHref) : router.back());
  return (
    <div style={{ padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }}>
      <button
        onClick={onBack}
        aria-label="뒤로"
        style={{
          width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center",
          boxShadow: "var(--shadow-chip)", border: "1px solid var(--line)", cursor: "pointer", padding: 0,
        }}
      >
        <Icon name={closeIcon ? "close" : "back"} size={20} color="var(--ink)" />
      </button>
      {title !== undefined && (
        <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink)" }}>
          {title}
        </div>
      )}
      {title === undefined && <div style={{ flex: 1 }} />}
      <div style={{ minWidth: 40, display: "flex", justifyContent: "flex-end" }}>{right}</div>
    </div>
  );
}
