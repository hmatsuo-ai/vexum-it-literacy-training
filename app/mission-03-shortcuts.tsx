"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const shortcuts = [
  { key: "C", label: "コピー", text: "選んだ文字やファイルを複製する。" },
  { key: "V", label: "貼り付け", text: "コピー・切り取りした内容を置く。" },
  { key: "X", label: "切り取り", text: "選んだ内容を移動するために取り出す。" },
  { key: "Z", label: "元に戻す", text: "直前の操作を1つ戻す。" },
  { key: "S", label: "保存", text: "編集中のファイルを保存する。" },
  { key: "A", label: "すべて選択", text: "画面内の文字や項目をまとめて選ぶ。" },
] as const;

const accountBasics = [
  {
    n: "01",
    label: "LOGIN",
    title: "アカウント = 誰として使うか",
    text: "メールアドレスなどのIDでログインすると、サービスは『誰が使っているか』を識別します。保存先や設定も、そのアカウントにひもづきます。",
  },
  {
    n: "02",
    label: "PERSONAL / WORK",
    title: "個人用と会社用を混ぜない",
    text: "会社のDrive・Slack・AIは会社アカウント、私用のデータは個人アカウント。作業前に右上のアイコンやメールアドレスを確認します。",
  },
  {
    n: "03",
    label: "PERMISSION",
    title: "見える範囲・できる操作が違う",
    text: "同じファイルでも、閲覧だけ・編集できる・管理できるなど権限が異なります。『開けない』ときはアカウントと権限を確認します。",
  },
] as const;

export default function Mission03Shortcuts() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-03"));
  }, []);

  if (!target) return null;

  return createPortal(
    <>
      <section className="m03-shortcuts" aria-labelledby="shortcut-title">
        <div className="m03-shortcuts__head">
          <div>
            <small>03 / SHORTCUT KEYS</small>
            <h3 id="shortcut-title">まず、この6つだけ。</h3>
          </div>
          <p>ショートカットキーは、マウスでメニューを探す代わりにキーボードで操作する方法です。Windowsでは <b>Ctrl</b>、Macでは <b>⌘ Command</b> を使います。</p>
        </div>

        <div className="m03-shortcuts__control" aria-hidden="true">
          <kbd>Ctrl</kbd><span>＋</span><strong>C V X Z S A</strong>
        </div>

        <div className="m03-shortcuts__grid">
          {shortcuts.map((item, index) => (
            <article key={item.key} style={{ "--shortcut-i": index } as React.CSSProperties}>
              <div className="m03-shortcuts__keys"><kbd>Ctrl</kbd><span>＋</span><kbd>{item.key}</kbd></div>
              <small>{item.label}</small>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="m03-accounts" aria-labelledby="account-title">
        <div className="m03-accounts__head">
          <div>
            <small>04 / ACCOUNT BASICS</small>
            <h3 id="account-title">アカウントは、<br/><em>「誰として使うか」。</em></h3>
          </div>
          <p>Google Drive、Slack、AIなどは、同じサービスでも<strong>ログインしているアカウント</strong>によって、見えるデータ・保存先・できる操作が変わります。</p>
        </div>

        <div className="m03-account-switch" aria-label="Personal and work account comparison">
          <div className="m03-account-identity personal">
            <span>P</span>
            <div><small>PERSONAL</small><strong>個人アカウント</strong><p>自分の写真・私用メール・個人Drive</p></div>
          </div>
          <div className="m03-account-switch__center"><span>CHECK</span><b>↔</b><small>右上のアイコン / メール</small></div>
          <div className="m03-account-identity work">
            <span>W</span>
            <div><small>WORK</small><strong>会社アカウント</strong><p>会社Drive・Slack・業務データ</p></div>
          </div>
        </div>

        <div className="m03-accounts__grid">
          {accountBasics.map((item, index) => (
            <article key={item.n} style={{ "--account-i": index } as React.CSSProperties}>
              <div><b>{item.n}</b><small>{item.label}</small></div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <aside className="m03-account-rule">
          <small>BEFORE YOU WORK</small>
          <strong>「今、どのアカウントで開いている？」を確認する。</strong>
          <p>ブラウザを開いているだけでは、会社アカウントとは限りません。複数アカウントに同時ログインしていることもあります。</p>
        </aside>
      </section>
    </>,
    target,
  );
}
