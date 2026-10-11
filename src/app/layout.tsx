import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "오색 : 난장 | Ninety Company",
  description:
    "청·흑·적·백·황, 오색에 담긴 전통의 철학과 무속적 의미를 현대무용과 브레이킹으로 재해석한 오컬트 무용극 — 나인티 컴퍼니",
  openGraph: {
    title: "오색 : 난장 | Ninety Company",
    description: "현대무용과 브레이킹으로 펼치는 오컬트 무용극",
    images: ["/images/main.jpg"],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
