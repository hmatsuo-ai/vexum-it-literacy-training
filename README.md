# VEXUM学園 ITリテラシー基礎講座

VEXUMの入社前セミナー向けIT・AIリテラシー教材と、そのWeb教材サイトを管理するリポジトリです。

## Repository structure

```text
.
├── app/                         # Next.js Web教材の実装
├── public/                      # 画像・faviconなど静的アセット
├── docs/
│   ├── requirements/            # 内容要件の正本
│   ├── design/                  # デザイン調査・UIリファレンス
│   └── legacy/                  # 旧版PDF/PPTX・旧要件
├── package.json                 # アプリ依存関係・scripts
├── pnpm-lock.yaml
├── next.config.ts
└── README.md
```

## Single Source of Truth

教材内容の正本は以下の1ファイルです。

- [`docs/requirements/vexum-seminar-material-requirements.md`](./docs/requirements/vexum-seminar-material-requirements.md)

テーマ追加・削除・順序変更・難易度変更は、この統合要件定義書へ反映します。デザイン資料や旧資料は要件の正本ではありません。

## Web教材サイト

Next.jsで閲覧用サイトを構成しています。

### 対象閲覧環境

- セミナー会場でのPCブラウザ表示を前提としています。
- スマートフォンで開く運用は想定しておらず、スマートフォン向けの表示・操作の最適化および動作保証は対象外です。
- 狭い画面での崩れを抑える実装が含まれていても、スマートフォン対応を意味するものではありません。

```bash
pnpm install
pnpm dev
```

Vercelへ接続する場合は Framework Preset に Next.js を選択し、`main` をデプロイ対象にします。

## Documentation

- [`docs/requirements/`](./docs/requirements/) — セミナー内容・カリキュラムの要件定義
- [`docs/design/`](./docs/design/) — アニメーション、レイアウト、配色、参考サイト、UIアイデア
- [`docs/legacy/`](./docs/legacy/) — 旧版のPDF/PPTXとページ別要件。参考用途のみ

## 基本方針

- **内容要件とデザイン仕様を分離する**
- **旧版資料を正本として扱わない**
- **デザイン事例はコピーせず、再利用可能なパターンへ抽象化する**
- 実務で使用する場合は、所属組織の最新の情報管理規程・利用ツール・共有ルールを優先する
