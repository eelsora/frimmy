import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, useLocalSearchParams, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { Icon } from "@/components/mascot/Icon";
import { FEATURED_RECIPE } from "@/lib/mock-data";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

export default function CookingStepScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const rid = id ?? FEATURED_RECIPE.id;
  const steps = FEATURED_RECIPE.steps;

  return (
    <ScreenBG>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace("/home" as Href))} style={[styles.navBtn, shadow.chip]}><Icon name="close" size={20} color={colors.ink} /></Pressable>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={display(16)}>{FEATURED_RECIPE.title}</Text>
          <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "700" }}>Step 2 of {steps.length} · 6분 남음</Text>
        </View>
        <View style={[styles.navBtn, shadow.chip]}><Icon name="heart" size={18} color={colors.tomato} filled /></View>
      </View>

      <View style={{ paddingHorizontal: 22, paddingTop: 14, flexDirection: "row", gap: 6 }}>
        {[1, 2, 3, 4].map((n) => (
          <View key={n} style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: n <= 2 ? colors.carrot : "rgba(40,30,16,0.12)" }} />
        ))}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 20 }}>
          <LinearGradient colors={["#FF7A3D", "#FFB061"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.focus, popShadow(colors.carrotShadow, 6)]}>
            <View style={styles.stepBadge}><Icon name="flame" size={11} color="#fff" /><Text style={{ fontSize: 10.5, fontWeight: "800", color: "#fff", letterSpacing: 0.6 }}> STEP 2 · 진행중</Text></View>
            <Text style={[display(28, "#fff"), { marginTop: 14, lineHeight: 32 }]}>토마토와 양파 볶기</Text>
            <Text style={{ marginTop: 8, fontSize: 14, color: "#fff", opacity: 0.96, lineHeight: 22 }}>썰어둔 토마토 2개와 양파 ½개를{"\n"}중불에 3-4분간 볶아줘.{"\n"}살짝 숨이 죽을 때까지!</Text>
            <View style={styles.timer}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Icon name="time" size={20} color="#fff" />
                <View>
                  <Text style={{ fontSize: 10, fontWeight: "800", color: "#fff", opacity: 0.85, letterSpacing: 0.5 }}>타이머</Text>
                  <Text style={[display(22, "#fff")]}>3:24</Text>
                </View>
              </View>
              <View style={styles.pause}><Text style={{ color: colors.carrot, fontFamily: fonts.display, fontSize: 13, fontWeight: "800" }}>일시정지</Text></View>
            </View>
          </LinearGradient>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 14 }}>
          <View style={[styles.tip, shadow.chip]}>
            <View style={styles.tipIcon}><Text style={{ fontSize: 16 }}>💡</Text></View>
            <Text style={{ flex: 1, fontSize: 12.5, color: colors.inkSoft, fontWeight: "600", lineHeight: 19 }}><Text style={{ color: colors.ink, fontWeight: "800" }}>프리미 팁:</Text> 양파를 먼저 30초 정도 볶으면 단맛이 더 살아나!</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 20 }}>
          <Text style={[display(14, colors.inkMute), { marginBottom: 10 }]}>전체 단계</Text>
          <View style={{ gap: 8 }}>
            {steps.map((s) => (
              <View key={s.n} style={[styles.stepRow, s.current ? styles.stepCurrent : s.done ? styles.stepDone : styles.stepIdle]}>
                <View style={[styles.stepNum, { backgroundColor: s.done ? colors.leaf : s.current ? colors.carrot : colors.bg, borderWidth: !s.done && !s.current ? 1.5 : 0, borderColor: colors.lineStrong }]}>
                  {s.done ? <Icon name="check" size={16} color="#fff" /> : <Text style={{ fontFamily: fonts.display, fontSize: 14, color: s.current ? "#fff" : colors.inkMute }}>{s.n}</Text>}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[display(14, s.done ? colors.inkMute : colors.ink), s.done && { textDecorationLine: "line-through" }]}>{s.t}</Text>
                  <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "700", marginTop: 1 }}>{s.sub}</Text>
                </View>
                {s.current && <View style={styles.progressTag}><Text style={{ color: "#fff", fontSize: 10, fontWeight: "800", fontFamily: fonts.display }}>진행중</Text></View>}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace("/home" as Href))} style={[styles.prevBtn, shadow.chip]}><Icon name="back" size={22} color={colors.inkSoft} /></Pressable>
        <Pressable onPress={() => router.push(`/recipe/${rid}/complete` as Href)} style={[styles.nextBtn, popShadow(colors.carrotShadow)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>다음 단계 </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  navBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.line },
  focus: { borderRadius: 28, padding: 22, overflow: "hidden" },
  stepBadge: { alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  timer: { marginTop: 14, padding: 12, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.22)", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  pause: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "#fff" },
  tip: { flexDirection: "row", gap: 10, padding: 12, borderRadius: 16, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, alignItems: "flex-start" },
  tipIcon: { width: 32, height: 32, borderRadius: 10, backgroundColor: "rgba(255,201,60,0.2)", alignItems: "center", justifyContent: "center" },
  stepRow: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 16 },
  stepCurrent: { backgroundColor: "#fff", borderWidth: 1.5, borderColor: colors.carrot },
  stepDone: { backgroundColor: "rgba(108,192,74,0.10)", borderWidth: 1, borderColor: colors.line },
  stepIdle: { backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.line },
  stepNum: { width: 32, height: 32, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  progressTag: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: 999, backgroundColor: colors.carrot },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: colors.bg, flexDirection: "row", gap: 10 },
  prevBtn: { width: 60, height: 58, borderRadius: 22, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, alignItems: "center", justifyContent: "center" },
  nextBtn: { flex: 1, height: 58, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
