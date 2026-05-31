"use client";

import { useParams, useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { Icon } from "@/components/mascot/Icon";
import { FEATURED_RECIPE } from "@/lib/mock-data";

export default function CookingStepScreen() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id ?? FEATURED_RECIPE.id;
  const steps = FEATURED_RECIPE.steps;

  return (
    <ScreenBG>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={() => router.back()} aria-label="닫기" style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)", border: "1px solid var(--line)", cursor: "pointer" }}>
          <Icon name="close" size={20} color="var(--ink)" />
        </button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)" }}>{FEATURED_RECIPE.title}</div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 700 }}>Step 2 of {steps.length} · 6분 남음</div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)" }}>
          <Icon name="heart" size={18} color="var(--tomato)" filled />
        </div>
      </div>

      <div style={{ padding: "14px 22px 0", display: "flex", gap: 6 }}>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} style={{ flex: 1, height: 6, borderRadius: 3, background: n <= 2 ? "var(--carrot)" : "rgba(40,30,16,0.12)", boxShadow: n === 2 ? "0 0 8px rgba(255,122,61,0.5)" : "none" }} />
        ))}
      </div>

      <div style={{ padding: "20px 22px 0" }}>
        <div style={{ background: "linear-gradient(150deg, #FF7A3D 0%, #FFB061 100%)", borderRadius: 28, padding: 22, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 14px 30px -10px rgba(255,122,61,0.5), 0 6px 0 #C9491A" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", opacity: 0.5 }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.28)", fontSize: 10.5, fontWeight: 800, letterSpacing: "0.06em" }}>
              <Icon name="flame" size={11} color="#fff" /> STEP 2 · 진행중
            </div>
            <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.02em" }}>토마토와 양파 볶기</div>
            <div style={{ marginTop: 8, fontSize: 14, fontWeight: 500, opacity: 0.96, lineHeight: 1.55 }}>
              썰어둔 <b>토마토 2개</b>와 <b>양파 ½개</b>를<br />
              중불에 <b>3-4분간</b> 볶아줘.<br />
              살짝 숨이 죽을 때까지!
            </div>
            <div style={{ marginTop: 14, padding: "12px 14px", borderRadius: 16, background: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="time" size={20} color="#fff" />
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, opacity: 0.85, letterSpacing: "0.05em" }}>타이머</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1 }}>3:24</div>
                </div>
              </div>
              <button style={{ padding: "8px 14px", border: "none", borderRadius: 999, background: "#fff", color: "var(--carrot)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>일시정지</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 22px 0" }}>
        <div style={{ display: "flex", gap: 10, padding: "12px 14px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", alignItems: "start" }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,201,60,0.2)", display: "grid", placeItems: "center", flexShrink: 0 }}>💡</div>
          <div style={{ flex: 1, fontSize: 12.5, color: "var(--ink-soft)", fontWeight: 600, lineHeight: 1.5 }}>
            <b style={{ color: "var(--ink)" }}>프리미 팁:</b> 양파를 먼저 30초 정도 볶으면 단맛이 더 살아나!
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 22px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink-mute)", letterSpacing: "0.04em", marginBottom: 10 }}>전체 단계</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 16, background: s.current ? "#fff" : s.done ? "rgba(108,192,74,0.10)" : "var(--bg)", border: s.current ? "1.5px solid var(--carrot)" : "1px solid var(--line)", boxShadow: s.current ? "0 6px 14px -6px rgba(255,122,61,0.4)" : "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: s.done ? "var(--leaf)" : s.current ? "var(--carrot)" : "var(--bg)", border: !s.done && !s.current ? "1.5px solid var(--line-strong)" : "none", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: 14, color: s.done || s.current ? "#fff" : "var(--ink-mute)" }}>
                {s.done ? <Icon name="check" size={16} color="#fff" /> : s.n}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: s.done ? "var(--ink-mute)" : "var(--ink)", textDecoration: s.done ? "line-through" : "none" }}>{s.t}</div>
                <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 700, marginTop: 1 }}>{s.sub}</div>
              </div>
              {s.current && <div style={{ padding: "4px 8px", borderRadius: 999, background: "var(--carrot)", color: "#fff", fontSize: 10, fontWeight: 800, fontFamily: "var(--font-display)" }}>진행중</div>}
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 110 }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", display: "flex", gap: 10, background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,1) 40%)" }}>
        <button onClick={() => router.back()} aria-label="이전" style={{ width: 60, height: 58, borderRadius: 22, background: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "var(--ink-soft)", boxShadow: "var(--shadow-chip)", border: "1px solid var(--line)", cursor: "pointer", display: "grid", placeItems: "center" }}>
          <Icon name="back" size={22} color="var(--ink-soft)" />
        </button>
        <button onClick={() => router.push(`/recipe/${id}/complete`)} style={{ flex: 1, height: 58, border: "none", borderRadius: 22, background: "var(--carrot)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 8px 0 #C9491A", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          다음 단계 <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
