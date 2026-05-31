import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { FoodConfetti } from "@/components/layout/FoodConfetti";
import { Wordmark } from "@/components/brand/Wordmark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { Floaty } from "@/components/ui/anim";
import { colors, fonts, popShadow } from "@/lib/theme";

export default function SplashScreen() {
  const router = useRouter();
  const go = (p: string) => router.push(p as Href);
  return (
    <ScreenBG>
      <FoodConfetti />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginTop: 90, alignItems: "center", width: "100%" }}>
          {/* sun halo */}
          <View style={styles.halo} />

          {/* orbiting food peeks */}
          <Floaty duration={3200} style={{ position: "absolute", top: 0, left: 18 }}>
            <View style={{ transform: [{ rotate: "-14deg" }] }}><FoodIcon name="tomato" size={54} /></View>
          </Floaty>
          <Floaty duration={3600} delay={400} style={{ position: "absolute", top: 16, right: 22 }}>
            <View style={{ transform: [{ rotate: "16deg" }] }}><FoodIcon name="cheese" size={48} /></View>
          </Floaty>
          <Floaty duration={3400} delay={700} style={{ position: "absolute", top: 132, left: 4 }}>
            <View style={{ transform: [{ rotate: "8deg" }] }}><FoodIcon name="egg" size={42} /></View>
          </Floaty>
          <Floaty duration={3800} delay={300} style={{ position: "absolute", top: 140, right: 8 }}>
            <View style={{ transform: [{ rotate: "-20deg" }] }}><FoodIcon name="broccoli" size={46} /></View>
          </Floaty>

          <View style={{ marginTop: 36, marginBottom: 46 }}>
            <Wordmark size={92} />
          </View>

          <View style={styles.pill}>
            <Text style={styles.pillText}>F R I D G E</Text>
            <Text style={[styles.pillText, { color: colors.carrot, fontSize: 20 }]}> + </Text>
            <Text style={styles.pillText}>Y U M M Y</Text>
          </View>

          <Text style={styles.tagline}>
            냉장고 속 재료로 만드는{"\n"}오늘의 한 끼, <Text style={{ color: colors.carrot }}>AI가 골라줄게</Text> 🍳
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 24, paddingBottom: 24, gap: 12 }}>
        <Pressable onPress={() => go("/onboarding")} style={[styles.cta, popShadow(colors.carrotShadow)]}>
          <Text style={styles.ctaText}>시작하기</Text>
          <Icon name="arrow-right" size={22} color="#fff" />
        </Pressable>
        <Pressable onPress={() => go("/home")}>
          <Text style={styles.login}>
            이미 계정 있어? <Text style={{ color: colors.carrot, fontWeight: "800" }}>로그인</Text>
          </Text>
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  halo: {
    position: "absolute",
    top: -10,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: "rgba(255,201,60,0.28)",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.ink,
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 999,
  },
  pillText: { fontFamily: fonts.display, fontSize: 15, color: "#FFE6C2", letterSpacing: 3 },
  tagline: { textAlign: "center", marginTop: 22, fontSize: 16, color: colors.inkSoft, fontWeight: "600", lineHeight: 24 },
  cta: {
    height: 62,
    borderRadius: 22,
    backgroundColor: colors.carrot,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  ctaText: { fontSize: 18, fontWeight: "800", fontFamily: fonts.display, color: "#fff" },
  login: { textAlign: "center", fontSize: 13, color: colors.inkMute, fontWeight: "600" },
});
