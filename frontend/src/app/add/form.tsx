import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { useRouter, type Href } from "expo-router";
import { ScreenBG } from "@/components/layout/ScreenBG";
import { NavHeader } from "@/components/layout/NavHeader";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Icon } from "@/components/mascot/Icon";
import { Floaty } from "@/components/ui/anim";
import { colors, fonts, shadow, popShadow, display } from "@/lib/theme";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View>
      <Text style={styles.fieldLabel}>{label}</Text>
      {children}
    </View>
  );
}

export default function IngredientFormScreen() {
  const router = useRouter();
  return (
    <ScreenBG>
      <NavHeader title="재료 등록" />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 22, paddingTop: 20 }}>
          <View style={[styles.preview, shadow.card]}>
            <View style={styles.halo} />
            <Floaty duration={1600}><FoodIcon name="tomato" size={140} /></Floaty>
            <View style={styles.found}><Icon name="check" size={11} color={colors.leafDeep} /><Text style={{ color: colors.leafDeep, fontSize: 11, fontWeight: "800", fontFamily: fonts.display }}> 아이콘 찾았어!</Text></View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 18, gap: 12 }}>
          <Field label="재료 이름">
            <View style={[styles.input, shadow.chip]}>
              <Text style={display(20)}>토마토</Text>
              <Icon name="search" size={20} color={colors.inkMute} />
            </View>
          </Field>

          <Field label="수량">
            <View style={{ flexDirection: "row", gap: 8 }}>
              <View style={[styles.stepper, shadow.chip]}>
                <View style={styles.stepBtn}><Icon name="minus" size={16} color={colors.inkSoft} /></View>
                <Text style={display(22)}>3</Text>
                <View style={[styles.stepBtn, { backgroundColor: colors.carrot }]}><Icon name="plus" size={16} color="#fff" /></View>
              </View>
              <View style={[styles.unit, shadow.chip]}>
                <Text style={display(14)}>개</Text><Icon name="arrow-right" size={14} color={colors.inkMute} />
              </View>
            </View>
          </Field>

          <View style={{ flexDirection: "row", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <Field label="유통기한">
                <View style={[styles.smallField, shadow.chip]}><Icon name="time" size={18} color={colors.carrot} /><Text style={[display(14), { marginLeft: 6 }]}>D-7</Text></View>
              </Field>
            </View>
            <View style={{ flex: 1 }}>
              <Field label="카테고리">
                <View style={[styles.smallField, shadow.chip]}><Text style={{ fontSize: 16 }}>🥬</Text><Text style={[display(14), { marginLeft: 6 }]}>채소</Text></View>
              </Field>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={() => router.replace("/fridge" as Href)} style={[styles.cta, popShadow(colors.carrotShadow)]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800", fontFamily: fonts.display }}>냉장고에 추가하기 </Text>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  preview: { padding: 24, borderRadius: 28, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, alignItems: "center", overflow: "hidden" },
  halo: { position: "absolute", top: 20, width: 200, height: 200, borderRadius: 100, backgroundColor: "rgba(255,122,61,0.18)" },
  found: { marginTop: 14, flexDirection: "row", alignItems: "center", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "rgba(108,192,74,0.18)" },
  fieldLabel: { fontSize: 11, color: colors.inkMute, fontWeight: "800", letterSpacing: 0.5, marginBottom: 6 },
  input: { paddingVertical: 14, paddingHorizontal: 16, borderRadius: 16, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  stepper: { flex: 1, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 16, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  stepBtn: { width: 32, height: 32, borderRadius: 10, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" },
  unit: { minWidth: 90, paddingVertical: 14, paddingHorizontal: 16, borderRadius: 16, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 6 },
  smallField: { paddingVertical: 12, paddingHorizontal: 14, borderRadius: 16, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center" },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 22, paddingTop: 14, paddingBottom: 24, backgroundColor: colors.bg },
  cta: { height: 58, borderRadius: 22, backgroundColor: colors.carrot, alignItems: "center", justifyContent: "center", flexDirection: "row" },
});
