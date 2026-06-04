import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";
import type { FoodName } from "@/lib/theme";

const detected: { f: FoodName; n: string; q: string; conf: number; ok: boolean }[] = [
  { f: "tomato", n: "토마토", q: "3개", conf: 97, ok: true },
  { f: "egg", n: "계란", q: "6알", conf: 92, ok: true },
  { f: "cheese", n: "체다치즈", q: "4장", conf: 88, ok: true },
  { f: "lemon", n: "레몬", q: "2개", conf: 76, ok: true },
  { f: "onion", n: "양파", q: "?", conf: 54, ok: false },
];

export default function ScanResultScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <NavHeader title="스캔 결과" right={<Pressable onPress={() => router.replace("/scan" as Href)}><Text style={{ fontSize: 12, color: colors.carrot, fontWeight: "800" }}>다시</Text></Pressable>} />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <Text style={display(26)}>이거 다 맞아? 🤔</Text>
          <Text style={{ fontSize: 13, color: colors.inkSoft, fontWeight: "600", marginTop: 4 }}>AI가 <Text style={{ color: colors.carrot, fontWeight: "800" }}>{detected.length}개 재료</Text>를 찾았어. 확인하고 추가해줘!</Text>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 18, gap: 10 }}>
          {detected.map((it) => (
            <View key={it.f} style={[styles.row, it.ok ? styles.rowOk : styles.rowWarn, shadow.chip]}>
              <View style={styles.thumb}><FoodIcon name={it.f} size={44} /></View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                  <Text style={display(16)}>{it.n}</Text>
                  <View style={[styles.conf, { backgroundColor: it.conf > 85 ? "rgba(108,192,74,0.18)" : "rgba(255,201,60,0.25)" }]}>
                    <Text style={{ fontSize: 9.5, fontWeight: "800", color: it.conf > 85 ? colors.leafDeep : colors.sunDeep }}>{it.conf}%</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 12, color: colors.inkMute, fontWeight: "700", marginTop: 2 }}>수량: {it.q}{!it.ok && " · 확인 필요"}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 6 }}>
                <View style={styles.miniBtn}><Icon name="minus" size={16} color={colors.inkSoft} /></View>
                <View style={[styles.miniBtn, { backgroundColor: it.ok ? colors.leaf : colors.bg }]}><Icon name="check" size={16} color={it.ok ? "#fff" : colors.inkMute} /></View>
              </View>
            </View>
          ))}
        </View>

        <Pressable onPress={() => router.push("/add/form" as Href)} style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <LinearGradient colors={["#FFEDD9", "#FFD0AA"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={styles.hint}>
            <View style={styles.hintIcon}><Icon name="sparkle" size={20} color={colors.carrot} filled /></View>
            <View style={{ flex: 1 }}>
              <Text style={display(13.5)}>놓친 재료 있어?</Text>
              <Text style={{ fontSize: 11, color: colors.carrot, fontWeight: "800" }}>직접 추가하기 →</Text>
            </View>
          </LinearGradient>
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => router.replace("/fridge" as Href)} style={[styles.cta, popShadow(colors.carrotShadow)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>4개 재료 추가하기 </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 20 },
  rowOk: { backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line },
  rowWarn: { backgroundColor: "rgba(255,201,60,0.15)", borderWidth: 1.5, borderColor: colors.sunDeep, borderStyle: "dashed" },
  thumb: { width: 52, height: 52, borderRadius: 16, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
  conf: { paddingVertical: 2, paddingHorizontal: 6, borderRadius: 999 },
  miniBtn: { width: 32, height: 32, borderRadius: 10, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
  hint: { padding: 14, borderRadius: 18, borderWidth: 1, borderColor: colors.carrotSoft, flexDirection: "row", gap: 10, alignItems: "center" },
  hintIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: colors.bg },
  cta: { height: 58, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
