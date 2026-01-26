# Tasks: OGP画像自動生成

## Task 1: vitepress-plugin-og-imageのインストール

### Description
OGP画像生成用のVitePressプラグインをインストールする。

### Commands
```bash
npm install vitepress-plugin-og-image -D
```

### Acceptance Criteria
- [ ] package.jsonにvitepress-plugin-og-imageが追加される

---

## Task 2: OgImagePluginの設定

### Description
config.mtsにOgImagePluginを設定し、buildEndフックで画像を生成する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Implementation
```typescript
import { OgImagePlugin } from 'vitepress-plugin-og-image'

const ogImagePlugin = new OgImagePlugin({
  destDir: '/og',
})

export default withMermaid(
  defineConfig({
    // ... 既存設定

    buildEnd(siteConfig) {
      ogImagePlugin.buildEnd(siteConfig)
    }
  })
)
```

### Acceptance Criteria
- [ ] OgImagePluginがインポートされる
- [ ] destDirが'/og'に設定される
- [ ] buildEndフックで画像生成が呼び出される

---

## Task 3: transformHeadにog:image設定を追加

### Description
既存のtransformHead関数にog:imageとtwitter:imageメタタグを追加する。

### Files to Modify
- `docs/.vitepress/config.mts`

### Implementation
```typescript
transformHead({ pageData }) {
  const head: HeadConfig[] = []
  const siteUrl = 'https://isms-guide.com'

  // ... 既存のOGP設定

  // og:image
  const ogImageMeta = ogImagePlugin.transformHead({ pageData })
  head.push(...ogImageMeta)

  // twitter:image (og:imageと同じURLを使用)
  const ogImageUrl = `${siteUrl}/og/${pageData.relativePath.replace(/\.md$/, '.png').replace(/index\.png$/, 'index.png')}`
  head.push(['meta', { name: 'twitter:image', content: ogImageUrl }])

  return head
}
```

### Acceptance Criteria
- [ ] AC-1.4: og:imageメタタグが設定される
- [ ] AC-1.5: twitter:imageメタタグが設定される

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
ls -la docs/.vitepress/dist/og/
```

3. 画像仕様確認
```bash
file docs/.vitepress/dist/og/index.png
```

4. メタタグ確認
```bash
grep -E 'og:image|twitter:image' docs/.vitepress/dist/index.html
```

### Expected Output
- `/og/`ディレクトリに各ページのPNG画像が生成される
- 画像サイズは1200x630px
- HTMLに`og:image`と`twitter:image`メタタグが含まれる

### Acceptance Criteria
- [ ] AC-1.1: OGP画像が自動生成される
- [ ] AC-2.1: 画像サイズが1200x630px
- [ ] AC-2.2: 画像形式がPNG
- [ ] AC-2.3: 画像が`/og/`ディレクトリに出力される

---

## Implementation Order

1. **Task 1**: プラグインインストール（2分）
2. **Task 2**: OgImagePlugin設定（10分）
3. **Task 3**: transformHead更新（5分）
4. **Task 4**: ビルド検証（10分）

**合計見積もり時間**: 30分
