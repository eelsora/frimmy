import { FoodIcon, type FoodName } from "@/components/mascot/FoodIcon";

// Floating food confetti background — sparse, gentle.
// Ported from design-source/screens-a.jsx.
export interface ConfettiItem {
  name: FoodName;
  x: number;
  y: number;
  r: number;
  s: number;
  op: number;
}

const DEFAULT_ITEMS: ConfettiItem[] = [
  { name: "tomato", x: 12, y: 8, r: -15, s: 0.6, op: 0.55 },
  { name: "carrot", x: 82, y: 14, r: 22, s: 0.55, op: 0.55 },
  { name: "cheese", x: 88, y: 72, r: -8, s: 0.6, op: 0.5 },
  { name: "broccoli", x: 6, y: 78, r: 14, s: 0.6, op: 0.55 },
  { name: "egg", x: 78, y: 42, r: 24, s: 0.5, op: 0.4 },
  { name: "pepper", x: 6, y: 44, r: -22, s: 0.5, op: 0.4 },
];

export function FoodConfetti({ items }: { items?: ConfettiItem[] }) {
  const list = items || DEFAULT_ITEMS;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {list.map((it, i) => (
        <div key={i} style={{
          position: "absolute", left: `${it.x}%`, top: `${it.y}%`,
          transform: `rotate(${it.r}deg) scale(${it.s})`, opacity: it.op,
          animation: `bob ${3 + (i % 4) * 0.6}s ease-in-out ${i * 0.3}s infinite`,
        }}>
          <FoodIcon name={it.name} size={56} />
        </div>
      ))}
    </div>
  );
}
