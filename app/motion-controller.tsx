"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
          役割と経験に応じて3層に分かれ、ひとつのブロックとして顧客の現場を支えます。
        </p>
      </header>

      <div className="block-system" aria-label="VEXUMの3層ブロック体制">
        <div className="block-system__cap" aria-hidden="true">
          <span>ONE BLOCK</span>
          <i />
          <small>SUPPORT THE FIELD</small>
        </div>

        <div className="block-stack">
          <article className="block-role block-role--lead">
            <div className="block-role__meta">
              <b>01</b>
              <span>BLOCK LEAD</span>
            </div>
            <div className="block-role__title">
              <strong>統括</strong>
              <small>ブロック全体をまとめる</small>
            </div>
            <p>ブロック全体の方針をそろえ、顧客・メンバー間の連携をまとめます。</p>
          </article>

          <article className="block-role block-role--advisor">
            <div className="block-role__meta">
              <b>02</b>
              <span>A GRADE</span>
            </div>
            <div className="block-role__title">
              <strong>アドバイザー</strong>
              <small>A等級 / 常駐メンバーを支える</small>
            </div>
            <p>L等級の相談役となり、課題整理・品質・進め方をサポートします。</p>
          </article>

          <article className="block-role block-role--resident">
            <div className="block-role__meta">
              <b>03</b>
              <span>L GRADE</span>
            </div>
            <div className="block-role__title">
              <strong>常駐人材</strong>
              <small>L等級 / 顧客の現場で実行する</small>
            </div>
            <p>顧客の現場に入り、業務を理解しながら改善を実行します。</p>
          </article>
        </div>

        <div className="block-student-strip">
          <span aria-hidden="true">✦</span>
          <b>ALL UNIVERSITY STUDENTS</b>
          <p>統括・A等級・L等級の各役割を、大学生のメンバーが担います。</p>
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
