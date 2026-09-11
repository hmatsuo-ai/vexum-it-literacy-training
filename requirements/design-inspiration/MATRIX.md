# Design Idea Matrices

各カテゴリは、意味の異なる3軸の直積で **10 × 10 × 10 = 1,000件** を定義します。`generate.py` が全組み合わせをCSVへ展開します。

## Animation — 1,000

### Trigger (10)
`load`, `scroll-in`, `scroll-progress`, `hover`, `pointer`, `click`, `focus`, `drag`, `route`, `idle`

### Target (10)
`headline`, `media`, `card`, `nav`, `cta`, `background`, `object3d`, `icon`, `divider`, `footer`

### Motion (10)
`fade-rise`, `scale`, `clip`, `blur`, `stagger`, `parallax`, `tilt`, `morph`, `marquee`, `spring`

各生成行には `context`, `implementation_hint`, `reduced_motion`, `source_family` を付与します。

## Layout — 1,000

### Site archetype (10)
`saas`, `agency`, `portfolio`, `ecommerce`, `editorial`, `education`, `event`, `finance`, `product`, `community`

### Structure (10)
`split-hero`, `full-bleed`, `bento`, `asym-grid`, `editorial-cols`, `stacked-cards`, `sticky-rail`, `horizontal-showcase`, `timeline`, `mosaic`

### Rhythm (10)
`airy`, `dense-to-airy`, `alternating`, `sticky-story`, `overlap`, `viewport-chapters`, `nested`, `edge-to-edge`, `narrow-center`, `offset`

各生成行には `use_case`, `mobile_rule`, `source_family` を付与します。

## Color — 1,000

### Neutral/background family (10)
`ink`, `graphite`, `navy`, `cream`, `paper`, `white`, `sand`, `mist`, `sage`, `lavender`

### Primary accent (10)
`electric-blue`, `cobalt`, `cyan`, `emerald`, `lime`, `sun`, `orange`, `coral`, `magenta`, `violet`

### Secondary accent (10)
`ice`, `mint`, `acid`, `butter`, `peach`, `rose`, `lilac`, `sky`, `aqua`, `silver`

背景／本文色／primary／secondaryのHEXと、アクセントの役割を指定する `usage_rule`、`source_family` を生成します。

## 採用判断の軸

- Animation: 意味のない常時運動を避け、視線誘導・状態変化・物語進行のどれに寄与するかを決める。
- Layout: 見た目より先に情報の優先順位を決め、デスクトップの構図をモバイルへ意味順で落とす。
- Color: ベース面積をneutralに寄せ、primary/secondaryはCTA・状態・階層へ役割を固定する。
- 3D/WebGL、parallax、blur、marquee等はアクセシビリティと性能を満たす場合のみ採用する。

## 注意

- `source_family` は、特定サイトの画面をそのまま複製したことを意味しません。
- 実在する良質なWebサイト群から観察したデザイン語彙を、再利用可能な設計パターンへ抽象化しています。
- 第三者の画像、文章、CSS、JavaScript等は保存していません。
