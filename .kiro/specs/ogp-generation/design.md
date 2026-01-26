# Design: OGP自動生成

## Architecture Overview

VitePressの`transformHead`フックを使用して、各ページのビルド時にOGPメタタグを動的に生成する。

```
┌─────────────────────────────────────────────────────────────┐
│                    VitePress Build                          │
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │   Markdown  │───▶│ transformHead│───▶│  HTML Output  │  │
│  │   + Front-  │    │    Hook      │    │  with OGP     │  │
│  │   matter    │    │              │    │  Meta Tags    │  │
│  └─────────────┘    └──────────────┘    └───────────────┘  │
│                            │                                │
│                            ▼                                │
│                   ┌──────────────┐                          │
│                   │ PageData:    │                          │
│                   │ - title      │                          │
│                   │ - description│                          │
│                   │ - relativePath│                         │
│                   └──────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. transformHead Hook (config.mts)

```typescript
// docs/.vitepress/config.mts
export default defineConfig({
  // 既存の設定...

  transformHead({ pageData }) {
    const head: HeadConfig[] = []
    const siteUrl = 'https://isms-guide.com'

    // og:title
    const title = pageData.frontmatter.title || pageData.title || 'ISMS Guide'
    head.push(['meta', { property: 'og:title', content: title }])

    // og:description
    const description = pageData.frontmatter.description ||
      'ISO/IEC 27001:2022 対応 ISMS 構築ガイド'
    head.push(['meta', { property: 'og:description', content: description }])

    // og:url
    const url = `${siteUrl}/${pageData.relativePath.replace(/\.md$/, '.html').replace(/index\.html$/, '')}`
    head.push(['meta', { property: 'og:url', content: url }])

    // twitter:card
    head.push(['meta', { name: 'twitter:card', content: 'summary' }])
    head.push(['meta', { name: 'twitter:title', content: title }])
    head.push(['meta', { name: 'twitter:description', content: description }])

    return head
  }
})
```

## Design Decisions

### D1: メタタグの属性

**決定**: OGPメタタグには`property`属性を使用、Twitterカードには`name`属性を使用

**根拠**:
- OGP仕様では`property`属性が正式
- Twitter Cards仕様では`name`属性が標準
- 現在の設定では`name`属性を使用しているが、`property`に修正

### D2: 既存head設定との共存

**決定**: 静的なhead設定（og:type, og:locale, og:site_name）はそのまま維持し、動的なタグのみtransformHeadで生成

**根拠**:
- og:type, og:locale, og:site_nameは全ページ共通
- og:title, og:description, og:urlはページ固有
- 重複を避けるため役割を分離

### D3: URL生成ロジック

**決定**: siteUrlを定数として定義し、relativePathから完全なURLを生成

**変換ルール**:
- `index.md` → `https://isms-guide.com/`
- `requirements/index.md` → `https://isms-guide.com/requirements/`
- `controls/a-5-5.md` → `https://isms-guide.com/controls/a-5-5.html`

### D4: デフォルト値

**決定**: frontmatterにtitle/descriptionがない場合はサイトデフォルトを使用

| フィールド | フォールバック順序 |
|-----------|-------------------|
| title | frontmatter.title → pageData.title → 'ISMS Guide' |
| description | frontmatter.description → サイトdescription |

## File Changes

### Modified Files

| ファイル | 変更内容 |
|---------|---------|
| `docs/.vitepress/config.mts` | transformHeadフック追加、head設定の属性修正 |

## Testing Strategy

### 手動テスト

1. `npm run build`でビルド実行
2. 生成されたHTMLファイルを確認
3. 以下のメタタグが正しく生成されていることを確認:
   - `<meta property="og:title" content="...">`
   - `<meta property="og:description" content="...">`
   - `<meta property="og:url" content="...">`
   - `<meta name="twitter:card" content="summary">`
   - `<meta name="twitter:title" content="...">`
   - `<meta name="twitter:description" content="...">`

### 検証ページ

- トップページ (`/`)
- 要求事項ページ (`/requirements/`)
- 管理策詳細ページ (`/controls/a-5-5`)
- テンプレートページ (`/templates/`)

### SNSデバッガーでの確認

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
