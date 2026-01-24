# Project Structure

## Directory Layout

```
isms-guide/
│
├── .kiro/                     # 仕様駆動開発（本ディレクトリ）
│   ├── steering/              # プロジェクト全体の文脈
│   │   ├── product.md
│   │   ├── tech.md
│   │   └── structure.md
│   └── specs/                 # 機能仕様
│
├── docs/                      # 解説コンテンツ
│   ├── requirements/          # 要求事項解説（箇条4-10）
│   ├── controls/              # 管理策解説（Annex A 93項目）
│   └── glossary/              # 用語集
│
├── isms/                      # フォーク対象テンプレート
│   ├── manual/                # ISMSマニュアル
│   ├── soa/                   # 適用宣言書（SoA）
│   ├── procedures/            # 手順書
│   └── records/               # 記録テンプレート
│
├── guide/                     # フォーク・カスタマイズ手順
│
└── DEVELOPMENT_PLAN.md        # 開発計画書
```

## Site URL Design

```
/requirements              # 要求事項一覧（箇条4-10を1ページで網羅）
├── #4-1, #4-2, ...       # ページ内アンカー
└── /requirements/6-1-2    # 詳細解説ページ（必要な箇条のみ）

/controls                  # 管理策一覧（Annex A 93項目を1ページで網羅）
├── #a-5-1, ...           # ページ内アンカー
└── /controls/a-5-23       # 詳細解説ページ（必要な管理策のみ）
```

## Fork Usage Image

フォーク後の活用イメージ：

```
社内リポジトリ: acme-corp/isms
│
├── /isms                  # 自社用にカスタマイズ
│   ├── manual/            # 組織名・適用範囲を記入
│   ├── soa/               # 適用/除外を記入
│   ├── procedures/        # 自社手順に編集
│   └── records/           # 実際の記録を追加
│
└── GitHub Pages または社内サーバーで公開
```

## Naming Conventions

### Files

- ファイル名: `kebab-case`（例: `risk-assessment.md`）
- 箇条番号を含む場合: `6-1-2-risk-assessment.md`
- 管理策番号を含む場合: `a-5-23-cloud-security.md`

### Directories

- ディレクトリ名: `kebab-case`（例: `risk-management/`）

### Anchors

- 箇条番号: `#4-1`, `#6-1-2`
- 管理策番号: `#a-5-1`, `#a-8-28`

## Development Phases

| Phase | 内容 | 状態 |
|-------|------|:----:|
| 1 | 解説コンテンツ作成 | 完了 |
| 2 | サイト公開 | 現在 |
| 3 | テンプレートコンテンツ作成 | 未着手 |
| 4 | 代替形式（Notion等） | 将来 |

## Architecture Decisions

- 単一リポジトリで解説サイトとテンプレートを管理
- テンプレート部分（`/isms`）のみフォーク対象として設計
- 静的サイトジェネレータで解説サイトを構築
- GitHub Pages または Cloudflare Pages でホスティング
