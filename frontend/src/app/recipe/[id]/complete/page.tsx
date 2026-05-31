"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const confetti = [
  { c: "#fff", x: 12, y: 16, r: -10, s: 10 },
  { c: "#FFC93C", x: 80, y: 14, r: 24, s: 14 },
  { c: "#fff", x: 22, y: 38, r: 14, s: 8 },
  { c: "#EF4F3A", x: 86, y: 30, r: -16, s: 12 },
  { c: "#fff", x: 8, y: 50, r: 20, s: 8 },
  { c: "#6CC04A", x: 88, y: 50, r: -8, s: 10 },
];

export default function CookingCompleteScreen() {
  const router = useRouter();
  return (
    <ScreenBG gradient="linear-gradient(180deg, #FFD86B 0%, #FF7A3D 50%, #FFE6C2 100%)">
      <div style={{ height: 56 }} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {confetti.map((p, i) => (
          <div key={i} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s * 1.6, background: p.c, borderRadius: 2, transform: `rotate(${p.r}deg)`, animation: `bob ${2 + i * 0.3}s ${i * 0.2}s infinite`, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
        ))}
      </div>

      <div style={{ padding: "40px 22px 0", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "rgba(255,255,255,0.4)", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", backdropFilter: "blur(8px)" }}>YOU DID IT 🎉</div>
        <div style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 44, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1, textShadow: "0 4px 0 rgba(40,24,8,0.2)" }}>완성!</div>
        <div style={{ marginTop: 6, fontSize: 14, color: "#fff", fontWeight: 700, opacity: 0.95 }}>토마토 계란볶음, 잘 해냈어 👏</div>

        <div style={{ position: "relative", height: 180, marginTop: 20 }}>
          <div className="bob" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #fff 60%, #F0E2C0 100%)", display: "grid", placeItems: "center", boxShadow: "0 20px 40px rgba(60,35,10,0.3)" }}>
            <div style={{ position: "relative" }}>
              <FoodIcon name="tomato" size={110} />
              <div style={{ position: "absolute", top: 20, left: 60 }}><FoodIcon name="egg" size={80} /></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "32px 32px 0 0", padding: "20px 22px 32px", boxShadow: "0 -10px 30px rgba(60,35,10,0.15)" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.1)", margin: "0 auto 14px" }} />

        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ink)", letterSpacing: "-0.01em" }}>어땠어? 별점 매겨줘 ⭐</div>

        <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "center" }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} style={{ width: 42, height: 42, borderRadius: 14, background: n <= 4 ? "var(--sun)" : "var(--bg)", display: "grid", placeItems: "center", boxShadow: n <= 4 ? "0 3px 0 var(--sun-deep)" : "none" }}>
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M 12 3 L 14.5 9 L 21 10 L 16.5 14.5 L 18 21 L 12 17.5 L 6 21 L 7.5 14.5 L 3 10 L 9.5 9 Z" fill={n <= 4 ? "#fff" : "var(--ink-mute)"} />
              </svg>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, padding: 14, borderRadius: 18, background: "var(--bg)", border: "1.5px dashed var(--line-strong)", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 50, height: 50, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center" }}>
            <Icon name="camera" size={22} color="var(--carrot)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>완성 사진 올리기</div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 700 }}>다른 친구들도 보고 싶어해</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <button onClick={() => router.push("/home")} style={{ flex: 1, height: 54, border: "1.5px solid var(--ink)", borderRadius: 18, background: "#fff", color: "var(--ink)", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>홈으로</button>
          <button onClick={() => router.push("/categories")} style={{ flex: 1.5, height: 54, border: "none", borderRadius: 18, background: "var(--carrot)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, boxShadow: "0 5px 0 #C9491A", cursor: "pointer" }}>다음 요리 추천 받기</button>
        </div>
      </div>
    </ScreenBG>
  );
}
