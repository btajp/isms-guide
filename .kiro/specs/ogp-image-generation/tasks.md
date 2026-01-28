# Tasks: OGP画像自動生成

## Task 1: @nolebase/vitepress-plugin-og-image の導入

### Description
OGP画像生成用プラグインを導入する。

### Commands
```bash
npm install @nolebase/vitepress-plugin-og-image -D
```

### Acceptance Criteria
- [x] package.jsonに`@nolebase/vitepress-plugin-og-image`が追加される

---

## Task 2: buildEnd でOGP画像生成を実行

### Description
VitePressの`buildEnd`でOGP画像を生成する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Implementation
```typescript
import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'

export default defineConfig({
  // ...
  async buildEnd(siteConfig) {
    await buildEndGenerateOpenGraphImages({
      baseUrl: 'https://isms-guide.com',
      category: {
        byPathPrefix: [
          { prefix: 'controls', text: '管理策' },
          { prefix: 'requirements', text: '要求事項' },
          { prefix: 'templates', text: 'テンプレート' },
          { prefix: 'glossary', text: '用語集' },
          { prefix: 'about', text: 'サイト情報' },
          { prefix: 'isms/guidelines', text: 'ガイドライン' },
          { prefix: 'isms/policies', text: '方針' },
          { prefix: 'isms/procedures', text: '手順書' },
          { prefix: 'isms/records', text: '記録' },
          { prefix: 'isms/plans', text: '計画書' },
          { prefix: 'isms/registers', text: '台帳' },
          { prefix: 'isms/soa', text: '適用宣言書' },
          { prefix: 'isms/manual', text: 'マニュアル' },
          { prefix: 'blog', text: 'ブログ' },
        ],
      },
      maxCharactersPerLine: 12,
      svgFontBuffers: [mplus1p],
    })(siteConfig)
  }
})
```

### Acceptance Criteria
- [x] buildEndでOGP画像生成が呼び出される
- [x] カテゴリラベルがパスプレフィックスで付与される
- [x] フォントバッファが指定される

---

## Task 3: transformHead に og:image / twitter:image を追加

### Description
ページごとにOGP画像のメタタグを出力する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Implementation
```typescript
transformHead({ pageData }) {
  const head: HeadConfig[] = []
  const siteUrl = 'https://isms-guide.com'

  // ... 既存のOGP設定

  const ogImagePath = pageData.relativePath
    .replace(/\.md$/, '.png')
    .replace(/([^/]+)\.png$/, 'og-$1.png')
  const ogImageUrl = `${siteUrl}/${ogImagePath}`

  head.push(['meta', { property: 'og:image', content: ogImageUrl }])
  head.push(['meta', { name: 'twitter:image', content: ogImageUrl }])

  return head
}
```

### Acceptance Criteria
- [x] og:imageメタタグが設定される
- [x] twitter:imageメタタグが設定される

---

## Task 4: ビルド検証

### Description
ビルドを実行し、OGP画像が正しく生成されることを確認する。

### Verification Steps

1. ビルド実行
```bash
npm run build
```

2. 画像ディレクトリ確認
```bash
ls -la docs/.vitepress/dist | rg '^og-'
```

3. 画像仕様確認
```bash
file docs/.vitepress/dist/og-index.png
```

4. メタタグ確認
```bash
grep -E 'og:image|twitter:image' docs/.vitepress/dist/index.html
```

### Expected Output
- ルートや各ディレクトリに `og-*.png` が生成される
- 画像サイズは1200x630px
- HTMLに`og:image`と`twitter:image`メタタグが含まれる

### Acceptance Criteria
- [ ] AC-1.1: OGP画像が自動生成される
- [ ] AC-2.1: 画像サイズが1200x630px
- [ ] AC-2.2: 画像形式がPNG
- [ ] AC-2.3: `og-*.png` が出力される

---

## Implementation Order

1. **Task 1**: プラグイン導入（2分）
2. **Task 2**: buildEnd設定（10分）
3. **Task 3**: transformHead更新（5分）
4. **Task 4**: ビルド検証（10分）

**合計見積もり時間**: 30分
