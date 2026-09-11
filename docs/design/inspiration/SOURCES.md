# Design Inspiration Sources

このライブラリは、以下のキュレーション／アワードサイトで継続的に見られる良質なWebデザインのパターンを観察し、再利用できる「設計の型」へ抽象化したものです。

> 各1,000件は「1,000サイトの丸写し」ではありません。実在する多数の良質なサイトから得られるモチーフを、trigger / structure / color role等の独立軸へ分解して再構成しています。画像、文章、CSS/JSはコピーしていません。

| ID | Source | URL | 主に見る観点 |
|---|---|---|---|
| SRC01 | Awwwards | https://www.awwwards.com/websites/sites_of_the_day/ | animation, scrolling, typography, 3D/WebGL, unusual navigation, microinteractions |
| SRC02 | Lapa Ninja | https://www.lapa.ninja/post/ | landing pages, hero, typography, gradient, bento, 3D, conversion layout |
| SRC03 | SiteInspire | https://www.siteinspire.com/websites | minimal, typography, grid, editorial and unusual layouts |
| SRC04 | Land-book | https://land-book.com/ | 3D animation, gradient, parallax, cards, bright/dark palettes |
| SRC05 | Godly | https://godly.website/ | expressive interactive sites, motion-heavy creative direction |
| SRC06 | Httpster | https://httpster.net/ | broad curated website patterns and visual directions |
| SRC07 | One Page Love | https://onepagelove.com/inspiration | one-page/landing-page flow, section sequencing, CTA patterns |
| SRC08 | CSS Design Awards | https://www.cssdesignawards.com/ | UI, UX, innovation, interaction and front-end craft |
| SRC09 | The FWA | https://www.thefwa.net/ | experimental interactive and digital experiences |
| SRC10 | Landingfolio | https://www.landingfolio.com/ | landing-page components, industry/device/color patterns |
| SRC11 | Footer.design | https://www.footer.design/ | footer composition, typography, grid, cards, animation, dark/light treatment |

## 調査で拾う観点

### Animation
- entrance / scroll-linked / hover / pointer / state transition
- mask, clip, scale, blur, parallax, tilt, morph, marquee, spring
- duration, easing, movement distance, loop behavior
- `prefers-reduced-motion` で代替できるか

### Layout
- heroの構図、gridの崩し方、余白量、セクション間リズム
- sticky / full-bleed / bento / editorial columns / horizontal showcase
- 情報密度の緩急、CTA位置、モバイルでの意味順

### Color
- neutral surfaceの比率
- CTA・link・status・badgeのアクセント役割
- light/dark surfaceの切り替え
- gradient、彩度、コントラスト、情報階層

## 利用ルール

- `source_family` から上表のギャラリーへ戻り、その時点の実例を確認する。
- 特定サイトのトレードドレスや固有表現をそのまま複製しない。
- 本番実装前に、可読性、コントラスト、キーボード操作、モバイル、性能、reduced motionを確認する。
