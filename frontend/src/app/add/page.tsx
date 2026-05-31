"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

export default function AddIngredientScreen() {
  const router = useRouter();
  const secondary = [
    { ic: "search" as const, t: "직접 검색", sub: "이름으로 찾기", accent: "var(--leaf)", food: "cabbage" as const },
    { ic: "mic" as const, t: "말로 추가", sub: "말하기만 하면 OK", accent: "var(--berry)", food: "broccoli" as const },
  ];
  const quick = [
    { n: "계란", f: "egg" as const }, { n: "양파", f: "onion" as const }, { n: "마늘", f: "garlic" as const }, { n: "대파", f: "leaf" as const },
    { n: "두부", f: "tofu" as const }, { n: "버섯", f: "mushroom" as const }, { n: "당근", f: "carrot" as const }, { n: "치즈", f: "cheese" as const },
  ];
  const recent = [
    { n: "토마토", f: "tomato" as const }, { n: "아보카도", f: "avocado" as const }, { n: "파프리카", f: "pepper" as const },
  ];

  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader title="재료 추가" />

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--ink)", letterSpacing: "-0.02em" }}>어떻게 추가할까?</div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600, marginTop: 4 }}>AI가 사진만 봐도 다 알아맞춰 ✨</div>

        <div onClick={() => router.push("/scan")} style={{ marginTop: 16, padding: 18, borderRadius: 26, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #FF7A3D 0%, #FFB061 100%)", boxShadow: "0 14px 30px -10px rgba(255,122,61,0.5), 0 6px 0 #C9491A", cursor: "pointer" }}>
          <div style={{ position: "absolute", right: -10, top: -10, opacity: 0.5 }}><Icon name="sparkle" size={60} color="#fff" filled /></div>
          <div style={{ position: "absolute", right: 10, bottom: -10, transform: "rotate(-10deg)", display: "flex" }}>
            <div style={{ transform: "rotate(-12deg)" }}><FoodIcon name="tomato" size={64} /></div>
            <div style={{ transform: "translateX(-20px) translateY(8px) rotate(10deg)" }}><FoodIcon name="egg" size={56} /></div>
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.3)", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em" }}>RECOMMENDED</div>
            <div style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 26, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>카메라로<br />한 번에 스캔!</div>
            <div style={{ marginTop: 6, fontSize: 12.5, color: "#fff", opacity: 0.95, fontWeight: 600, maxWidth: 200 }}>냉장고 열고 사진만 찰칵.<br />재료 다 인식해줄게</div>
            <div style={{ marginTop: 14, padding: "9px 16px", borderRadius: 999, background: "#fff", color: "var(--carrot)", fontWeight: 800, fontSize: 13, fontFamily: "var(--font-display)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="camera" size={16} color="var(--carrot)" /> 카메라 켜기
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {secondary.map((t) => (
            <div key={t.t} onClick={() => router.push("/add/form")} style={{ background: "#fff", borderRadius: 22, padding: 14, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", position: "relative", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ position: "absolute", right: -10, bottom: -14, opacity: 0.16 }}><FoodIcon name={t.food} size={70} /></div>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: `${t.accent}22`, display: "grid", placeItems: "center" }}>
                <Icon name={t.ic} size={20} color={t.accent} />
              </div>
              <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ink)" }}>{t.t}</div>
              <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 600 }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "22px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ink)" }}>자주 쓰는 재료 🥕</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
          {quick.map((c, i) => (
            <div key={c.n} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px 6px 6px", background: "#fff", borderRadius: 999, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", animation: `pop-in .5s ${i * 0.05}s both` }}>
              <FoodIcon name={c.f} size={28} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>{c.n}</span>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: "var(--carrot)", display: "grid", placeItems: "center", marginLeft: 2 }}>
                <Icon name="plus" size={14} color="#fff" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "22px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ink)" }}>방금 추가했어!</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
          {recent.map((c, i) => (
            <div key={c.n} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 8px 8px 6px", background: "linear-gradient(120deg, #DDF5CF 0%, #B6E89A 100%)", borderRadius: 999, border: "1.5px solid #7DAF42", position: "relative", animation: `pop-in .6s ${0.4 + i * 0.1}s both` }}>
              <FoodIcon name={c.f} size={26} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--leaf-deep)" }}>{c.n}</span>
              <Icon name="check" size={14} color="var(--leaf-deep)" />
              <span style={{ position: "absolute", top: -10, right: -4, fontSize: 14, animation: `float-up 1.8s ${0.6 + i * 0.2}s infinite` }}>✨</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 110 }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,1) 40%)" }}>
        <button onClick={() => router.push("/fridge")} style={{ width: "100%", height: 58, border: "none", borderRadius: 22, background: "var(--ink)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", boxShadow: "0 6px 0 rgba(0,0,0,0.4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          냉장고에 넣기 (3개) <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
