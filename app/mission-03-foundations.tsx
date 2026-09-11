"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type IconName = "folder" | "file" | "cpu" | "gpu" | "memory" | "storage" | "cloud" | "gpt";

function TechIcon({ name }: { name: IconName }) {
  const common = { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true };

  if (name === "folder") return <svg {...common}><path d="M7 18a5 5 0 0 1 5-5h15l6 7h19a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V18Z"/><path d="M7 26h50"/></svg>;
  if (name === "file") return <svg {...common}><path d="M17 7h20l11 11v39H17V7Z"/><path d="M37 7v12h11M24 31h17M24 39h17M24 47h12"/></svg>;
  if (name === "cpu") return <svg {...common}><rect x="17" y="17" width="30" height="30" rx="5"/><rect x="25" y="25" width="14" height="14" rx="2"/><path d="M23 7v10M32 7v10M41 7v10M23 47v10M32 47v10M41 47v10M7 23h10M7 32h10M7 41h10M47 23h10M47 32h10M47 41h10"/></svg>;
  if (name === "gpu") return <svg {...common}><rect x="8" y="16" width="48" height="32" rx="6"/><circle cx="28" cy="32" r="11"/><circle cx="28" cy="32" r="4"/><path d="M43 25h7M43 32h7M43 39h7M14 48v7M22 48v7M30 48v7M38 48v7"/></svg>;
  if (name === "memory") return <svg {...common}><rect x="7" y="20" width="50" height="24" rx="4"/><rect x="15" y="26" width="8" height="12" rx="1"/><rect x="28" y="26" width="8" height="12" rx="1"/><rect x="41" y="26" width="8" height="12" rx="1"/><path d="M15 44v6M23 44v6M31 44v6M39 44v6M47 44v6"/></svg>;
  if (name === "storage") return <svg {...common}><rect x="12" y="8" width="40" height="48" rx="7"/><circle cx="32" cy="28" r="11"/><circle cx="32" cy="28" r="3"/><path d="M20 47h16M42 47h2"/></svg>;
  if (name === "cloud") return <svg {...common}><path d="M20 48h29a10 10 0 0 0 1-20 16 16 0 0 0-30-5A12.5 12.5 0 0 0 20 48Z"/><path d="M32 25v15M26 31l6-6 6 6"/></svg>;
  return <svg {...common}><path d="M17 12h30a9 9 0 0 1 9 9v20a9 9 0 0 1-9 9H32l-11 8v-8h-4a9 9 0 0 1-9-9V21a9 9 0 0 1 9-9Z"/><path d="m32 20 2.8 6.2L41 29l-6.2 2.8L32 38l-2.8-6.2L23 29l6.2-2.8L32 20Z"/></svg>;
}

const hardware = [
  { key: "cpu", label: "CPU", role: "司令塔", text: "少数の複雑な処理を、順番にすばやく進める。アプリの操作やOS全体の処理を担当。", analogy: "1人の優秀なリーダー" },
  { key: "gpu", label: "GPU", role: "大量作業班", text: "同じ種類の計算を大量に並列処理する。画像・映像・3D・AIの計算が得意。", analogy: "同じ作業をする大人数のチーム" },
  { key: "memory", label: "MEMORY", role: "作業机", text: "今開いているアプリやデータを一時的に置く場所。広いほど同時作業に強い。電源を切ると消える。", analogy: "作業中だけ使う机の広さ" },
  { key: "storage", label: "STORAGE", role: "本棚", text: "SSDなど、ファイルを長く保存する場所。電源を切っても残る。容量はGB・TBで考える。", analogy: "書類をしまっておく本棚" },
] as const;

export default function Mission03Foundations() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-03"));
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="m03-upgrade">
      <div className="m03u-meta"><span>MISSION 03 / 08</span><b>FOUNDATION</b></div>

      <header className="m03u-hero">
        <div>
          <p>PC BASICS — START FROM ZERO</p>
          <h2>IT・PCの基礎を、<br/><em>「机」に置き換えて理解する。</em></h2>
          <p className="m03u-lead">ファイルとフォルダ → ローカルとクラウド → CPU / GPU → メモリ → ストレージ。まずは「データの形」と「保存場所」を分けて考えます。</p>
        </div>
        <div className="m03u-desk" aria-hidden="true">
          <div className="desk-folder"><TechIcon name="folder"/><span>仕事</span></div>
          <div className="desk-file file-a"><TechIcon name="file"/><span>資料.pdf</span></div>
          <div className="desk-file file-b"><TechIcon name="file"/><span>売上.xlsx</span></div>
          <div className="desk-gpt"><TechIcon name="gpt"/><b>GPT</b></div>
        </div>
      </header>

      <section className="m03u-basics">
        <div className="m03u-section-title">
          <small>01 / DATA BASICS</small>
          <h3>「形」と「保存場所」は別もの。</h3>
          <p>ファイル / フォルダはデータの形、ローカル / クラウドは保存場所の違いです。混ぜずに2つに分けて理解します。</p>
        </div>

        <div className="m03u-basic-groups">
          <section className="m03u-basic-group">
            <div className="m03u-basic-group-head">
              <small>01-A / STRUCTURE</small>
              <h4>ファイルとフォルダ</h4>
              <p>「何を保存しているか」「どう整理しているか」の違いです。</p>
            </div>
            <div className="m03u-basic-cards m03u-basic-cards--pair">
              <article>
                <div className="m03u-icon folder"><TechIcon name="folder"/></div>
                <small>FOLDER</small><h4>ファイルをまとめる入れ物</h4>
                <p>「大学」「仕事」「写真」のように、関連するファイルを整理する箱。フォルダの中にフォルダも作れます。</p>
              </article>
              <article>
                <div className="m03u-icon file"><TechIcon name="file"/></div>
                <small>FILE</small><h4>中身を持つ1つのデータ</h4>
                <p>PDF、Excel、画像、動画など。<code>.pdf</code> や <code>.xlsx</code> の末尾は、ファイルの種類を表します。</p>
              </article>
            </div>
          </section>

          <section className="m03u-basic-group">
            <div className="m03u-basic-group-head">
              <small>01-B / LOCATION</small>
              <h4>ローカルとクラウド</h4>
              <p>同じファイルでも、「どこに保存しているか」で扱い方が変わります。</p>
            </div>
            <div className="m03u-basic-cards m03u-basic-cards--pair">
              <article>
                <div className="m03u-icon local"><TechIcon name="storage"/></div>
                <small>LOCAL</small><h4>自分のPC本体に保存</h4>
                <p>デスクトップ、Downloads、Documents、内蔵SSDなど。このPCのストレージに保存され、基本的にはその端末から使います。</p>
              </article>
              <article>
                <div className="m03u-icon cloud"><TechIcon name="cloud"/></div>
                <small>CLOUD</small><h4>インターネット上に保存</h4>
                <p>Google Drive、OneDrive、iCloudなど。オンラインに保存され、別の端末から開いたり、他の人と共有したりできます。</p>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="m03u-hardware">
        <div className="m03u-section-title">
          <small>02 / INSIDE THE PC</small>
          <h3>CPU・GPU・メモリ・ストレージの違い。</h3>
          <p>名前を暗記するより、「会社の仕事場」に置き換えると役割が見えます。</p>
        </div>
        <div className="m03u-hardware-grid">
          {hardware.map((item, index) => (
            <article key={item.key} className={`hw-card hw-${item.key}`}>
              <div className="hw-top"><span>0{index + 1}</span><div className="m03u-icon"><TechIcon name={item.key}/></div></div>
              <small>{item.role}</small>
              <h4>{item.label}</h4>
              <p>{item.text}</p>
              <strong>{item.analogy}</strong>
            </article>
          ))}
        </div>
        <div className="m03u-memory-rule">
          <div><b>MEMORY</b><span>今使うもの</span><strong>速い / 一時的</strong></div>
          <i>↔</i>
          <div><b>STORAGE</b><span>あとで使うもの</span><strong>保存 / 長期的</strong></div>
        </div>
      </section>

      <aside className="m03u-final-check">
        <small>CAN YOU EXPLAIN IT?</small>
        <strong>「ファイルとフォルダ」「ローカルとクラウド」「メモリとストレージ」の違いを、自分の言葉で説明できる。</strong>
      </aside>
    </div>,
    target,
  );
}