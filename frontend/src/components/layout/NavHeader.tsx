import type { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow } from "@/lib/theme";

export interface NavHeaderProps {
  title?: string;
  right?: ReactNode;
  backHref?: string;
  closeIcon?: boolean;
}

export function NavHeader({ title, right, backHref, closeIcon = false }: NavHeaderProps) {
  const router = useRouter();
  const onBack = () => {
    if (backHref) router.replace(backHref as never);
    else if (router.canGoBack()) router.back();
    else router.replace("/home" as never);
  };
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 8, flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Pressable
        onPress={onBack}
        style={[{ width: 40, height: 40, borderRadius: 14, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.line }, shadow.chip]}
      >
        <Icon name={closeIcon ? "close" : "back"} size={20} color={colors.ink} />
      </Pressable>
      {title !== undefined ? (
        <Text style={{ flex: 1, textAlign: "center", fontFamily: fonts.display, fontSize: 18, color: colors.ink }}>{title}</Text>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      <View style={{ minWidth: 40, alignItems: "flex-end" }}>{right}</View>
    </View>
  );
}
