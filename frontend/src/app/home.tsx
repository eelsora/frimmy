import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { MiniMark } from "@/components/brand/MiniMark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { COOKABLE_NOW } from "@/lib/mock-data";
import { colors, fonts, radii, shadow, popShadow, display } from "@/lib/theme";

export default function HomeScreen() {
  const router = useRouter();
  const go = (p: string) => router.push(p as Href);
  const meta: { ic: "time" | "flame" | "people"; label: string }[] = [
    { ic: "time", label: "15분" }, { ic: "flame", label: "쉬움" }, { ic: "people", label: "2인분" },
  ];
  return (
    <ScreenBG>
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }} showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={{ paddingHorizontal: 22, paddingTop: 8, flexDirection: "row", alignItems: "center", gap: 12 }}>
          <MiniMark size={52} variant="carrot" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 13, color: colors.inkMute, fontWeight: "600" }}>오늘 저녁, 지윤아 👋</Text>
            <Text style={display(22)}>뭐 먹을지 골라봤어!</Text>
          </View>
          <Pressable onPress={() => go("/saved")} style={[styles.iconBtn]}>
            <Icon name="heart" size={22} color={colors.ink} />
            <View style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: colors.tomato }} />
          </Pressable>
        </View>

        {/* hero */}
        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <LinearGradient colors={["#FF7A3D", "#FFB061"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.hero, popShadow(colors.carrotShadow, 6)]}>
            <View style={{ position: "absolute", top: -18, right: -22 }}><FoodIcon name="tomato" size={130} /></View>
            <View style={{ position: "absolute", bottom: -22, right: 40 }}><FoodIcon name="egg" size={70} /></View>
            <View style={styles.badge}><Icon name="sparkle" size={13} color="#fff" filled /><Text style={styles.badgeText}> 오늘의 AI 추천</Text></View>
            <Text style={[display(30, "#fff"), { marginTop: 14, lineHeight: 34 }]}>토마토{"\n"}계란볶음</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: "600", color: "#fff", opacity: 0.95 }}>지금 재료 다 있어! ✨</Text>
            <View style={{ flexDirection: "row", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
              {meta.map((m) => (
                <View key={m.label} style={styles.metaChip}>
                  <Icon name={m.ic} size={14} color="#fff" /><Text style={styles.metaText}> {m.label}</Text>
                </View>
              ))}
            </View>
            <Pressable onPress={() => go("/recipe/tomato-egg")} style={styles.heroCta}>
              <Text style={{ color: colors.carrot, fontWeight: "800", fontSize: 14, fontFamily: fonts.display }}>레시피 보러가기 </Text>
              <Icon name="arrow-right" size={16} color={colors.carrot} />
            </Pressable>
          </LinearGradient>
        </View>

        {/* section */}
        <View style={{ paddingHorizontal: 22, marginTop: 22, flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" }}>
          <Text style={display(19)}>지금 만들 수 있는 거 <Text style={{ color: colors.carrot }}>12</Text>개</Text>
          <Pressable onPress={() => go("/categories")}><Text style={{ fontSize: 12, color: colors.inkMute, fontWeight: "700" }}>전체 →</Text></Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 22, paddingTop: 14 }}>
          {COOKABLE_NOW.map((card) => (
            <Pressable key={card.id} onPress={() => go(`/recipe/${card.id}`)} style={[styles.recipeCard]}>
              <LinearGradient colors={[card.color, card.color + "DD"]} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={styles.recipeThumb}>
                {card.hasPhoto ? (
                  <View style={styles.photoTag}><Icon name="camera" size={9} color="#fff" /><Text style={styles.photoTagText}> 내 사진</Text></View>
                ) : (
                  <>
                    <Text style={[display(18, "#fff"), { textAlign: "center" }]}>{card.title}</Text>
                    <View style={styles.cuisineTag}><Text style={styles.cuisineText}>{card.cuisine}</Text></View>
                  </>
                )}
                <View style={styles.cornerTag}>
                  {card.missing === 0 ? (
                    <><Icon name="check" size={10} color={colors.leaf} /><Text style={{ fontSize: 9.5, fontWeight: "800", color: colors.leaf }}> 다 있음</Text></>
                  ) : (
                    <Text style={{ fontSize: 9.5, fontWeight: "800", color: colors.carrot }}>{card.missing}개 부족</Text>
                  )}
                </View>
              </LinearGradient>
              <Text style={[display(15), { marginTop: 8 }]}>{card.title}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 3, marginTop: 2 }}>
                <Icon name="time" size={12} color={colors.inkMute} /><Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "600" }}>{card.time}분 · 쉬움</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* chat banner */}
        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <Pressable onPress={() => go("/chat")} style={[styles.banner, shadow.chip]}>
            <MiniMark size={56} variant="sun" />
            <View style={{ flex: 1 }}>
              <Text style={display(15)}>뭐 먹고 싶은지 말해봐 💬</Text>
              <Text style={{ fontSize: 12, color: colors.inkMute, fontWeight: "600", marginTop: 2 }}>매콤한 거? 든든한 거? 다 골라줄게</Text>
            </View>
            <View style={[styles.bannerArrow, popShadow(colors.carrotShadow, 3)]}><Icon name="arrow-right" size={18} color="#fff" /></View>
          </Pressable>
        </View>
      </ScrollView>
      <TabBar active="home" />
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  iconBtn: { width: 44, height: 44, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.line, ...shadow.chip },
  hero: { borderRadius: 28, padding: 20, overflow: "hidden" },
  badge: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  badgeText: { fontSize: 11, fontWeight: "800", color: "#fff", letterSpacing: 0.4 },
  metaChip: { flexDirection: "row", alignItems: "center", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.22)" },
  metaText: { fontSize: 12, fontWeight: "700", color: "#fff" },
  heroCta: { marginTop: 16, alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 18, borderRadius: 999, backgroundColor: "#fff" },
  recipeCard: { width: 150, backgroundColor: "#fff", borderRadius: 22, padding: 12, borderWidth: 1, borderColor: colors.line, ...shadow.card },
  recipeThumb: { height: 96, borderRadius: 16, overflow: "hidden", alignItems: "center", justifyContent: "center", padding: 8 },
  photoTag: { position: "absolute", bottom: 6, left: 6, flexDirection: "row", alignItems: "center", paddingVertical: 2, paddingHorizontal: 7, borderRadius: 999, backgroundColor: "rgba(0,0,0,0.45)" },
  photoTagText: { fontSize: 9, fontWeight: "800", color: "#fff" },
  cuisineTag: { marginTop: 6, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  cuisineText: { fontSize: 9.5, fontWeight: "800", color: "#fff", letterSpacing: 0.4 },
  cornerTag: { position: "absolute", top: 6, right: 6, flexDirection: "row", alignItems: "center", paddingVertical: 3, paddingHorizontal: 7, borderRadius: 999, backgroundColor: "#fff", ...shadow.chip },
  banner: { backgroundColor: "#fff", borderRadius: 22, padding: 14, borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", gap: 12, overflow: "hidden" },
  bannerArrow: { width: 36, height: 36, borderRadius: 12, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center" },
});
