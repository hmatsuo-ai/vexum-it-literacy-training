"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Candidate = { label: string; probability: number; active?: boolean };
type Stage = { step: string; hint: string; candidates: Candidate[] };

const stages: Stage[] = [
  {
    step: "01",
    hint: "文のはじまり",
    candidates: [
      { label: "僕", probability: 46 },
      { label: "私", probability: 54, active: true },
    ],
  },
  {
    step: "02",
    hint: "次に続きそうな語",
    candidates: [
      { label: "は", probability: 72, active: true },
      { label: "が", probability: 21 },
      { label: "も", probability: 7 },
    ],
  },
  {
    step: "03",
    hint: "文脈から候補が変わる",
    candidates: [
      { label: "コーラ", probability: 24 },
      { label: "お茶", probability: 29 },
      { label: "コーヒー", probability: 47, active: true },
    ],
  },
  {
    step: "04",
    hint: "助詞も確率で予測",
    candidates: [
      { label: "を", probability: 81, active: true },
      { label: "が", probability: 12 },
      { label: "は", probability: 7 },
    ],
  },
  {
    step: "05",
    hint: "最後まで同じことを繰り返す",
    candidates: [
      { label: "飲む", probability: 76, active: true },
      { label: "食べる", probability: 18 },
      { label: "焼く", probability: 6 },
    ],
  },
];

export default function Mission04Probability() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-04"));
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="m04-prob" aria-labelledby="m04-prob-title">
      <header className="m04-prob__head">
        <div>
          <small>PROBABILITY TRANSITION</small>
          <h3 id="m04-prob-title">LLMは、<br/><em>次の候補に確率をつける。</em></h3>
        </div>
        <div className="m04-prob__explain">
          <p>文章を一気に完成させるのではありません。直前までの文脈から、<strong>次に続きそうな候補それぞれに確率を割り当て、1つ選び、また次を予測する</strong>ことを繰り返します。</p>
          <p className="m04-prob__token-note">※ 厳密には「単語」ではなく、単語の一部を含む <b>トークン</b> 単位で予測します。下の確率は仕組みを説明するための例です。</p>
        </div>
      </header>

      <div className="m04-prob__sentence" aria-label="選ばれた例文">
        <span>私</span><i>→</i><span>は</span><i>→</i><span>コーヒー</span><i>→</i><span>を</span><i>→</i><span>飲む</span>
      </div>

      <div className="m04-prob__flow">
        {stages.map((stage, stageIndex) => (
          <div className="m04-prob__stage" key={stage.step} style={{ "--stage": stageIndex } as React.CSSProperties}>
            <div className="m04-prob__stage-head">
              <b>{stage.step}</b>
              <span>{stage.hint}</span>
            </div>
            <div className="m04-prob__candidates">
              {stage.candidates.map((candidate, candidateIndex) => (
                <div
                  className={`m04-prob__candidate${candidate.active ? " is-active" : ""}`}
                  key={candidate.label}
                  style={{ "--p": `${candidate.probability}%`, "--candidate": candidateIndex } as React.CSSProperties}
                >
                  <div><strong>{candidate.label}</strong><small>{candidate.probability}%</small></div>
                  <span><i /></span>
                </div>
              ))}
            </div>
            {stageIndex < stages.length - 1 && <div className="m04-prob__next" aria-hidden="true">→</div>}
          </div>
        ))}
      </div>

      <div className="m04-prob__loop">
        <b>CONTEXT</b>
        <span>「私」</span><i>→</i>
        <span>「私は」</span><i>→</i>
        <span>「私はコーヒー」</span><i>→</i>
        <span>「私はコーヒーを」</span><i>→</i>
        <strong>また次を予測</strong>
      </div>

      <aside className="m04-prob__point">
        <small>POINT</small>
        <p>だから、LLMの回答は<strong>「知っている正解を取り出す」</strong>というより、<strong>「文脈に合いそうな続きを確率的につなぐ」</strong>ことで作られます。</p>
      </aside>
    </section>,
    target,
  );
}
