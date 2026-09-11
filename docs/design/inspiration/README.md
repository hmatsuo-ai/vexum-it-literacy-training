# Web Design Inspiration Library

VEXUMのWeb・教材・LPに限らず、採用、会社サイト、プロダクト、ポートフォリオ等へ流用できるWebデザイン発想辞書です。

## 収録量

- Animation: **1,000 patterns** = 10 triggers × 10 targets × 10 motions
- Layout: **1,000 patterns** = 10 site archetypes × 10 structures × 10 rhythms
- Color: **1,000 patterns** = 10 neutral/backgrounds × 10 primary accents × 10 secondary accents
- Total: **3,000 patterns**

3,000パターンは `generate.py` に完全定義しています。巨大な重複CSVを正本にせず、正規化した定義をGitで管理し、必要なときにCSVへ展開します。

```bash
cd docs/design/inspiration
python3 generate.py
```

生成物:

- `generated/animations.csv` — 1,000件
- `generated/layouts.csv` — 1,000件
- `generated/colors.csv` — 1,000件

`generated/` は再生成可能なためGit管理対象外です。

## ファイル

- `MATRIX.md` — 各1,000件を構成する3軸と設計意図
- `SOURCES.md` — 実在するデザインギャラリー／アワードの参照先
- `generate.py` — 3,000件をCSVへ展開する生成スクリプト

## データの考え方

1. **コピーではなく抽象化**: 実在サイトの画像、文章、CSS/JSを複製せず、再利用可能なデザイン判断へ分解する。
2. **独立軸の直積**: trigger/target/motion等、意味の異なる3軸を組み合わせて各1,000件を定義する。
3. **実装可能性**: animationには実装ヒントとreduced-motion、layoutには用途とmobile rule、colorには使用ルールを付与する。
4. **出典へ戻れる**: `SOURCES.md` から実例ギャラリーへ戻れるようにする。
5. **汎用化**: VEXUM固有UIに固定しない。

## 実装時の最低ルール

- `prefers-reduced-motion` を考慮する。
- 大きなblur、3D、常時ループは必要な場面に限定する。
- 色は情報階層・状態・CTAへ役割を割り当てる。
- モバイルで情報順序と操作性が壊れないことを優先する。
- 本番採用前にコントラスト、キーボード操作、フォーカス、読みやすさを確認する。
