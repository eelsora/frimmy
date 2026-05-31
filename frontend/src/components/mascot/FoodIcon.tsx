import type { ReactNode } from "react";

// Food icons — chubby 3D clay style, 48x48 viewBox.
// Ported from design-source/mascot.jsx.
export type FoodName =
  | "tomato" | "carrot" | "egg" | "cheese" | "onion" | "mushroom" | "cabbage"
  | "milk" | "garlic" | "avocado" | "pepper" | "chicken" | "tofu" | "broccoli"
  | "lemon" | string;

export interface FoodIconProps {
  name: FoodName;
  size?: number;
}

const ClayDefs = (
  <defs>
    <radialGradient id="g-tomato" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#FF8C7A" />
      <stop offset="55%" stopColor="#EF4F3A" />
      <stop offset="100%" stopColor="#B72E1A" />
    </radialGradient>
    <radialGradient id="g-carrot" cx="40%" cy="20%" r="85%">
      <stop offset="0%" stopColor="#FFB571" />
      <stop offset="60%" stopColor="#FF7A3D" />
      <stop offset="100%" stopColor="#C04D14" />
    </radialGradient>
    <radialGradient id="g-leaf" cx="35%" cy="25%" r="80%">
      <stop offset="0%" stopColor="#A8E58A" />
      <stop offset="60%" stopColor="#6CC04A" />
      <stop offset="100%" stopColor="#3F8E2D" />
    </radialGradient>
    <radialGradient id="g-yolk" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stopColor="#FFE08A" />
      <stop offset="60%" stopColor="#FFC93C" />
      <stop offset="100%" stopColor="#D89500" />
    </radialGradient>
    <radialGradient id="g-egg" cx="40%" cy="35%" r="80%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#F0E4CB" />
    </radialGradient>
    <radialGradient id="g-cheese" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stopColor="#FFE08A" />
      <stop offset="60%" stopColor="#F8C84B" />
      <stop offset="100%" stopColor="#C28A0E" />
    </radialGradient>
    <radialGradient id="g-onion" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stopColor="#F8C8E0" />
      <stop offset="60%" stopColor="#D27CB0" />
      <stop offset="100%" stopColor="#8B3F6E" />
    </radialGradient>
    <radialGradient id="g-mush" cx="35%" cy="25%" r="80%">
      <stop offset="0%" stopColor="#F7D7B0" />
      <stop offset="100%" stopColor="#B07A45" />
    </radialGradient>
    <radialGradient id="g-cab" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stopColor="#D8F2BB" />
      <stop offset="100%" stopColor="#5BA640" />
    </radialGradient>
    <radialGradient id="g-milk" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#E2EAF5" />
    </radialGradient>
    <radialGradient id="g-garlic" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#E5D8C0" />
    </radialGradient>
    <radialGradient id="g-avo" cx="40%" cy="30%" r="80%">
      <stop offset="0%" stopColor="#C7E08A" />
      <stop offset="60%" stopColor="#7DAF42" />
      <stop offset="100%" stopColor="#3F6E22" />
    </radialGradient>
    <radialGradient id="g-pep" cx="40%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#FF8C7A" />
      <stop offset="60%" stopColor="#EF4F3A" />
      <stop offset="100%" stopColor="#9A2814" />
    </radialGradient>
    <radialGradient id="g-meat" cx="40%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#F5BFA0" />
      <stop offset="60%" stopColor="#D88B5E" />
      <stop offset="100%" stopColor="#8C4A28" />
    </radialGradient>
    <radialGradient id="g-tofu" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#F0E8D2" />
    </radialGradient>
    <radialGradient id="g-broc" cx="35%" cy="25%" r="80%">
      <stop offset="0%" stopColor="#A8E58A" />
      <stop offset="100%" stopColor="#2E6A1F" />
    </radialGradient>
  </defs>
);

function Gloss({ cx, cy, rx, ry, op = 0.7 }: { cx: number; cy: number; rx: number; ry: number; op?: number | string }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#fff" opacity={op} />;
}

function GroundShadow({ cx = 24, cy = 44, rx = 14, ry = 2.5 }: { cx?: number; cy?: number; rx?: number; ry?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#3B2410" opacity="0.18" />;
}

export function FoodIcon({ name, size = 44 }: FoodIconProps) {
  const w = size, h = size;
  const wrap = (children: ReactNode) => (
    <svg width={w} height={h} viewBox="0 0 48 48">{ClayDefs}{children}</svg>
  );

  switch (name) {
    case "tomato":
      return wrap(<g>
        <GroundShadow />
        <circle cx="24" cy="26" r="16" fill="url(#g-tomato)" />
        <path d="M 24 10 Q 18 6 14 8 Q 18 13 22 13 Q 18 8 24 12 Q 30 8 26 13 Q 30 13 34 8 Q 30 6 24 10 Z" fill="url(#g-leaf)" />
        <path d="M 24 9 L 24 14" stroke="#3F8E2D" strokeWidth="1.5" strokeLinecap="round" />
        <Gloss cx={18} cy={20} rx={4} ry={2.5} />
      </g>);
    case "carrot":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={10} />
        <path d="M 18 14 Q 24 12 30 14 L 27 40 Q 24 44 21 40 Z" fill="url(#g-carrot)" />
        <path d="M 20 22 L 22 23 M 26 22 L 28 23 M 22 30 L 24 31" stroke="#C04D14" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M 24 14 Q 18 4 14 6 Q 17 10 20 14 Q 24 4 24 14 Q 24 4 28 14 Q 31 10 34 6 Q 30 4 24 14 Z" fill="url(#g-leaf)" />
        <Gloss cx={22} cy={20} rx={1.6} ry={6} op={0.5} />
      </g>);
    case "egg":
      return wrap(<g>
        <GroundShadow cx={24} cy={42} rx={13} />
        <ellipse cx="24" cy="26" rx="14" ry="16" fill="url(#g-egg)" />
        <circle cx="24" cy="26" r="7" fill="url(#g-yolk)" />
        <Gloss cx={19} cy={16} rx={4} ry={3} />
      </g>);
    case "cheese":
      return wrap(<g>
        <GroundShadow cx={24} cy={42} rx={14} />
        <path d="M 8 38 L 8 22 Q 24 12 40 22 L 40 38 Q 24 42 8 38 Z" fill="url(#g-cheese)" />
        <circle cx="16" cy="26" r="2.2" fill="#C28A0E" opacity="0.7" />
        <circle cx="28" cy="30" r="1.8" fill="#C28A0E" opacity="0.7" />
        <circle cx="34" cy="24" r="1.4" fill="#C28A0E" opacity="0.7" />
        <Gloss cx={14} cy={21} rx={6} ry={1.5} />
      </g>);
    case "onion":
      return wrap(<g>
        <GroundShadow />
        <path d="M 24 8 Q 12 12 12 28 Q 12 42 24 42 Q 36 42 36 28 Q 36 12 24 8 Z" fill="url(#g-onion)" />
        <path d="M 24 8 Q 20 22 18 42 M 24 8 Q 28 22 30 42" stroke="#8B3F6E" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 24 8 Q 22 4 26 4 Q 22 6 24 8" fill="url(#g-leaf)" />
        <Gloss cx={18} cy={18} rx={4} ry={3} />
      </g>);
    case "mushroom":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={10} />
        <path d="M 18 28 L 18 38 Q 18 42 24 42 Q 30 42 30 38 L 30 28 Z" fill="#F4E4C8" />
        <path d="M 8 26 Q 8 14 24 12 Q 40 14 40 26 Q 40 30 24 30 Q 8 30 8 26 Z" fill="url(#g-mush)" />
        <circle cx="16" cy="22" r="2" fill="#fff" opacity="0.9" />
        <circle cx="28" cy="20" r="2.5" fill="#fff" opacity="0.9" />
        <circle cx="32" cy="25" r="1.6" fill="#fff" opacity="0.9" />
        <Gloss cx={14} cy={17} rx={4} ry={2} />
      </g>);
    case "cabbage":
      return wrap(<g>
        <GroundShadow />
        <circle cx="24" cy="26" r="17" fill="url(#g-cab)" />
        <path d="M 24 10 Q 18 18 22 26 Q 14 24 12 18 M 24 10 Q 30 18 26 26 Q 34 24 36 18 M 24 26 Q 18 32 14 36 M 24 26 Q 30 32 34 36 M 24 26 L 24 42" stroke="#3F8E2D" strokeWidth="1.1" fill="none" opacity="0.7" />
        <Gloss cx={18} cy={18} rx={5} ry={3} />
      </g>);
    case "milk":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={11} />
        <path d="M 14 12 L 14 8 L 34 8 L 34 12 L 38 18 L 38 42 Q 38 44 36 44 L 12 44 Q 10 44 10 42 L 10 18 Z" fill="url(#g-milk)" stroke="#C4D2E5" strokeWidth="1" />
        <rect x="16" y="22" width="16" height="14" rx="2" fill="#FF7A3D" />
        <text x="24" y="33" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="system-ui" fontWeight="900">M</text>
        <Gloss cx={16} cy={14} rx={4} ry={1.5} />
      </g>);
    case "garlic":
      return wrap(<g>
        <GroundShadow />
        <path d="M 24 8 Q 14 14 14 28 Q 14 42 24 42 Q 34 42 34 28 Q 34 14 24 8 Z" fill="url(#g-garlic)" />
        <path d="M 24 12 Q 22 26 22 42 M 24 12 Q 26 26 26 42" stroke="#C9B690" strokeWidth="0.7" fill="none" opacity="0.6" />
        <path d="M 22 8 Q 24 4 26 8" stroke="#A88B5E" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <Gloss cx={19} cy={18} rx={3.5} ry={3} />
      </g>);
    case "avocado":
      return wrap(<g>
        <GroundShadow />
        <path d="M 24 8 Q 12 14 12 28 Q 12 42 24 42 Q 36 42 36 28 Q 36 14 24 8 Z" fill="url(#g-avo)" />
        <ellipse cx="24" cy="28" rx="6.5" ry="7.5" fill="#7A4A22" />
        <Gloss cx={22} cy={24} rx={2} ry={2.5} op={0.6} />
        <Gloss cx={17} cy={16} rx={3} ry={2.5} />
      </g>);
    case "pepper":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={11} />
        <path d="M 14 16 Q 12 32 18 40 Q 24 44 30 40 Q 36 32 34 16 Q 32 12 28 14 Q 24 12 20 14 Q 16 12 14 16 Z" fill="url(#g-pep)" />
        <path d="M 22 10 Q 24 6 26 10 L 26 14 L 22 14 Z" fill="url(#g-leaf)" />
        <Gloss cx={18} cy={22} rx={2} ry={6} />
      </g>);
    case "chicken":
      return wrap(<g>
        <GroundShadow cx={24} cy={42} rx={14} />
        <circle cx="16" cy="20" r="10" fill="url(#g-meat)" />
        <rect x="20" y="22" width="20" height="10" rx="5" fill="url(#g-meat)" transform="rotate(20 30 27)" />
        <ellipse cx="36" cy="34" rx="3" ry="2" fill="#F4F1E8" />
        <Gloss cx={12} cy={14} rx={3} ry={2} />
      </g>);
    case "tofu":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={13} />
        <path d="M 8 20 L 24 12 L 40 20 L 40 36 L 24 44 L 8 36 Z" fill="url(#g-tofu)" stroke="#D8CCAE" strokeWidth="1" />
        <path d="M 8 20 L 24 28 L 40 20 M 24 28 L 24 44" stroke="#D8CCAE" strokeWidth="1" fill="none" />
        <Gloss cx={16} cy={18} rx={4} ry={1.5} />
      </g>);
    case "broccoli":
      return wrap(<g>
        <GroundShadow cx={24} cy={44} rx={11} />
        <rect x="20" y="28" width="8" height="14" rx="3" fill="#D6C49A" />
        <circle cx="16" cy="20" r="8" fill="url(#g-broc)" />
        <circle cx="28" cy="14" r="9" fill="url(#g-broc)" />
        <circle cx="34" cy="22" r="7" fill="url(#g-broc)" />
        <circle cx="22" cy="26" r="6" fill="url(#g-broc)" />
        <circle cx="15" cy="17" r="1.5" fill="#A8E58A" opacity="0.9" />
        <circle cx="28" cy="11" r="1.8" fill="#A8E58A" opacity="0.9" />
      </g>);
    case "lemon":
      return wrap(<g>
        <GroundShadow />
        <ellipse cx="24" cy="26" rx="15" ry="13" fill="url(#g-yolk)" transform="rotate(-15 24 26)" />
        <path d="M 38 18 Q 42 14 40 12" stroke="#D89500" strokeWidth="2" strokeLinecap="round" fill="none" />
        <Gloss cx={16} cy={18} rx={5} ry={2.5} />
      </g>);
    default:
      return wrap(<circle cx="24" cy="24" r="16" fill="#ddd" />);
  }
}
