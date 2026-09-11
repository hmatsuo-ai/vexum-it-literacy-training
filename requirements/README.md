# VEXUM教科書 再構築要件定義

このフォルダは、VEXUM教科書をゼロから再構築するための**内容要件**を管理する。

旧教材のデザイン・ページ構成・配色・図版は原則として引き継がない。旧教材は「過去に何を扱っていたか」を確認する参照資料としてのみ使用し、新版の構成は各テーマの目的と到達目標から再設計する。

## 管理方針

- `00_repository-requirements.md`：教科書全体・セミナー目的の要件
- 各テーマ `.md`：テーマ別要件
- `_theme-template.md`：新しいテーマを追加するときの共通テンプレート

## テーマ構成

### VEXUM・業務理解

- `01_vexum-overview.md`：VEXUMとは
- `02_vexum-history-and-work.md`：現在のVEXUM・働き方
- `04_aris-onsite-work.md`：ARIS・常駐業務（入社後・常駐前）
- `05_internal-communication.md`：社内コミュニケーション
- `06_external-communication.md`：社外コミュニケーション

### AI基礎

- `07_ai-overview.md`：AIとは何か
- `08_ai-tools.md`：生成AIに共通する使い方・性能・外部連携
- `09_prompting.md`：プロンプト
- `10_agents-and-vibe-coding.md`：AIエージェント・バイブコーディング
- `11_ai-security.md`：AI・情報セキュリティ

**ChatGPT・Claude・Gemini等を製品別テーマとして教えない。** モデル名、製品機能、料金、UIの暗記ではなく、どの生成AIにも共通する原理・判断軸を教える。

AIの性能については、次の共通理解を扱う。

- 軽量・低推論の利用は速い傾向
- 高性能・高推論の利用は時間がかかる代わりに複雑な検討に向く傾向
- Web調査や外部ツール利用は通常の対話より時間がかかる
- 高性能なAIでも、自動的に外部情報を調査するとは限らない
- MCP等を通じて外部ツール・データへ接続する場合は、接続先・権限・操作範囲を確認する

### 業務ツール

- `12_google-workspace-microsoft-365.md`：Google Workspace と Microsoft 365
- `15_notebooklm.md`：資料ベースのAI活用

Google WorkspaceとMicrosoft 365は別々の製品紹介にせず、**同じ業務を各環境でどう行うか**を比較して教える。

特に次を明確にする。

- Googleドキュメント ↔ Word
- Googleスプレッドシート ↔ Excel
- Googleスライド ↔ PowerPoint
- Google Drive ↔ OneDrive / SharePoint
- Gmail ↔ Outlook
- Google Meet ↔ Teams

比較軸は、保存場所、ローカル／クラウド、ファイル形式、共同編集、共有権限、互換性とする。

### 開発・発展

- `16_development-environment-and-gas.md`：開発環境・GAS
- `17_programming-languages.md`：プログラミング言語
- `19_api-connector-mcp.md`：API・Connector・MCP
- `20_github.md`：GitHub
- `21_business-terms-tools-industries.md`：社会人用語・業務ツール・業界
- `22_requirements-definition-and-hearing.md`：要件定義・ヒアリング

## 重要な原則

- PC・ファイル・クラウド等の基礎を飛ばさず、その延長としてAIを教える。
- セミナーではVEXUMとAI活用の面白さ・可能性を伝え、受講者の学習意欲を高める。
- デザイン仕様と内容要件を混ぜない。
- 暗記ではなく、説明・操作・判断ができることを到達目標にする。
- 特定AI製品の比較・ランキングを教材の中心にしない。
- モデル名、料金、UI、製品機能など変化が速い情報を本質的な学習目標にしない。
- Google WorkspaceとMicrosoft 365は、役割・保存・共有・ファイル形式の違いから比較する。
- 受講者のITリテラシー差を前提に、基礎用語を飛ばさない。
- セミナー目的から逆算し、必要なテーマだけを採用する。
