import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mason Carter｜柴 — AI 应用开发者",
    template: "%s | Mason Carter",
  },
  description:
    "聚焦多智能体系统、RAG、AI Coding Agent 与工程化评测，探索 AI 在心理支持、代码智能与隐私计算等复杂场景中的可靠落地。",
  openGraph: {
    title: "Mason Carter｜柴 — AI 应用开发者",
    description:
      "聚焦多智能体系统、RAG、AI Coding Agent 与工程化评测，探索 AI 在心理支持、代码智能与隐私计算等复杂场景中的可靠落地。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
