import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { MiniMark } from "@/components/brand/MiniMark";
import { Icon } from "@/components/mascot/Icon";
import { TypingDots } from "@/components/ui/anim";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

export default function ChatScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace("/home" as Href))} style={[styles.backBtn, shadow.chip]}>
          <Icon name="back" size={20} color={colors.ink} />
        </Pressable>
        <View style={{ position: "relative" }}>
          <MiniMark size={44} variant="carrot" />
          <View style={styles.online} />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={display(16)}>프리미</Text><Icon name="sparkle" size={13} color={colors.carrot} filled />
          </View>
          <Text style={{ fontSize: 11, color: colors.leafDeep, fontWeight: "700" }}>● 항상 곁에서 요리해주는 친구</Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 18, gap: 10 }} showsVerticalScrollIndicator={false}>
        <Text style={{ textAlign: "center", fontSize: 11, color: colors.inkMute, fontWeight: "700" }}>오늘</Text>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}>
          <MiniMark size={32} variant="carrot" />
          <View style={[styles.bubbleL, { maxWidth: "78%" }]}>
            <Text style={styles.bodyText}>안녕! 오늘은 뭐 만들어볼까? 🍳{"\n"}지금 냉장고에 있는 거 중에 골라줄게~</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginLeft: 40 }}>
          {["🌶️ 매콤한 거", "🍜 든든한 거", "🥗 가볍게", "🍰 디저트"].map((t) => (
            <View key={t} style={styles.quick}><Text style={{ color: colors.carrot, fontSize: 12, fontWeight: "800", fontFamily: fonts.display }}>{t}</Text></View>
          ))}
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <View style={[styles.bubbleR, popShadow(colors.carrotShadow, 3)]}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500", lineHeight: 20 }}>오늘 좀 매콤하면서 빨리 되는 거! 🌶️🔥</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}>
          <MiniMark size={32} variant="sun" />
          <View style={[styles.bubbleL, { maxWidth: "78%" }]}>
            <Text style={styles.bodyText}>오케이~ 10분 안에 되는 거 골라봤어! 🔥{"\n"}<Text style={{ color: colors.inkSoft, fontWeight: "700" }}>토마토 + 계란 + 고추로 매콤한 거 어때?</Text></Text>
          </View>
        </View>

        <Pressable onPress={() => router.push("/recipe/tomato-egg" as Href)} style={{ marginLeft: 40 }}>
          <LinearGradient colors={["#FFEDD9", "#FFD0AA"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={styles.embed}>
            <LinearGradient colors={["#FF7A3D", "#E85A1A"]} style={styles.embedThumb}>
              <Text style={[display(11, "#fff"), { textAlign: "center", lineHeight: 13 }]}>매콤{"\n"}토마토</Text>
            </LinearGradient>
            <View style={{ flex: 1 }}>
              <Text style={display(15)}>매콤 토마토{"\n"}계란볶음</Text>
              <View style={{ flexDirection: "row", gap: 4, marginTop: 4 }}>
                <Text style={{ fontSize: 10, fontWeight: "800", color: colors.carrotDeep }}>⏱ 10분</Text>
                <Text style={{ fontSize: 10, fontWeight: "800", color: colors.carrotDeep }}>· 🔥쉬움</Text>
              </View>
              <View style={styles.embedCta}><Text style={{ fontSize: 11, color: "#fff", fontWeight: "800", fontFamily: fonts.display }}>레시피 보기 →</Text></View>
            </View>
          </LinearGradient>
        </Pressable>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}>
          <MiniMark size={32} variant="carrot" />
          <View style={[styles.bubbleL, { paddingVertical: 14, paddingHorizontal: 16 }]}><TypingDots /></View>
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8, backgroundColor: colors.bg }}>
        <View style={[styles.inputBar, shadow.chip]}>
          <View style={styles.inputPlus}><Icon name="plus" size={18} color={colors.inkSoft} /></View>
          <Text style={{ flex: 1, fontSize: 14, color: colors.inkMute, fontWeight: "500" }}>뭐든지 물어봐!</Text>
          <View style={[styles.send, popShadow(colors.carrotShadow, 3)]}><Icon name="send" size={18} color="#fff" /></View>
        </View>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12, flexDirection: "row", alignItems: "center", gap: 10, borderBottomWidth: 1, borderBottomColor: colors.line },
  backBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  online: { position: "absolute", bottom: -2, right: -2, width: 12, height: 12, borderRadius: 6, backgroundColor: colors.leaf, borderWidth: 2, borderColor: "#fff" },
  bubbleL: { paddingVertical: 12, paddingHorizontal: 14, borderRadius: 18, borderTopLeftRadius: 4, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, ...shadow.chip },
  bubbleR: { maxWidth: "75%", paddingVertical: 11, paddingHorizontal: 14, borderRadius: 18, borderTopRightRadius: 4, backgroundColor: colors.carrot },
  bodyText: { fontSize: 14, color: colors.ink, lineHeight: 20 },
  quick: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "#fff", borderWidth: 1.5, borderColor: colors.carrot },
  embed: { width: 260, borderRadius: 22, padding: 12, borderWidth: 1.5, borderColor: colors.carrot, flexDirection: "row", gap: 10, alignItems: "center" },
  embedThumb: { width: 70, height: 70, borderRadius: 18, alignItems: "center", justifyContent: "center", padding: 6 },
  embedCta: { marginTop: 6, alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, backgroundColor: colors.carrot },
  inputBar: { flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "#fff", borderRadius: 22, paddingVertical: 8, paddingLeft: 14, paddingRight: 8, borderWidth: 1, borderColor: colors.line },
  inputPlus: { width: 32, height: 32, borderRadius: 12, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
  send: { width: 40, height: 40, borderRadius: 14, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center" },
});
