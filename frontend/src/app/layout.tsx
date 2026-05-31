import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

export const metadata: Metadata = {
  title: "Frimmy — 냉장고 속 재료로 만드는 오늘의 한 끼",
  description: "Fridge + Yummy. 냉장고 재료 기반 AI 레시피 추천 앱.",
};

export const viewport: Viewport = {
  themeColor: "#FFF1DC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <PhoneFrame>{children}</PhoneFrame>
      </body>
    </html>
  );
}
