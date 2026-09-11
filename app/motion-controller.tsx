"use client";

import { useEffect, useState } from "react";

export default function MotionController() {
  const [paused, setPaused] = useState(false);

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
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={paused}
      onClick={() => setPaused((value) => !value)}
    >
      <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
      {paused ? "MOTION ON" : "MOTION OFF"}
    </button>
  );
}
