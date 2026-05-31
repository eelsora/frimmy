"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

type FormMode = "db" | "generating" | "generated";

const AIDragonFruit = (
  <svg width={140} height={140} viewBox="0 0 140 140">
    <defs>
      <radialGradient id="ai-df-body2" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#FFB8E0" />
        <stop offset="60%" stopColor="#E14B8F" />
        <stop offset="100%" stopColor="#922A5C" />
      </radialGradient>
      <radialGradient id="ai-df-leaf2" cx="30%" cy="20%" r="80%">
        <stop offset="0%" stopColor="#B6EF93" />
        <stop offset="100%" stopColor="#2F7820" />
      </radialGradient>
    </defs>
    <ellipse cx="70" cy="86" rx="40" ry="44" fill="url(#ai-df-body2)" />
    <ellipse cx="56" cy="64" rx="14" ry="8" fill="#fff" opacity="0.6" />
    <path d="M 70 44 Q 58 14 50 26 Q 56 36 64 44 Z" fill="url(#ai-df-leaf2)" />
    <path d="M 70 44 Q 82 14 90 26 Q 84 36 76 44 Z" fill="url(#ai-df-leaf2)" />
    <path d="M 70 38 Q 70 8 76 20 Q 76 30 70 40 Z" fill="url(#ai-df-leaf2)" />
    <path d="M 50 70 Q 38 64 42 78 Q 52 78 58 76 Z" fill="url(#ai-df-leaf2)" opacity="0.85" />
    <path d="M 92 78 Q 100 70 102 84 Q 96 86 88 84 Z" fill="url(#ai-df-leaf2)" opacity="0.85" />
    <circle cx="62" cy="86" r="2" fill="#2A1E0F" opacity="0.6" />
    <circle cx="76" cy="92" r="1.8" fill="#2A1E0F" opacity="0.6" />
    <circle cx="68" cy="100" r="1.6" fill="#2A1E0F" opacity="0.6" />
    <circle cx="82" cy="82" r="1.4" fill="#2A1E0F" opacity="0.6" />
  </svg>
);

export default function IngredientFormScreen() {
  const router = useRouter();
  const [mode] = useState<FormMode>("db");

  const halo =
    mode === "generating" ? "radial-gradient(circle, rgba(225,75,143,0.28), transparent 65%)"
      : mode === "generated" ? "radial-gradient(circle, rgba(255,201,60,0.35), transparent 65%)"
      : "radial-gradient(circle, rgba(255,122,61,0.22), transparent 65%)";

  return (
    <ScreenBG>
      <div style={{ height: 56 }} />
      <NavHeader title="재료 등록" />

      <div style={{ padding: "20px 22px 0" }}>
        <div style={{ padding: 24, borderRadius: 28, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-card)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", width: 200, height: 200, borderRadius: "50%", background: halo, filter: "blur(8px)" }} />

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", minHeight: 220 }}>
            {mode === "db" && (
              <>
                <div className="bob" style={{ marginTop: 10 }}><FoodIcon name="tomato" size={140} /></div>
                <div style={{ marginTop: 14, display: "inline-flex", padding: "4px 12px", borderRadius: 999, background: "rgba(108,192,74,0.18)", color: "var(--leaf-deep)", fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", alignItems: "center", gap: 4, fontFamily: "var(--font-display)" }}>
                  <Icon name="check" size={11} color="var(--leaf-deep)" /> 아이콘 찾았어!
                </div>
              </>
            )}

            {mode === "generated" && (
              <>
                <div className="bob" style={{ marginTop: 10 }}>{AIDragonFruit}</div>
                <div style={{ marginTop: 14, display: "inline-flex", padding: "4px 12px", borderRadius: 999, background: "linear-gradient(140deg, #FFE08A, #FFC93C)", color: "var(--ink)", fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", alignItems: "center", gap: 4, fontFamily: "var(--font-display)", boxShadow: "0 3px 0 #C28A0E" }}>
                  <Icon name="sparkle" size={11} color="var(--ink)" filled /> AI가 그려준 아이콘
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: "18px 22px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 800, letterSpacing: "0.05em", marginBottom: 6 }}>재료 이름</div>
          <div style={{ padding: "14px 16px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "var(--shadow-chip)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)", letterSpacing: "-0.01em" }}>토마토</div>
            <Icon name="search" size={20} color="var(--ink-mute)" />
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 800, letterSpacing: "0.05em", marginBottom: 6 }}>수량</div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, padding: "10px 14px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "var(--bg)", display: "grid", placeItems: "center" }}>
                <Icon name="minus" size={16} color="var(--ink-soft)" />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ink)" }}>3</div>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "var(--carrot)", display: "grid", placeItems: "center" }}>
                <Icon name="plus" size={16} color="#fff" />
              </div>
            </div>
            <div style={{ minWidth: 90, padding: "14px 16px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>개</div>
              <Icon name="arrow-right" size={14} color="var(--ink-mute)" />
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 800, letterSpacing: "0.05em", marginBottom: 6 }}>유통기한</div>
            <div style={{ padding: "12px 14px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="time" size={18} color="var(--carrot)" />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>D-7</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 800, letterSpacing: "0.05em", marginBottom: 6 }}>카테고리</div>
            <div style={{ padding: "12px 14px", borderRadius: 16, background: "#fff", border: "1px solid var(--line)", boxShadow: "var(--shadow-chip)", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>🥬</span>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink)" }}>채소</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 110 }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 22px 32px", background: "linear-gradient(180deg, rgba(255,241,220,0) 0%, rgba(255,241,220,1) 40%)" }}>
        <button onClick={() => router.push("/fridge")} style={{ width: "100%", height: 58, border: "none", borderRadius: 22, background: "var(--carrot)", color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 8px 0 #C9491A", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          냉장고에 추가하기 <Icon name="arrow-right" size={20} color="#fff" />
        </button>
      </div>
    </ScreenBG>
  );
}
