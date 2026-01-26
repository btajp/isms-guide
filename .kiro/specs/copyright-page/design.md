# Design: Copyright Page

## Architecture Overview

トップページ（`docs/index.md`）に「本サイトのコンテンツについて」セクションを追加し、詳細は専用ページ（`docs/about/copyright.md`）に記載する。

```
docs/
├── index.md              # トップページ（要約セクション追加）
└── about/
    └── copyright.md      # 詳細ページ（問い合わせ経緯・根拠）
```

## Page Structure

### トップページ（index.md）追加セクション

```markdown
## 本サイトのコンテンツについて

本サイトのコンテンツは、ISO から正規に購入した ISO/IEC 27001:2022 の原文を基に、
著者が独自に解釈・要約して作成したオリジナルコンテンツです。

- ISO および JISC（日本規格協会）に事前問い合わせ済み
- JIS 規格の翻訳・流用ではありません
- JISC 回答:「規格を読み込み、ご自身の言葉で概要や要約等を作成される場合には引用の対象外」

[詳細を見る →](/about/copyright)

### 正規規格の入手先

原文の確認が必要な場合は、以下から正規版を入手してください：
- [ISO Store](https://www.iso.org/store.html)
- [JSA Webdesk](https://webdesk.jsa.or.jp/)
```

### 詳細ページ（about/copyright.md）構成

```markdown
# 本サイトのコンテンツについて

## コンテンツの作成方針

### 原文の入手
- ISO Store から ISO/IEC 27001:2022 を正規購入

### 作成プロセス
- 原文を読み込み、著者自身の言葉で解釈・要約
- JIS Q 27001 の翻訳・流用ではない

## ISO・JISC への問い合わせ

### ISO への問い合わせ（2024年 or 2025年）
- 問い合わせ先: ISO Central Secretariat
- 質問内容: ISO/IEC 27001 の条項を引用・翻訳してテンプレートを公開してよいか
- 回答: 日本の ISO メンバー（JISC）に確認するよう案内

### JISC（日本規格協会）への問い合わせ
- 問い合わせ先: 日本規格協会
- 質問内容: ISO 規格を基にしたガイド・テンプレートの公開について
- 回答:
  > 規格を読み込み、ご自身の言葉で概要や要約等を作成される場合には
  > 引用の対象外となりますので、確認の必要はございません。

## 免責事項

- 本サイトは認証取得を保証するものではありません
- 最新・正確な情報は正規規格を参照してください

## 正規規格の入手先

- ISO Store
- JSA Webdesk
```

## Navigation Updates

### config.mts 変更

```typescript
// nav に追加（任意）
nav: [
  // ... existing items
  { text: 'About', link: '/about/copyright' }  // または footer のみ
],

// sidebar に追加
sidebar: {
  // ... existing
  '/about/': [
    {
      text: 'About',
      items: [
        { text: '本サイトのコンテンツについて', link: '/about/copyright' }
      ]
    }
  ]
}
```

### フッター更新（実装済み）

```typescript
footer: {
  message: '<a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">MIT</a> / <a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">CC BY-NC 4.0</a> | <a href="/about/copyright">著作権・出典について</a>',
  copyright: '&copy; 2026 <a href="https://btajp.org">Business Technology Association Japan</a>'
}
```

## Content Flow

```mermaid
graph TD
    A[トップページ] --> B[本サイトのコンテンツについて セクション]
    B --> C{詳細を見たい?}
    C -->|Yes| D[/about/copyright.md]
    C -->|No| E[他のコンテンツへ]

    D --> F[ISO への問い合わせ経緯]
    D --> G[JISC への問い合わせ・回答]
    D --> H[免責事項]
    D --> I[正規規格の入手先リンク]
```

## Key Messages（必須記載事項）

| 項目 | 記載内容 |
|------|----------|
| 問い合わせ済み | ISO・JISC に事前問い合わせを実施 |
| 原文ベース | ISO から購入した規格原文を基に作成 |
| オリジナル | 著者が独自に解釈・要約したコンテンツ |
| 非流用 | JISC（JIS規格）のコンテンツの流用ではない |
| 根拠 | JISC 回答「要約作成は引用対象外」 |

## Error Handling

- 外部リンク（ISO Store、JSA Webdesk）は `target="_blank"` で開く
- リンク切れの場合は検索で対応可能なようドメイン名も記載

## Accessibility

- 見出し構造: h1 > h2 > h3
- 引用部分は `<blockquote>` または Markdown の `>` を使用
- 外部リンクには適切な aria-label を設定（VitePress デフォルトで対応）
