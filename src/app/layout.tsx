import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "00后程序员日拱一卒",
  description:
    "每天都会写一篇博客，即便写的不一定精彩，但相信日积月累的力量。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
