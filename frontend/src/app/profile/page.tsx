"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { MiniMark } from "@/components/brand/MiniMark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const C = { ink: "var(--ink)", inkMute: "var(--ink-mute)" };

interface MenuRow { ic: string; t: string; sub: string; href?: string }

function MenuList({ rows, onNavigate }: { rows: MenuRow[]; onNavigate: (href: string) => void }) {
  return (
    <div style={{ background: "#fff", borderRadius: 20, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)" }}>
      {rows.map((m, i, arr) => (
        <div key={i} onClick={() => m.href && onNavigate(m.href)} style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none", cursor: m.href ? "pointer" : "default" }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "var(--bg)", display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0 }}>{m.ic}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: C.ink }}>{m.t}</div>
            <div style={{ fontSize: 11, color: C.inkMute, fontWeight: 600, marginTop: 1 }}>{m.sub}</div>
          </div>
          <Icon name="arrow-right" size={16} color={C.inkMute} />
        </div>
      ))}
    </div>
  );
}

export default function ProfileScreen() {
  const router = useRouter();

  const tastes = [
    { ic: "🌶️", t: "식이 선호도", sub: "매콤함 · 든든함 · 가벼움" },
    { ic: "🥜", t: "알레르기 / 못먹는 거", sub: "땅콩, 새우" },
    { ic: "⏰", t: "식사 알림", sub: "저녁 6시, 점심 12시", href: "/notifications" },
  ];
  const etc = [
    { ic: "🔔", t: "알림 설정", sub: "푸시 ON · 7개", href: "/notifications" },
    { ic: "💌", t: "친구 초대", sub: "같이 쓰면 더 재밌어" },
    { ic: "❔", t: "도움말", sub: "Frimmy 사용법" },
  ];

  return (
    <ScreenBG>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: C.ink, letterSpacing: "-0.02em" }}>내 정보</div>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ background: "linear-gradient(140deg, #FF7A3D 0%, #FFC93C 100%)", borderRadius: 28, padding: 18, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "var(--shadow-deep)" }}>
          <div style={{ position: "absolute", top: -20, right: -16, transform: "rotate(12deg)", opacity: 0.35 }}><FoodIcon name="carrot" size={130} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
            <MiniMark size={72} variant="cream" />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em" }}>지윤</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, opacity: 0.95, marginTop: 2 }}>Frimmy와 함께한 지 23일 ✨</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, background: "rgba(255,255,255,0.28)", fontSize: 10.5, fontWeight: 800, marginTop: 6 }}>
                <Icon name="flame" size={11} color="#fff" /> 요리 레벨 5
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, padding: 12, background: "rgba(255,255,255,0.22)", borderRadius: 18, backdropFilter: "blur(8px)" }}>
            {[{ n: "18", l: "만든 요리" }, { n: "16", l: "저장" }, { n: "2.3kg", l: "음식물↓" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10.5, fontWeight: 700, opacity: 0.95, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontSize: 11, color: C.inkMute, fontWeight: 800, letterSpacing: "0.06em", marginBottom: 8 }}>나의 취향</div>
        <MenuList rows={tastes} onNavigate={(href) => router.push(href)} />
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontSize: 11, color: C.inkMute, fontWeight: 800, letterSpacing: "0.06em", marginBottom: 8 }}>기타</div>
        <MenuList rows={etc} onNavigate={(href) => router.push(href)} />
      </div>

      <div style={{ height: 120 }} />
      <TabBar active="profile" />
    </ScreenBG>
  );
}
