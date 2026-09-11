"use client";

import { useEffect, useState } from "react";

type Chapter = { id: string; no: string; title: string; lead: string; body: React.ReactNode };

const chapters: Chapter[] = [
  { id: "about", no: "01", title: "VEXUMとは", lead: "現場に近いところで、仕事が実際に変わるまで支える。", body: <>
    <p>VEXUMの仕事は、AIやシステムを売ることそのものではありません。顧客の仕事を見て、困りごとを整理し、時間・品質・コストをより良くすることが目的です。</p>
    <div className="flow">聞く <i>→</i> 観察する <i>→</i> 課題を整理する <i>→</i> 解決手段を選ぶ <i>→</i> 導入・開発する <i>→</i> 使ってもらう <i>→</i> 改善する</div>
    <h2>つくることだけが解決ではない</h2><p>既存ツールの選定・導入・設定、使い方の説明、現場の声を受けた改善も大切な仕事です。成果は「導入した」ことではなく、現場で使われて仕事が変わったことです。</p>
    <aside><b>考えてみよう</b><br />VEXUMが現場に近い位置で支援するのは、なぜでしょうか。</aside>
  </> },
  { id: "roadmap", no: "02", title: "現在のVEXUM・働き方", lead: "学びながら、少しずつ実務へ近づく。", body: <>
    <p>セミナーは、実務人材を完成させる場所ではありません。仕事とAI活用の面白さを知り、次の研修へ進むための入口です。</p>
    <div className="roadmap"><span>セミナー</span><b>→</b><span>テスト</span><b>→</b><span>雇用契約</span><b>→</b><span>技術研修</span><b>→</b><span>NEXUS Gate 10</span><b>→</b><span>常駐開始</span></div>
    <h2>成長のイメージ</h2><p>AIを使う → 業務を理解する → 課題を発見する → 改善案を考える → 実装する → 顧客に価値を出す。</p>
    <aside><b>ここでのポイント</b><br />最初から一人で全てを担うわけではありません。相談とフィードバックを通して、できることを増やしていきます。</aside>
  </> },
  { id: "it", no: "03", title: "IT・PCの基礎", lead: "データがどこにあり、どう動くかをつかむ。", body: <>
    <div className="grid two"><section><h2>PCの中の役割</h2><dl><dt>CPU</dt><dd>計算・処理をする部分</dd><dt>メモリ</dt><dd>作業中の情報を一時的に置く場所</dd><dt>ストレージ</dt><dd>ファイルを保存する場所</dd><dt>OS</dt><dd>PC全体を動かす基本ソフト</dd></dl></section><section><h2>覚えておきたいこと</h2><p><b>メモリ</b>と<b>保存容量</b>は別物です。画面で見えていることと、PC内に保存されていることも同じではありません。</p></section></div>
    <h2>PC・クラウド・AIのつながり</h2><p>PC内のファイル、クラウド上のファイル、ダウンロードしたコピー、共有されたファイルはそれぞれ扱いが違います。AIが最初から自分のファイルを見られるわけではありません。文章入力・ファイル添付・検索・接続などで、必要な情報を渡します。</p>
    <table><thead><tr><th>やりたいこと</th><th>Google</th><th>Microsoft</th></tr></thead><tbody><tr><td>文書</td><td>Googleドキュメント</td><td>Word</td></tr><tr><td>表</td><td>スプレッドシート</td><td>Excel</td></tr><tr><td>保存</td><td>Drive</td><td>OneDrive / SharePoint</td></tr></tbody></table>
    <aside><b>確認</b><br />表ファイルをAIに要約させる前に、「ファイルはどこにあるか」「今のアカウントでよいか」「渡してよい情報か」を確認します。</aside>
  </> },
  { id: "llm", no: "04", title: "LLMとは何か", lead: "自然な文章と、正しい情報は別のもの。", body: <>
    <p>LLMは、大量の文章から言葉の使われ方や文章のパターンを学び、会話の流れに合う回答文を作る仕組みです。巨大な正解データベースから完成した答えを取り出しているわけではありません。</p>
    <div className="grid three"><section><strong>自然な文章</strong><p>言葉のつながりや質問と回答のパターンを学んでいます。</p></section><section><strong>知らないこと</strong><p>最新情報や、自分の資料を最初から知っているわけではありません。</p></section><section><strong>間違い</strong><p>情報が不足していても、もっともらしい文章を作ることがあります。</p></section></div>
    <aside><b>大切な判断</b><br />文章が自然であることと、内容が正しいことは別です。重要な内容は元の資料や信頼できる情報で確認します。</aside>
  </> },
  { id: "tools", no: "05", title: "生成AIツール", lead: "目的に合う使い方を選び、結果を確認する。", body: <>
    <p>ChatGPTやClaudeなどのAIアプリは、LLMを中心に、検索やファイル利用などの機能を組み合わせています。製品名や画面の暗記ではなく、何のために使うかを考えます。</p>
    <div className="grid two"><section><h2>代表的な使い方</h2><ul><li>質問・文章作成・要約・整理</li><li>時間をかけた比較・分析・計画</li><li>Webを使った最新情報の確認</li><li>PDF・文書・表を渡して要約や比較</li></ul></section><section><h2>外部サービスとの接続</h2><p>許可された範囲で、AIが外部サービスの情報を使える場合があります。接続するアカウント、読める情報、変更できる範囲を必ず確認します。</p></section></div>
    <p>NotebookLMは、指定した資料を中心に質問・要約・比較する使い方の一例です。使える機能は時期や製品で変わるため、公開前に確認します。</p>
  </> },
  { id: "requirements", no: "06", title: "言語化・要件整理", lead: "頭の中のイメージを、作業できる条件に変える。", body: <>
    <p>良い指示は「魔法の一文」ではありません。目的と条件を具体的にし、AIと対話しながら不足を埋め、完成物を人が評価します。</p>
    <ol className="checklist"><li>目的 — 何を良くしたいか</li><li>利用者・場面 — 誰が、いつ使うか</li><li>必要な機能・情報 — 何ができればよいか</li><li>優先順位・制約 — 何を大事にし、何をしないか</li><li>完成条件 — どんな状態なら使えるか</li></ol>
    <aside><b>ワーク：家計簿アプリの要件をつくる</b><br />「スマホで使いやすい家計簿Webアプリを作りたい」から、利用者・記録する内容・保存先・必要な画面・不要な機能・完成条件を具体化します。次の章でこの要件を使います。</aside>
  </> },
  { id: "agent", no: "07", title: "AIエージェント / バイブコーディング", lead: "作らせて終わりにせず、実際に使って改善する。", body: <>
    <div className="grid two"><section><h2>対話型AI</h2><p>質問に答える、文章を作る、考えを整理するなど、会話を中心に使います。</p></section><section><h2>AIエージェント</h2><p>許可された範囲で、ファイルを扱う・Webを操作する・処理を実行するなど、回答だけでなく作業まで進める場合があります。</p></section></div>
    <h2>ワークの流れ</h2><div className="flow">要件を渡す <i>→</i> AIに実装させる <i>→</i> 実際に触る <i>→</i> 使いにくさを見つける <i>→</i> 修正を伝える <i>→</i> 再確認する</div>
    <p>家計簿Webアプリは、GoogleスプレッドシートとGASなどを使った小さな例で体験します。目的はコードを暗記することではなく、要件を渡して、利用者として確認・改善することです。</p>
    <aside><b>必ず確認</b><br />動くか、要件どおりか、スマホで入力しやすいか、保存先は意図どおりか。送信・削除・重要変更は人が確認します。</aside>
  </> },
  { id: "security", no: "08", title: "最低限のAIセキュリティ", lead: "何を渡すか、何を信じるか、何を操作させるか。", body: <>
    <div className="grid two"><section><h2>AIへ渡す情報</h2><p>顧客情報、個人情報、機密情報、契約情報、パスワード、認証コード、秘密のキーは、入力前に渡してよいか確認します。</p></section><section><h2>AIの回答と操作</h2><p>もっともらしい間違いや誤った引用があり得ます。外部操作では、必要以上の権限を渡さず、アカウントと公開範囲を確認します。</p></section></div>
    <h2>Web・ファイル内の命令のような文章</h2><p>AIが調べているページやファイルには、AIへ何かをさせようとする文章が混ざることがあります。資料内の文は、信頼できる新しい業務指示とは限りません。元の目的と人からの指示を優先します。</p>
    <div className="security-flow">入力前に確認 <b>→</b> AIを利用 <b>→</b> 出力・操作内容を確認 <b>→</b> 人が承認 <b>→</b> 共有・実行</div>
    <aside><b>最後に</b><br />会社の最新ポリシーが、この教材より優先されます。</aside>
  </> }
];

export default function Home() {
  const [active, setActive] = useState(0); const [menu, setMenu] = useState(false); const [present, setPresent] = useState(false);
  const chapter = chapters[active];
  const go = (index: number) => { setActive(index); setMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (!present) return; if (e.key === "ArrowRight" && active < chapters.length - 1) go(active + 1); if (e.key === "ArrowLeft" && active > 0) go(active - 1); if (e.key === "Escape") setPresent(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); });
  return <main className={present ? "app presentation" : "app"}>
    <aside className={menu ? "sidebar open" : "sidebar"}><div className="brand"><span>V</span><div>VEXUM学園<small>ITリテラシー基礎講座</small></div></div><nav aria-label="教材の章一覧">{chapters.map((c, i) => <button key={c.id} className={i === active ? "active" : ""} onClick={() => go(i)}><em>{c.no}</em>{c.title}</button>)}</nav><div className="source">教材原本<br /><b>requirements/</b></div></aside>
    <section className="content"><header><button className="menu" aria-label="章一覧を開く" onClick={() => setMenu(!menu)}>☰</button><span>SEMINAR-CORE</span><div className="header-actions"><button onClick={() => setPresent(!present)}>{present ? "講師モードを終了" : "講師モード"}</button></div></header><article><p className="eyebrow">THEME {chapter.no}</p><h1>{chapter.title}</h1><p className="lead">{chapter.lead}</p><div className="lesson">{chapter.body}</div></article><footer><button onClick={() => go(active - 1)} disabled={active === 0}>← 前の章</button><span>{active + 1} / {chapters.length}</span><button onClick={() => go(active + 1)} disabled={active === chapters.length - 1}>次の章 →</button></footer></section>
  </main>;
}
