import { View, Text } from "react-native";
import { fonts } from "@/lib/theme";

export interface YummyStampProps {
  text?: string;
  rot?: number;
  color?: string;
  size?: number;
}

export function YummyStamp({ text = "yummy!", rot = -8, color = "#FFC93C", size = 28 }: YummyStampProps) {
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingVertical: size * 0.16,
        paddingHorizontal: size * 0.45,
        borderRadius: 999,
        backgroundColor: color,
        borderWidth: 2.5,
        borderColor: "#2A1E0F",
        transform: [{ rotate: `${rot}deg` }],
        shadowColor: "#2A1E0F",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
      }}
    >
      <Text style={{ fontFamily: fonts.display, fontSize: size, color: "#2A1E0F", letterSpacing: -size * 0.02 }}>{text}</Text>
    </View>
  );
}
