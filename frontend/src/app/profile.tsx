import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import Svg, { Circle, Path } from "react-native-svg";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { TabBar } from "@/components/layout/TabBar";
import { MiniMark } from "@/components/brand/MiniMark";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow, display } from "@/lib/theme";

interface Row { ic: string; t: string; sub: string; href?: string }

function MenuList({ rows, onNavigate }: { rows: Row[]; onNavigate: (h: string) => void }) {
  return (
    <View style={[styles.menu, shadow.chip]}>
      {rows.map((m, i, arr) => (
        <Pressable key={i} onPress={() => m.href && onNavigate(m.href)} style={[styles.menuRow, i < arr.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.line }]}>
          <View style={styles.menuIcon}><Text style={{ fontSize: 18 }}>{m.ic}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={display(14)}>{m.t}</Text>
            <Text style={{ fontSize: 11, color: colors.inkMute, fontWeight: "600", marginTop: 1 }}>{m.sub}</Text>
          </View>
          <Icon name="arrow-right" size={16} color={colors.inkMute} />
        </Pressable>
      ))}
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();
  const go = (h: string) => router.push(h as Href);
  const tastes: Row[] = [
    { ic: "🌶️", t: "식이 선호도", sub: "매콤함 · 든든함 · 가벼움" },
    { ic: "🥜", t: "알레르기 / 못먹는 거", sub: "땅콩, 새우" },
    { ic: "⏰", t: "식사 알림", sub: "저녁 6시, 점심 12시", href: "/notifications" },
  ];
  const etc: Row[] = [
    { ic: "🔔", t: "알림 설정", sub: "푸시 ON · 7개", href: "/notifications" },
    { ic: "💌", t: "친구 초대", sub: "같이 쓰면 더 재밌어" },
    { ic: "❔", t: "도움말", sub: "Frimmy 사용법" },
  ];
  const stats = [{ n: "18", l: "만든 요리" }, { n: "16", l: "저장" }, { n: "2.3kg", l: "음식물↓" }];

  return (
    <ScreenBG>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={display(22)}>내 정보</Text>
          <View style={[styles.gear]}>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={colors.ink} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <Circle cx="12" cy="12" r="3" />
              <Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </Svg>
          </View>
        </View>

        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <LinearGradient colors={["#FF7A3D", "#FFC93C"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.card, shadow.deep]}>
            <View style={{ position: "absolute", top: -20, right: -16, opacity: 0.35 }}><FoodIcon name="carrot" size={130} /></View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
              <MiniMark size={72} variant="cream" />
              <View>
                <Text style={display(22, "#fff")}>지윤</Text>
                <Text style={{ fontSize: 12.5, fontWeight: "700", color: "#fff", opacity: 0.95, marginTop: 2 }}>Frimmy와 함께한 지 23일 ✨</Text>
                <View style={styles.levelTag}><Icon name="flame" size={11} color="#fff" /><Text style={{ fontSize: 10.5, fontWeight: "800", color: "#fff" }}> 요리 레벨 5</Text></View>
              </View>
            </View>
            <View style={styles.stats}>
              {stats.map((s, i) => (
                <View key={i} style={{ flex: 1, alignItems: "center" }}>
                  <Text style={display(20, "#fff")}>{s.n}</Text>
                  <Text style={{ fontSize: 10.5, fontWeight: "700", color: "#fff", opacity: 0.95, marginTop: 4 }}>{s.l}</Text>
                </View>
              ))}
            </View>
          </LinearGradient>
        </View>

        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <Text style={styles.sectionLabel}>나의 취향</Text>
          <MenuList rows={tastes} onNavigate={go} />
        </View>
        <View style={{ paddingHorizontal: 22, marginTop: 18 }}>
          <Text style={styles.sectionLabel}>기타</Text>
          <MenuList rows={etc} onNavigate={go} />
        </View>
      </ScrollView>
      <TabBar active="profile" />
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  gear: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.line },
  card: { borderRadius: 28, padding: 18, overflow: "hidden" },
  levelTag: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.28)", marginTop: 6 },
  stats: { marginTop: 16, flexDirection: "row", padding: 12, backgroundColor: "rgba(255,255,255,0.22)", borderRadius: 18 },
  sectionLabel: { fontSize: 11, color: colors.inkMute, fontWeight: "800", letterSpacing: 0.6, marginBottom: 8 },
  menu: { backgroundColor: "#fff", borderRadius: 20, borderWidth: 1, borderColor: colors.line },
  menuRow: { paddingVertical: 14, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", gap: 12 },
  menuIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
});
