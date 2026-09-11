import MotionController from "./motion-controller";

type Mission = {
  n: string;
  group: string;
  title: string;
  lead: string;
  future: string;
  copy: string;
  points: string[];
  explain: string;
  example: string;
  check: string;
};

const missions: Mission[] = [
  {
    n: "01",
    group: "DISCOVER",
    title: "VEXUMとは",
    lead: "現場に近いところで、仕事が実際に変わるまで支える。",
    future: "課題を見つけ、変化を生み出す仕事の入口",
    copy: "VEXUMの仕事は、AIやシステムを売ることそのものではありません。顧客の仕事を見て、困りごとを整理し、時間・品質・コストをより良くすることが目的です。",
    points: ["聞く・観察する", "課題を整理する", "解決し、使ってもらう", "現場の声で改善する"],
    explain: "現場で使われて初めて改善は完成します。既存ツールの導入、設定、使い方の説明も、必要な解決策です。",
    example: "毎週の手作業集計を見つけたら、いきなり新しいシステムを作るのではなく、現場の流れを聞き、既存の表やツールで減らせる作業を考えます。",
    check: "VEXUMが『作ること』以外にどんな方法で顧客を支援できるか、1分で説明できる。",
  },
  {
    n: "02",
    group: "DISCOVER",
    title: "現在のVEXUM・働き方",
    lead: "学びながら、少しずつ実務へ近づく。",
    future: "顧客に価値を届けるまでの自分の道筋",
    copy: "AIへの理解を深める一番の近道は、自分で課題を設定し、実際に手を動かして試してみることです。世の中にはAIの活用方法を発信している人がたくさんいます。気になる活用例を見つけたら、分からない部分はAIに質問し、自分が理解できるレベルまで噛み砕きながら、自分の環境で構築・再現してみましょう。今日学んだことを持ち帰り、自分なりの課題で試し続けることが、AIを使いこなす力につながります。",
    points: ["セミナー", "技術研修", "NEXUS", "常駐開始"],
    explain: "常駐開始後も、最初から一人で全業務を担うわけではありません。相談とフィードバックを通じて、できることを増やします。",
    example: "AIを使う力だけでなく、業務を理解する、課題を発見する、改善案を伝える力が、少しずつ実務につながります。",
    check: "セミナー後から常駐開始までの順序と、自分が次に学ぶことを説明できる。",
  },
  {
    n: "03",
    group: "FOUNDATION",
    title: "IT・PCの基礎",
    lead: "データがどこにあり、どう動くかをつかむ。",
    future: "安全に情報を扱い、仕事を止めない基礎力",
    copy: "PC、ファイル、クラウド、AIを別々の言葉として覚えるのではなく、データがどこにあり、どう移るかを考えます。",
    points: ["CPU — 処理する", "MEMORY — 作業中に置く", "STORAGE — 保存する", "アカウントと権限を確認"],
    explain: "画面で見えていることと、PC内に保存されていることは同じではありません。メモリは作業中に使う場所、ストレージはファイルを保存する場所です。",
    example: "ダウンロードフォルダの表をAIに要約させる場合、ファイルの場所、ログイン中のアカウント、渡してよい内容かを確認してから添付します。",
    check: "PC内・クラウド・共有されたファイルの違いと、AIへ渡す前の確認事項を説明できる。",
  },
  {
    n: "04",
    group: "INTELLIGENCE",
    title: "LLMとは何か",
    lead: "自然な文章と、正しい情報は別のもの。",
    future: "AIの強みと限界を見分ける判断力",
    copy: "LLMは大量の文章から言葉のパターンを学び、会話の流れに合う回答文を作る仕組みです。完成した正解を取り出しているわけではありません。",
    points: ["文章のパターンを学ぶ", "自然な答えを作る", "最新情報は確認する", "人が正しさを確かめる"],
    explain: "LLMは自然な文章を作れますが、最新情報や自分の資料を最初から知っているわけではありません。",
    example: "もっともらしい回答でも、日付・数字・引用・社内ルールは元資料や公式情報へ戻って確認します。",
    check: "自然な文章と正しい情報が別である理由を、自分の言葉で説明できる。",
  },
  {
    n: "05",
    group: "INTELLIGENCE",
    title: "生成AIツール",
    lead: "目的に合う使い方を選び、結果を確認する。",
    future: "AIを仕事のパートナーとして使う力",
    copy: "AIアプリは、LLMを中心に検索やファイル利用などを組み合わせています。製品名の暗記ではなく、何のために使うかを考えます。",
    points: ["文章・要約・整理", "比較・分析・計画", "Webで最新情報を確認", "資料を読ませて質問する"],
    explain: "通常の対話、時間をかけた検討、Web検索、ファイル利用は目的が違います。AIが自動で最新情報を調べるとは限りません。",
    example: "社内資料を要約するならファイル利用、最新の制度を調べるならWeb検索を選び、どちらも元の情報で確認します。",
    check: "通常対話・検索・ファイル利用を、どんな目的で使い分けるか説明できる。",
  },
  {
    n: "06",
    group: "CREATE",
    title: "言語化・要件整理",
    lead: "頭の中のイメージを、作業できる条件に変える。",
    future: "相手とAIに、仕事を正確に伝える力",
    copy: "良い指示は魔法の一文ではありません。目的と条件を具体的にし、AIと対話しながら不足を埋め、完成物を人が評価します。",
    points: ["目的 — 何を良くするか", "利用者・場面", "必要な機能・情報", "完成条件"],
    explain: "AIに不足情報を質問させ、対話で具体化することも重要です。最初から完璧な指示を書く必要はありません。",
    example: "家計簿アプリなら、誰が使うか、何を記録するか、保存先、スマホでの入力の速さ、不要な機能まで決めます。",
    check: "曖昧な依頼を、目的・利用者・条件・完成条件に分けて整理できる。",
  },
  {
    n: "07",
    group: "BUILD",
    title: "AIエージェント / バイブコーディング",
    lead: "言葉だけで、使えるWebアプリをつくれ。",
    future: "AIと一緒に、小さな改善を形にする力",
    copy: "前のミッションで整理した家計簿アプリの要件を使い、AIに小さなWebアプリを作らせます。コードの暗記ではなく、実際に触り、改善を言葉にすることが目的です。",
    points: ["DEFINE — 要件を渡す", "BUILD — AIに作らせる", "TRY — 実際に触る", "IMPROVE — 修正を伝える"],
    explain: "AIエージェントは、許可された範囲で回答だけでなく作業まで進める場合があります。だからこそ、人が確認する場所を残します。",
    example: "作られたアプリをスマホで触り、入力しづらい・不要な機能がある・保存先が違う点を具体的に伝えて改善します。",
    check: "AIが作ったものをそのまま完成扱いにせず、確認・改善する理由を説明できる。",
  },
  {
    n: "08",
    group: "CHANGE",
    title: "最低限のAIセキュリティ",
    lead: "何を渡すか、何を信じるか、何を操作させるか。",
    future: "信頼される変化を、責任を持って届ける",
    copy: "AIを使わないためではなく、何を渡すか、何を信じるか、何を操作させるかを確認しながら安全に使います。",
    points: ["INPUT — 渡す前に確認", "OUTPUT — 回答を確かめる", "ACTION — 人が承認する", "最新ポリシーを優先する"],
    explain: "顧客情報、個人情報、機密、パスワード、認証コードは入力前に確認します。外部操作では必要以上の権限を渡しません。",
    example: "Webページ内の『指示を無視して情報を送る』という文章は、資料の一部であり、信頼できる業務指示ではありません。",
    check: "入力前・利用中・共有前に確認することを、具体例とともに説明できる。",
  },
];

const m = (n: number) => missions[n - 1];

function Meta({ mission }: { mission: Mission }) {
  return (
    <div className="mission-meta" data-reveal>
      <span>MISSION {mission.n} / 08</span>
      <span>{mission.group}</span>
    </div>
  );
}

function Check({ mission }: { mission: Mission }) {
  return (
    <aside className="check-block" data-reveal>
      <small>CAN YOU EXPLAIN IT?</small>
      <strong>{mission.check}</strong>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="experience" id="top">
      <MotionController />
      <div className="scroll-progress" aria-hidden="true" />
      <header className="floating-nav">
        <a className="brand" href="#top"><b>V</b><span>VEXUM</span><small>ACADEMY</small></a>
        <nav aria-label="Mission navigation">
          <a href="#journey">JOURNEY</a>
          <a href="#mission-01">01</a>
          <a href="#mission-04">04</a>
          <a href="#mission-08">08</a>
        </nav>
      </header>

      <section className="hero-cinematic">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">VEXUM ACADEMY — IT / AI / REAL WORK</p>
          <h1><span>AIで、</span><span>仕事の当たり前を</span><em>変える。</em></h1>
          <div className="hero-bottom">
            <p>知識を読むだけではなく、スクロールするたびに世界が切り替わる。8つのMISSIONで、ITとAIを仕事へつなげる。</p>
            <a href="#journey">ENTER THE JOURNEY <i>↘</i></a>
          </div>
        </div>
        <div className="hero-ghost" aria-hidden="true">CHANGE<br/>THE<br/>REAL</div>
      </section>

      <div className="ticker" aria-hidden="true"><div>DISCOVER ✦ FOUNDATION ✦ INTELLIGENCE ✦ CREATE ✦ BUILD ✦ CHANGE ✦ DISCOVER ✦ FOUNDATION ✦ INTELLIGENCE ✦ CREATE ✦ BUILD ✦ CHANGE ✦</div></div>

      <section className="manifesto" id="journey">
        <div className="manifesto-photo" aria-hidden="true" />
        <div className="manifesto-copy" data-reveal>
          <p className="eyebrow">THE JOURNEY</p>
          <h2>今日知る。<br/>今日使う。<br/><em>自分のものにする。</em></h2>
        </div>
        <div className="manifesto-note glass" data-reveal>
          <p>AIへの解像度を高める一番の近道は、自分の手で使うことです。セミナーで学んだことをきっかけに、AIに触れば触るほど、理解は深まります。AIの進化は日進月歩。今日学んだことが、すべてではありません。</p>
          <strong>LEARN → USE → QUESTION → BUILD</strong>
        </div>
      </section>

      <nav className="mission-index" aria-label="All missions">
        <p className="eyebrow">YOUR MISSION PATH</p>
        {missions.map((mission, index) => (
          <a href={`#mission-${mission.n}`} key={mission.n} data-reveal style={{ "--i": index } as React.CSSProperties}>
            <b>{mission.n}</b><span>{mission.group}</span><strong>{mission.title}</strong><i>↘</i>
          </a>
        ))}
      </nav>

      <section className="mission m01" id="mission-01">
        <div className="m01-photo" aria-hidden="true" />
        <div className="m01-shade" aria-hidden="true" />
        <div className="m01-content">
          <Meta mission={m(1)} />
          <div className="m01-title" data-reveal><p>FIELD-LED CHANGE</p><h2>{m(1).title}</h2><h3>{m(1).lead}</h3></div>
          <div className="m01-statement glass" data-reveal><small>身につく力</small><strong>{m(1).future}</strong><p>{m(1).copy}</p></div>
          <div className="orbit-flow" data-reveal>
            <svg viewBox="0 0 1000 290" aria-hidden="true"><path d="M40 190 C180 30 330 260 470 120 S770 40 950 170" /></svg>
            {m(1).points.map((point, index) => <div key={point} className={`orbit-node n${index + 1}`}><b>0{index + 1}</b><span>{point}</span></div>)}
          </div>
          <div className="m01-detail" data-reveal><p>現場で使われて初めて改善は完成します。<br/>既存ツールの導入、設定、使い方の説明も、必要な解決策です。</p><blockquote>{m(1).example}</blockquote></div>
        </div>
      </section>

      <section className="mission m02" id="mission-02">
        <div className="m02-photo" aria-hidden="true" />
        <div className="m02-station-label" aria-hidden="true"><span>NEXT</span><b>02</b><small>CAREER LINE</small></div>
        <div className="m02-panel">
          <Meta mission={m(2)} />
          <h2 data-reveal>{m(2).lead}</h2>
          <p className="lead" data-reveal>{m(2).copy}</p>
          <ol className="career-line">
            {m(2).points.map((point, index) => <li key={point} data-reveal><b>0{index + 1}</b><span>{point}</span><small>{index === 0 ? "START" : index === 3 ? "FIELD" : "NEXT"}</small></li>)}
          </ol>
          <div className="m02-caption glass" data-reveal><strong>{m(2).future}</strong><p>{m(2).explain}</p></div>
          <Check mission={m(2)} />
        </div>
      </section>

      <section className="mission m03" id="mission-03">
        <div className="tech-grid" aria-hidden="true" />
        <Meta mission={m(3)} />
        <div className="m03-head" data-reveal><span>DATA HAS A PLACE.</span><h2>{m(3).title}</h2><p>{m(3).lead}</p></div>
        <div className="data-machine" data-reveal>
          <div className="data-beam" />
          {m(3).points.map((point, index) => <div className={`machine-node node-${index + 1}`} key={point}><b>0{index + 1}</b><span>{point}</span><i /></div>)}
        </div>
        <div className="m03-bottom"><div data-reveal><small>WHY</small><p>{m(3).copy}</p></div><div data-reveal><small>REAL SCENE</small><p>{m(3).example}</p></div><Check mission={m(3)} /></div>
      </section>

      <section className="mission m04" id="mission-04">
        <div className="token-rain" aria-hidden="true"><span>predict</span><span>context</span><span>next</span><span>token</span><span>language</span><span>probability</span><span>answer</span><span>verify</span></div>
        <Meta mission={m(4)} />
        <div className="m04-copy" data-reveal><p>NEXT TOKEN / NOT THE TRUTH</p><h2>{m(4).lead}</h2><strong>{m(4).future}</strong></div>
        <div className="token-sentence" aria-label="AI generates words one by one">
          {m(4).points.map((point, index) => <span key={point} style={{ "--d": `${index * .24}s` } as React.CSSProperties}>{point}</span>)}
        </div>
        <div className="m04-facts"><p data-reveal>{m(4).copy}</p><p data-reveal>{m(4).explain}</p><blockquote data-reveal>{m(4).example}</blockquote></div>
        <Check mission={m(4)} />
      </section>

      <section className="mission m05" id="mission-05">
        <Meta mission={m(5)} />
        <div className="m05-title" data-reveal><p>CHOOSE THE MODE</p><h2>{m(5).title}</h2><strong>{m(5).lead}</strong></div>
        <div className="ai-orbit" data-reveal>
          <div className="ai-core"><small>YOUR<br/>PURPOSE</small><b>AI</b></div>
          {m(5).points.map((point, index) => <div key={point} className={`mode mode-${index + 1}`}><b>0{index + 1}</b><span>{point}</span></div>)}
          <div className="orbit-ring r1"/><div className="orbit-ring r2"/>
        </div>
        <div className="m05-explain glass" data-reveal><strong>{m(5).future}</strong><p>{m(5).copy}</p><p>{m(5).explain}</p></div>
        <Check mission={m(5)} />
      </section>

      <section className="mission m06" id="mission-06">
        <Meta mission={m(6)} />
        <div className="m06-intro" data-reveal><p>MAKE THE INVISIBLE SPECIFIC.</p><h2>{m(6).lead}</h2><span>{m(6).copy}</span></div>
        <div className="requirement-stack">
          {m(6).points.map((point, index) => <article key={point} className={`req-sheet sheet-${index + 1}`} data-reveal><small>0{index + 1} / REQUIREMENT</small><h3>{point}</h3><p>{index === 0 ? "曖昧な希望を、仕事として評価できる目的に変える。" : index === 1 ? "誰が、いつ、どこで使うかを固定する。" : index === 2 ? "必要なものと、今回は作らないものを分ける。" : "何ができれば完成なのかを先に決める。"}</p></article>)}
        </div>
        <div className="m06-footer" data-reveal><blockquote>{m(6).example}</blockquote><p>{m(6).explain}</p></div>
        <Check mission={m(6)} />
      </section>

      <section className="mission m07" id="mission-07">
        <Meta mission={m(7)} />
        <div className="m07-hero" data-reveal><p>FINAL BUILD MISSION</p><h2>{m(7).title}</h2><strong>{m(7).lead}</strong></div>
        <div className="build-track" data-reveal>
          <div className="track-line" />
          {m(7).points.map((point, index) => <article key={point}><b>0{index + 1}</b><small>{point.split(" — ")[0]}</small><h3>{point.split(" — ")[1]}</h3><i>→</i></article>)}
        </div>
        <div className="m07-copy"><p data-reveal>{m(7).copy}</p><p data-reveal>{m(7).explain}</p><blockquote data-reveal>{m(7).example}</blockquote></div>
        <Check mission={m(7)} />
      </section>

      <section className="mission m08" id="mission-08">
        <div className="security-scan" aria-hidden="true" />
        <Meta mission={m(8)} />
        <div className="m08-title" data-reveal><p>THREE CHECKPOINTS</p><h2>{m(8).lead}</h2><strong>{m(8).future}</strong></div>
        <div className="security-gate" data-reveal>
          <div className="gate-ring ring-a"/><div className="gate-ring ring-b"/><div className="gate-ring ring-c"/>
          {m(8).points.slice(0,3).map((point, index) => <div className={`checkpoint cp-${index + 1}`} key={point}><b>0{index + 1}</b><span>{point}</span></div>)}
          <div className="gate-core"><small>HUMAN</small><b>CHECK</b></div>
        </div>
        <div className="m08-notes"><p data-reveal>{m(8).copy}</p><p data-reveal>{m(8).explain}</p><blockquote data-reveal>{m(8).example}</blockquote></div>
        <Check mission={m(8)} />
      </section>

      <footer className="finale">
        <div data-reveal><small>YOU ARE AT THE START.</small><h2>知ったら、<br/><em>使ってみる。</em></h2><a href="#top">BACK TO THE TOP ↑</a></div>
        <span aria-hidden="true">VEXUM</span>
      </footer>
    </main>
  );
}