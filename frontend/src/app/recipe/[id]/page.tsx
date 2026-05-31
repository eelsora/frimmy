"use client";

import { useParams, useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon, type IconName } from "@/components/mascot/Icon";
import { FEATURED_RECIPE } from "@/lib/mock-data";

export default function RecipeDetailScreen() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id ?? FEATURED_RECIPE.id;
  const r = FEATURED_RECIPE;

  const stats: { ic: IconName; l: string; v: string; color: string }[] = [
    { ic: "time", l: r.time, v: "조리시간", color: "var(--carrot)" },
    { ic: "flame", l: r.difficulty, v: "난이도", color: "var(--tomato)" },
    { ic: "people", l: r.serving, v: "분량", color: "var(--leaf)" },
  ];

  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader right={<div style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)" }}><Icon name="heart" size={20} color="var(--tomato)" filled /></div>} />

      <div style={{ marginTop: 18, padding: "0 22px" }}>
        <div style={{ height: 220, borderRadius: 28, position: "relative", overflow: "hidden", background: "linear-gradient(150deg, #EF4F3A, #C9381F)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
          <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,0.28)", backdropFilter: "blur(8px)", fontSize: 10.5, fontWeight: 800, color: "#fff", letterSpacing: "0.06em", marginBottom: 12, position: "relative" }}>🥘 {r.cuisine}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 38, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", textAlign: "center", position: "relative", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>{r.title}</div>
          <div style={{ marginTop: 14, padding: "6px 14px", borderRadius: 999, background: "rgba(255,255,255,0.92)", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--carrot)", fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "var(--shadow-chip)", position: "relative" }}>
            <Icon name="camera" size={12} color="var(--carrot)" />
            완성하면 내 사진으로 채워져
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, background: "#fff", borderRadius: "32px 32px 0 0", padding: "24px 22px 0", position: "relative", boxShadow: "0 -10px 30px -10px rgba(60,35,10,0.15)" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.1)", position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)" }} />

        <div style={{ display: "flex", alignItems: "start", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, background: "rgba(255,122,61,0.14)", color: "var(--carrot)", fontSize: 11, fontWeight: 800 }}>
              <Icon name="sparkle" size={11} color="var(--carrot)" filled /> 프리미 추천
            </div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{r.title}</div>
            <div style={{ marginTop: 4, fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 }}>{r.subtitle}</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ padding: "12px 8px", background: "var(--bg)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <Icon name={s.ic} size={20} color={s.color} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ink)" }}>{s.l}</div>
              <div style={{ fontSize: 10, color: "var(--ink-mute)", fontWeight: 700 }}>{s.v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 4, padding: 4, background: "var(--bg)", borderRadius: 16 }}>
          <div style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 12, background: "#fff", fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)", boxShadow: "var(--shadow-chip)" }}>재료 ({r.ingredients.length})</div>
          <div style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 12, fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink-mute)" }}>조리법 ({r.steps.length}단계)</div>
        </div>

        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8, paddingBottom: 110 }}>
          {r.ingredients.map((it) => (
            <div key={it.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 16, background: it.have ? "var(--bg)" : "rgba(239,79,58,0.08)", border: it.have ? "1px solid var(--line)" : "1.5px dashed rgba(239,79,58,0.5)" }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <FoodIcon name={it.f} size={30} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>{it.n}</div>
                <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 700 }}>{it.q}</div>
              </div>
              {it.have ? (
                <div style={{ width: 24, height: 24, borderRadius: 12, background: "var(--leaf)", display: "grid", placeItems: "center" }}>
                  <Icon name="check" size={14} color="#fff" />
                </div>
              ) : (
                <div style={{ padding: "4px 10px", borderRadius: 999, background: "var(--tomato)", color: "#fff", fontSize: 10.5, fontWeight: 800, fontFamily: "var(--font-display)" }}>없어요 🥲</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 40%)" }}>
        <button onClick={() => router.push(`/recipe/${id}/cook`)} style={{ width: "100%", height: 58, border: "none", borderRadius: 22, background: "var(--carrot)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 8px 0 #C9491A", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          요리 시작하기 <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
