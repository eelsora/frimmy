import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter, type Href } from "expo-router";
import Svg, { Ellipse } from "react-native-svg";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { Wordmark } from "@/components/brand/Wordmark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { Floaty } from "@/components/ui/anim";
import { colors, fonts, popShadow, display } from "@/lib/theme";
import type { FoodName } from "@/lib/theme";

const ONB = ["#FFF8E8", "#FFE6C2"] as const;

function FoodCircle({ food, size, w }: { food: FoodName; size: number; w: number }) {
  return (
    <View style={[styles.circle, { width: w, height: w, borderRadius: w / 2 }]}>
      <FoodIcon name={food} size={size} />
    </View>
  );
}

function Slide1() {
  return (
    <>
      <View style={{ height: 340, marginHorizontal: 28, marginTop: 40, position: "relative" }}>
        <Floaty duration={3000} style={{ position: "absolute", top: 24, left: 10 }}><FoodIcon name="tomato" size={66} /></Floaty>
        <Floaty duration={3400} delay={300} style={{ position: "absolute", top: 0, right: 18 }}><FoodIcon name="egg" size={56} /></Floaty>
        <Floaty duration={3600} delay={600} style={{ position: "absolute", top: 120, left: 0 }}><FoodIcon name="cheese" size={60} /></Floaty>
        <Floaty duration={3200} delay={500} style={{ position: "absolute", top: 104, right: 2 }}><FoodIcon name="broccoli" size={58} /></Floaty>
        <Floaty duration={3800} delay={200} style={{ position: "absolute", bottom: 24, left: 24 }}><FoodIcon name="carrot" size={54} /></Floaty>
        <Floaty duration={3400} delay={800} style={{ position: "absolute", bottom: 8, right: 30 }}><FoodIcon name="lemon" size={52} /></Floaty>
        <View style={styles.center}><Wordmark size={80} /></View>
      </View>
      <View style={{ paddingHorizontal: 28, marginTop: 12, alignItems: "center" }}>
        <Text style={[display(28), { textAlign: "center", lineHeight: 34 }]}>안녕! 나는 <Text style={{ color: colors.carrot }}>Frimmy</Text>{"\n"}오늘 뭐 먹을지 골라줄게!</Text>
        <Text style={styles.sub}>냉장고 안 잠자는 재료들,{"\n"}이제 맛있게 깨워보자 ✨</Text>
      </View>
    </>
  );
}

function Slide2() {
  return (
    <>
      <View style={{ height: 360, marginHorizontal: 28, marginTop: 10, position: "relative" }}>
        <Svg style={StyleSheet.absoluteFill} viewBox="0 0 320 360">
          <Ellipse cx="160" cy="170" rx="140" ry="150" stroke="#FF7A3D" strokeWidth="2" strokeDasharray="3 7" fill="none" opacity={0.55} />
        </Svg>
        <View style={{ position: "absolute", top: 14, left: 8 }}><Floaty duration={3200}><FoodCircle food="onion" size={50} w={76} /></Floaty></View>
        <View style={{ position: "absolute", top: 0, right: 16 }}><Floaty duration={3800} delay={400}><FoodCircle food="egg" size={44} w={68} /></Floaty></View>
        <View style={{ position: "absolute", top: 134, left: -4 }}><Floaty duration={3400} delay={700}><FoodCircle food="cheese" size={46} w={72} /></Floaty></View>
        <View style={{ position: "absolute", top: 236, left: 24 }}><Floaty duration={3600} delay={200}><FoodCircle food="tomato" size={42} w={64} /></Floaty></View>
        <View style={{ position: "absolute", top: 226, right: 12 }}><Floaty duration={3500} delay={500}><FoodCircle food="lemon" size={42} w={68} /></Floaty></View>
        <View style={{ position: "absolute", top: 128, right: -2 }}><Floaty duration={3300} delay={900}><FoodCircle food="avocado" size={44} w={70} /></Floaty></View>
        <View style={styles.center}><Wordmark size={66} /></View>
      </View>
      <View style={{ paddingHorizontal: 28, marginTop: 24, alignItems: "center" }}>
        <Text style={[display(28), { textAlign: "center", lineHeight: 34 }]}>냉장고에{"\n"}뭐 있는지만 알려줘!</Text>
        <Text style={styles.sub}>오늘 뭐 먹을지 고민하지 마.{"\n"}내가 딱 맞는 레시피 찾아줄게 🤤</Text>
      </View>
    </>
  );
}

function Slide3() {
  const items = [
    { food: "tomato" as FoodName, t: "재료만 알려주면 끝!", s: "사진 찍거나 입력만 하면 자동 등록", c: "#FFEDD9" },
    { food: "egg" as FoodName, t: "AI가 딱 골라줄게", s: "지금 만들 수 있는 요리만 추천", c: "#FFF7DA" },
    { food: "broccoli" as FoodName, t: "음식물 쓰레기 zero", s: "곧 만료될 재료부터 알려줘", c: "#E7F5DC" },
  ];
  return (
    <>
      <View style={{ paddingHorizontal: 28, marginTop: 24, alignItems: "center" }}>
        <Text style={[display(28), { textAlign: "center" }]}>Frimmy가 이거 잘해!</Text>
        <Text style={[styles.sub, { marginTop: 8 }]}>준비됐어? 시작해볼까 🍳</Text>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 28, gap: 14 }}>
        {items.map((it, i) => (
          <View key={i} style={styles.benefit}>
            <View style={[styles.benefitIcon, { backgroundColor: it.c }]}><FoodIcon name={it.food} size={56} /></View>
            <View style={{ flex: 1 }}>
              <Text style={display(18)}>{it.t}</Text>
              <Text style={{ marginTop: 2, fontSize: 12.5, color: colors.inkSoft, fontWeight: "600" }}>{it.s}</Text>
            </View>
            <View style={styles.benefitCheck}><Icon name="check" size={16} color={colors.leaf} /></View>
          </View>
        ))}
      </View>
    </>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const next = () => (slide < 2 ? setSlide(slide + 1) : router.replace("/home" as Href));
  const ctaLabel = slide === 0 ? "다음으로" : slide === 1 ? "좋아, 시작하자!" : "시작하기";

  return (
    <ScreenBG gradient={ONB}>
      <Pressable onPress={() => router.replace("/home" as Href)} style={{ position: "absolute", top: 12, right: 22, zIndex: 5 }}>
        <Text style={{ fontSize: 14, color: colors.inkMute, fontWeight: "700" }}>건너뛰기</Text>
      </Pressable>

      <View style={{ flex: 1, justifyContent: "center" }}>
        {slide === 0 && <Slide1 />}
        {slide === 1 && <Slide2 />}
        {slide === 2 && <Slide3 />}
      </View>

      <View style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 24 }}>
          {[0, 1, 2].map((i) => (
            <View key={i} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: i === slide ? colors.carrot : "rgba(40,30,16,0.18)" }} />
          ))}
        </View>
        <Pressable onPress={next} style={[styles.cta, popShadow(colors.carrotShadow)]}>
          <Text style={{ fontSize: 18, fontWeight: "800", fontFamily: fonts.display, color: "#fff" }}>{ctaLabel}</Text>
          {slide === 2 && <Icon name="arrow-right" size={20} color="#fff" />}
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  center: { position: "absolute", top: "50%", left: 0, right: 0, alignItems: "center", transform: [{ translateY: -40 }] },
  sub: { marginTop: 14, fontSize: 15, color: colors.inkSoft, fontWeight: "500", lineHeight: 22, textAlign: "center" },
  circle: { backgroundColor: "#fff", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.line, boxShadow: "0px 10px 28px -12px rgba(60,35,10,0.20)" },
  benefit: { backgroundColor: "#fff", borderRadius: 22, padding: 14, borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", gap: 14, boxShadow: "0px 10px 28px -12px rgba(60,35,10,0.20)" },
  benefitIcon: { width: 76, height: 76, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  benefitCheck: { width: 30, height: 30, borderRadius: 10, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
  cta: { height: 60, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8 },
});
