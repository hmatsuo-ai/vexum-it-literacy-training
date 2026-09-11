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

export default function Mission03Shortcuts() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mission-03"));
  }, []);

  if (!target) return null;

  return createPortal(
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
    </section>,
    target,
  );
}
