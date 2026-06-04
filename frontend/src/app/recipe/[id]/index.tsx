import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, useLocalSearchParams, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { FEATURED_RECIPE } from "@/lib/mock-data";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

export default function RecipeDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const r = FEATURED_RECIPE;
  const rid = id ?? r.id;
  const stats: { ic: "time" | "flame" | "people"; l: string; v: string; color: string }[] = [
    { ic: "time", l: r.time, v: "조리시간", color: colors.carrot },
    { ic: "flame", l: r.difficulty, v: "난이도", color: colors.tomato },
    { ic: "people", l: r.serving, v: "분량", color: colors.leaf },
  ];

  return (
    <ScreenBG>
      <NavHeader right={<View style={[styles.heart, shadow.chip]}><Icon name="heart" size={20} color={colors.tomato} filled /></View>} />
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <LinearGradient colors={["#EF4F3A", "#C9381F"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={styles.hero}>
            <View style={styles.cuisineBadge}><Text style={{ fontSize: 10.5, fontWeight: "800", color: "#fff", letterSpacing: 0.6 }}>🥘 {r.cuisine}</Text></View>
            <Text style={[display(36, "#fff"), { textAlign: "center", lineHeight: 40 }]}>{r.title}</Text>
            <View style={styles.photoHint}><Icon name="camera" size={12} color={colors.carrot} /><Text style={{ fontSize: 11, color: colors.carrot, fontWeight: "800", fontFamily: fonts.display }}> 완성하면 내 사진으로 채워져</Text></View>
          </LinearGradient>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grip} />
          <View style={styles.recBadge}><Icon name="sparkle" size={11} color={colors.carrot} filled /><Text style={{ fontSize: 11, fontWeight: "800", color: colors.carrot }}> 프리미 추천</Text></View>
          <Text style={[display(28), { marginTop: 6 }]}>{r.title}</Text>
          <Text style={{ marginTop: 4, fontSize: 13, color: colors.inkSoft, fontWeight: "600" }}>{r.subtitle}</Text>

          <View style={{ flexDirection: "row", gap: 8, marginTop: 14 }}>
            {stats.map((s) => (
              <View key={s.l} style={styles.stat}>
                <Icon name={s.ic} size={20} color={s.color} />
                <Text style={[display(15), { marginTop: 2 }]}>{s.l}</Text>
                <Text style={{ fontSize: 10, color: colors.inkMute, fontWeight: "700" }}>{s.v}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tabs}>
            <View style={[styles.tab, styles.tabOn, shadow.chip]}><Text style={display(14)}>재료 ({r.ingredients.length})</Text></View>
            <View style={styles.tab}><Text style={[display(14, colors.inkMute)]}>조리법 ({r.steps.length}단계)</Text></View>
          </View>

          <View style={{ marginTop: 14, gap: 8 }}>
            {r.ingredients.map((it) => (
              <View key={it.n} style={[styles.ing, it.have ? styles.ingHave : styles.ingMiss]}>
                <View style={styles.ingThumb}><FoodIcon name={it.f} size={30} /></View>
                <View style={{ flex: 1 }}>
                  <Text style={display(14)}>{it.n}</Text>
                  <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "700" }}>{it.q}</Text>
                </View>
                {it.have ? (
                  <View style={styles.ingCheck}><Icon name="check" size={14} color="#fff" /></View>
                ) : (
                  <View style={styles.ingNo}><Text style={{ color: "#fff", fontSize: 10.5, fontWeight: "800", fontFamily: fonts.display }}>없어요 🥲</Text></View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => router.push(`/recipe/${rid}/cook` as Href)} style={[styles.cta, popShadow(colors.carrotShadow)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>요리 시작하기 </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  heart: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  hero: { height: 220, borderRadius: 28, alignItems: "center", justifyContent: "center", paddingHorizontal: 24, overflow: "hidden" },
  cuisineBadge: { paddingVertical: 4, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)", marginBottom: 12 },
  photoHint: { marginTop: 14, flexDirection: "row", alignItems: "center", paddingVertical: 6, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.92)" },
  sheet: { marginTop: 18, marginHorizontal: 0, backgroundColor: "#fff", borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 22, paddingTop: 24 },
  grip: { width: 40, height: 4, borderRadius: 2, backgroundColor: "rgba(0,0,0,0.1)", alignSelf: "center", position: "absolute", top: 10 },
  recBadge: { alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,122,61,0.14)" },
  stat: { flex: 1, paddingVertical: 12, backgroundColor: colors.bg, borderRadius: 16, alignItems: "center", gap: 2 },
  tabs: { marginTop: 18, flexDirection: "row", gap: 4, padding: 4, backgroundColor: colors.bg, borderRadius: 16 },
  tab: { flex: 1, paddingVertical: 10, alignItems: "center", borderRadius: 12 },
  tabOn: { backgroundColor: "#fff" },
  ing: { flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 16 },
  ingHave: { backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.line },
  ingMiss: { backgroundColor: "rgba(239,79,58,0.08)", borderWidth: 1.5, borderColor: "rgba(239,79,58,0.5)", borderStyle: "dashed" },
  ingThumb: { width: 36, height: 36, borderRadius: 12, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  ingCheck: { width: 24, height: 24, borderRadius: 12, backgroundColor: colors.leaf, alignItems: "center", justifyContent: "center" },
  ingNo: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: colors.tomato },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: "#fff" },
  cta: { height: 58, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
