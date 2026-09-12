"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type BlockIconName = "lead" | "advisor" | "resident" | "field";

function BlockIcon({ name }: { name: BlockIconName }) {
  const common = {
    viewBox: "0 0 64 64",
    width: 46,
    height: 46,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "lead") {
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="20" />
        <circle cx="32" cy="32" r="7" />
        <path d="M32 5v9M32 50v9M5 32h9M50 32h9" />
        <path d="m38 26-3 9-9 3 3-9 9-3Z" />
      </svg>
    );
  }

  if (name === "advisor") {
    return (
      <svg {...common}>
        <path d="M9 14h31a7 7 0 0 1 7 7v12a7 7 0 0 1-7 7H27l-10 8v-8H9V14Z" />
        <path d="M27 24h11M27 31h7" />
        <path d="M42 36h8a5 5 0 0 1 5 5v7h-7l-7 6v-6h-4" />
      </svg>
    );
  }

  if (name === "resident") {
    return (
      <svg {...common}>
        <circle cx="22" cy="19" r="7" />
        <path d="M10 47c1-10 5-17 12-17s11 7 12 17" />
        <rect x="31" y="25" width="24" height="17" rx="3" />
        <path d="M28 47h30M43 42v5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 55V19l20-10 20 10v36" />
      <path d="M6 55h52M21 27h6M37 27h6M21 37h6M37 37h6M28 55V45h8v10" />
    </svg>
  );
}

function BlockStructure() {
  return (
    <section className="block-structure" aria-labelledby="block-structure-title">
      <header className="block-structure__head">
        <div>
          <p className="block-structure__eyebrow">VEXUM BLOCK SYSTEM</p>
          <h3 id="block-structure-title">3つの役割で、<br />1つのブロック。</h3>
        </div>
        <p className="block-structure__intro">
          <strong>VEXUMのメンバーは全員大学生。</strong><br />
          上から下へ役割がつながり、常駐人材を通じて顧客の現場を支えます。
        </p>
      </header>

      <div className="block-visual" aria-label="統括、アドバイザー、常駐人材が連携して顧客の現場を支えるブロック体制">
        <div className="block-visual__bracket" aria-hidden="true"><span>ONE BLOCK</span></div>

        <div className="block-flow">
          <article className="block-node block-node--lead">
            <div className="block-node__icon"><BlockIcon name="lead" /></div>
            <div className="block-node__main">
              <small>01 / BLOCK LEAD</small>
              <strong>統括</strong>
              <p>ブロック全体の方針を決める</p>
            </div>
            <div className="block-node__tags"><span>方針</span><span>判断</span></div>
          </article>

          <div className="block-connector" aria-hidden="true">
            <span>方針を伝える</span><i>↓</i>
          </div>

          <article className="block-node block-node--advisor">
            <div className="block-node__icon"><BlockIcon name="advisor" /></div>
            <div className="block-node__main">
              <small>02 / A GRADE</small>
              <strong>アドバイザー</strong>
              <p>L等級の相談・レビューを担う</p>
            </div>
            <div className="block-node__tags"><span>相談</span><span>品質</span></div>
          </article>

          <div className="block-connector" aria-hidden="true">
            <span>支援する</span><i>↓</i>
          </div>

          <article className="block-node block-node--resident">
            <div className="block-node__icon"><BlockIcon name="resident" /></div>
            <div className="block-node__main">
              <small>03 / L GRADE</small>
              <strong>常駐人材</strong>
              <p>顧客の現場で改善を実行する</p>
            </div>
            <div className="block-node__tags"><span>業務理解</span><span>実行</span></div>
          </article>

          <div className="block-connector block-connector--field" aria-hidden="true">
            <span>価値を届ける</span><i>↓</i>
          </div>

          <div className="block-field">
            <div className="block-field__icon"><BlockIcon name="field" /></div>
            <div>
              <small>CLIENT FIELD</small>
              <strong>顧客の現場</strong>
              <p>業務を理解し、改善につなげる</p>
            </div>
          </div>
        </div>

        <div className="block-student-bar">
          <div className="block-student-bar__people" aria-hidden="true">
            <span>統</span><span>A</span><span>L</span>
          </div>
          <div>
            <strong>全員、大学生。</strong>
            <p>統括・A等級・L等級の3つの役割を、大学生のメンバーが担います。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MotionController() {
  const [paused, setPaused] = useState(false);
  const [blockTarget, setBlockTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBlockTarget(document.querySelector<HTMLElement>(".m01-content"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );
    revealTargets.forEach((el) => observer.observe(el));

    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        root.style.setProperty("--page-progress", String(window.scrollY / max));
        root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      });
    };

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${(event.clientX / window.innerWidth - 0.5).toFixed(4)}`);
      root.style.setProperty("--my", `${(event.clientY / window.innerHeight - 0.5).toFixed(4)}`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
  }, [paused]);

  return (
    <>
      {blockTarget ? createPortal(<BlockStructure />, blockTarget) : null}
      <button
        className="motion-toggle"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {paused ? "MOTION ON" : "MOTION OFF"}
      </button>
    </>
  );
}
