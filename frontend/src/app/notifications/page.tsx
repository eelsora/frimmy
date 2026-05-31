"use client";

import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";

interface Noti {
  ic: string;
  t: string;
  s: string;
  time: string;
  color: string;
  isExpiry?: boolean;
}

const today: Noti[] = [
  { ic: "🚨", t: "우유 D-1이야!", s: "내일까지 먹어야 해. 오믈렛 어때?", time: "지금", color: "var(--tomato)", isExpiry: true },
  { ic: "✨", t: "오늘의 추천이 도착했어", s: "토마토 계란볶음 — 재료 다 있어!", time: "5분 전", color: "var(--carrot)" },
  { ic: "🍅", t: "아보카도 D-2", s: "곧 만료돼! 아보카도 토스트 어때?", time: "1시간 전", color: "var(--tomato)", isExpiry: true },
];
const earlier: Noti[] = [
  { ic: "👏", t: "요리 5단계 달성!", s: "벌써 18번이나 만들었어, 대단해!", time: "어제", color: "var(--sun-deep)" },
  { ic: "🛒", t: "장보기 리스트 업데이트", s: "6개 재료가 자동 추가됐어", time: "어제", color: "var(--leaf-deep)" },
  { ic: "💕", t: "비슷한 입맛 친구", s: "지윤이랑 비슷한 사람이 만든 요리", time: "2일 전", color: "var(--berry)" },
];

function Row({ n }: { n: Noti }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "12px 14px", background: "#fff", borderRadius: 18, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", alignItems: "start", position: "relative" }}>
      <div style={{ width: 44, height: 44, borderRadius: 14, background: n.isExpiry ? "rgba(239,79,58,0.12)" : "var(--bg)", display: "grid", placeItems: "center", fontSize: 22, flexShrink: 0 }}>{n.ic}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>{n.t}</div>
          <div style={{ fontSize: 10, color: "var(--ink-mute)", fontWeight: 700, whiteSpace: "nowrap" }}>{n.time}</div>
        </div>
        <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 600, marginTop: 2, lineHeight: 1.45 }}>{n.s}</div>
        {n.isExpiry && (
          <div style={{ display: "inline-flex", marginTop: 8, padding: "4px 10px", borderRadius: 999, background: "var(--tomato)", color: "#fff", fontSize: 11, fontWeight: 800, fontFamily: "var(--font-display)" }}>레시피 보기 →</div>
        )}
      </div>
      {!n.isExpiry && <div style={{ position: "absolute", top: 14, right: 14, width: 8, height: 8, borderRadius: 4, background: n.color }} />}
    </div>
  );
}

export default function NotificationsScreen() {
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader title="알림" right={<span style={{ fontSize: 12, color: "var(--carrot)", fontWeight: 800 }}>모두 읽음</span>} />

      <div style={{ padding: "14px 22px 0", display: "flex", gap: 6 }}>
        {[
          { l: "전체", n: 6, on: true },
          { l: "⚠️ 만료", n: 2 },
          { l: "✨ 추천", n: 2 },
          { l: "👏 기타", n: 2 },
        ].map((t) => (
          <div key={t.l} style={{ padding: "7px 12px", borderRadius: 999, whiteSpace: "nowrap", background: t.on ? "var(--ink)" : "#fff", color: t.on ? "#fff" : "var(--ink-soft)", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, border: t.on ? "none" : "1px solid var(--line)", display: "flex", alignItems: "center", gap: 4 }}>
            {t.l}
            <span style={{ padding: "0 5px", borderRadius: 999, fontSize: 9.5, fontWeight: 800, background: t.on ? "var(--carrot)" : "var(--bg)", color: t.on ? "#fff" : "var(--ink-mute)" }}>{t.n}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ink-mute)", letterSpacing: "0.04em", marginBottom: 8 }}>오늘</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {today.map((n, i) => <Row key={i} n={n} />)}
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ink-mute)", letterSpacing: "0.04em", marginBottom: 8 }}>이번 주</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {earlier.map((n, i) => <Row key={i} n={n} />)}
        </div>
      </div>

      <div style={{ height: 50 }} />
    </ScreenBG>
  );
}
