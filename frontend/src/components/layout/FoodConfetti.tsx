import { View, type DimensionValue } from "react-native";
import { FoodIcon } from "@/components/mascot/FoodIcon";
import { Floaty } from "@/components/ui/anim";
import type { FoodName } from "@/lib/theme";

export interface ConfettiItem {
  name: FoodName;
  x: number; // percent
  y: number; // percent
  r: number;
  s: number;
  op: number;
}

const DEFAULT_ITEMS: ConfettiItem[] = [
  { name: "tomato", x: 8, y: 8, r: -15, s: 0.6, op: 0.55 },
  { name: "carrot", x: 80, y: 12, r: 22, s: 0.55, op: 0.55 },
  { name: "cheese", x: 84, y: 70, r: -8, s: 0.6, op: 0.5 },
  { name: "broccoli", x: 5, y: 76, r: 14, s: 0.6, op: 0.55 },
  { name: "egg", x: 76, y: 42, r: 24, s: 0.5, op: 0.4 },
  { name: "pepper", x: 5, y: 44, r: -22, s: 0.5, op: 0.4 },
];

export function FoodConfetti({ items }: { items?: ConfettiItem[] }) {
  const list = items ?? DEFAULT_ITEMS;
  return (
    <View pointerEvents="none" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      {list.map((it, i) => (
        <View key={i} style={{ position: "absolute", left: `${it.x}%` as DimensionValue, top: `${it.y}%` as DimensionValue, opacity: it.op }}>
          <Floaty duration={3000 + (i % 4) * 600} delay={i * 300} style={{ transform: [{ rotate: `${it.r}deg` }, { scale: it.s }] }}>
            <FoodIcon name={it.name} size={56} />
          </Floaty>
        </View>
      ))}
    </View>
  );
}
