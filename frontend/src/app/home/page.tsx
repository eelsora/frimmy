"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { MiniMark } from "@/components/brand/MiniMark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { COOKABLE_NOW } from "@/lib/mock-data";

const C = { ink: "var(--ink)", inkMute: "var(--ink-mute)", carrot: "var(--carrot)", leaf: "var(--leaf)", tomato: "var(--tomato)" };

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <div style={{ padding: "8px 22px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <MiniMark size={52} variant="carrot" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: C.inkMute, fontWeight: 600 }}>오늘 저녁, 지윤아 👋</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: C.ink, letterSpacing: "-0.02em" }}>뭐 먹을지 골라봤어!</div>
        </div>
        <button onClick={() => router.push("/saved")} style={{ width: 44, height: 44, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)", border: "1px solid var(--line)", position: "relative", cursor: "pointer" }}>
          <Icon name="heart" size={22} color={C.ink} />
          <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: 4, background: C.tomato }} />
        </button>
      </div>

      <div style={{ height: 18 }} />

      <div style={{ padding: "0 22px" }}>
        <div style={{ background: "linear-gradient(150deg, #FF7A3D 0%, #FFB061 100%)", borderRadius: 28, padding: 20, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 18px 36px -12px rgba(255,122,61,0.55), 0 6px 0 #C9491A" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", opacity: 0.55 }} />
          <div style={{ position: "absolute", top: -18, right: -22, transform: "rotate(18deg)", opacity: 0.9 }}><FoodIcon name="tomato" size={130} /></div>
          <div style={{ position: "absolute", bottom: -22, right: 40, transform: "rotate(-12deg)" }}><FoodIcon name="egg" size={70} /></div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 999, background: "rgba(255,255,255,0.28)", fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", backdropFilter: "blur(4px)" }}>
              <Icon name="sparkle" size={13} color="#fff" filled /> 오늘의 AI 추천
            </div>
            <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.02em" }}>토마토<br />계란볶음</div>
            <div style={{ marginTop: 4, fontSize: 13, fontWeight: 600, opacity: 0.95 }}>지금 재료 다 있어! ✨</div>
            <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
              {([["time", "15분"], ["flame", "쉬움"], ["people", "2인분"]] as const).map(([ic, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 999, background: "rgba(255,255,255,0.22)", fontSize: 12, fontWeight: 700 }}>
                  <Icon name={ic} size={14} color="#fff" /> {label}
                </div>
              ))}
            </div>
            <button onClick={() => router.push("/recipe/tomato-egg")} style={{ marginTop: 16, padding: "10px 18px", border: "none", borderRadius: 999, background: "#fff", color: C.carrot, fontWeight: 800, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)" }}>
              레시피 보러가기 <Icon name="arrow-right" size={16} color={C.carrot} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: 22 }} />

      <div style={{ padding: "0 22px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 19, color: C.ink, letterSpacing: "-0.02em" }}>
          지금 만들 수 있는 거 <span style={{ color: C.carrot }}>12</span>개
        </div>
        <div onClick={() => router.push("/categories")} style={{ fontSize: 12, color: C.inkMute, fontWeight: 700, cursor: "pointer" }}>전체 →</div>
      </div>

      <div style={{ display: "flex", gap: 12, padding: "14px 22px 0", overflowX: "auto" }}>
        {COOKABLE_NOW.map((card) => (
          <div key={card.id} onClick={() => router.push(`/recipe/${card.id}`)} style={{ flex: "0 0 150px", background: "#fff", borderRadius: 22, padding: 12, boxShadow: "var(--shadow-card)", border: "1px solid var(--line)", cursor: "pointer" }}>
            <div style={{
              height: 96, borderRadius: 16, position: "relative", overflow: "hidden",
              background: card.hasPhoto ? `radial-gradient(ellipse at 40% 30%, rgba(255,255,255,0.4), transparent 60%), ${card.color}` : `linear-gradient(150deg, ${card.color}, ${card.color}DD)`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 6px",
            }}>
              {card.hasPhoto ? (
                <div style={{ position: "absolute", bottom: 6, left: 6, padding: "2px 7px", borderRadius: 999, background: "rgba(0,0,0,0.45)", fontSize: 9, fontWeight: 800, color: "#fff", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: 3 }}>
                  <Icon name="camera" size={9} color="#fff" /> 내 사진
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, textAlign: "center", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>{card.title}</div>
                  <div style={{ marginTop: 6, padding: "2px 8px", borderRadius: 999, background: "rgba(255,255,255,0.28)", backdropFilter: "blur(4px)", fontSize: 9.5, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>{card.cuisine}</div>
                </>
              )}
              {card.missing === 0 ? (
                <div style={{ position: "absolute", top: 6, right: 6, padding: "3px 7px", borderRadius: 999, background: "#fff", fontSize: 9.5, fontWeight: 800, color: C.leaf, display: "flex", alignItems: "center", gap: 2, boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
                  <Icon name="check" size={10} color={C.leaf} /> 다 있음
                </div>
              ) : (
                <div style={{ position: "absolute", top: 6, right: 6, padding: "3px 7px", borderRadius: 999, background: "#fff", fontSize: 9.5, fontWeight: 800, color: C.carrot, boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>{card.missing}개 부족</div>
              )}
            </div>
            <div style={{ marginTop: 8, fontFamily: "var(--font-display)", fontSize: 15, color: C.ink, letterSpacing: "-0.01em" }}>{card.title}</div>
            <div style={{ marginTop: 2, fontSize: 11, color: C.inkMute, fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
              <Icon name="time" size={12} color={C.inkMute} /> {card.time}분 · 쉬움
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 18 }} />

      <div style={{ padding: "0 22px" }}>
        <div onClick={() => router.push("/chat")} style={{ background: "#fff", borderRadius: 22, padding: 14, border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", alignItems: "center", gap: 12, position: "relative", overflow: "hidden", cursor: "pointer" }}>
          <MiniMark size={56} variant="sun" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: C.ink, letterSpacing: "-0.01em" }}>뭐 먹고 싶은지 말해봐 💬</div>
            <div style={{ fontSize: 12, color: C.inkMute, fontWeight: 600, marginTop: 2 }}>매콤한 거? 든든한 거? 다 골라줄게</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: C.carrot, display: "grid", placeItems: "center", boxShadow: "0 3px 0 #C9491A" }}>
            <Icon name="arrow-right" size={18} color="#fff" />
          </div>
        </div>
      </div>

      <div style={{ height: 120 }} />
      <TabBar active="home" />
    </ScreenBG>
  );
}
