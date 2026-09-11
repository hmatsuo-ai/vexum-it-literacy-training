# VEXUM Web Design Research Library

VEXUM学園のWeb教材を改善するための、再利用可能なデザインパターン集です。特定サイトの見た目をコピーせず、観察した表現を目的・実装方法・注意点へ分解しています。

## Catalog

- [Animation patterns — 100](./animation-patterns-100.md)
- [Diagram and data-visualization patterns — 100](./diagram-patterns-100.md)
- [Typography and text-layout patterns — 100](./typography-layout-patterns-100.md)

## 運用ルール

1. 動きや図表は、内容の理解・現在地・因果関係の把握に役立つ場合だけ使う。
2. 本文の可読性を演出より優先し、文字の透明度は下げない。
3. 原則として `transform` と `opacity` を使い、レイアウトを連続再計算させる動きは避ける。
4. `prefers-reduced-motion` を尊重し、動きを減らしても情報が欠けない構造にする。
5. 1画面の主役となる動きは1つに絞り、同時に複数の注目点を作らない。

## 主な調査元

- [Codrops Creative Hub](https://tympanus.net/codrops/hub/)
- [Codrops All Demos](https://tympanus.net/codrops/hub/all/)
- [Codrops UI Interactions & Animations Roundup](https://tympanus.net/codrops/2020/01/04/ui-interactions-animations-roundup-1/)
- [MDN Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [web.dev Animations](https://web.dev/explore/animations)
- [D3 Gallery](https://observablehq.com/@d3/gallery)
- [Observable Data Visualization Examples](https://observablehq.com/collection/@observablehq/data-visualization-examples/public)
- [MDN Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [MDN Web fonts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts)
- [Codrops Blueprints](https://tympanus.net/codrops/category/blueprints/)

