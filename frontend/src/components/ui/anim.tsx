import { useEffect } from "react";
import type { ViewStyle } from "react-native";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  interpolate,
  Easing,
} from "react-native-reanimated";
import type { ReactNode } from "react";

type FloatyType = "bob" | "wiggle";

/** Gentle looping bob (translateY) or wiggle (rotate) used across the app. */
export function Floaty({
  type = "bob",
  duration = 3000,
  delay = 0,
  amount,
  style,
  children,
}: {
  type?: FloatyType;
  duration?: number;
  delay?: number;
  amount?: number;
  style?: ViewStyle;
  children: ReactNode;
}) {
  const v = useSharedValue(0);
  useEffect(() => {
    v.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: duration / 2, easing: Easing.inOut(Easing.ease) }), -1, true)
    );
  }, [v, duration, delay]);

  const animatedStyle = useAnimatedStyle(() => {
    if (type === "wiggle") {
      const deg = interpolate(v.value, [0, 1], [-(amount ?? 1.5), amount ?? 1.5]);
      return { transform: [{ rotate: `${deg}deg` }] };
    }
    const y = interpolate(v.value, [0, 1], [0, -(amount ?? 6)]);
    return { transform: [{ translateY: y }] };
  });

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
}

/** Three bouncing dots (typing indicator). */
export function TypingDots({ color = "#FF7A3D", size = 7 }: { color?: string; size?: number }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      {[0, 1, 2].map((i) => (
        <Dot key={i} color={color} size={size} delay={i * 150} />
      ))}
    </View>
  );
}

function Dot({ color, size, delay }: { color: string; size: number; delay: number }) {
  const v = useSharedValue(0);
  useEffect(() => {
    v.value = withDelay(delay, withRepeat(withTiming(1, { duration: 600 }), -1, true));
  }, [v, delay]);
  const s = useAnimatedStyle(() => ({ transform: [{ translateY: interpolate(v.value, [0, 1], [0, -4]) }] }));
  return <Animated.View style={[{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }, s]} />;
}
