import { View, Text, Pressable, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { Floaty } from "@/components/ui/anim";
import { colors, fonts, popShadow, display } from "@/lib/theme";

function Star({ on }: { on: boolean }) {
  return (
    <View style={[styles.star, { backgroundColor: on ? colors.sun : colors.bg }, on && popShadow(colors.sunDeep, 3)]}>
      <Svg width={22} height={22} viewBox="0 0 24 24">
        <Path d="M 12 3 L 14.5 9 L 21 10 L 16.5 14.5 L 18 21 L 12 17.5 L 6 21 L 7.5 14.5 L 3 10 L 9.5 9 Z" fill={on ? "#fff" : colors.inkMute} />
      </Svg>
    </View>
  );
}

export default function CookingCompleteScreen() {
  const router = useRouter();
  return (
    <ScreenBG gradient={["#FFD86B", "#FF7A3D", "#FFE6C2"]}>
      <View style={{ flex: 1, alignItems: "center", paddingTop: 40 }}>
        <View style={styles.youdidit}><Text style={{ color: "#fff", fontSize: 11, fontWeight: "800", letterSpacing: 0.6 }}>YOU DID IT 🎉</Text></View>
        <Text style={[display(44, "#fff"), { marginTop: 12 }]}>완성!</Text>
        <Text style={{ marginTop: 6, fontSize: 14, color: "#fff", fontWeight: "700", opacity: 0.95 }}>토마토 계란볶음, 잘 해냈어 👏</Text>

        <Floaty duration={3000} style={styles.plate}>
          <View style={{ position: "relative" }}>
            <FoodIcon name="tomato" size={110} />
            <View style={{ position: "absolute", top: 20, left: 60 }}><FoodIcon name="egg" size={80} /></View>
          </View>
        </Floaty>
      </View>

      <View style={styles.sheet}>
        <View style={styles.grip} />
        <Text style={display(17)}>어땠어? 별점 매겨줘 ⭐</Text>
        <View style={{ flexDirection: "row", gap: 6, marginTop: 10, justifyContent: "center" }}>
          {[1, 2, 3, 4, 5].map((n) => <Star key={n} on={n <= 4} />)}
        </View>

        <View style={styles.upload}>
          <View style={styles.uploadIcon}><Icon name="camera" size={22} color={colors.carrot} /></View>
          <View style={{ flex: 1 }}>
            <Text style={display(14)}>완성 사진 올리기</Text>
            <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "700" }}>다른 친구들도 보고 싶어해</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8, marginTop: 14 }}>
          <Pressable onPress={() => router.replace("/home" as Href)} style={styles.homeBtn}><Text style={{ color: colors.ink, fontFamily: fonts.display, fontSize: 14, fontWeight: "800" }}>홈으로</Text></Pressable>
          <Pressable onPress={() => router.replace("/categories" as Href)} style={[styles.nextBtn, popShadow(colors.carrotShadow, 5)]}><Text style={{ color: "#fff", fontFamily: fonts.display, fontSize: 14, fontWeight: "800" }}>다음 요리 추천 받기</Text></Pressable>
        </View>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  youdidit: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.4)" },
  plate: { marginTop: 24, width: 200, height: 200, borderRadius: 100, backgroundColor: "#FFF7E6", alignItems: "center", justifyContent: "center", boxShadow: "0px 20px 36px -14px rgba(60,35,10,0.30)" },
  sheet: { backgroundColor: "#fff", borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 22, paddingTop: 20, paddingBottom: 24 },
  grip: { width: 40, height: 4, borderRadius: 2, backgroundColor: "rgba(0,0,0,0.1)", alignSelf: "center", marginBottom: 14 },
  star: { width: 42, height: 42, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  upload: { marginTop: 14, padding: 14, borderRadius: 18, backgroundColor: colors.bg, borderWidth: 1.5, borderColor: colors.lineStrong, borderStyle: "dashed", flexDirection: "row", alignItems: "center", gap: 12 },
  uploadIcon: { width: 50, height: 50, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  homeBtn: { flex: 1, height: 54, borderRadius: 18, backgroundColor: "#fff", borderWidth: 1.5, borderColor: colors.ink, alignItems: "center", justifyContent: "center" },
  nextBtn: { flex: 1.5, height: 54, borderRadius: 18, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center" },
});
