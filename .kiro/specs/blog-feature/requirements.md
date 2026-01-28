# Requirements: Blog/Column Feature

## Overview

ISMS に関する Tips、審査対応のポイント、規格改訂情報などを定期発信するためのブログ/コラムセクションを追加する。

## Background

- ドキュメントだけでなく、実践的な情報を継続的に発信したい
- 読者とのエンゲージメント向上
- SEO 効果（定期更新コンテンツ）

## Related Issue

- GitHub Issue: #75

## Functional Requirements

### FR-1: Blog Post Management

- FR-1.1: Markdown ファイルで記事を作成できる
- FR-1.2: frontmatter で以下のメタデータを設定できる
  - title: 記事タイトル（必須）
  - date: 公開日（必須、YYYY-MM-DD 形式）
  - author: 著者名（任意、デフォルト: "ISMS Guide Team"）
  - description: 記事の概要（任意、SEO/OGP 用）
  - tags: タグ配列（任意）
  - published: 公開フラグ（任意、デフォルト: true）
- FR-1.3: `docs/blog/posts/` に記事ファイルを配置する
- FR-1.4: ファイル名は `YYYY-MM-DD-slug.md` 形式を推奨

### FR-2: Blog Index Page

- FR-2.1: 記事一覧ページを `docs/blog/index.md` に配置
- FR-2.2: 記事は日付の新しい順にソートして表示
- FR-2.3: タグによるフィルタリング機能
- FR-2.4: ページネーション（1ページ10記事程度）
- FR-2.5: 各記事のカード表示（タイトル、日付、概要、タグ）

### FR-3: Individual Blog Post

- FR-3.1: 記事本文の表示
- FR-3.2: 著者情報の表示
- FR-3.3: 公開日の表示
- FR-3.4: タグの表示（クリックでフィルタリング）
- FR-3.5: 前後の記事へのナビゲーション
- FR-3.6: 読了時間の表示

### FR-4: Navigation Integration

- FR-4.1: ヘッダーナビにブログへのリンクを追加
- FR-4.2: サイドバーに最近の記事を表示

### FR-5: RSS Feed

- FR-5.1: RSS/Atom フィードの自動生成
- FR-5.2: フィード URL: `/blog/feed.xml` または `/feed.xml`

## Non-Functional Requirements

### NFR-1: Performance

- NFR-1.1: ビルド時間への影響を最小限に
- NFR-1.2: 初回読み込み時間を既存ページと同等以下に

### NFR-2: SEO

- NFR-2.1: 各記事に適切な OGP タグを生成
- NFR-2.2: 既存の OGP 画像生成機能と連携
- NFR-2.3: sitemap.xml に記事を含める

### NFR-3: Maintainability

- NFR-3.1: 記事追加時に設定ファイルの変更が不要
- NFR-3.2: プラグインの更新に追従しやすい構成

### NFR-4: Accessibility

- NFR-4.1: 既存サイトのアクセシビリティ水準を維持
- NFR-4.2: キーボードナビゲーション対応

## Acceptance Criteria

- [ ] `docs/blog/posts/` にサンプル記事を作成し、一覧ページで表示される
- [ ] タグフィルタリングが動作する
- [ ] 前後記事へのナビゲーションが動作する
- [ ] ヘッダーナビから「ブログ」にアクセスできる
- [ ] OGP 画像が生成される
- [ ] ビルドが成功する
- [ ] 開発サーバーで HMR が動作する

## Out of Scope

- コメント機能
- 記事の検索機能（サイト全体検索で対応）
- 多言語対応
- スケジュール公開機能

## References

- [vitepress-plugin-blog](https://github.com/humanbydefinition/vitepress-plugin-blog)
- 既存の OGP 画像生成: `@nolebase/vitepress-plugin-og-image`
