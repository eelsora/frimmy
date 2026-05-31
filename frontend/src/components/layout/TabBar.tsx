"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/mascot/Icon";

// Bottom tab bar. Highlights the active tab from the current route.
// Ported from design-source/screens-a.jsx.
const ITEMS: { id: string; href: string; icon: IconName; label: string }[] = [
  { id: "home", href: "/home", icon: "home", label: "홈" },
  { id: "fridge", href: "/fridge", icon: "fridge", label: "냉장고" },
  { id: "chat", href: "/chat", icon: "chat", label: "프리미" },
  { id: "profile", href: "/profile", icon: "profile", label: "내정보" },
];

const C = { carrot: "var(--carrot)", inkMute: "var(--ink-mute)" };

export function TabBar({ active }: { active?: string }) {
  const pathname = usePathname();
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, paddingBottom: 28,
      background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,0.9) 30%, rgba(255,241,220,1) 60%)",
      paddingTop: 18,
    }}>
      <div style={{
        margin: "0 16px", height: 64, background: "#fff", borderRadius: 26,
        boxShadow: "var(--shadow-card)", border: "1px solid var(--line)",
        display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px",
      }}>
        {ITEMS.map((it) => {
          const on = active ? it.id === active : pathname === it.href || pathname.startsWith(it.href + "/");
          return (
            <Link key={it.id} href={it.href} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "6px 12px",
              borderRadius: 16, background: on ? "rgba(255,122,61,0.12)" : "transparent", position: "relative",
              textDecoration: "none",
            }}>
              <Icon name={it.icon} size={22} color={on ? C.carrot : C.inkMute} filled={on && it.id === "home"} />
              <span style={{
                fontSize: 10, fontWeight: 700, color: on ? C.carrot : C.inkMute,
                fontFamily: "var(--font-display)",
              }}>{it.label}</span>
              {on && <div style={{ position: "absolute", bottom: -2, width: 4, height: 4, borderRadius: 2, background: C.carrot }} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
