"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { Icon } from "@/components/mascot/Icon";

const recipes = [
  { t: "토마토 계란볶음", sub: "15분 · 쉬움", color: "#EF4F3A", heart: 12, hasPhoto: true, cuisine: "한식" },
  { t: "아보카도 토스트", sub: "8분 · 쉬움", color: "#7DAF42", heart: 24, hasPhoto: true, cuisine: "양식" },
  { t: "버섯 크림 파스타", sub: "20분 · 보통", color: "#F2A800", heart: 8, hasPhoto: false, cuisine: "양식" },
  { t: "브로콜리 볶음", sub: "10분 · 쉬움", color: "#5BA640", heart: 5, hasPhoto: false, cuisine: "한식" },
  { t: "계란 김치찌개", sub: "25분 · 보통", color: "#FF7A3D", heart: 18, hasPhoto: true, cuisine: "한식" },
  { t: "두부 부침", sub: "12분 · 쉬움", color: "#C9B690", heart: 9, hasPhoto: false, cuisine: "한식" },
];

const tabs = [
  { l: "전체", n: 16, on: true },
  { l: "자주 만든", n: 5 },
  { l: "시도해보기", n: 8 },
  { l: "즐겨찾기", n: 3 },
];

export default function SavedRecipesScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink)", letterSpacing: "-0.02em" }}>
          저장한 요리 <span style={{ fontSize: 18, color: "var(--ink-mute)", marginLeft: 4 }}>{recipes.length}</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600, marginTop: 2 }}>나중에 또 만들고 싶은 요리들 ❤️</div>
      </div>

      <div style={{ padding: "16px 22px 0", display: "flex", gap: 6, overflowX: "auto" }}>
        {tabs.map((t, i) => (
          <div key={i} style={{ padding: "8px 14px", borderRadius: 999, whiteSpace: "nowrap", background: t.on ? "var(--ink)" : "#fff", color: t.on ? "#fff" : "var(--ink-soft)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em", border: t.on ? "none" : "1px solid var(--line)", boxShadow: t.on ? "0 3px 0 rgba(0,0,0,0.25)" : "var(--shadow-chip)", display: "flex", alignItems: "center", gap: 5 }}>
            {t.l}
            <span style={{ padding: "0 5px", borderRadius: 999, fontSize: 10, fontWeight: 800, background: t.on ? "var(--carrot)" : "var(--bg)", color: t.on ? "#fff" : "var(--ink-mute)" }}>{t.n}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "18px 22px 0" }}>
        <div onClick={() => router.push("/recipe/tomato-egg")} style={{ background: "linear-gradient(140deg, #FFEDD9, #FFD0AA)", borderRadius: 22, padding: 14, display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--line)", position: "relative", overflow: "hidden", cursor: "pointer" }}>
          <div style={{ position: "absolute", right: -10, bottom: -10, width: 90, height: 90, borderRadius: 22, background: "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.4), transparent 60%), #EF4F3A", transform: "rotate(-12deg)", opacity: 0.45 }} />
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.5), transparent 60%), #EF4F3A", display: "grid", placeItems: "center", flexShrink: 0, position: "relative", overflow: "hidden" }}>
            <div style={{ padding: "2px 6px", borderRadius: 999, background: "rgba(0,0,0,0.5)", fontSize: 8, fontWeight: 800, color: "#fff" }}>📷</div>
          </div>
          <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
            <div style={{ fontSize: 10.5, fontWeight: 800, color: "var(--carrot-deep)", letterSpacing: "0.06em" }}>마지막에 만든</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)", marginTop: 2 }}>토마토 계란볶음</div>
            <div style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 700, marginTop: 2 }}>어제 · ⭐ 5.0</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 22px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {recipes.map((r, i) => (
            <div key={r.t} onClick={() => router.push("/recipe/tomato-egg")} style={{ background: "#fff", borderRadius: 22, padding: 10, border: "1px solid var(--line)", boxShadow: "var(--shadow-card)", animation: `pop-in .5s ${i * 0.04}s both`, cursor: "pointer" }}>
              <div style={{ height: 110, borderRadius: 16, position: "relative", overflow: "hidden", background: r.hasPhoto ? `radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.45), transparent 60%), ${r.color}` : `linear-gradient(150deg, ${r.color}, ${r.color}DD)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "10px 8px" }}>
                {r.hasPhoto ? (
                  <div style={{ position: "absolute", bottom: 6, left: 6, padding: "2px 7px", borderRadius: 999, background: "rgba(0,0,0,0.45)", fontSize: 9, fontWeight: 800, color: "#fff", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: 3 }}>
                    <Icon name="camera" size={9} color="#fff" /> 내 사진
                  </div>
                ) : (
                  <>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, textAlign: "center", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>{r.t}</div>
                    <div style={{ marginTop: 8, padding: "2px 8px", borderRadius: 999, background: "rgba(255,255,255,0.28)", backdropFilter: "blur(4px)", fontSize: 9.5, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>{r.cuisine}</div>
                  </>
                )}
                <div style={{ position: "absolute", top: 6, right: 6, padding: "3px 7px", borderRadius: 999, background: "rgba(255,255,255,0.95)", fontSize: 10, fontWeight: 800, color: "var(--tomato)", display: "flex", alignItems: "center", gap: 3 }}>
                  <Icon name="heart" size={10} color="var(--tomato)" filled /> {r.heart}
                </div>
              </div>
              <div style={{ padding: "8px 4px 2px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)", letterSpacing: "-0.01em" }}>{r.t}</div>
                <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 700, marginTop: 2 }}>{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 120 }} />
      <TabBar active="saved" />
    </ScreenBG>
  );
}
