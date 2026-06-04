import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";
import type { FoodName } from "@/lib/theme";

export default function AddIngredientScreen() {
  const router = useRouter();
  const go = (p: string) => router.push(p as Href);
  const secondary: { ic: "search" | "mic"; t: string; sub: string; accent: string; food: FoodName }[] = [
    { ic: "search", t: "직접 검색", sub: "이름으로 찾기", accent: colors.leaf, food: "cabbage" },
    { ic: "mic", t: "말로 추가", sub: "말하기만 하면 OK", accent: colors.berry, food: "broccoli" },
  ];
  const quick: { n: string; f: FoodName }[] = [
    { n: "계란", f: "egg" }, { n: "양파", f: "onion" }, { n: "마늘", f: "garlic" }, { n: "대파", f: "leaf" },
    { n: "두부", f: "tofu" }, { n: "버섯", f: "mushroom" }, { n: "당근", f: "carrot" }, { n: "치즈", f: "cheese" },
  ];
  const recent: { n: string; f: FoodName }[] = [
    { n: "토마토", f: "tomato" }, { n: "아보카도", f: "avocado" }, { n: "파프리카", f: "pepper" },
  ];

  return (
    <ScreenBG>
      <NavHeader title="재료 추가" />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <Text style={display(24)}>어떻게 추가할까?</Text>
          <Text style={{ fontSize: 13, color: colors.inkSoft, fontWeight: "600", marginTop: 4 }}>AI가 사진만 봐도 다 알아맞춰 ✨</Text>

          <Pressable onPress={() => go("/scan")}>
            <LinearGradient colors={["#FF7A3D", "#FFB061"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.camera, popShadow(colors.carrotShadow, 6)]}>
              <View style={{ position: "absolute", right: -6, bottom: -10, flexDirection: "row" }}>
                <View style={{ transform: [{ rotate: "-12deg" }] }}><FoodIcon name="tomato" size={64} /></View>
                <View style={{ transform: [{ translateX: -20 }, { translateY: 8 }, { rotate: "10deg" }] }}><FoodIcon name="egg" size={56} /></View>
              </View>
              <View style={styles.rec}><Text style={{ color: "#fff", fontSize: 10, fontWeight: "800", letterSpacing: 0.5 }}>RECOMMENDED</Text></View>
              <Text style={[display(26, "#fff"), { marginTop: 12, lineHeight: 30 }]}>카메라로{"\n"}한 번에 스캔!</Text>
              <Text style={{ marginTop: 6, fontSize: 12.5, color: "#fff", opacity: 0.95, fontWeight: "600", maxWidth: 200 }}>냉장고 열고 사진만 찰칵.{"\n"}재료 다 인식해줄게</Text>
              <View style={styles.cameraBtn}><Icon name="camera" size={16} color={colors.carrot} /><Text style={{ color: colors.carrot, fontWeight: "800", fontSize: 13, fontFamily: fonts.display }}> 카메라 켜기</Text></View>
            </LinearGradient>
          </Pressable>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
            {secondary.map((t) => (
              <Pressable key={t.t} onPress={() => go("/add/form")} style={[styles.secondary, shadow.chip]}>
                <View style={{ position: "absolute", right: -10, bottom: -14, opacity: 0.16 }}><FoodIcon name={t.food} size={70} /></View>
                <View style={[styles.secIcon, { backgroundColor: t.accent + "22" }]}><Icon name={t.ic} size={20} color={t.accent} /></View>
                <Text style={[display(15), { marginTop: 10 }]}>{t.t}</Text>
                <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "600" }}>{t.sub}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 22 }}>
          <Text style={display(17)}>자주 쓰는 재료 🥕</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
            {quick.map((c) => (
              <View key={c.n} style={[styles.chip, shadow.chip]}>
                <FoodIcon name={c.f} size={28} />
                <Text style={[display(14), { marginLeft: 6 }]}>{c.n}</Text>
                <View style={styles.chipPlus}><Icon name="plus" size={14} color="#fff" /></View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 22 }}>
          <Text style={display(17)}>방금 추가했어!</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
            {recent.map((c) => (
              <View key={c.n} style={styles.recentChip}>
                <FoodIcon name={c.f} size={26} />
                <Text style={[display(13, colors.leafDeep), { marginHorizontal: 6 }]}>{c.n}</Text>
                <Icon name="check" size={14} color={colors.leafDeep} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => router.replace("/fridge" as Href)} style={[styles.saveBtn, popShadow("rgba(0,0,0,0.4)", 6)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>냉장고에 넣기 (3개) </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  camera: { marginTop: 16, padding: 18, borderRadius: 26, overflow: "hidden" },
  rec: { alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.3)" },
  cameraBtn: { marginTop: 14, alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 9, paddingHorizontal: 16, borderRadius: 999, backgroundColor: "#fff" },
  secondary: { flex: 1, backgroundColor: "#fff", borderRadius: 22, padding: 14, borderWidth: 1, borderColor: colors.line, overflow: "hidden" },
  secIcon: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  chip: { flexDirection: "row", alignItems: "center", paddingVertical: 6, paddingLeft: 6, paddingRight: 12, backgroundColor: "#fff", borderRadius: 999, borderWidth: 1, borderColor: colors.line },
  chipPlus: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", marginLeft: 6 },
  recentChip: { flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 6, paddingRight: 8, backgroundColor: "#CFEFB8", borderRadius: 999, borderWidth: 1.5, borderColor: "#7DAF42" },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: colors.bg },
  saveBtn: { height: 58, borderRadius: 22, backgroundColor: colors.ink, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
