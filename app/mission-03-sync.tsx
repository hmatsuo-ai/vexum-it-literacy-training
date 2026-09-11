"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Mission03Sync() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const findTarget = () => {
      const element = document.querySelector<HTMLElement>("#mission-03 .m03u-basics");
      if (element) setTarget(element);
    };

    findTarget();
    const timer = window.setInterval(findTarget, 100);
    const stop = window.setTimeout(() => window.clearInterval(timer), 3000);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="m03u-sync-section">
      <div className="m03u-sync-head">
        <small>01-E / SYNC</small>
        <span>同期</span>
        <h4>同じファイルを、自動で最新状態にそろえる。</h4>
        <p>アップロード / ダウンロードが「ファイルを移す操作」なのに対して、同期はローカルとクラウドの変更を継続的に反映する仕組みです。</p>
      </div>

      <div className="m03u-sync-diagram" aria-label="ローカル、クラウド、別端末の同期イメージ">
        <article>
          <small>LOCAL</small>
          <strong>自分のPC</strong>
          <span>ファイルを編集</span>
        </article>
        <div className="m03u-sync-arrow"><b>⇄</b><span>自動で反映</span></div>
        <article className="cloud">
          <small>CLOUD</small>
          <strong>クラウド</strong>
          <span>最新状態を保持</span>
        </article>
        <div className="m03u-sync-arrow"><b>⇄</b><span>同期</span></div>
        <article>
          <small>ANOTHER DEVICE</small>
          <strong>別の端末</strong>
          <span>最新版を開ける</span>
        </article>
      </div>

      <div className="m03u-sync-examples">
        <div>
          <b>例</b>
          <p>PCでレポートを編集すると、その変更がクラウドへ反映され、別のPCやスマホでも更新後のファイルを確認できます。</p>
        </div>
        <div>
          <b>POINT</b>
          <p>Google Drive for desktop、OneDrive、iCloud Driveなどでは、指定したフォルダを同期できます。</p>
        </div>
        <div className="warning">
          <b>注意</b>
          <p><strong>同期はバックアップとは別です。</strong>削除や上書きも同期されることがあるため、「同期しているから消えない」とは限りません。</p>
        </div>
      </div>
    </section>,
    target,
  );
}
