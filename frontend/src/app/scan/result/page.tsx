"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon, type FoodName } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const detected: { f: FoodName; n: string; q: string; conf: number; ok: boolean }[] = [
  { f: "tomato", n: "토마토", q: "3개", conf: 97, ok: true },
  { f: "egg", n: "계란", q: "6알", conf: 92, ok: true },
  { f: "cheese", n: "체다치즈", q: "4장", conf: 88, ok: true },
  { f: "lemon", n: "레몬", q: "2개", conf: 76, ok: true },
  { f: "onion", n: "양파", q: "?", conf: 54, ok: false },
];

export default function ScanResultScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader
        title="스캔 결과"
        right={<span onClick={() => router.push("/scan")} style={{ fontSize: 12, color: "var(--carrot)", fontWeight: 800, cursor: "pointer" }}>다시</span>}
      />

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>이거 다 맞아? 🤔</div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600, marginTop: 4 }}>
          AI가 <span style={{ color: "var(--carrot)", fontWeight: 800 }}>{detected.length}개 재료</span>를 찾았어. 확인하고 추가해줘!
        </div>
      </div>

      <div style={{ padding: "18px 22px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {detected.map((it, i) => (
          <div key={it.f} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: it.ok ? "#fff" : "rgba(255,201,60,0.15)", borderRadius: 20, border: it.ok ? "1px solid var(--line)" : "1.5px dashed var(--sun-deep)", boxShadow: "var(--shadow-chip)", animation: `pop-in .4s ${i * 0.06}s both` }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: "var(--bg)", display: "grid", placeItems: "center", flexShrink: 0 }}>
              <FoodIcon name={it.f} size={44} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)" }}>{it.n}</span>
                <span style={{ padding: "2px 6px", borderRadius: 999, fontSize: 9.5, fontWeight: 800, background: it.conf > 85 ? "rgba(108,192,74,0.18)" : "rgba(255,201,60,0.25)", color: it.conf > 85 ? "var(--leaf-deep)" : "var(--sun-deep)" }}>{it.conf}%</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", fontWeight: 700, marginTop: 2 }}>수량: {it.q}{!it.ok && " · 확인 필요"}</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "var(--bg)", display: "grid", placeItems: "center" }}>
                <Icon name="minus" size={16} color="var(--ink-soft)" />
              </div>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: it.ok ? "var(--leaf)" : "var(--bg)", display: "grid", placeItems: "center" }}>
                <Icon name="check" size={16} color={it.ok ? "#fff" : "var(--ink-mute)"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div onClick={() => router.push("/add/form")} style={{ margin: "18px 22px 0", padding: 14, borderRadius: 18, background: "linear-gradient(140deg, #FFEDD9, #FFD0AA)", border: "1px solid var(--carrot-soft)", display: "flex", gap: 10, alignItems: "center", cursor: "pointer" }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Icon name="sparkle" size={20} color="var(--carrot)" filled />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, color: "var(--ink)" }}>놓친 재료 있어?</div>
          <div style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 600 }}>
            <span style={{ color: "var(--carrot)", fontWeight: 800 }}>직접 추가하기 →</span>
          </div>
        </div>
      </div>

      <div style={{ height: 110 }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,1) 40%)" }}>
        <button onClick={() => router.push("/fridge")} style={{ width: "100%", height: 58, border: "none", borderRadius: 22, background: "var(--carrot)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 8px 0 #C9491A", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          4개 재료 추가하기 <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
