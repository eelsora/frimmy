import { View, Text, Pressable } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { Icon } from "@/components/mascot/Icon";
import { colors, fonts, shadow } from "@/lib/theme";
import type { IconName } from "@/lib/theme";

const ITEMS: { id: string; href: string; icon: IconName; label: string }[] = [
  { id: "home", href: "/home", icon: "home", label: "홈" },
  { id: "fridge", href: "/fridge", icon: "fridge", label: "냉장고" },
  { id: "chat", href: "/chat", icon: "chat", label: "프리미" },
  { id: "profile", href: "/profile", icon: "profile", label: "내정보" },
];

export function TabBar({ active }: { active?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <View style={{ paddingTop: 10, paddingBottom: 8, paddingHorizontal: 16, backgroundColor: colors.bg }}>
      <View
        style={[
          {
            height: 64,
            backgroundColor: "#fff",
            borderRadius: 26,
            borderWidth: 1,
            borderColor: colors.line,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingHorizontal: 8,
          },
          shadow.card,
        ]}
      >
        {ITEMS.map((it) => {
          const on = active ? it.id === active : pathname === it.href || pathname.startsWith(it.href + "/");
          return (
            <Pressable
              key={it.id}
              onPress={() => router.replace(it.href as never)}
              style={{
                alignItems: "center",
                gap: 2,
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 16,
                backgroundColor: on ? "rgba(255,122,61,0.12)" : "transparent",
              }}
            >
              <Icon name={it.icon} size={22} color={on ? colors.carrot : colors.inkMute} filled={on && it.id === "home"} />
              <Text style={{ fontSize: 10, fontWeight: "700", color: on ? colors.carrot : colors.inkMute, fontFamily: fonts.display }}>
                {it.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
