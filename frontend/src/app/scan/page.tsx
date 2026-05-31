"use client";

import { useRouter } from "next/navigation";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const corners = ["tl", "tr", "bl", "br"] as const;

export default function CameraScanScreen() {
  const router = useRouter();
  return (
    <div className="frimmy" style={{ width: "100%", height: "100%", minHeight: "100%", overflow: "hidden", position: "relative", background: "#1A1208" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, #4A3520 0%, #1A1208 80%)" }}>
        <div style={{ position: "absolute", top: 220, left: 70 }}><FoodIcon name="tomato" size={84} /></div>
        <div style={{ position: "absolute", top: 280, right: 80 }}><FoodIcon name="egg" size={70} /></div>
        <div style={{ position: "absolute", top: 380, left: 120 }}><FoodIcon name="cheese" size={66} /></div>
        <div style={{ position: "absolute", top: 460, right: 60 }}><FoodIcon name="lemon" size={58} /></div>
      </div>

      <div style={{ height: 60, position: "relative", zIndex: 2 }} />

      <div style={{ padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
        <button onClick={() => router.back()} aria-label="닫기" style={{ width: 40, height: 40, borderRadius: 14, background: "rgba(0,0,0,0.45)", display: "grid", placeItems: "center", backdropFilter: "blur(10px)", border: "none", cursor: "pointer" }}>
          <Icon name="close" size={20} color="#fff" />
        </button>
        <div style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", gap: 6, backdropFilter: "blur(10px)", color: "#fff", fontSize: 12, fontWeight: 700 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: "var(--carrot)", animation: "wiggle 1s infinite" }} />
          AI 인식 중...
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 14, background: "rgba(0,0,0,0.45)", display: "grid", placeItems: "center", backdropFilter: "blur(10px)" }}>
          <Icon name="sparkle" size={20} color="var(--sun)" filled />
        </div>
      </div>

      {/* detection boxes */}
      <div style={{ position: "absolute", top: 218, left: 56, width: 110, height: 100, zIndex: 3 }}>
        <div style={{ position: "absolute", inset: 0, border: "2.5px solid var(--carrot)", borderRadius: 14, boxShadow: "0 0 0 4px rgba(255,122,61,0.2)", animation: "wiggle 2s infinite" }} />
        <div style={{ position: "absolute", top: -28, left: 0, padding: "4px 10px", borderRadius: 8, background: "var(--carrot)", color: "#fff", fontSize: 11, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>토마토 · 97%</div>
        {corners.map((c) => (
          <div key={c} style={{
            position: "absolute", width: 10, height: 10, borderColor: "var(--carrot)", borderStyle: "solid", borderWidth: 0,
            ...(c === "tl" && { top: -1, left: -1, borderLeftWidth: 3, borderTopWidth: 3, borderTopLeftRadius: 4 }),
            ...(c === "tr" && { top: -1, right: -1, borderRightWidth: 3, borderTopWidth: 3, borderTopRightRadius: 4 }),
            ...(c === "bl" && { bottom: -1, left: -1, borderLeftWidth: 3, borderBottomWidth: 3, borderBottomLeftRadius: 4 }),
            ...(c === "br" && { bottom: -1, right: -1, borderRightWidth: 3, borderBottomWidth: 3, borderBottomRightRadius: 4 }),
          }} />
        ))}
      </div>
      <div style={{ position: "absolute", top: 280, right: 65, width: 92, height: 84, zIndex: 3 }}>
        <div style={{ position: "absolute", inset: 0, border: "2.5px solid var(--sun)", borderRadius: 14, boxShadow: "0 0 0 4px rgba(255,201,60,0.2)", animation: "wiggle 2.4s 0.3s infinite" }} />
        <div style={{ position: "absolute", top: -28, left: 0, padding: "4px 10px", borderRadius: 8, background: "var(--sun)", color: "var(--ink)", fontSize: 11, fontWeight: 800, fontFamily: "var(--font-display)" }}>계란 · 92%</div>
      </div>
      <div style={{ position: "absolute", top: 380, left: 105, width: 92, height: 76, zIndex: 3 }}>
        <div style={{ position: "absolute", inset: 0, border: "2.5px solid var(--leaf)", borderRadius: 14, boxShadow: "0 0 0 4px rgba(108,192,74,0.2)", animation: "wiggle 2.2s 0.6s infinite" }} />
        <div style={{ position: "absolute", bottom: -28, left: 0, padding: "4px 10px", borderRadius: 8, background: "var(--leaf)", color: "#fff", fontSize: 11, fontWeight: 800, fontFamily: "var(--font-display)" }}>체다치즈 · 88%</div>
      </div>

      {/* center frame brackets */}
      <div style={{ position: "absolute", top: "40%", left: 30, right: 30, height: 280, pointerEvents: "none", zIndex: 2 }}>
        {corners.map((c) => (
          <div key={c} style={{
            position: "absolute", width: 32, height: 32, borderColor: "rgba(255,255,255,0.55)", borderStyle: "solid", borderWidth: 0,
            ...(c === "tl" && { top: 0, left: 0, borderLeftWidth: 3, borderTopWidth: 3, borderTopLeftRadius: 14 }),
            ...(c === "tr" && { top: 0, right: 0, borderRightWidth: 3, borderTopWidth: 3, borderTopRightRadius: 14 }),
            ...(c === "bl" && { bottom: 0, left: 0, borderLeftWidth: 3, borderBottomWidth: 3, borderBottomLeftRadius: 14 }),
            ...(c === "br" && { bottom: 0, right: 0, borderRightWidth: 3, borderBottomWidth: 3, borderBottomRightRadius: 14 }),
          }} />
        ))}
      </div>

      {/* scanning line */}
      <div style={{ position: "absolute", top: "40%", left: 30, right: 30, height: 280, overflow: "hidden", zIndex: 2, borderRadius: 14, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, var(--carrot), transparent)", boxShadow: "0 0 20px var(--carrot)", animation: "float-up 2s infinite linear", top: 280 }} />
      </div>

      {/* bottom panel */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 32px", background: "linear-gradient(180deg, rgba(20,12,4,0) 0%, rgba(20,12,4,0.85) 50%, rgba(20,12,4,1) 100%)", zIndex: 4 }}>
        <div style={{ textAlign: "center", marginBottom: 12, color: "#fff" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.01em" }}>
            <span style={{ color: "var(--sun)" }}>3개</span> 재료 찾았어!
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, marginTop: 2 }}>냉장고를 천천히 비추면 더 잘 보여</div>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 54, height: 54, borderRadius: 18, background: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center", backdropFilter: "blur(8px)" }}>
            <Icon name="leaf" size={24} color="#fff" />
          </div>
          <button onClick={() => router.push("/scan/result")} aria-label="확인" style={{ width: 78, height: 78, borderRadius: "50%", background: "var(--carrot)", display: "grid", placeItems: "center", boxShadow: "0 0 0 4px rgba(255,255,255,0.3), 0 0 0 8px rgba(255,122,61,0.4)", position: "relative", border: "none", cursor: "pointer" }}>
            <Icon name="check" size={36} color="#fff" />
            <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid var(--carrot)", animation: "pulse-ring 1.5s infinite" }} />
          </button>
          <div style={{ width: 54, height: 54, borderRadius: 18, background: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center", backdropFilter: "blur(8px)" }}>
            <Icon name="camera" size={24} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
