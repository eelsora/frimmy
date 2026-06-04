import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { colors, fonts, shadow, display } from "@/lib/theme";

interface Noti { ic: string; t: string; s: string; time: string; color: string; isExpiry?: boolean }

const today: Noti[] = [
  { ic: "🚨", t: "우유 D-1이야!", s: "내일까지 먹어야 해. 오믈렛 어때?", time: "지금", color: colors.tomato, isExpiry: true },
  { ic: "✨", t: "오늘의 추천이 도착했어", s: "토마토 계란볶음 — 재료 다 있어!", time: "5분 전", color: colors.carrot },
  { ic: "🍅", t: "아보카도 D-2", s: "곧 만료돼! 아보카도 토스트 어때?", time: "1시간 전", color: colors.tomato, isExpiry: true },
];
const earlier: Noti[] = [
  { ic: "👏", t: "요리 5단계 달성!", s: "벌써 18번이나 만들었어, 대단해!", time: "어제", color: colors.sunDeep },
  { ic: "🛒", t: "장보기 리스트 업데이트", s: "6개 재료가 자동 추가됐어", time: "어제", color: colors.leafDeep },
  { ic: "💕", t: "비슷한 입맛 친구", s: "지윤이랑 비슷한 사람이 만든 요리", time: "2일 전", color: colors.berry },
];

function Row({ n }: { n: Noti }) {
  return (
    <View style={[styles.row, shadow.chip]}>
      <View style={[styles.icon, { backgroundColor: n.isExpiry ? "rgba(239,79,58,0.12)" : colors.bg }]}><Text style={{ fontSize: 22 }}>{n.ic}</Text></View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
          <Text style={display(14)}>{n.t}</Text>
          <Text style={{ fontSize: 10, color: colors.inkMute, fontWeight: "700" }}>{n.time}</Text>
        </View>
        <Text style={{ fontSize: 12, color: colors.inkSoft, fontWeight: "600", marginTop: 2, lineHeight: 17 }}>{n.s}</Text>
        {n.isExpiry && <View style={styles.expiryTag}><Text style={{ color: "#fff", fontSize: 11, fontWeight: "800", fontFamily: fonts.display }}>레시피 보기 →</Text></View>}
      </View>
      {!n.isExpiry && <View style={{ position: "absolute", top: 14, right: 14, width: 8, height: 8, borderRadius: 4, backgroundColor: n.color }} />}
    </View>
  );
}

export default function NotificationsScreen() {
  const filters = [{ l: "전체", n: 6, on: true }, { l: "⚠️ 만료", n: 2 }, { l: "✨ 추천", n: 2 }, { l: "👏 기타", n: 2 }];
  return (
    <ScreenBG>
      <NavHeader title="알림" right={<Text style={{ fontSize: 12, color: colors.carrot, fontWeight: "800" }}>모두 읽음</Text>} />
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 6, paddingHorizontal: 22, paddingTop: 14 }}>
          {filters.map((t) => (
            <View key={t.l} style={[styles.filter, t.on ? { backgroundColor: colors.ink } : { backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line }]}>
              <Text style={{ fontFamily: fonts.display, fontSize: 12, fontWeight: "700", color: t.on ? "#fff" : colors.inkSoft }}>{t.l}</Text>
              <View style={[styles.fcount, { backgroundColor: t.on ? colors.carrot : colors.bg }]}><Text style={{ fontSize: 9.5, fontWeight: "800", color: t.on ? "#fff" : colors.inkMute }}>{t.n}</Text></View>
            </View>
          ))}
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <Text style={[display(13, colors.inkMute), { marginBottom: 8 }]}>오늘</Text>
          <View style={{ gap: 8 }}>{today.map((n, i) => <Row key={i} n={n} />)}</View>
        </View>
        <View style={{ paddingHorizontal: 22, paddingTop: 18 }}>
          <Text style={[display(13, colors.inkMute), { marginBottom: 8 }]}>이번 주</Text>
          <View style={{ gap: 8 }}>{earlier.map((n, i) => <Row key={i} n={n} />)}</View>
        </View>
      </ScrollView>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  filter: { flexDirection: "row", alignItems: "center", gap: 4, paddingVertical: 7, paddingHorizontal: 12, borderRadius: 999 },
  fcount: { paddingHorizontal: 5, borderRadius: 999, minWidth: 16, alignItems: "center" },
  row: { flexDirection: "row", gap: 12, padding: 12, backgroundColor: "#fff", borderRadius: 18, borderWidth: 1, borderColor: colors.line, alignItems: "flex-start" },
  icon: { width: 44, height: 44, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  expiryTag: { alignSelf: "flex-start", marginTop: 8, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: colors.tomato },
});
