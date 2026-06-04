// Frimmy design tokens for React Native (ported from the web tokens.css).
import type { TextStyle, ViewStyle } from "react-native";

export const colors = {
  bg: "#FFF1DC",
  bgDeep: "#FFE6C2",
  card: "#FFFBF1",
  cardSoft: "#FFF6E1",
  line: "#F3E2BF",
  lineStrong: "#E8CE94",

  carrot: "#FF7A3D",
  carrotDeep: "#E85A1A",
  carrotShadow: "#C9491A",
  carrotSoft: "#FFD4B5",

  tomato: "#EF4F3A",
  tomatoDeep: "#C9381F",
  leaf: "#6CC04A",
  leafDeep: "#3F8E2D",
  sun: "#FFC93C",
  sunDeep: "#F2A800",
  berry: "#E14B8F",
  grape: "#8B6CD9",

  ink: "#2A1E0F",
  inkSoft: "#5F4A2E",
  inkMute: "#9C8567",
  white: "#FFFFFF",
} as const;

export const radii = { pill: 999, xl: 28, lg: 20, md: 14 } as const;

// Font family keys (loaded in app/_layout via expo-google-fonts).
// Body uses the system font (handles Korean); display uses Jua.
export const fonts = {
  display: "Jua_400Regular",
  hand: "Gaegu_400Regular",
  handBold: "Gaegu_700Regular",
} as const;

// Soft card / chip shadows (cross-platform boxShadow, supported in RN 0.76+).
export const shadow = {
  card: { boxShadow: "0px 10px 28px -12px rgba(60,35,10,0.20), 0px 2px 6px rgba(60,35,10,0.06)" } as ViewStyle,
  chip: { boxShadow: "0px 3px 6px -2px rgba(40,24,8,0.14)" } as ViewStyle,
  deep: { boxShadow: "0px 22px 44px -16px rgba(60,35,10,0.28)" } as ViewStyle,
};

/** "Chubby" solid bottom edge used on primary buttons (web: 0 8px 0 color). */
export function popShadow(color: string, height = 8): ViewStyle {
  return { boxShadow: `0px ${height}px 0px ${color}` };
}

/** Display (Jua) text helper. */
export function display(size: number, color: string = colors.ink): TextStyle {
  return { fontFamily: fonts.display, fontSize: size, color, letterSpacing: -0.4 };
}

export type FoodName =
  | "tomato" | "carrot" | "egg" | "cheese" | "onion" | "mushroom" | "cabbage"
  | "milk" | "garlic" | "avocado" | "pepper" | "chicken" | "tofu" | "broccoli"
  | "lemon" | "leaf";

export type IconName =
  | "home" | "fridge" | "chat" | "profile" | "plus" | "minus" | "close"
  | "back" | "search" | "camera" | "mic" | "heart" | "time" | "flame"
  | "check" | "arrow-right" | "sparkle" | "send" | "people" | "leaf";
