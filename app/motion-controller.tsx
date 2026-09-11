"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function BlockStructure() {
  return (
    <section className="block-structure" aria-labelledby="block-structure-title">
      <span className="block-spark s1" aria-hidden="true">✦</span>
      <span className="block-spark s2" aria-hidden="true">✧</span>
      <span className="block-spark s3" aria-hidden="true">●</span>

      <div className="block-structure__head">
        <div>
          <p className="block-structure__eyebrow">VEXUM BLOCK SYSTEM</p>
          <h3 id="block-structure-title">3つの役割で、<br />1つのチーム。</h3>
        </div>
        <p className="block-structure__intro">
          <strong>VEXUMのメンバーは全員大学生。</strong><br />
          役割と経験に応じて3層に分かれ、ひとつのブロックとして顧客の現場を支えます。
        </p>
      </div>

      <div className="block-structure__body">
        <div className="block-pyramid" aria-label="VEXUMの3層ブロック体制">
          <div className="block-tier block-tier--lead">
            <div className="block-tier__content">
              <small>BLOCK LEAD</small>
              <strong>統括</strong>
              <span>ブロック全体をまとめる</span>
            </div>
          </div>
          <div className="block-tier block-tier--advisor">
            <div className="block-tier__content">
              <small>A GRADE</small>
              <strong>アドバイザー</strong>
              <span>A等級 / 常駐メンバーを支える</span>
            </div>
          </div>
          <div className="block-tier block-tier--resident">
            <div className="block-tier__content">
              <small>L GRADE</small>
              <strong>常駐人材</strong>
              <span>L等級 / 顧客の現場で実行する</span>
            </div>
          </div>
        </div>

        <div className="block-structure__notes">
          <article className="block-note">
            <b>01</b>
            <strong>統括</strong>
            <p>ブロック全体の方針をそろえ、顧客・メンバー間の連携をまとめます。</p>
          </article>
          <article className="block-note">
            <b>02</b>
            <strong>アドバイザー（A等級）</strong>
            <p>L等級の相談役となり、課題整理・品質・進め方をサポートします。</p>
          </article>
          <article className="block-note">
            <b>03</b>
            <strong>常駐人材（L等級）</strong>
            <p>顧客の現場に入り、業務を理解しながら改善を実行します。</p>
          </article>
          <div className="block-student-badge">
            <span aria-hidden="true">🎓</span>
            <div>
              <strong>全員、大学生。</strong>
              <small>統括・A等級・L等級の各役割を、大学生のメンバーが担います。</small>
            </div>
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
