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

// Soft card / chip shadows (RN: iOS shadow* + Android elevation).
export const shadow = {
  card: {
    shadowColor: "#3C230A",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 6,
  } as ViewStyle,
  chip: {
    shadowColor: "#281808",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,
  deep: {
    shadowColor: "#3C230A",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.28,
    shadowRadius: 28,
    elevation: 12,
  } as ViewStyle,
};

/** "Chubby" solid bottom edge used on primary buttons (web: 0 8px 0 color). */
export function popShadow(color: string, height = 8): ViewStyle {
  return {
    shadowColor: color,
    shadowOffset: { width: 0, height },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: height,
  };
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
