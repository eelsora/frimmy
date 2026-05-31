"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { FRIDGE_INGREDIENTS } from "@/lib/mock-data";

const C = { ink: "var(--ink)", inkSoft: "var(--ink-soft)", inkMute: "var(--ink-mute)", carrot: "var(--carrot)", tomato: "var(--tomato)" };

export default function FridgeScreen() {
  const router = useRouter();
  const ingredients = FRIDGE_INGREDIENTS;
  const filters = [
    { l: "전체 12", on: true },
    { l: "채소 6" },
    { l: "단백질 3" },
    { l: "유제품 2" },
    { l: "양념 1" },
  ];
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: C.ink, letterSpacing: "-0.02em" }}>
          내 냉장고 <span style={{ fontSize: 18, color: C.inkMute, marginLeft: 4 }}>총 {ingredients.length}개</span>
        </div>
        <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600, marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: C.tomato, fontWeight: 800 }}>🚨 3개</span>는 곧 만료돼! 서둘러야 해
        </div>
      </div>

      <div style={{ padding: "16px 22px 8px", display: "flex", gap: 8, overflowX: "auto" }}>
        {filters.map((f, i) => (
          <div key={i} style={{
            padding: "8px 14px", borderRadius: 999, whiteSpace: "nowrap",
            background: f.on ? C.ink : "#fff", color: f.on ? "#fff" : C.inkSoft,
            fontSize: 13, fontWeight: 800, fontFamily: "var(--font-display)",
            border: f.on ? "none" : "1px solid var(--line)",
            boxShadow: f.on ? "0 3px 0 rgba(0,0,0,0.25)" : "var(--shadow-chip)",
          }}>{f.l}</div>
        ))}
      </div>

      <div style={{ padding: "14px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: C.tomato, letterSpacing: "-0.01em", marginBottom: 8 }}>🔥 곧 만료</div>
        <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
          {ingredients.filter((i) => i.warn).map((i) => (
            <div key={i.id} style={{ flex: "0 0 auto", minWidth: 96, padding: "10px 12px", borderRadius: 18, background: "linear-gradient(160deg, #FFEAE6 0%, #FFD4CC 100%)", border: `1.5px solid ${C.tomato}40`, display: "flex", alignItems: "center", gap: 8 }}>
              <FoodIcon name={i.icon} size={36} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: C.ink }}>{i.name}</div>
                <div style={{ fontSize: 10.5, color: C.tomato, fontWeight: 800 }}>{i.expiry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {ingredients.slice(0, 12).map((it, i) => (
            <div key={it.id} style={{ background: "#fff", borderRadius: 20, padding: "12px 8px 10px", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, position: "relative", animation: `pop-in .5s ${i * 0.04}s both` }}>
              {it.warn && <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: C.tomato, boxShadow: "0 0 0 3px #fff" }} />}
              <FoodIcon name={it.icon} size={48} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: C.ink, letterSpacing: "-0.01em" }}>{it.name}</div>
              <div style={{ fontSize: 10, color: C.inkMute, fontWeight: 700 }}>{it.qty} · {it.expiry}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 130 }} />

      <button onClick={() => router.push("/add")} style={{ position: "absolute", right: 22, bottom: 130, width: 64, height: 64, borderRadius: 22, background: C.carrot, border: "none", display: "grid", placeItems: "center", boxShadow: "0 8px 0 #C9491A, 0 16px 30px -8px rgba(255,122,61,0.55)", cursor: "pointer", zIndex: 5 }}>
        <Icon name="plus" size={28} color="#fff" />
      </button>

      <TabBar active="fridge" />
    </ScreenBG>
  );
}
