import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, type Href } from "expo-router";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { Floaty } from "@/components/ui/anim";
import { colors, fonts } from "@/lib/theme";

function DetectBox({ top, left, w, h, color, label, labelBottom }: { top: number; left: number; w: number; h: number; color: string; label: string; labelBottom?: boolean }) {
  return (
    <View style={{ position: "absolute", top, left, width: w, height: h }}>
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 2.5, borderColor: color, borderRadius: 14 }} />
      <View style={[styles.tag, { backgroundColor: color }, labelBottom ? { bottom: -28 } : { top: -28 }]}>
        <Text style={{ color: color === colors.sun ? colors.ink : "#fff", fontSize: 11, fontWeight: "800", fontFamily: fonts.display }}>{label}</Text>
      </View>
    </View>
  );
}

export default function CameraScanScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#1A1208" }}>
      <LinearGradient colors={["#4A3520", "#1A1208"]} start={{ x: 0.3, y: 0.4 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill}>
        <View style={{ position: "absolute", top: 220, left: 70 }}><FoodIcon name="tomato" size={84} /></View>
        <View style={{ position: "absolute", top: 280, right: 80 }}><FoodIcon name="egg" size={70} /></View>
        <View style={{ position: "absolute", top: 380, left: 120 }}><FoodIcon name="cheese" size={66} /></View>
      </LinearGradient>

      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <View style={styles.topBar}>
          <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace("/add" as Href))} style={styles.glassBtn}><Icon name="close" size={20} color="#fff" /></Pressable>
          <View style={styles.statusPill}>
            <Floaty type="wiggle" duration={1000}><View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.carrot }} /></Floaty>
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 6 }}>AI 인식 중...</Text>
          </View>
          <View style={styles.glassBtn}><Icon name="sparkle" size={20} color={colors.sun} filled /></View>
        </View>

        <DetectBox top={200} left={50} w={110} h={100} color={colors.carrot} label="토마토 · 97%" />
        <DetectBox top={250} left={210} w={92} h={84} color={colors.sun} label="계란 · 92%" />
        <DetectBox top={360} left={95} w={92} h={76} color={colors.leaf} label="체다치즈 · 88%" labelBottom />

        <View style={{ flex: 1 }} />

        <LinearGradient colors={["rgba(20,12,4,0)", "rgba(20,12,4,0.95)"]} style={styles.bottomPanel}>
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <Text style={[{ fontFamily: fonts.display, fontSize: 18, color: "#fff" }]}><Text style={{ color: colors.sun }}>3개</Text> 재료 찾았어!</Text>
            <Text style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: "600", marginTop: 2 }}>냉장고를 천천히 비추면 더 잘 보여</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.sideBtn}><Icon name="leaf" size={24} color="#fff" /></View>
            <Pressable onPress={() => router.push("/scan/result" as Href)} style={styles.shutter}>
              <Icon name="check" size={36} color="#fff" />
            </Pressable>
            <View style={styles.sideBtn}><Icon name="camera" size={24} color="#fff" /></View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: { paddingHorizontal: 18, paddingTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  glassBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "rgba(0,0,0,0.45)", alignItems: "center", justifyContent: "center" },
  statusPill: { flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "rgba(0,0,0,0.45)" },
  tag: { position: "absolute", left: 0, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 8 },
  bottomPanel: { paddingHorizontal: 18, paddingTop: 24, paddingBottom: 24 },
  sideBtn: { width: 54, height: 54, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.18)", alignItems: "center", justifyContent: "center" },
  shutter: { width: 78, height: 78, borderRadius: 39, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", borderWidth: 4, borderColor: "rgba(255,255,255,0.4)" },
});
