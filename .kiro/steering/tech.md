# Technology Stack

## Runtime & Language

| 項目 | 技術 |
|------|------|
| ドキュメント形式 | Markdown |
| 図表 | Mermaid |

## Framework

| 項目 | 技術 | 備考 |
|------|------|------|
| 静的サイトジェネレータ | VitePress | Vue ベース、高速ビルド、ドキュメント特化 |
| Mermaid 統合 | vitepress-plugin-mermaid | 図表レンダリング |

### VitePress 選定理由

- 高速なビルドとホットリロード（Vite ベース）
- Mermaid プラグインによる図表サポート
- 日本語全文検索対応（ローカル検索）
- レスポンシブなサイドバー・ナビゲーション
- ダークモード標準搭載
- GitHub Pages / Cloudflare Pages 対応
- Vue エコシステムとの親和性

## Hosting

| 項目 | 技術 |
|------|------|
| ホスティング | Cloudflare Pages |
| ドメイン | isms-guide.com |
| バージョン管理 | GitHub |
| CI/CD | Cloudflare Pages（GitHub連携による自動デプロイ） |

## Git & ISMS Compatibility

ISO 27001の文書管理要求事項（7.5）とGitの機能は高い親和性を持つ：

| 要求事項 | Gitでの実現 |
|----------|-------------|
| 7.5.2 作成・更新 | コミット、プルリクエスト |
| 7.5.3 管理 | ブランチ保護、権限設定 |
| 版管理 | Git履歴（`git log`） |
| 承認 | PRレビュー・マージ |
| 変更履歴 | `git log`、`git blame` |
| アクセス制御 | リポジトリ権限 |

## Content Guidelines

### Document Format

| 要素 | 形式 |
|------|------|
| フローチャート・プロセス図 | Mermaid |
| 一覧表・チェックリスト | Markdownテーブル |
| 設定例・実装例 | YAMLコードブロック |

### Mermaid Adoption Reasons

| メリット | 説明 |
|----------|------|
| 主要SSGでサポート | Docusaurus、Astro、VitePress等で利用可能 |
| レスポンシブ | SVGレンダリングで自動スケール |
| 保守性 | テキストベースで差分管理しやすい |
| ダークモード対応 | 自動で色が切り替わる |
