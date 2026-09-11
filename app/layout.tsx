import type { Metadata } from "next";
import "./experience.css";
import "./remove-floating-nav.css";
import "./mission-01-fixed-background.css";
import "./journey-background.css";
import "./career-line-contrast.css";

export const metadata: Metadata = {
  title: "VEXUM ACADEMY｜IT・AI SEMINAR",
  description: "ITとAIを仕事へつなげる、VEXUMの没入型セミナー教材",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
