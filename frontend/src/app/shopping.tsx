import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";
import type { FoodName } from "@/lib/theme";

const groups: { cat: string; color: string; items: { f: FoodName; n: string; q: string; for: string; done: boolean }[] }[] = [
  { cat: "🥕 채소", color: colors.leaf, items: [
    { f: "pepper", n: "파프리카", q: "2개", for: "오므라이스 외 1", done: false },
    { f: "broccoli", n: "브로콜리", q: "1송이", for: "브로콜리 볶음", done: false },
    { f: "mushroom", n: "양송이", q: "5개", for: "버섯 파스타", done: true },
  ] },
  { cat: "🥩 단백질", color: colors.tomato, items: [
    { f: "chicken", n: "닭가슴살", q: "2덩이", for: "닭가슴살 샐러드", done: false },
    { f: "tofu", n: "두부", q: "1모", for: "두부 부침", done: false },
  ] },
  { cat: "🧀 기타", color: colors.sunDeep, items: [
    { f: "cheese", n: "굴소스", q: "1병", for: "토마토 계란볶음", done: false },
  ] },
];

export default function ShoppingListScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <NavHeader title="장보기 리스트" right={<View style={[styles.iconBtn, shadow.chip]}><Icon name="send" size={18} color={colors.carrot} /></View>} />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <LinearGradient colors={["#6CC04A", "#A8E58A"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.hero, popShadow("#3F8E2D", 6)]}>
            <View style={{ position: "absolute", top: -20, right: -20, opacity: 0.3 }}><FoodIcon name="carrot" size={140} /></View>
            <View style={styles.heroBadge}><Text style={{ fontSize: 10.5, fontWeight: "800", color: "#fff", letterSpacing: 0.4 }}>AI가 자동으로 만들었어</Text></View>
            <Text style={[display(28, "#fff"), { marginTop: 12 }]}>총 <Text style={{ color: "#FFF7DA" }}>6</Text>개 사야 해</Text>
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#fff", marginTop: 4, opacity: 0.95 }}>저장한 레시피 5개 만들려면 필요해 🛒</Text>
          </LinearGradient>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 18, gap: 14 }}>
          {groups.map((g, gi) => (
            <View key={gi}>
              <Text style={[display(14, g.color), { marginBottom: 8 }]}>{g.cat}</Text>
              <View style={{ gap: 8 }}>
                {g.items.map((it) => (
                  <View key={it.n} style={[styles.row, { backgroundColor: it.done ? colors.bg : "#fff", opacity: it.done ? 0.55 : 1 }, !it.done && shadow.chip]}>
                    <View style={[styles.check, { backgroundColor: it.done ? colors.leaf : "#fff", borderWidth: it.done ? 0 : 2, borderColor: colors.lineStrong }]}>
                      {it.done && <Icon name="check" size={16} color="#fff" />}
                    </View>
                    <FoodIcon name={it.f} size={32} />
                    <View style={{ flex: 1 }}>
                      <Text style={[display(14), it.done && { textDecorationLine: "line-through" }]}>{it.n} <Text style={{ color: colors.inkMute, fontWeight: "700", fontSize: 12 }}>{it.q}</Text></Text>
                      <Text style={{ fontSize: 10.5, color: colors.inkMute, fontWeight: "600", marginTop: 1 }}>📖 {it.for}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => router.replace("/home" as Href)} style={[styles.cta, popShadow("rgba(0,0,0,0.35)", 6)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>마트 앱에서 한 번에 주문 </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  iconBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  hero: { borderRadius: 24, padding: 18, overflow: "hidden" },
  heroBadge: { alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 18, borderWidth: 1, borderColor: colors.line },
  check: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: colors.bg },
  cta: { height: 58, borderRadius: 22, backgroundColor: colors.ink, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
