# Theme 22｜GitHub

- 区分：ADVANCED
- 想定受講段階：開発・ドキュメント共同作業の基礎

## 1. このテーマの目的

GitHubを「コード置き場」だけでなく、変更履歴・レビュー・課題・共同作業を管理する基盤として理解し、安全な変更フローを身につける。

## 2. 対象者・前提知識

技術担当者および要件・ドキュメントをGitHubで管理する担当者。Theme 18推奨。

## 3. 到達目標

- GitとGitHubの違いを説明できる。
- Repository、Commit、Branch、Pull Request、Issueの役割を区別できる。
- mainへ直接変更するより、ブランチとレビューを使う理由を説明できる。
- パスワード・APIキー等をRepositoryへ保存してはいけないことを理解する。

## 4. 必須学習内容

- Git：変更履歴を管理する仕組み
- GitHub：Git Repositoryを中心に共同作業するサービス
- Repository、README、ファイル／フォルダ
- Commit：変更の単位とメッセージ
- Branch：変更を分離する考え方
- Pull Request：レビュー・承認・マージ
- Issue：課題・タスク・議論
- clone／pull／pushは役割を中心に説明し、コマンド暗記にしない
- コンフリクトの基本概念
- `.gitignore`、Secrets、認証情報をコミットしないこと
- Actions等の自動化は発展として扱う

## 5. 扱わない内容

- CLIコマンドの暗記を目的にすること
- mainへの無レビュー直接反映を標準運用とすること
- 秘密情報をサンプルRepositoryへ含めること

## 6. 推奨学習構成

変更履歴の必要性 → Git → GitHub → Repository → Branch／Commit → PR → Review／Merge → Issue → Security

## 7. 実務ケース

要件定義Markdownを修正するとき、ブランチを作り、変更をコミットし、PRで確認してからmainへ反映する。

## 8. 演習

サンプルRepositoryでREADMEの1行をブランチ上で修正し、PRを作成してレビュー・マージまで行う。

## 9. 理解度確認

受講者が「なぜブランチ・PRが必要か」「秘密情報を誤ってコミットしたら何が問題か」を説明できるかを見る。

## 10. 更新対象情報

GitHub UI、認証方式、Actions、Copilot／AI開発機能、社内Repository運用ルール。

## 11. 他テーマとの依存関係

- 前提：Theme 18推奨
- 次に学ぶ候補：Theme 24

## 12. 完成条件

受講者が安全な最小変更フローを実際に1回完了でき、main・PR・秘密情報の扱いを理解している。