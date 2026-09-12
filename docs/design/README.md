# Design Library

VEXUMのWeb教材・LP・採用/企業サイト等へ再利用できるデザイン調査を集約します。ここは**要件定義の正本ではなく、実装時の参考資料**です。

## 構成

- [`MOTION_POLICY.md`](./MOTION_POLICY.md) — アニメーション実装時に最優先する共通ルール
- [`patterns/`](./patterns/) — アニメーション、図解、タイポグラフィ/レイアウトのパターン集
- [`reference-sites-100.md`](./reference-sites-100.md) — デザイン調査対象100サイト
- [`ui-ideas/`](./ui-ideas/) — 100サイトから抽出した1,000件の具体的UIアイデア
- [`inspiration/`](./inspiration/) — Animation / Layout / Color を各1,000件へ展開できる汎用デザイン辞書

## 使用原則

1. 実装前に [`MOTION_POLICY.md`](./MOTION_POLICY.md) を確認し、禁止・制限されたモーションを使わない。
2. 1サイトをそのままコピーしない。
3. 観察した表現を目的・情報設計・実装方法へ分解して使う。
4. 可読性、アクセシビリティ、モバイル操作性を演出より優先する。
5. 強い演出を同時に使いすぎない。
6. 内容要件と衝突する場合は [`../requirements/`](../requirements/) の正本を優先する。
