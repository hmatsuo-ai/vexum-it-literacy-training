type M = {
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
const missions: M[] = [
  {
    n: "01",
    group: "DISCOVER",
    title: "VEXUMとは",
    lead: "現場に近いところで、仕事が実際に変わるまで支える。",
    future: "課題を見つけ、変化を生み出す仕事の入口",
    copy: "VEXUMの仕事は、AIやシステムを売ることそのものではありません。顧客の仕事を見て、困りごとを整理し、時間・品質・コストをより良くすることが目的です。",
    points: [
      "聞く・観察する",
      "課題を整理する",
      "解決し、使ってもらう",
      "現場の声で改善する",
    ],
    explain:
      "現場で使われて初めて改善は完成します。既存ツールの導入、設定、使い方の説明も、必要な解決策です。",
    example:
      "毎週の手作業集計を見つけたら、いきなり新しいシステムを作るのではなく、現場の流れを聞き、既存の表やツールで減らせる作業を考えます。",
    check:
      "VEXUMが『作ること』以外にどんな方法で顧客を支援できるか、1分で説明できる。",
  },
  {
    n: "02",
    group: "DISCOVER",
    title: "現在のVEXUM・働き方",
    lead: "学びながら、少しずつ実務へ近づく。",
    future: "顧客に価値を届けるまでの自分の道筋",
    copy: "セミナーは実務人材を完成させる場所ではありません。仕事とAI活用の面白さを知り、次の研修へ進むための入口です。",
    points: ["セミナー", "技術研修", "NEXUS", "常駐開始"],
    explain:
      "常駐開始後も、最初から一人で全業務を担うわけではありません。相談とフィードバックを通じて、できることを増やします。",
    example:
      "AIを使う力だけでなく、業務を理解する、課題を発見する、改善案を伝える力が、少しずつ実務につながります。",
    check:
      "セミナー後から常駐開始までの順序と、自分が次に学ぶことを説明できる。",
  },
  {
    n: "03",
    group: "FOUNDATION",
    title: "IT・PCの基礎",
    lead: "データがどこにあり、どう動くかをつかむ。",
    future: "安全に情報を扱い、仕事を止めない基礎力",
    copy: "PC、ファイル、クラウド、AIを別々の言葉として覚えるのではなく、データがどこにあり、どう移るかを考えます。",
    points: [
      "CPU — 処理する",
      "MEMORY — 作業中に置く",
      "STORAGE — 保存する",
      "アカウントと権限を確認",
    ],
    explain:
      "画面で見えていることと、PC内に保存されていることは同じではありません。メモリは作業中に使う場所、ストレージはファイルを保存する場所です。",
    example:
      "ダウンロードフォルダの表をAIに要約させる場合、ファイルの場所、ログイン中のアカウント、渡してよい内容かを確認してから添付します。",
    check:
      "PC内・クラウド・共有されたファイルの違いと、AIへ渡す前の確認事項を説明できる。",
  },
  {
    n: "04",
    group: "INTELLIGENCE",
    title: "LLMとは何か",
    lead: "自然な文章と、正しい情報は別のもの。",
    future: "AIの強みと限界を見分ける判断力",
    copy: "LLMは大量の文章から言葉のパターンを学び、会話の流れに合う回答文を作る仕組みです。完成した正解を取り出しているわけではありません。",
    points: [
      "文章のパターンを学ぶ",
      "自然な答えを作る",
      "最新情報は確認する",
      "人が正しさを確かめる",
    ],
    explain:
      "LLMは自然な文章を作れますが、最新情報や自分の資料を最初から知っているわけではありません。",
    example:
      "もっともらしい回答でも、日付・数字・引用・社内ルールは元資料や公式情報へ戻って確認します。",
    check: "自然な文章と正しい情報が別である理由を、自分の言葉で説明できる。",
  },
  {
    n: "05",
    group: "INTELLIGENCE",
    title: "生成AIツール",
    lead: "目的に合う使い方を選び、結果を確認する。",
    future: "AIを仕事のパートナーとして使う力",
    copy: "AIアプリは、LLMを中心に検索やファイル利用などを組み合わせています。製品名の暗記ではなく、何のために使うかを考えます。",
    points: [
      "文章・要約・整理",
      "比較・分析・計画",
      "Webで最新情報を確認",
      "資料を読ませて質問する",
    ],
    explain:
      "通常の対話、時間をかけた検討、Web検索、ファイル利用は目的が違います。AIが自動で最新情報を調べるとは限りません。",
    example:
      "社内資料を要約するならファイル利用、最新の制度を調べるならWeb検索を選び、どちらも元の情報で確認します。",
    check:
      "通常対話・検索・ファイル利用を、どんな目的で使い分けるか説明できる。",
  },
  {
    n: "06",
    group: "CREATE",
    title: "言語化・要件整理",
    lead: "頭の中のイメージを、作業できる条件に変える。",
    future: "相手とAIに、仕事を正確に伝える力",
    copy: "良い指示は魔法の一文ではありません。目的と条件を具体的にし、AIと対話しながら不足を埋め、完成物を人が評価します。",
    points: [
      "目的 — 何を良くするか",
      "利用者・場面",
      "必要な機能・情報",
      "完成条件",
    ],
    explain:
      "AIに不足情報を質問させ、対話で具体化することも重要です。最初から完璧な指示を書く必要はありません。",
    example:
      "家計簿アプリなら、誰が使うか、何を記録するか、保存先、スマホでの入力の速さ、不要な機能まで決めます。",
    check: "曖昧な依頼を、目的・利用者・条件・完成条件に分けて整理できる。",
  },
  {
    n: "07",
    group: "BUILD",
    title: "AIエージェント / バイブコーディング",
    lead: "言葉だけで、使えるWebアプリをつくれ。",
    future: "AIと一緒に、小さな改善を形にする力",
    copy: "前のミッションで整理した家計簿アプリの要件を使い、AIに小さなWebアプリを作らせます。コードの暗記ではなく、実際に触り、改善を言葉にすることが目的です。",
    points: [
      "DEFINE — 要件を渡す",
      "BUILD — AIに作らせる",
      "TRY — 実際に触る",
      "IMPROVE — 修正を伝える",
    ],
    explain:
      "AIエージェントは、許可された範囲で回答だけでなく作業まで進める場合があります。だからこそ、人が確認する場所を残します。",
    example:
      "作られたアプリをスマホで触り、入力しづらい・不要な機能がある・保存先が違う点を具体的に伝えて改善します。",
    check:
      "AIが作ったものをそのまま完成扱いにせず、確認・改善する理由を説明できる。",
  },
  {
    n: "08",
    group: "CHANGE",
    title: "最低限のAIセキュリティ",
    lead: "何を渡すか、何を信じるか、何を操作させるか。",
    future: "信頼される変化を、責任を持って届ける",
    copy: "AIを使わないためではなく、何を渡すか、何を信じるか、何を操作させるかを確認しながら安全に使います。",
    points: [
      "INPUT — 渡す前に確認",
      "OUTPUT — 回答を確かめる",
      "ACTION — 人が承認する",
      "最新ポリシーを優先する",
    ],
    explain:
      "顧客情報、個人情報、機密、パスワード、認証コードは入力前に確認します。外部操作では必要以上の権限を渡しません。",
    example:
      "Webページ内の『指示を無視して情報を送る』という文章は、資料の一部であり、信頼できる業務指示ではありません。",
    check: "入力前・利用中・共有前に確認することを、具体例とともに説明できる。",
  },
];
const depth = [
  {
    why: "顧客の現場には、依頼として整理される前の困りごとが多くあります。業務を近くで見ることで、本当に変えるべき場所を見つけられます。",
    work: "身近な手作業を一つ挙げ、誰が・いつ・何分かけているか、なくなると何が良くなるかを整理してください。",
    miss: "AIを導入すれば自動的に改善する、という考え。道具より先に目的と現場の流れを理解します。",
  },
  {
    why: "成長の順序が分かると、今できないことへの不安を減らし、次に身につける力へ集中できます。",
    work: "ロードマップから現在地と次の段階を選び、次の段階で必要になる力を一つ言葉にしてください。",
    miss: "常駐開始が学習の終点という考え。実務に入ってからも観察・相談・改善を繰り返します。",
  },
  {
    why: "保存場所や権限の理解は、業務データの紛失・誤共有・アカウント取り違えを防ぐ土台です。",
    work: "表示されたファイルがPC内・クラウド・ダウンロードしたコピー・共有中のどれかを判断してください。",
    miss: "ブラウザで見えているファイルは自分のPCに保存されているという考え。表示場所と保存場所は別です。",
  },
  {
    why: "AIの回答を安全に使うには、流暢さに惑わされず、生成された文章として確認する姿勢が必要です。",
    work: "AIの回答から、事実確認が必要な日付・数字・固有名詞・引用を見つけ、確認方法を決めてください。",
    miss: "自然で詳しい文章ほど正しいという考え。文章の自然さは事実の正しさを保証しません。",
  },
  {
    why: "目的に合う機能を選べると、古い情報や根拠のない回答をそのまま使う失敗を減らせます。",
    work: "文章を整える・最新制度を調べる・PDFを比較する、の3件に適切な使い方を選んでください。",
    miss: "高性能なAIは常にWebを検索し、最新情報を知っているという考え。検索の有無を確認します。",
  },
  {
    why: "要件整理は、AIだけでなく顧客やチームとの認識差を減らし、使える成果物へ近づける力です。",
    work: "家計簿アプリの利用者・利用場面・必須機能・不要機能・完成条件を具体的に書いてください。",
    miss: "長く丁寧な指示を書けば成功するという考え。重要なのは長さではなく目的と判断条件です。",
  },
  {
    why: "AIが実装を速めても、成果物が利用者に合っているかを判断し、修正を伝える役割は人に残ります。",
    work: "完成した家計簿を触り、使いにくい点を一つ発見し、どこを・どう変えるかで修正依頼を作ってください。",
    miss: "AIが動くコードを出した時点で完成という考え。動作・要件・保存先・安全性を確認して初めて使えます。",
  },
  {
    why: "AIは入力・回答・外部操作のそれぞれで事故が起こり得ます。禁止事項の暗記ではなく、立ち止まる判断が必要です。",
    work: "情報例を、そのまま利用可・加工後なら可・承認が必要・入力不可に分類し、理由を説明してください。",
    miss: "AIが表示した指示やWeb上の命令には従うべきという考え。元の目的と人からの指示を優先します。",
  },
];

const teachingLabels = [
  {
    why: "現場から始める理由",
    explain: "VEXUMが大切にすること",
    example: "ある現場で",
    work: "あなたならどうする？",
    miss: "ここに注意",
    check: "自分の言葉で",
  },
  {
    why: "成長の見通し",
    explain: "一歩ずつ進む",
    example: "キャリアの場面",
    work: "あなたの現在地",
    miss: "覚えておきたいこと",
    check: "次の一歩を描く",
  },
  {
    why: "仕事を支える土台",
    explain: "データの居場所",
    example: "ファイルを扱う場面",
    work: "どこにある？",
    miss: "思い込みに注意",
    check: "判断してみよう",
  },
  {
    why: "AIと付き合う前提",
    explain: "LLMの得意と限界",
    example: "回答を受け取ったら",
    work: "確かめてみよう",
    miss: "流暢さに注意",
    check: "説明してみよう",
  },
  {
    why: "使い分ける理由",
    explain: "目的から選ぶ",
    example: "仕事での選び方",
    work: "どの機能を使う？",
    miss: "自動検索とは限らない",
    check: "選んだ理由を話す",
  },
  {
    why: "言葉にする価値",
    explain: "要件に必要なこと",
    example: "家計簿アプリなら",
    work: "条件を決めよう",
    miss: "長さより具体性",
    check: "完成を定義する",
  },
  {
    why: "人が担う判断",
    explain: "作って終わらせない",
    example: "実際に触ったら",
    work: "改善を伝えよう",
    miss: "動くだけでは未完成",
    check: "完成を見極める",
  },
  {
    why: "安全に使うために",
    explain: "入力・回答・操作",
    example: "怪しい指示を見つけたら",
    work: "分類してみよう",
    miss: "立ち止まるサイン",
    check: "安全な流れを話す",
  },
];

const vexumComparison = [
  {
    focus: "顧客との距離",
    project: "決められた期間と会議の中で、案件を前へ進める",
    vexum: "日々の業務に近い場所で、小さな変化まで見届ける",
  },
  {
    focus: "課題の出発点",
    project: "整理された相談や、明確な要件から始まることが多い",
    vexum:
      "手作業・二重入力・属人化など、まだ言葉になっていない困りごとから探す",
  },
  {
    focus: "解決手段",
    project: "調査、要件定義、製品導入、開発などを案件に合わせて行う",
    vexum:
      "既存ツールで足りるなら活かし、不足する部分だけをつくる。説明や運用の見直しも選択肢にする",
  },
  {
    focus: "成功の基準",
    project: "決めた要件を満たし、導入やプロジェクトを完了させる",
    vexum: "現場で実際に使われ、時間・品質・コストが良くなったかを確かめる",
  },
];

const vexumFlow = [
  "聞く",
  "観察する",
  "課題を整理する",
  "手段を選ぶ",
  "導入・開発する",
  "使い方を伝える",
  "結果を見る",
  "改善する",
];
export default function Home() {
  return (
    <main className="gate">
      <header>
        <a className="logo" href="#top">
          <i>V</i>VEXUM <small>ACADEMY</small>
        </a>
        <a className="start" href="#mission-01">
          MISSIONを始める ↘
        </a>
      </header>
      <section className="hero" id="top">
        <div className="orb" />
        <div className="hero-copy">
          <p>WELCOME TO VEXUM ACADEMY</p>
          <h1>
            AIで、
            <br />
            仕事の当たり前を
            <br />
            <em>変える。</em>
          </h1>
          <div>
            <span>
              YOUR JOURNEY
              <br />
              STARTS HERE.
            </span>
            <a href="#mission-01">EXPLORE ↓</a>
          </div>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div>
          DISCOVER VEXUM ✦ UNDERSTAND IT ✦ UNDERSTAND AI ✦ THINK &amp; DEFINE ✦
          BUILD WITH AI ✦ CHANGE THE REAL WORLD ✦ DISCOVER VEXUM ✦ UNDERSTAND IT
          ✦ UNDERSTAND AI ✦ THINK &amp; DEFINE ✦ BUILD WITH AI ✦ CHANGE THE REAL
          WORLD ✦
        </div>
      </div>
      <section className="intro">
        <p>THE JOURNEY</p>
        <h2>
          知ることが、
          <br />
          変えることの
          <br />
          <em>はじまりになる。</em>
        </h2>
        <div>
          VEXUMで始めるのは、ただAIを使えるようになるための研修ではありません。現場を理解し、課題を見つけ、考え、つくり、使われる変化へつなげるための最初の一歩です。
        </div>
      </section>
      <nav className="path" aria-label="Mission Index">
        <p>YOUR MISSION PATH</p>
        {missions.map((m) => (
          <a key={m.n} href={`#mission-${m.n}`}>
            <b>{m.n}</b>
            <span>
              {m.group}
              <small>{m.title}</small>
            </span>
            <i>↓</i>
          </a>
        ))}
      </nav>
      <section className="case">
        <div className="case-photo">
          <img src="/images/umeda-panorama.jpg" alt="梅田の都心を見渡す景観" />
        </div>
        <div className="case-copy">
          <p>A CASE STORY</p>
          <h2>
            毎月80時間かかる
            <br />
            仕事を、あなたなら
            <br />
            <em>どう変える？</em>
          </h2>
          <div>
            ITの基礎を知り、AIを理解し、要件を言葉にして、小さくつくる。8つのミッションは、ひとつの現場課題を解決するための道筋です。
          </div>
          <a href="#mission-06">CASEを進める →</a>
        </div>
      </section>
      <section className="missions">
        {missions.map((m, index) => (
          <section
            className={
              m.n === "07" ? "mission-section final-mission" : "mission-section"
            }
            id={`mission-${m.n}`}
            key={m.n}
          >
            <div className="mission-band">
              <div className="planet" />
              <span className="mission-stamp">YOUR NEXT EDGE</span>
              <p>
                {m.n === "07"
                  ? "FINAL MISSION · BUILD"
                  : `MISSION ${m.n} · ${m.group}`}
              </p>
              <h1>{m.title}</h1>
              <h2>{m.lead}</h2>
              <strong>
                {m.n}
                <i>/08</i>
              </strong>
            </div>
            <article>
              <p className="future">
                身につく力 <b>{m.future}</b>
              </p>
              <div className="copy">
                <p>{m.copy}</p>
                <div className={m.n === "07" ? "cards final" : "cards"}>
                  {m.points.map((x, i) => (
                    <div key={x}>
                      <b>0{i + 1}</b>
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                {index === 0 && (
                  <section className="value-difference">
                    <p className="value-kicker">PROJECT-BASED / FIELD-LED</p>
                    <h3>同じIT支援でも、重心が違う。</h3>
                    <p className="value-intro">
                      一般的なITコンサルにも、現場に深く入る会社や担当者はいます。ここで比べるのは優劣ではなく、典型的なプロジェクト型支援と、VEXUMが特に大切にする現場伴走型支援の違いです。
                    </p>
                    <div className="comparison-head" aria-hidden="true">
                      <span />
                      <b>プロジェクト型IT支援に多い形</b>
                      <b>VEXUMが重視する形</b>
                    </div>
                    <div className="comparison-list">
                      {vexumComparison.map((item) => (
                        <div className="comparison-row" key={item.focus}>
                          <strong>{item.focus}</strong>
                          <p>
                            <small>PROJECT</small>
                            {item.project}
                          </p>
                          <p>
                            <small>VEXUM</small>
                            {item.vexum}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="value-scene">
                      <p>たとえば、毎月80時間かかる集計業務。</p>
                      <h4>
                        「システムを納品する」ではなく、
                        <em>「80時間を実際に減らす」</em>ところまで考える。
                      </h4>
                      <div>
                        入力方法が人によって違うなら、まずルールをそろえる。既存の表計算やフォームで解決できるなら、それを設定する。足りない処理だけを自動化し、使う人へ説明する。運用後に時間が減ったかを確かめ、残った負担をまた改善する。VEXUMの価値は、技術そのものではなく、この変化を最後までつなぐことにあります。
                      </div>
                    </div>
                    <ol className="value-flow" aria-label="VEXUMの改善の流れ">
                      {vexumFlow.map((step, stepIndex) => (
                        <li key={step}>
                          <b>{String(stepIndex + 1).padStart(2, "0")}</b>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
                <section className="teaching">
                  <p>
                    <b>{teachingLabels[index].why}</b>
                    {depth[index].why}
                  </p>
                  <p>
                    <b>{teachingLabels[index].explain}</b>
                    {m.explain}
                  </p>
                  <p>
                    <b>{teachingLabels[index].example}</b>
                    {m.example}
                  </p>
                  <p>
                    <b>{teachingLabels[index].work}</b>
                    {depth[index].work}
                  </p>
                  <p>
                    <b>{teachingLabels[index].miss}</b>
                    {depth[index].miss}
                  </p>
                  <p>
                    <b>{teachingLabels[index].check}</b>
                    {m.check}
                  </p>
                </section>
              </div>
              <div className="continue">
                {index < 7 ? (
                  <a href={`#mission-${missions[index + 1].n}`}>
                    NEXT MISSION <b>↓</b>
                  </a>
                ) : (
                  <a href="#top">
                    BACK TO THE TOP <b>↑</b>
                  </a>
                )}
              </div>
            </article>
          </section>
        ))}
      </section>
      <footer className="end">VEXUM ACADEMY · IT LITERACY SEMINAR CORE</footer>
    </main>
  );
}
