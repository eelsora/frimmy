"use client";

import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon, type FoodName } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const groups: { cat: string; color: string; items: { f: FoodName; n: string; q: string; for: string; done: boolean }[] }[] = [
  {
    cat: "🥕 채소", color: "var(--leaf)",
    items: [
      { f: "pepper", n: "파프리카", q: "2개", for: "오므라이스 외 1", done: false },
      { f: "broccoli", n: "브로콜리", q: "1송이", for: "브로콜리 볶음", done: false },
      { f: "mushroom", n: "양송이", q: "5개", for: "버섯 파스타", done: true },
    ],
  },
  {
    cat: "🥩 단백질", color: "var(--tomato)",
    items: [
      { f: "chicken", n: "닭가슴살", q: "2덩이", for: "닭가슴살 샐러드", done: false },
      { f: "tofu", n: "두부", q: "1모", for: "두부 부침", done: false },
    ],
  },
  {
    cat: "🧀 기타", color: "var(--sun-deep)",
    items: [{ f: "cheese", n: "굴소스", q: "1병", for: "토마토 계란볶음", done: false }],
  },
];

export default function ShoppingListScreen() {
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader
        title="장보기 리스트"
        right={<div style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)" }}><Icon name="send" size={18} color="var(--carrot)" /></div>}
      />

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ background: "linear-gradient(150deg, #6CC04A 0%, #A8E58A 100%)", borderRadius: 24, padding: 18, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 14px 30px -10px rgba(108,192,74,0.5), 0 6px 0 #3F8E2D" }}>
          <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.3, transform: "rotate(14deg)" }}><FoodIcon name="carrot" size={140} /></div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.28)", fontSize: 10.5, fontWeight: 800, letterSpacing: "0.04em" }}>AI가 자동으로 만들었어</div>
            <div style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em" }}>총 <span style={{ color: "#FFF7DA" }}>6</span>개 사야 해</div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4, opacity: 0.95 }}>저장한 레시피 5개 만들려면 필요해 🛒</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "18px 22px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {groups.map((g, gi) => (
          <div key={gi}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: g.color, marginBottom: 8, letterSpacing: "-0.01em" }}>{g.cat}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {g.items.map((it) => (
                <div key={it.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: it.done ? "var(--bg)" : "#fff", borderRadius: 18, border: "1px solid var(--line)", boxShadow: it.done ? "none" : "var(--shadow-chip)", opacity: it.done ? 0.55 : 1 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: it.done ? "var(--leaf)" : "#fff", border: it.done ? "none" : "2px solid var(--line-strong)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {it.done && <Icon name="check" size={16} color="#fff" />}
                  </div>
                  <FoodIcon name={it.f} size={32} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)", textDecoration: it.done ? "line-through" : "none" }}>
                      {it.n} <span style={{ color: "var(--ink-mute)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12 }}>{it.q}</span>
                    </div>
                    <div style={{ fontSize: 10.5, color: "var(--ink-mute)", fontWeight: 600, marginTop: 1 }}>📖 {it.for}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 130 }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,1) 40%)" }}>
        <button style={{ width: "100%", height: 58, border: "none", borderRadius: 22, background: "var(--ink)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 6px 0 rgba(0,0,0,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          마트 앱에서 한 번에 주문 <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
