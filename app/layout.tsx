import type { Metadata } from "next";
import "./globals.css";
import "./dense-motion.css";
import "./heading-scale.css";
import "./immersive-redesign.css";

export const metadata: Metadata = {
  title: "VEXUM学園｜ITリテラシー基礎講座",
  description: "VEXUMの入社前セミナー教材"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
