"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { FoodIcon, type FoodName } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const cats: { l: string; n: string; food: FoodName; c: string; ic: string }[] = [
  { l: "한식", n: "142", food: "pepper", c: "linear-gradient(140deg, #EF4F3A, #FF8C7A)", ic: "#fff" },
  { l: "양식", n: "98", food: "cheese", c: "linear-gradient(140deg, #FFC93C, #FFE08A)", ic: "#2A1E0F" },
  { l: "일식", n: "76", food: "egg", c: "linear-gradient(140deg, #FFFBF1, #FFE6C2)", ic: "#2A1E0F" },
  { l: "중식", n: "64", food: "mushroom", c: "linear-gradient(140deg, #8B6CD9, #B8A0E8)", ic: "#fff" },
  { l: "간편요리", n: "210", food: "egg", c: "linear-gradient(140deg, #FF7A3D, #FFB061)", ic: "#fff" },
  { l: "디저트", n: "52", food: "lemon", c: "linear-gradient(140deg, #E14B8F, #F8A0C0)", ic: "#fff" },
  { l: "샐러드", n: "88", food: "broccoli", c: "linear-gradient(140deg, #6CC04A, #A8E58A)", ic: "#fff" },
  { l: "음료/스무디", n: "34", food: "avocado", c: "linear-gradient(140deg, #5B7CFA, #A0B8FF)", ic: "#fff" },
];

export default function CategoriesScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink)", letterSpacing: "-0.02em" }}>뭐 끌려?</div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600, marginTop: 2 }}>오늘 입맛 따라 골라봐 😋</div>
      </div>

      <div style={{ padding: "16px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#fff", borderRadius: 18, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)" }}>
          <Icon name="search" size={20} color="var(--ink-mute)" />
          <div style={{ flex: 1, fontSize: 14, color: "var(--ink-mute)", fontWeight: 500 }}>요리 이름이나 재료 검색</div>
          <Icon name="mic" size={18} color="var(--carrot)" />
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div onClick={() => router.push("/recipe/tomato-egg")} style={{ background: "linear-gradient(140deg, #FF7A3D 0%, #FFC93C 100%)", borderRadius: 24, padding: 18, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "var(--shadow-deep)", cursor: "pointer" }}>
          <div style={{ position: "absolute", bottom: -20, right: -16, transform: "rotate(-14deg)", opacity: 0.85 }}><FoodIcon name="tomato" size={130} /></div>
          <div style={{ position: "absolute", top: -10, right: 60, transform: "rotate(20deg)", opacity: 0.7 }}><FoodIcon name="egg" size={60} /></div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.28)", fontSize: 10.5, fontWeight: 800, letterSpacing: "0.04em" }}>
              <Icon name="flame" size={11} color="#fff" /> HOT 트렌딩
            </div>
            <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em" }}>요즘 이거 다들 만들어!</div>
            <div style={{ marginTop: 2, fontSize: 12, fontWeight: 700, opacity: 0.9, maxWidth: 200 }}>10분 만에 되는 매콤한 한 끼 30선 →</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {cats.map((c, i) => (
            <div key={c.l} onClick={() => router.push("/recipe/tomato-egg")} style={{ background: c.c, borderRadius: 22, padding: 12, height: 110, position: "relative", overflow: "hidden", color: c.ic, boxShadow: "var(--shadow-card)", animation: `pop-in .5s ${i * 0.04}s both`, cursor: "pointer" }}>
              <div style={{ position: "absolute", bottom: -10, right: -6, transform: "rotate(-12deg)" }}><FoodIcon name={c.food} size={70} /></div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.02em" }}>{c.l}</div>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, marginTop: 2 }}>{c.n}개 레시피</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 120 }} />
      <TabBar active="cats" />
    </ScreenBG>
  );
}
