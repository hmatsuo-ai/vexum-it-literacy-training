"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Mission03GuiCli() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let createdHost: HTMLDivElement | null = null;

    const mount = () => {
      const basics = document.querySelector<HTMLElement>("#mission-03 .m03u-basic-groups");
      if (!basics || document.querySelector(".m03-gui-cli-host")) return false;

      createdHost = document.createElement("div");
      createdHost.className = "m03-gui-cli-host";
      basics.insertAdjacentElement("afterend", createdHost);
      setHost(createdHost);
      return true;
    };

    if (mount()) return () => createdHost?.remove();

    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      createdHost?.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <section className="m03-gui-cli" aria-labelledby="gui-cli-title">
      <div className="m03-gui-cli__heading">
        <div>
          <small>01-D / INTERFACE</small>
          <h4 id="gui-cli-title">GUIとCLIの違い</h4>
        </div>
        <p>
          どちらもPCへ指示する方法です。<strong>GUIは画面を見て操作</strong>し、
          <strong>CLIは文字で命令</strong>します。
        </p>
      </div>

      <div className="m03-gui-cli__stage">
        <article className="interface-card gui-card">
          <div className="interface-card__label"><span>GUI</span><small>GRAPHICAL USER INTERFACE</small></div>
          <h5>見て、クリックして操作する</h5>
          <div className="gui-window" aria-hidden="true">
            <div className="gui-window__top"><i/><i/><i/><span>Finder / Explorer</span></div>
            <div className="gui-window__body">
              <aside><b>Desktop</b><span>Documents</span><span>Downloads</span></aside>
              <div className="gui-files">
                <div><span className="gui-folder-icon"/>資料</div>
                <div><span className="gui-folder-icon"/>画像</div>
                <div><span className="gui-file-icon"/>report.pdf</div>
                <div><span className="gui-file-icon"/>data.xlsx</div>
              </div>
              <span className="gui-pointer">↖</span>
            </div>
          </div>
          <p>アイコン、ボタン、ウィンドウをマウスやタッチで操作。初めてでも状態を目で確認しやすいのが強みです。</p>
          <ul><li>直感的で覚えやすい</li><li>画面を見ながら確認できる</li><li>日常的なPC操作に向く</li></ul>
        </article>

        <div className="interface-bridge" aria-hidden="true">
          <span>SAME PC</span><b>＝</b><small>操作方法が違うだけ</small>
        </div>

        <article className="interface-card cli-card">
          <div className="interface-card__label"><span>CLI</span><small>COMMAND LINE INTERFACE</small></div>
          <h5>文字で、正確に指示する</h5>
          <div className="terminal-window" aria-hidden="true">
            <div className="terminal-window__top"><i/><i/><i/><span>Terminal</span></div>
            <div className="terminal-window__body">
              <p><em>$</em> cd project</p>
              <p><em>$</em> mkdir assets</p>
              <p><em>$</em> git status</p>
              <p className="terminal-result">On branch main</p>
              <p className="terminal-active"><em>$</em> <span className="terminal-cursor"/></p>
            </div>
          </div>
          <p>Terminalなどでコマンドを入力して操作。同じ手順を何度も実行したり、自動化したりするのが得意です。</p>
          <ul><li>操作を正確に再現しやすい</li><li>大量・反復処理に強い</li><li>開発やAIエージェントでよく使う</li></ul>
        </article>
      </div>

      <div className="m03-gui-cli__example">
        <div className="example-title"><small>SAME GOAL</small><strong>「project」というフォルダを作る</strong></div>
        <div className="example-method"><b>GUI</b><span>右クリック → 新規フォルダ → 名前を入力</span></div>
        <div className="example-arrow">→</div>
        <div className="example-method cli"><b>CLI</b><code>mkdir project</code></div>
      </div>

      <div className="m03-gui-cli__takeaway">
        <span>使い分け</span>
        <strong>普段の操作はGUI。繰り返し・自動化・開発はCLIが便利。</strong>
        <p>CLIは「上級者専用」ではありません。AIに開発やファイル操作を任せるときも、裏側ではCLIのような命令が使われることがあります。</p>
      </div>
    </section>,
    host,
  );
}
