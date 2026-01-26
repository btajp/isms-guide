# Design: Blog/Column Feature

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    VitePress                             │
├─────────────────────────────────────────────────────────┤
│  vitepress-plugin-blog                                  │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────┐ │
│  │ Blog Plugin   │  │ Theme Wrapper │  │ Components  │ │
│  │ (Vite)        │  │ (Vue)         │  │ (Vue)       │ │
│  └───────────────┘  └───────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────┤
│  docs/blog/                                              │
│  ├── index.md (BlogIndex component)                     │
│  └── posts/*.md (Blog articles)                         │
└─────────────────────────────────────────────────────────┘
```

## Directory Structure

```
docs/
├── blog/
│   ├── index.md          # 記事一覧ページ
│   └── posts/
│       ├── 2026-01-26-risk-assessment-tips.md
│       └── 2026-01-26-getting-started-with-isms.md
└── .vitepress/
    ├── config.mts        # プラグイン設定追加
    └── theme/
        └── index.ts      # テーマラッパー追加
```

## Technology Selection

### VitePress Data Loader (採用)

`vitepress-plugin-blog` は withMermaid ラッパーとの互換性問題があったため、
VitePress 標準の Data Loader 機能を使用したカスタム実装に変更。

| 評価項目 | 評価 |
|----------|------|
| 自動記事検出 | OK - createContentLoader で実現 |
| 日付ソート | OK - カスタム実装 |
| タグ/フィルタ | OK - Vue コンポーネントで実装 |
| ページネーション | 将来対応 |
| HMR サポート | OK |
| カスタマイズ性 | OK - 完全にカスタマイズ可能 |
| メンテナンス | OK - VitePress 標準機能を使用 |

## Implementation Details

### 1. Data Loader

```typescript
// docs/blog/posts.data.ts
import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/*.md', {
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter.published !== false)
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || 'Untitled',
        url,
        date: formatDate(frontmatter.date),
        description: frontmatter.description || '',
        tags: frontmatter.tags || [],
        author: frontmatter.author || 'ISMS Guide Team'
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})
```

### 2. Blog Index Page

```markdown
---
title: ブログ
description: ISMS構築に役立つTipsやコラム
layout: page
---

<script setup>
import { data as posts } from './posts.data.ts'
// タグフィルタリング等の Vue ロジック
</script>

# ブログ
<div class="blog-list">...</div>
```

### 4. Blog Post Frontmatter

```yaml
---
blogPost: true
title: ISMSリスクアセスメントのコツ
date: 2026-01-26
author: ISMS Guide Team
description: リスクアセスメントを効率的に行うためのポイントを解説します
tags:
  - リスク管理
  - 実践Tips
published: true
---
```

### 5. Navigation Update

```typescript
// config.mts - nav section
nav: [
  { text: 'Home', link: '/' },
  { text: '要求事項', link: '/requirements/' },
  { text: '管理策', link: '/controls/' },
  { text: 'ブログ', link: '/blog/' },  // 追加
  { text: 'テンプレート', link: '/templates/' },
  { text: '用語集', link: '/glossary/' }
]
```

### 6. Sidebar Configuration

```typescript
// config.mts - sidebar section
'/blog/': [
  {
    text: 'ブログ',
    items: [
      { text: '記事一覧', link: '/blog/' }
    ]
  }
]
```

### 7. OGP Image Generation Integration

既存の `@nolebase/vitepress-plugin-og-image` と連携:

```typescript
// buildEnd section
category: {
  byPathPrefix: [
    // ... existing
    { prefix: 'blog', text: 'ブログ' },  // 追加
  ],
}
```

## Sample Articles

### Article 1: ISMS 入門

```markdown
---
blogPost: true
title: ISMS認証取得を始める前に知っておくべきこと
date: 2026-01-26
author: ISMS Guide Team
description: ISMS認証取得のファーストステップ。何から始めるべきか解説します。
tags:
  - 入門
  - 認証取得
published: true
---

# ISMS認証取得を始める前に知っておくべきこと

ISO/IEC 27001認証取得を検討している方へ...
```

### Article 2: リスクアセスメントの Tips

```markdown
---
blogPost: true
title: 効率的なリスクアセスメントの進め方
date: 2026-01-26
author: ISMS Guide Team
description: リスクアセスメントを効率的かつ効果的に行うためのポイント
tags:
  - リスク管理
  - 実践Tips
published: true
---

# 効率的なリスクアセスメントの進め方

リスクアセスメントは ISMS の核心部分ですが...
```

## RSS Feed

vitepress-plugin-blog は RSS フィードを自動生成しないため、別途対応が必要。
Phase 2 として検討:

- `vitepress-plugin-rss` の追加
- または build 時にカスタムスクリプトで生成

現段階では RSS 機能は将来対応とし、ブログ基本機能の実装を優先する。

## Testing Strategy

### Unit Tests

- config.mts のパース確認
- frontmatter バリデーション

### Integration Tests

- ビルド成功確認
- 記事一覧ページの表示確認
- タグフィルタリング動作確認

### E2E Tests

- ナビゲーションからブログへアクセス
- 記事詳細ページへ遷移
- 前後記事ナビゲーション

## Migration Path

なし（新規機能追加）

## Rollback Plan

1. `vitepress-plugin-blog` をアンインストール
2. theme/index.ts から withBlogTheme を削除
3. config.mts から blogPlugin を削除
4. docs/blog/ ディレクトリを削除
5. nav から「ブログ」リンクを削除
