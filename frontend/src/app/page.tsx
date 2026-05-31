"use client";

import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { FoodConfetti } from "@/components/layout/FoodConfetti";
import { Wordmark } from "@/components/brand/Wordmark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const C = { ink: "var(--ink)", inkSoft: "var(--ink-soft)", inkMute: "var(--ink-mute)", carrot: "var(--carrot)" };

export default function SplashScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <FoodConfetti />
      <div style={{ height: 60 }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 100, position: "relative", zIndex: 2, padding: "0 20px" }}>
        <div style={{ position: "absolute", top: -20, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,201,60,0.55) 0%, rgba(255,201,60,0) 65%)", filter: "blur(10px)", zIndex: -1 }} />

        <div style={{ position: "absolute", top: 20, left: 20, animation: "bob 3.2s infinite", transform: "rotate(-14deg)" }}><FoodIcon name="tomato" size={56} /></div>
        <div style={{ position: "absolute", top: 40, right: 24, animation: "bob 3.6s 0.4s infinite", transform: "rotate(16deg)" }}><FoodIcon name="cheese" size={50} /></div>
        <div style={{ position: "absolute", top: 160, left: 4, animation: "bob 3.4s 0.7s infinite", transform: "rotate(8deg)" }}><FoodIcon name="egg" size={44} /></div>
        <div style={{ position: "absolute", top: 170, right: 8, animation: "bob 3.8s 0.3s infinite", transform: "rotate(-20deg)" }}><FoodIcon name="broccoli" size={48} /></div>

        <div style={{ position: "relative", marginTop: 30, marginBottom: 50 }}>
          <Wordmark size={104} />
        </div>

        <div style={{ background: C.ink, padding: "11px 22px", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 15, color: "#FFE6C2", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 6px 0 rgba(0,0,0,0.25)" }}>
          F R I D G E <span style={{ color: C.carrot, fontSize: 20, padding: "0 2px" }}>+</span> Y U M M Y
        </div>

        <div style={{ textAlign: "center", marginTop: 22, fontSize: 16, color: C.inkSoft, fontFamily: "var(--font-body)", fontWeight: 600, lineHeight: 1.55 }}>
          냉장고 속 재료로 만드는<br />
          오늘의 한 끼, <b style={{ color: C.carrot }}>AI가 골라줄게</b> 🍳
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 60, left: 24, right: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        <button onClick={() => router.push("/onboarding")} style={{
          height: 62, border: "none", borderRadius: 22, background: C.carrot, color: "#fff",
          fontSize: 18, fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "-0.01em",
          boxShadow: "0 8px 0 #C9491A, 0 14px 30px -8px rgba(255,122,61,0.6)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          시작하기
          <Icon name="arrow-right" size={22} color="#fff" />
        </button>
        <div style={{ textAlign: "center", fontSize: 13, color: C.inkMute, fontWeight: 600 }}>
          이미 계정 있어? <span onClick={() => router.push("/home")} style={{ color: C.carrot, fontWeight: 800, cursor: "pointer" }}>로그인</span>
        </div>
      </div>
    </ScreenBG>
  );
}
