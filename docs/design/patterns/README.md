# Design Patterns

Web教材を改善するための再利用可能なデザインパターン集です。特定サイトの見た目をコピーせず、表現を目的・実装方法・注意点へ分解しています。

## Catalog

- [Animation patterns — 100](./animation-patterns-100.md)
- [Diagram and data-visualization patterns — 100](./diagram-patterns-100.md)
- [Typography and text-layout patterns — 100](./typography-layout-patterns-100.md)

## 運用ルール

1. 動きや図表は、内容の理解・現在地・因果関係の把握に役立つ場合だけ使う。
2. 本文の可読性を演出より優先する。
3. 原則として `transform` と `opacity` を使い、不要なレイアウト再計算を避ける。
4. `prefers-reduced-motion` を尊重し、動きを減らしても情報が欠けない構造にする。
5. 1画面の主役となる動きは1つに絞る。

調査元の詳細は各ファイルおよび [`../inspiration/SOURCES.md`](../inspiration/SOURCES.md) を参照してください。
