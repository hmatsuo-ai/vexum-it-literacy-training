import type { Metadata } from "next";
import Mission03Foundations from "./mission-03-foundations";
import Mission03Shortcuts from "./mission-03-shortcuts";
import Mission03Sync from "./mission-03-sync";
import Mission04Embeddings from "./mission-04-embeddings";
import Mission04Probability from "./mission-04-probability";
import "./experience.css";
import "./remove-floating-nav.css";
import "./mission-01-fixed-background.css";
import "./journey-background.css";
import "./career-line-contrast.css";
import "./fixed-site-background.css";
import "./check-copy-wrap.css";
import "./block-structure.css";
import "./mission-03-foundations.css";
import "./mission-03-data-basics.css";
import "./user-photo-sources.css";
import "./mission-03-spacing-fix.css";
import "./mission-03-shortcuts.css";
import "./mission-03-accounts.css";
import "./mission-03-transfer.css";
import "./mission-03-sync.css";
import "./mission-03-location-visual.css";
import "./mission-03-motion.css";
import "./motion-policy.css";
import "./mission-04-embeddings.css";
import "./mission-04-probability.css";

export const metadata: Metadata = {
  title: "VEXUM ACADEMY｜IT・AI SEMINAR",
  description: "ITとAIを仕事へつなげる、VEXUMの没入型セミナー教材",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Mission03Foundations />
        <Mission03Shortcuts />
        <Mission03Sync />
        <Mission04Embeddings />
        <Mission04Probability />
      </body>
    </html>
  );
}
