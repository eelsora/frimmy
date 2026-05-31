"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { Wordmark } from "@/components/brand/Wordmark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";

const C = { ink: "var(--ink)", inkSoft: "var(--ink-soft)", inkMute: "var(--ink-mute)", carrot: "var(--carrot)", leaf: "var(--leaf)" };
const ONB_GRADIENT = "linear-gradient(180deg, #FFF8E8 0%, #FFE6C2 100%)";

function Slide1() {
  return (
    <>
      <div style={{ margin: "60px 28px 0", height: 360, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 50% 45%, rgba(255,201,60,0.5) 0%, rgba(255,201,60,0) 60%)", filter: "blur(12px)" }} />
        <div style={{ position: "absolute", top: 24, left: 20, transform: "rotate(-14deg)", animation: "bob 3s infinite" }}><FoodIcon name="tomato" size={70} /></div>
        <div style={{ position: "absolute", top: 0, right: 28, transform: "rotate(18deg)", animation: "bob 3.4s 0.3s infinite" }}><FoodIcon name="egg" size={60} /></div>
        <div style={{ position: "absolute", top: 130, left: 0, transform: "rotate(8deg)", animation: "bob 3.6s 0.6s infinite" }}><FoodIcon name="cheese" size={64} /></div>
        <div style={{ position: "absolute", top: 110, right: 4, transform: "rotate(-20deg)", animation: "bob 3.2s 0.5s infinite" }}><FoodIcon name="broccoli" size={62} /></div>
        <div style={{ position: "absolute", bottom: 30, left: 30, transform: "rotate(12deg)", animation: "bob 3.8s 0.2s infinite" }}><FoodIcon name="carrot" size={58} /></div>
        <div style={{ position: "absolute", bottom: 12, right: 36, transform: "rotate(-8deg)", animation: "bob 3.4s 0.8s infinite" }}><FoodIcon name="lemon" size={56} /></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}><Wordmark size={86} /></div>
      </div>
      <div style={{ padding: "20px 28px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          안녕! 나는 <span style={{ color: C.carrot }}>Frimmy</span><br />
          오늘 뭐 먹을지 골라줄게!
        </div>
        <div style={{ marginTop: 14, fontSize: 15, color: C.inkSoft, fontWeight: 500, lineHeight: 1.5 }}>
          냉장고 안 잠자는 재료들,<br />이제 맛있게 깨워보자 ✨
        </div>
      </div>
    </>
  );
}

function Slide2() {
  const circle = (food: string, size: number, w: number, pos: React.CSSProperties, delay: string) => (
    <div style={{ position: "absolute", animation: `bob ${delay}`, ...pos }}>
      <div style={{ width: w, height: w, borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-card)", border: "1px solid var(--line)" }}>
        <FoodIcon name={food} size={size} />
      </div>
    </div>
  );
  return (
    <>
      <div style={{ margin: "20px 28px 0", height: 380, position: "relative" }}>
        <svg viewBox="0 0 320 380" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <ellipse cx="160" cy="180" rx="140" ry="150" stroke="#FF7A3D" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" fill="none" opacity="0.55" />
        </svg>
        {circle("onion", 50, 76, { top: 14, left: 8 }, "3.2s infinite")}
        {circle("egg", 44, 68, { top: 0, right: 16 }, "3.8s 0.4s infinite")}
        {circle("cheese", 46, 72, { top: 134, left: -8 }, "3.4s 0.7s infinite")}
        {circle("tomato", 42, 64, { top: 240, left: 24 }, "3.6s 0.2s infinite")}
        {circle("lemon", 42, 68, { top: 230, right: 12 }, "3.5s 0.5s infinite")}
        {circle("avocado", 44, 70, { top: 130, right: -2 }, "3.3s 0.9s infinite")}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}><Wordmark size={72} /></div>
      </div>
      <div style={{ padding: "24px 28px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          냉장고에<br />뭐 있는지만 알려줘!
        </div>
        <div style={{ marginTop: 14, fontSize: 15, color: C.inkSoft, fontWeight: 500, lineHeight: 1.5 }}>
          오늘 뭐 먹을지 고민하지 마.<br />
          내가 딱 맞는 레시피 찾아줄게 🤤
        </div>
      </div>
    </>
  );
}

function Slide3() {
  const items = [
    { food: "tomato" as const, t: "재료만 알려주면 끝!", s: "사진 찍거나 입력만 하면 자동 등록", c: "#FFEDD9" },
    { food: "egg" as const, t: "AI가 딱 골라줄게", s: "지금 만들 수 있는 요리만 추천", c: "#FFF7DA" },
    { food: "broccoli" as const, t: "음식물 쓰레기 zero", s: "곧 만료될 재료부터 알려줘", c: "#E7F5DC" },
  ];
  return (
    <>
      <div style={{ padding: "24px 28px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Frimmy가 이거 잘해!
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: C.inkSoft, fontWeight: 600 }}>
          준비됐어? 시작해볼까 🍳
        </div>
      </div>
      <div style={{ padding: "32px 24px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((it, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 22, padding: 14, border: "1px solid var(--line)", boxShadow: "var(--shadow-card)", display: "flex", alignItems: "center", gap: 14, animation: `pop-in .5s ${i * 0.12}s both` }}>
            <div style={{ width: 76, height: 76, borderRadius: 20, background: it.c, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <FoodIcon name={it.food} size={56} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: C.ink, letterSpacing: "-0.01em" }}>{it.t}</div>
              <div style={{ marginTop: 2, fontSize: 12.5, color: C.inkSoft, fontWeight: 600 }}>{it.s}</div>
            </div>
            <div style={{ width: 30, height: 30, borderRadius: 10, background: "var(--bg)", display: "grid", placeItems: "center" }}>
              <Icon name="check" size={16} color={C.leaf} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const ctaLabel = slide === 0 ? "다음으로" : slide === 1 ? "좋아, 시작하자!" : "시작하기";
  const next = () => (slide < 2 ? setSlide(slide + 1) : router.push("/home"));

  return (
    <ScreenBG gradient={ONB_GRADIENT}>
      <div style={{ height: 60 }} />
      <div onClick={() => router.push("/home")} style={{ position: "absolute", top: 64, right: 22, fontSize: 14, color: C.inkMute, fontWeight: 700, cursor: "pointer", zIndex: 3 }}>
        건너뛰기
      </div>

      {slide === 0 && <Slide1 />}
      {slide === 1 && <Slide2 />}
      {slide === 2 && <Slide3 />}

      <div style={{ position: "absolute", bottom: 60, left: 24, right: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 24 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, background: i === slide ? C.carrot : "rgba(40,30,16,0.18)", transition: "width .2s" }} />
          ))}
        </div>
        <button onClick={next} style={{
          width: "100%", height: 60, border: "none", borderRadius: 22, background: C.carrot, color: "#fff",
          fontSize: 18, fontWeight: 800, fontFamily: "var(--font-display)", boxShadow: "0 8px 0 #C9491A", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          {ctaLabel} {slide === 2 && <Icon name="arrow-right" size={20} color="#fff" />}
        </button>
      </div>
    </ScreenBG>
  );
}
