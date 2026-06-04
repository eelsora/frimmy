import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { FRIDGE_INGREDIENTS } from "@/lib/mock-data";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

const FILTERS = [
  { l: "전체 12", on: true }, { l: "채소 6" }, { l: "단백질 3" }, { l: "유제품 2" }, { l: "양념 1" },
];

export default function FridgeScreen() {
  const router = useRouter();
  const ingredients = FRIDGE_INGREDIENTS;
  return (
    <ScreenBG>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 8 }}>
          <Text style={display(28)}>내 냉장고 <Text style={{ fontSize: 18, color: colors.inkMute }}>총 {ingredients.length}개</Text></Text>
          <Text style={{ fontSize: 13, color: colors.inkSoft, fontWeight: "600", marginTop: 2 }}>
            <Text style={{ color: colors.tomato, fontWeight: "800" }}>🚨 3개</Text>는 곧 만료돼! 서둘러야 해
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 22, paddingTop: 16, paddingBottom: 8 }}>
          {FILTERS.map((f, i) => (
            <View key={i} style={[styles.pill, f.on ? styles.pillOn : styles.pillOff]}>
              <Text style={{ fontSize: 13, fontWeight: "800", fontFamily: fonts.display, color: f.on ? "#fff" : colors.inkSoft }}>{f.l}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={{ paddingHorizontal: 22, paddingTop: 6 }}>
          <Text style={[display(15, colors.tomato), { marginBottom: 8 }]}>🔥 곧 만료</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
            {ingredients.filter((i) => i.warn).map((i) => (
              <View key={i.id} style={styles.expiry}>
                <FoodIcon name={i.icon} size={36} />
                <View>
                  <Text style={display(13)}>{i.name}</Text>
                  <Text style={{ fontSize: 10.5, color: colors.tomato, fontWeight: "800" }}>{i.expiry}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 18, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {ingredients.slice(0, 12).map((it) => (
            <View key={it.id} style={styles.gridItem}>
              {it.warn && <View style={styles.warnDot} />}
              <FoodIcon name={it.icon} size={48} />
              <Text style={[display(13), { marginTop: 4 }]}>{it.name}</Text>
              <Text style={{ fontSize: 10, color: colors.inkMute, fontWeight: "700" }}>{it.qty} · {it.expiry}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Pressable onPress={() => router.push("/add" as Href)} style={[styles.fab, popShadow(colors.carrotShadow)]}>
        <Icon name="plus" size={28} color="#fff" />
      </Pressable>

      <TabBar active="fridge" />
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  pill: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999 },
  pillOn: { backgroundColor: colors.ink, ...popShadow("rgba(0,0,0,0.25)", 3) },
  pillOff: { backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, ...shadow.chip },
  expiry: { minWidth: 96, flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 18, backgroundColor: "#FFE0DA", borderWidth: 1.5, borderColor: "rgba(239,79,58,0.25)" },
  gridItem: { width: "30.5%", backgroundColor: "#fff", borderRadius: 20, paddingVertical: 12, paddingHorizontal: 8, borderWidth: 1, borderColor: colors.line, alignItems: "center", gap: 4, ...shadow.chip },
  warnDot: { position: "absolute", top: 6, right: 6, width: 9, height: 9, borderRadius: 5, backgroundColor: colors.tomato, borderWidth: 2, borderColor: "#fff" },
  fab: { position: "absolute", right: 22, bottom: 104, width: 64, height: 64, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center" },
});
