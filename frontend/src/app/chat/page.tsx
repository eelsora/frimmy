"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { MiniMark } from "@/components/brand/MiniMark";
import { Icon } from "@/components/mascot/Icon";

export default function ChatScreen() {
  const router = useRouter();
  return (
    <ScreenBG style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div style={{ height: 56 }} />

      <div style={{ padding: "8px 16px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--line)" }}>
        <button onClick={() => router.back()} aria-label="뒤로" style={{ width: 40, height: 40, borderRadius: 14, background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-chip)", border: "none", cursor: "pointer" }}>
          <Icon name="back" size={20} color="var(--ink)" />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
          <div style={{ position: "relative" }}>
            <MiniMark size={44} variant="carrot" />
            <div style={{ position: "absolute", bottom: -2, right: -2, width: 12, height: 12, borderRadius: 6, background: "var(--leaf)", border: "2px solid #fff" }} />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)", display: "flex", alignItems: "center", gap: 4 }}>
              프리미 <Icon name="sparkle" size={13} color="var(--carrot)" filled />
            </div>
            <div style={{ fontSize: 11, color: "var(--leaf-deep)", fontWeight: 700 }}>● 항상 곁에서 요리해주는 친구</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "16px 18px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ textAlign: "center", fontSize: 11, color: "var(--ink-mute)", fontWeight: 700, margin: "4px 0" }}>오늘</div>

        <div style={{ display: "flex", gap: 8, alignItems: "end" }}>
          <MiniMark size={32} variant="carrot" />
          <div style={{ maxWidth: 280, padding: "12px 14px", borderRadius: "4px 18px 18px 18px", background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", fontSize: 14, color: "var(--ink)", lineHeight: 1.45 }}>
            안녕! 오늘은 뭐 만들어볼까? 🍳<br />
            지금 냉장고에 있는 거 중에 골라줄게~
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginLeft: 40, marginBottom: 6 }}>
          {["🌶️ 매콤한 거", "🍜 든든한 거", "🥗 가볍게", "🍰 디저트"].map((t) => (
            <div key={t} style={{ padding: "6px 12px", borderRadius: 999, background: "#fff", border: "1.5px solid var(--carrot)", color: "var(--carrot)", fontSize: 12, fontWeight: 800, fontFamily: "var(--font-display)" }}>{t}</div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <div style={{ maxWidth: 240, padding: "11px 14px", borderRadius: "18px 4px 18px 18px", background: "var(--carrot)", color: "#fff", fontSize: 14, lineHeight: 1.45, fontWeight: 500, boxShadow: "0 3px 0 #C9491A" }}>
            오늘 좀 매콤하면서 빨리 되는 거! 🌶️🔥
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "end" }}>
          <MiniMark size={32} variant="sun" />
          <div style={{ padding: "12px 14px", borderRadius: "4px 18px 18px 18px", background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", fontSize: 14, color: "var(--ink)", lineHeight: 1.45, maxWidth: 280 }}>
            오케이~ 10분 안에 되는 거 골라봤어! 🔥<br />
            <span style={{ color: "var(--ink-soft)", fontWeight: 700 }}>토마토 + 계란 + 고추로 매콤한 거 어때?</span>
          </div>
        </div>

        <div style={{ marginLeft: 40, marginTop: 2 }}>
          <div onClick={() => router.push("/recipe/tomato-egg")} style={{ background: "linear-gradient(140deg, #FFEDD9 0%, #FFD0AA 100%)", borderRadius: 22, padding: 12, border: "1.5px solid var(--carrot)", display: "flex", gap: 10, alignItems: "center", width: 260, cursor: "pointer" }}>
            <div style={{ width: 70, height: 70, borderRadius: 18, flexShrink: 0, background: "linear-gradient(150deg, #FF7A3D, #E85A1A)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px 6px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "#fff", lineHeight: 1.1, textAlign: "center", letterSpacing: "-0.01em", textShadow: "0 1px 1px rgba(0,0,0,0.2)" }}>매콤<br />토마토</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ink)", letterSpacing: "-0.01em" }}>매콤 토마토<br />계란볶음</div>
              <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: "var(--carrot-deep)" }}>⏱ 10분</span>
                <span style={{ fontSize: 10, fontWeight: 800, color: "var(--carrot-deep)" }}>· 🔥쉬움</span>
              </div>
              <div style={{ marginTop: 6, padding: "4px 10px", display: "inline-flex", alignItems: "center", gap: 4, background: "var(--carrot)", borderRadius: 999, fontSize: 11, color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)" }}>레시피 보기 →</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "end", marginTop: 2 }}>
          <MiniMark size={32} variant="carrot" />
          <div style={{ padding: "14px 16px", borderRadius: 18, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", gap: 4, alignItems: "center" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 7, height: 7, borderRadius: 4, background: "var(--carrot)", animation: `typing 1.2s ${i * 0.15}s infinite` }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "8px 16px 24px", background: "var(--bg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 22, padding: "8px 8px 8px 14px", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)" }}>
          <div style={{ width: 32, height: 32, borderRadius: 12, background: "var(--bg)", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <Icon name="plus" size={18} color="var(--ink-soft)" />
          </div>
          <div style={{ flex: 1, fontSize: 14, color: "var(--ink-mute)", fontWeight: 500 }}>뭐든지 물어봐!</div>
          <div style={{ width: 40, height: 40, borderRadius: 14, background: "var(--carrot)", display: "grid", placeItems: "center", boxShadow: "0 3px 0 #C9491A" }}>
            <Icon name="send" size={18} color="#fff" />
          </div>
        </div>
      </div>
    </ScreenBG>
  );
}
