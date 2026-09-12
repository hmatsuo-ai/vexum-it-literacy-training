"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const vectorRows = [
  { word: "コーヒー", vector: "[ 0.82, -0.14, 0.63, … ]", kind: "drink" },
  { word: "お茶", vector: "[ 0.79, -0.10, 0.59, … ]", kind: "drink" },
  { word: "コーラ", vector: "[ 0.73, -0.06, 0.51, … ]", kind: "drink" },
  { word: "車", vector: "[-0.31,  0.72, -0.08, … ]", kind: "vehicle" },
] as const;

const points = [
  { word: "コーヒー", x: 28, y: 30, group: "drink" },
  { word: "お茶", x: 38, y: 37, group: "drink" },
  { word: "コーラ", x: 24, y: 48, group: "drink" },
  { word: "水", x: 44, y: 51, group: "drink" },
  { word: "車", x: 73, y: 67, group: "vehicle" },
  { word: "電車", x: 82, y: 57, group: "vehicle" },
] as const;

export default function Mission04Embeddings() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-04"));
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="m04-embed" aria-labelledby="m04-embed-title">
      <header className="m04-embed__head">
        <div>
          <small>WORD VECTOR / EMBEDDING</small>
          <h3 id="m04-embed-title">言葉を、<br/><em>数の並びに変える。</em></h3>
        </div>
        <div className="m04-embed__intro">
          <p>コンピュータは「コーヒー」という文字そのものの意味を直接理解しているわけではありません。LLMでは、まず文字列を<strong>トークン</strong>に分け、それぞれを<strong>ベクトル＝たくさんの数値</strong>に変換して計算します。</p>
          <p>似た場面で使われるトークンほど、ベクトル空間でも近い位置になりやすく、モデルはこの数値の関係を使って文章を処理します。</p>
        </div>
      </header>

      <div className="m04-embed__board">
        <div className="m04-embed__vectors">
          <div className="m04-embed__label"><span>TEXT</span><i>→</i><span>VECTOR</span></div>
          {vectorRows.map((row, index) => (
            <div className={`m04-embed__row ${row.kind}`} key={row.word} style={{ "--row": index } as React.CSSProperties}>
              <strong>{row.word}</strong>
              <i>→</i>
              <code>{row.vector}</code>
            </div>
          ))}
          <p>実際のベクトルは、この図の3個ではなく<strong>数百〜数千個規模の数値</strong>を持ちます。</p>
        </div>

        <div className="m04-embed__space" aria-label="意味が近い言葉ほどベクトル空間でも近くなるイメージ">
          <div className="m04-embed__axis x">意味の方向 A →</div>
          <div className="m04-embed__axis y">意味の方向 B →</div>
          <div className="m04-embed__cluster drink">DRINK</div>
          <div className="m04-embed__cluster vehicle">VEHICLE</div>
          {points.map((point, index) => (
            <div
              className={`m04-embed__point ${point.group}`}
              key={point.word}
              style={{ left: `${point.x}%`, top: `${point.y}%`, "--point": index } as React.CSSProperties}
            >
              <i />
              <span>{point.word}</span>
            </div>
          ))}
          <svg viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <path className="near" d="M280 180 C315 190 345 205 380 222" />
            <path className="near" d="M380 222 C400 245 420 275 440 306" />
            <path className="far" d="M440 306 C570 350 650 370 730 402" />
          </svg>
        </div>
      </div>

      <div className="m04-embed__reading">
        <article>
          <small>NEAR</small>
          <strong>近い言葉</strong>
          <p>「コーヒー」「お茶」「コーラ」は、飲み物として似た文脈で登場しやすいため、数値表現も近くなりやすい。</p>
        </article>
        <article>
          <small>FAR</small>
          <strong>遠い言葉</strong>
          <p>「コーヒー」と「車」は使われ方がかなり違うため、ベクトル空間では離れた位置になりやすい。</p>
        </article>
        <article className="context">
          <small>CONTEXT</small>
          <strong>文脈で表現は変わる</strong>
          <p>これは入口の説明です。実際のLLMでは、最初の埋め込みベクトルを出発点に、周囲のトークンとの関係を計算しながら<strong>文脈に応じた内部表現</strong>へ更新していきます。</p>
        </article>
      </div>

      <aside className="m04-embed__point-note">
        <small>POINT</small>
        <p><strong>言葉を数値に変換する</strong>からこそ、「どの言葉と近いか」「この文脈では何と関係が強いか」を数学的に計算できます。その計算結果が、次のトークンの確率予測につながります。</p>
        <span>※ 右の2Dマップと数値は仕組みを説明するための模式図です。</span>
      </aside>
    </section>,
    target,
  );
}
