# Tasks: OGP自動生成

## Task 1: 既存head設定の属性修正

### Description
現在のOGPメタタグは`name`属性を使用しているが、OGP仕様に準拠して`property`属性に修正する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Changes
```typescript
// Before
['meta', { name: 'og:type', content: 'website' }],
['meta', { name: 'og:locale', content: 'ja_JP' }],
['meta', { name: 'og:site_name', content: 'ISMS Guide' }],

// After
['meta', { property: 'og:type', content: 'website' }],
['meta', { property: 'og:locale', content: 'ja_JP' }],
['meta', { property: 'og:site_name', content: 'ISMS Guide' }],
```

### Acceptance Criteria
- [x] AC-1.1: og:type, og:locale, og:site_nameがproperty属性で出力される

---

## Task 2: transformHeadフックの実装

### Description
VitePressのtransformHeadフックを使用して、各ページのOGPメタタグを動的に生成する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Implementation
```typescript
import { defineConfig, HeadConfig } from 'vitepress'

export default defineConfig({
  // ... 既存設定

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
    const relativePath = pageData.relativePath
      .replace(/\.md$/, '.html')
      .replace(/index\.html$/, '')
    const url = `${siteUrl}/${relativePath}`
    head.push(['meta', { property: 'og:url', content: url }])

    // Twitter Cards
    head.push(['meta', { name: 'twitter:card', content: 'summary' }])
    head.push(['meta', { name: 'twitter:title', content: title }])
    head.push(['meta', { name: 'twitter:description', content: description }])

    return head
  }
})
```

### Acceptance Criteria
- [x] AC-1.1: og:titleがページごとに自動生成される
- [x] AC-1.2: og:descriptionがページごとに自動生成される
- [x] AC-1.3: og:urlがページごとに自動生成される
- [x] AC-1.4: frontmatterのtitleがog:titleに使用される
- [x] AC-1.5: frontmatterのdescriptionがog:descriptionに使用される
- [x] AC-1.6: titleがない場合はサイトデフォルトが使用される
- [x] AC-2.1: twitter:cardが生成される
- [x] AC-2.2: twitter:titleが生成される
- [x] AC-2.3: twitter:descriptionが生成される

---

## Task 3: ビルド検証

### Description
ビルドを実行し、生成されたHTMLファイルでOGPメタタグが正しく出力されていることを確認する。

### Verification Steps

1. ビルド実行
```bash
npm run build
```

2. 生成ファイルの確認
```bash
# トップページ
grep -A1 'og:title\|og:description\|og:url\|twitter:' docs/.vitepress/dist/index.html

# 要求事項ページ
grep -A1 'og:title\|og:description\|og:url\|twitter:' docs/.vitepress/dist/requirements/index.html

# 管理策詳細ページ
grep -A1 'og:title\|og:description\|og:url\|twitter:' docs/.vitepress/dist/controls/a-5-5.html
```

### Expected Output
各ページで以下のメタタグが出力されること:
- `<meta property="og:title" content="ページタイトル">`
- `<meta property="og:description" content="ページ説明">`
- `<meta property="og:url" content="https://isms-guide.com/path/">`
- `<meta name="twitter:card" content="summary">`
- `<meta name="twitter:title" content="ページタイトル">`
- `<meta name="twitter:description" content="ページ説明">`

### Acceptance Criteria
- [ ] 全てのACが満たされていることを確認

---

## Implementation Order

1. **Task 1**: 既存head設定の属性修正（5分）
2. **Task 2**: transformHeadフックの実装（15分）
3. **Task 3**: ビルド検証（10分）

**合計見積もり時間**: 30分
