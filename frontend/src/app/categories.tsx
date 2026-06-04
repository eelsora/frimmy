import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { colors, shadow, display } from "@/lib/theme";
import type { FoodName } from "@/lib/theme";

const cats: { l: string; n: string; food: FoodName; c: [string, string]; ic: string }[] = [
  { l: "한식", n: "142", food: "pepper", c: ["#EF4F3A", "#FF8C7A"], ic: "#fff" },
  { l: "양식", n: "98", food: "cheese", c: ["#FFC93C", "#FFE08A"], ic: "#2A1E0F" },
  { l: "일식", n: "76", food: "egg", c: ["#FFFBF1", "#FFE6C2"], ic: "#2A1E0F" },
  { l: "중식", n: "64", food: "mushroom", c: ["#8B6CD9", "#B8A0E8"], ic: "#fff" },
  { l: "간편요리", n: "210", food: "egg", c: ["#FF7A3D", "#FFB061"], ic: "#fff" },
  { l: "디저트", n: "52", food: "lemon", c: ["#E14B8F", "#F8A0C0"], ic: "#fff" },
  { l: "샐러드", n: "88", food: "broccoli", c: ["#6CC04A", "#A8E58A"], ic: "#fff" },
  { l: "음료/스무디", n: "34", food: "avocado", c: ["#5B7CFA", "#A0B8FF"], ic: "#fff" },
];

export default function CategoriesScreen() {
  const router = useRouter();
  const go = () => router.push("/recipe/tomato-egg" as Href);
  return (
    <ScreenBG>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 8 }}>
          <Text style={display(28)}>뭐 끌려?</Text>
          <Text style={{ fontSize: 13, color: colors.inkSoft, fontWeight: "600", marginTop: 2 }}>오늘 입맛 따라 골라봐 😋</Text>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 16 }}>
          <View style={[styles.search, shadow.chip]}>
            <Icon name="search" size={20} color={colors.inkMute} />
            <Text style={{ flex: 1, fontSize: 14, color: colors.inkMute, fontWeight: "500" }}> 요리 이름이나 재료 검색</Text>
            <Icon name="mic" size={18} color={colors.carrot} />
          </View>
        </View>

        <Pressable onPress={go} style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <LinearGradient colors={["#FF7A3D", "#FFC93C"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.featured, shadow.deep]}>
            <View style={{ position: "absolute", bottom: -20, right: -16, opacity: 0.85 }}><FoodIcon name="tomato" size={130} /></View>
            <View style={styles.hotBadge}><Icon name="flame" size={11} color="#fff" /><Text style={{ fontSize: 10.5, fontWeight: "800", color: "#fff", letterSpacing: 0.4 }}> HOT 트렌딩</Text></View>
            <Text style={[display(22, "#fff"), { marginTop: 10 }]}>요즘 이거 다들 만들어!</Text>
            <Text style={{ marginTop: 2, fontSize: 12, fontWeight: "700", color: "#fff", opacity: 0.9, maxWidth: 200 }}>10분 만에 되는 매콤한 한 끼 30선 →</Text>
          </LinearGradient>
        </Pressable>

        <View style={{ paddingHorizontal: 22, paddingTop: 18, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {cats.map((c) => (
            <Pressable key={c.l} onPress={go} style={{ width: "47.5%" }}>
              <LinearGradient colors={c.c} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.cat, shadow.card]}>
                <View style={{ position: "absolute", bottom: -10, right: -6 }}><FoodIcon name={c.food} size={70} /></View>
                <Text style={[display(18, c.ic)]}>{c.l}</Text>
                <Text style={{ fontSize: 11, fontWeight: "700", color: c.ic, opacity: 0.85, marginTop: 2 }}>{c.n}개 레시피</Text>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <TabBar active="cats" />
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  search: { flexDirection: "row", alignItems: "center", gap: 4, paddingVertical: 12, paddingHorizontal: 16, backgroundColor: "#fff", borderRadius: 18, borderWidth: 1, borderColor: colors.line },
  featured: { borderRadius: 24, padding: 18, overflow: "hidden" },
  hotBadge: { alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  cat: { borderRadius: 22, padding: 12, height: 110, overflow: "hidden" },
});
