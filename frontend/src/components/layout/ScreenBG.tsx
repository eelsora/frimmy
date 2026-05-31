import type { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";
import { colors } from "@/lib/theme";

export interface ScreenBGProps {
  children: ReactNode;
  gradient?: readonly [string, string, ...string[]];
  edges?: readonly Edge[];
}

/** Full-screen warm-cream gradient background + safe area. Screens place a
 *  ScrollView (and optional fixed footer / TabBar) as direct children. */
export function ScreenBG({ children, gradient, edges = ["top", "bottom"] }: ScreenBGProps) {
  const g = gradient ?? ([colors.bg, colors.bgDeep] as const);
  return (
    <LinearGradient colors={g} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.fill}>
      <SafeAreaView style={styles.fill} edges={edges}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({ fill: { flex: 1 } });
