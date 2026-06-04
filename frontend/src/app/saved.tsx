import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

const recipes = [
  { t: "토마토 계란볶음", sub: "15분 · 쉬움", color: "#EF4F3A", heart: 12, hasPhoto: true, cuisine: "한식" },
  { t: "아보카도 토스트", sub: "8분 · 쉬움", color: "#7DAF42", heart: 24, hasPhoto: true, cuisine: "양식" },
  { t: "버섯 크림 파스타", sub: "20분 · 보통", color: "#F2A800", heart: 8, hasPhoto: false, cuisine: "양식" },
  { t: "브로콜리 볶음", sub: "10분 · 쉬움", color: "#5BA640", heart: 5, hasPhoto: false, cuisine: "한식" },
  { t: "계란 김치찌개", sub: "25분 · 보통", color: "#FF7A3D", heart: 18, hasPhoto: true, cuisine: "한식" },
  { t: "두부 부침", sub: "12분 · 쉬움", color: "#C9B690", heart: 9, hasPhoto: false, cuisine: "한식" },
];
const tabs = [{ l: "전체", n: 16, on: true }, { l: "자주 만든", n: 5 }, { l: "시도해보기", n: 8 }, { l: "즐겨찾기", n: 3 }];

export default function SavedRecipesScreen() {
  const router = useRouter();
  const go = () => router.push("/recipe/tomato-egg" as Href);
  return (
    <ScreenBG>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 8 }}>
          <Text style={display(28)}>저장한 요리 <Text style={{ fontSize: 18, color: colors.inkMute }}>{recipes.length}</Text></Text>
          <Text style={{ fontSize: 13, color: colors.inkSoft, fontWeight: "600", marginTop: 2 }}>나중에 또 만들고 싶은 요리들 ❤️</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 6, paddingHorizontal: 22, paddingTop: 16 }}>
          {tabs.map((t, i) => (
            <View key={i} style={[styles.tab, t.on ? styles.tabOn : styles.tabOff]}>
              <Text style={{ fontFamily: fonts.display, fontSize: 13, fontWeight: "700", color: t.on ? "#fff" : colors.inkSoft }}>{t.l}</Text>
              <View style={[styles.count, { backgroundColor: t.on ? colors.carrot : colors.bg }]}><Text style={{ fontSize: 10, fontWeight: "800", color: t.on ? "#fff" : colors.inkMute }}>{t.n}</Text></View>
            </View>
          ))}
        </ScrollView>

        <Pressable onPress={go} style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <LinearGradient colors={["#FFEDD9", "#FFD0AA"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={styles.featured}>
            <View style={styles.featThumb}><Text style={{ fontSize: 8, fontWeight: "800", color: "#fff", backgroundColor: "rgba(0,0,0,0.5)", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999 }}>📷</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10.5, fontWeight: "800", color: colors.carrotDeep, letterSpacing: 0.6 }}>마지막에 만든</Text>
              <Text style={[display(16), { marginTop: 2 }]}>토마토 계란볶음</Text>
              <Text style={{ fontSize: 11, color: colors.inkSoft, fontWeight: "700", marginTop: 2 }}>어제 · ⭐ 5.0</Text>
            </View>
          </LinearGradient>
        </Pressable>

        <View style={{ paddingHorizontal: 22, paddingTop: 16, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {recipes.map((r) => (
            <Pressable key={r.t} onPress={go} style={styles.card}>
              <LinearGradient colors={[r.color, r.color + "DD"]} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={styles.thumb}>
                {r.hasPhoto ? (
                  <View style={styles.photoTag}><Icon name="camera" size={9} color="#fff" /><Text style={{ fontSize: 9, fontWeight: "800", color: "#fff" }}> 내 사진</Text></View>
                ) : (
                  <>
                    <Text style={[display(20, "#fff"), { textAlign: "center" }]}>{r.t}</Text>
                    <View style={styles.cuisineTag}><Text style={{ fontSize: 9.5, fontWeight: "800", color: "#fff" }}>{r.cuisine}</Text></View>
                  </>
                )}
                <View style={styles.heartTag}><Icon name="heart" size={10} color={colors.tomato} filled /><Text style={{ fontSize: 10, fontWeight: "800", color: colors.tomato }}> {r.heart}</Text></View>
              </LinearGradient>
              <View style={{ padding: 8 }}>
                <Text style={display(14)}>{r.t}</Text>
                <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "700", marginTop: 2 }}>{r.sub}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <TabBar active="saved" />
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  tab: { flexDirection: "row", alignItems: "center", gap: 5, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999 },
  tabOn: { backgroundColor: colors.ink, ...popShadow("rgba(0,0,0,0.25)", 3) },
  tabOff: { backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, ...shadow.chip },
  count: { paddingHorizontal: 5, borderRadius: 999, minWidth: 18, alignItems: "center" },
  featured: { backgroundColor: "#FFEDD9", borderRadius: 22, padding: 14, flexDirection: "row", alignItems: "center", gap: 12, borderWidth: 1, borderColor: colors.line, overflow: "hidden" },
  featThumb: { width: 72, height: 72, borderRadius: 18, backgroundColor: "#EF4F3A", alignItems: "center", justifyContent: "center" },
  card: { width: "47.5%", backgroundColor: "#fff", borderRadius: 22, padding: 10, borderWidth: 1, borderColor: colors.line, ...shadow.card },
  thumb: { height: 110, borderRadius: 16, overflow: "hidden", alignItems: "center", justifyContent: "center", padding: 10 },
  photoTag: { position: "absolute", bottom: 6, left: 6, flexDirection: "row", alignItems: "center", paddingVertical: 2, paddingHorizontal: 7, borderRadius: 999, backgroundColor: "rgba(0,0,0,0.45)" },
  cuisineTag: { marginTop: 8, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  heartTag: { position: "absolute", top: 6, right: 6, flexDirection: "row", alignItems: "center", paddingVertical: 3, paddingHorizontal: 7, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.95)" },
});
