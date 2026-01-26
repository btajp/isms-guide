# Design: OGP画像自動生成

## Architecture Overview

VitePressの`buildEnd`フックでOGP画像を生成し、`transformHead`フックで各ページに`og:image`メタタグを設定する。

```
┌─────────────────────────────────────────────────────────────┐
│                    VitePress Build                          │
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │   Markdown  │───▶│ transformHead│───▶│  HTML Output  │  │
│  │   Pages     │    │  (og:image)  │    │  with OGP     │  │
│  └─────────────┘    └──────────────┘    └───────────────┘  │
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │   Page Data │───▶│   buildEnd   │───▶│  /og/*.png    │  │
│  │   (titles)  │    │  (generate)  │    │  (1200x630)   │  │
│  └─────────────┘    └──────────────┘    └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. OgImagePlugin (config.mts)

```typescript
import { OgImagePlugin } from 'vitepress-plugin-og-image'

const ogImagePlugin = new OgImagePlugin({
  destDir: '/og',
})

export default defineConfig({
  transformHead({ pageData }) {
    const head: HeadConfig[] = []
    // ... 既存のOGP設定

    // og:image
    const ogImagePath = ogImagePlugin.transformHead({ pageData })
    head.push(...ogImagePath)

    return head
  },

  buildEnd(siteConfig) {
    ogImagePlugin.buildEnd(siteConfig)
  }
})
```

## Design Decisions

### D1: プラグイン選定

**決定**: `@nolebase/vitepress-plugin-og-image`を使用

**根拠**:
- VitePress専用のプラグインで活発にメンテナンス
- buildEndフックで自動生成
- Satoriベースでsharp不要

**代替案**:
- `vitepress-plugin-og-image (ryohidaka)`: sharpの互換性問題あり
- Satori + Sharp: 自前実装が必要で複雑

### D2: 画像出力先

**決定**: 各ページと同じディレクトリに`og-{filename}.png`形式で出力

**URL例**:
- 要求事項: `https://isms-guide.com/requirements/og-index.png`
- A.5.5: `https://isms-guide.com/controls/og-a-5-5.png`
- 用語集: `https://isms-guide.com/glossary/og-index.png`

**注意**: サイドバーにないページ（トップページ、ISMSテンプレート等）は画像生成がスキップされる

### D3: 画像デザイン

**決定**: プラグインのデフォルトテンプレートを使用

**内容**:
- サイト名: ISMS Guide
- ページタイトル: 各ページのtitle

### D4: 既存transformHeadとの統合

**決定**: 既存のtransformHead関数内にog:image設定を追加

**変更箇所**:
```typescript
// 既存
head.push(['meta', { property: 'og:title', content: title }])

// 追加
head.push(['meta', { property: 'og:image', content: ogImageUrl }])
head.push(['meta', { name: 'twitter:image', content: ogImageUrl }])
```

## File Changes

### New Dependencies

```json
{
  "devDependencies": {
    "vitepress-plugin-og-image": "^0.x.x"
  }
}
```

### Modified Files

| ファイル | 変更内容 |
|---------|---------|
| `package.json` | vitepress-plugin-og-image追加 |
| `docs/.vitepress/config.mts` | OgImagePlugin設定、buildEnd追加 |

## Testing Strategy

### ビルドテスト

1. `npm run build`でビルド実行
2. `docs/.vitepress/dist/og/`ディレクトリが生成されること
3. 各ページに対応するPNG画像が存在すること

### メタタグ確認

```bash
grep 'og:image' docs/.vitepress/dist/index.html
grep 'twitter:image' docs/.vitepress/dist/index.html
```

### 画像仕様確認

```bash
file docs/.vitepress/dist/og/index.png
# 期待: PNG image data, 1200 x 630
```
