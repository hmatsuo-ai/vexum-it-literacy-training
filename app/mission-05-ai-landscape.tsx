"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const providers = [
  {
    company: "OpenAI",
    model: "GPT",
    product: "ChatGPT",
    accent: "openai",
    note: "GPTはモデルの系列名。ChatGPTは、そのモデルなどを使って会話・検索・ファイル利用などを行うAIサービスです。",
  },
  {
    company: "Anthropic",
    model: "Claude",
    product: "Claude",
    accent: "anthropic",
    note: "ClaudeはAnthropicが開発するモデル群・AIアシスタント。会話、文章、分析、コーディングなどに使われます。",
  },
  {
    company: "Google / Google DeepMind",
    model: "Gemini",
    product: "Gemini",
    accent: "google",
    note: "GeminiはGoogleのモデル群・AIサービス。テキストだけでなく、画像・音声・動画・コードなども扱うマルチモーダルAIです。",
  },
] as const;

export default function Mission05AILandscape() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-05"));
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="m05-ai" aria-labelledby="m05-ai-title">
      <header className="m05-ai__head">
        <div>
          <small>AI LANDSCAPE / THE BIG PICTURE</small>
          <h3 id="m05-ai-title">生成AIを、<br/><em>製品名だけで覚えない。</em></h3>
        </div>
        <p>
          「会社」「AIモデル」「私たちが触るアプリ」は別ものです。まずこの3層を分けると、
          新しいAIが出ても整理しやすくなります。
        </p>
      </header>

      <section className="m05-ai__history" aria-labelledby="m05-history-title">
        <div className="m05-ai__section-title">
          <small>01 / HISTORY</small>
          <h4 id="m05-history-title">2022年、ChatGPTがAIを一気に身近にした。</h4>
          <p><strong>正確には「GPTが2022年に初めて登場した」のではありません。</strong> GPTシリーズはそれ以前からあり、2022年11月30日に会話型サービスのChatGPTが公開されました。</p>
        </div>
        <div className="m05-ai__timeline">
          <article>
            <b>BEFORE 2022</b>
            <strong>GPTなどの言語モデルはすでに存在</strong>
            <p>AI研究やAPIなどを通じて利用されていましたが、一般の人が自然な会話で触れる体験はまだ限定的でした。</p>
          </article>
          <i aria-hidden="true">→</i>
          <article className="key">
            <b>2022.11.30</b>
            <strong>OpenAIがChatGPTを公開</strong>
            <p>チャット画面で質問し、続けて会話できる体験が広く普及する大きなきっかけになりました。</p>
          </article>
          <i aria-hidden="true">→</i>
          <article>
            <b>2023 →</b>
            <strong>Claude・Geminiなど選択肢が拡大</strong>
            <p>複数企業が高性能な生成AIを提供し、用途に応じてAIを選ぶ時代になっています。</p>
          </article>
        </div>
      </section>

      <section className="m05-ai__providers" aria-labelledby="m05-provider-title">
        <div className="m05-ai__section-title">
          <small>02 / COMPANY → MODEL → PRODUCT</small>
          <h4 id="m05-provider-title">誰が、何を作っている？</h4>
          <p>「ChatGPT・Claude・Geminiは会社名」ではありません。会社とモデル、サービスの関係を分けます。</p>
        </div>
        <div className="m05-ai__provider-grid">
          {providers.map((item) => (
            <article className={`provider-card ${item.accent}`} key={item.company}>
              <div className="provider-chain">
                <div><small>COMPANY</small><strong>{item.company}</strong></div>
                <i>→</i>
                <div><small>MODEL</small><strong>{item.model}</strong></div>
                <i>→</i>
                <div><small>PRODUCT / APP</small><strong>{item.product}</strong></div>
              </div>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="m05-ai__performance" aria-labelledby="m05-performance-title">
        <div className="m05-ai__section-title">
          <small>03 / SPEED × CAPABILITY</small>
          <h4 id="m05-performance-title">速さと性能には、だいたいトレードオフがある。</h4>
          <p>同じ会社でも複数のモデルがあります。用途に応じて「速さ・性能・コスト」のバランスを選びます。</p>
        </div>

        <div className="m05-ai__spectrum">
          <article className="fast">
            <span>FAST / LIGHT</span>
            <h5>軽量・高速モデル</h5>
            <ul>
              <li>返答が速い</li>
              <li>大量処理に向く</li>
              <li>比較的低コスト</li>
              <li>複雑な推論では弱いことがある</li>
            </ul>
            <strong>例：簡単な要約、分類、定型文、一次整理</strong>
          </article>

          <div className="m05-ai__meter" aria-label="速度と性能のバランス">
            <span>速度</span>
            <div><i /></div>
            <span>複雑な課題への強さ</span>
          </div>

          <article className="deep">
            <span>DEEP / CAPABLE</span>
            <h5>高性能・推論重視モデル</h5>
            <ul>
              <li>複雑な問題に強い</li>
              <li>分析・コーディング・計画に向く</li>
              <li>より多くの計算を使うことがある</li>
              <li>返答に時間がかかることがある</li>
            </ul>
            <strong>例：難しい分析、設計、長い資料の検討、複数条件の判断</strong>
          </article>
        </div>

        <p className="m05-ai__caution">
          <b>重要：</b>「遅いAI = 必ず正しい」「速いAI = 不正確」ではありません。新しい高速モデルが古い大型モデルを上回ることもあります。
          難しい仕事ほど高性能なモデルを選ぶ、という<strong>傾向</strong>として覚えます。
        </p>
      </section>

      <section className="m05-ai__modes" aria-labelledby="m05-mode-title">
        <div className="m05-ai__section-title">
          <small>04 / CHAT AI vs AGENTIC AI</small>
          <h4 id="m05-mode-title">「答えるAI」と「作業するAI」は違う。</h4>
          <p>エージェント型AIは、会話するだけでなく、許可されたツールを使って複数ステップの作業を進めます。</p>
        </div>

        <div className="m05-ai__mode-compare">
          <article className="chat">
            <div className="mode-label"><small>CONVERSATIONAL AI</small><b>対話型AI</b></div>
            <div className="mode-flow">
              <span>あなたが質問</span><i>→</i><span>AIが考える</span><i>→</i><span>回答する</span>
            </div>
            <p>質問、相談、要約、アイデア出し、文章作成など。「何をすればよいか」を一緒に考えるのが得意です。</p>
            <strong>中心：会話・生成・助言</strong>
          </article>

          <div className="m05-ai__versus">VS</div>

          <article className="agent">
            <div className="mode-label"><small>AGENTIC AI</small><b>エージェント型AI</b></div>
            <div className="mode-flow">
              <span>目的を伝える</span><i>→</i><span>手順を組む</span><i>→</i><span>ツールで実行</span><i>→</i><span>結果を返す</span>
            </div>
            <p>Web、ファイル、コード、各種サービスなどを使い、調査→整理→作成→操作のような複数ステップを進めます。</p>
            <strong>中心：計画・ツール利用・実行</strong>
          </article>
        </div>

        <div className="m05-ai__agent-example">
          <small>SAME REQUEST, DIFFERENT BEHAVIOR</small>
          <div>
            <p><b>対話型：</b>「来週の会議準備で何を確認すればいい？」→ 確認項目を提案する。</p>
            <p><b>エージェント型：</b>カレンダーや資料を確認 → 必要情報を集める → 下書きを作る → 必要な操作は人に確認して進める。</p>
          </div>
        </div>
      </section>

      <aside className="m05-ai__takeaway">
        <small>THE RULE</small>
        <strong>AI選びは「有名な名前」ではなく、目的 × モデル性能 × 使わせる権限で決める。</strong>
      </aside>
    </section>,
    target,
  );
}
