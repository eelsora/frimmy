// Mock data for the Frimmy app prototype (no backend yet).
import type { FoodName } from "./theme";

export interface Ingredient {
  id: string;
  name: string;
  icon: FoodName;
  qty: string;
  expiry: string;
  warn?: boolean;
  cat: string;
}

export const FRIDGE_INGREDIENTS: Ingredient[] = [
  { id: "tomato", name: "토마토", icon: "tomato", qty: "3개", expiry: "D-2", warn: true, cat: "채소" },
  { id: "egg", name: "계란", icon: "egg", qty: "6알", expiry: "D-7", cat: "단백질" },
  { id: "onion", name: "양파", icon: "onion", qty: "2개", expiry: "D-12", cat: "채소" },
  { id: "cheese", name: "체다치즈", icon: "cheese", qty: "4장", expiry: "D-5", cat: "유제품" },
  { id: "milk", name: "우유", icon: "milk", qty: "500ml", expiry: "D-1", warn: true, cat: "유제품" },
  { id: "garlic", name: "마늘", icon: "garlic", qty: "한 줌", expiry: "D-20", cat: "채소" },
  { id: "pepper", name: "파프리카", icon: "pepper", qty: "1개", expiry: "D-4", cat: "채소" },
  { id: "mush", name: "양송이", icon: "mushroom", qty: "5개", expiry: "D-3", cat: "채소" },
  { id: "tofu", name: "두부", icon: "tofu", qty: "1모", expiry: "D-6", cat: "단백질" },
  { id: "broc", name: "브로콜리", icon: "broccoli", qty: "1송이", expiry: "D-8", cat: "채소" },
  { id: "chicken", name: "닭가슴살", icon: "chicken", qty: "2덩이", expiry: "D-3", cat: "단백질" },
  { id: "avo", name: "아보카도", icon: "avocado", qty: "1개", expiry: "D-2", warn: true, cat: "채소" },
];

export interface RecipeCardData {
  id: string;
  title: string;
  time: number;
  color: string;
  missing: number;
  hasPhoto: boolean;
  cuisine: string;
}

export const COOKABLE_NOW: RecipeCardData[] = [
  { id: "kimchi-fried-rice", title: "김치볶음밥", time: 12, color: "#EF4F3A", missing: 0, hasPhoto: true, cuisine: "한식" },
  { id: "rolled-omelette", title: "계란말이", time: 8, color: "#FFC93C", missing: 0, hasPhoto: false, cuisine: "한식" },
  { id: "gambas", title: "감바스", time: 18, color: "#FF7A3D", missing: 1, hasPhoto: false, cuisine: "양식" },
];

export interface RecipeIngredient { f: FoodName; n: string; q: string; have: boolean }
export interface RecipeStep { n: number; t: string; sub: string; done?: boolean; current?: boolean }

export interface RecipeDetail {
  id: string;
  title: string;
  subtitle: string;
  cuisine: string;
  time: string;
  difficulty: string;
  serving: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
}

export const FEATURED_RECIPE: RecipeDetail = {
  id: "tomato-egg",
  title: "토마토 계란볶음",
  subtitle: "새콤달콤, 한 그릇 뚝딱! 🍅🥚",
  cuisine: "한식",
  time: "15분",
  difficulty: "쉬움",
  serving: "2인분",
  ingredients: [
    { f: "tomato", n: "토마토", q: "2개", have: true },
    { f: "egg", n: "계란", q: "3알", have: true },
    { f: "onion", n: "양파", q: "½개", have: true },
    { f: "garlic", n: "다진 마늘", q: "1큰술", have: true },
    { f: "cheese", n: "굴소스", q: "1큰술", have: false },
  ],
  steps: [
    { n: 1, t: "재료 손질", sub: "4분", done: true },
    { n: 2, t: "토마토와 양파 볶기", sub: "3분", current: true },
    { n: 3, t: "계란 풀어 넣기", sub: "2분" },
    { n: 4, t: "간 맞추고 마무리", sub: "1분" },
  ],
};
