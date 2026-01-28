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
├── docs/isms/                 # フォーク対象テンプレート（サイト上でも閲覧可能）
│   ├── manual/                # ISMSマニュアル
│   ├── soa/                   # 適用宣言書（SoA）
│   ├── policies/              # 方針文書
│   ├── procedures/            # 手順書
│   ├── plans/                 # 計画書
│   ├── registers/             # 台帳・一覧
│   └── records/               # 記録テンプレート
│
├── guide/                     # フォーク・カスタマイズ手順
│
└── PLAN-EXPORT.md              # 開発計画書（エクスポート）
```

## Site URL Design

```
/requirements              # 要求事項一覧（箇条4-10を1ページで網羅）
├── #4-1, #4-2, ...       # ページ内アンカー
└── /requirements/6-1-2    # 詳細解説ページ（必要な箇条のみ）

/controls                  # 管理策一覧（Annex A 93項目を1ページで網羅）
├── #a-5-1, ...           # ページ内アンカー
└── /controls/a-5-23       # 詳細解説ページ（必要な管理策のみ）

/isms/                     # テンプレート一覧
├── /isms/manual/          # ISMSマニュアル
├── /isms/policies/        # 方針文書
├── /isms/procedures/      # 手順書
├── /isms/plans/           # 計画書
├── /isms/registers/       # 台帳・一覧
├── /isms/records/         # 記録テンプレート
└── /isms/soa/             # 適用宣言書
```

### 相互リンク設計

- テンプレート → 解説: 見出し直下の「関連」行でリンク（例: `> 関連: [6.1.2](/requirements/6-1-2)`）
- 解説 → テンプレート: 「関連テンプレート」行にリンク一覧

## Fork Usage Image

フォーク後の活用イメージ：

```
社内リポジトリ: acme-corp/isms
│
├── /docs/isms             # 自社用にカスタマイズ
│   ├── manual/            # 組織名・適用範囲を記入
│   ├── soa/               # 適用/除外を記入
│   ├── policies/          # 方針を自社用に編集
│   ├── procedures/        # 自社手順に編集
│   ├── plans/             # 計画書を自社用に編集
│   ├── registers/         # 台帳に実データを追加
│   └── records/           # 実際の記録を追加
│
└── GitHub Pages または Cloudflare Pages で公開
```

## Naming Conventions

### Files

- ファイル名: `kebab-case`（例: `risk-assessment-procedure.md`）
- 箇条番号を含む場合: `6-1-2.md`
- 管理策番号を含む場合: `a-5-23.md`

### Directories

- ディレクトリ名: `kebab-case`（例: `risk-management/`）

### Anchors

- 箇条番号: `#4-1`, `#6-1-2`
- 管理策番号: `#a-5-1`, `#a-8-28`

## Development Phases

| Phase | 内容 | 状態 |
|-------|------|:----:|
| 1 | 解説コンテンツ作成 | 完了 |
| 2 | サイト公開（Cloudflare Pages） | 完了 |
| 3 | テンプレートコンテンツ作成 | 完了 |
| 4 | 代替形式（Notion等） | 将来 |

## Architecture Decisions

- 単一リポジトリで解説サイトとテンプレートを管理
- テンプレートは `/docs/isms/` に配置（サイト上で閲覧可能、かつフォーク対象）
- 静的サイトジェネレータ（VitePress）で解説サイトを構築
- Cloudflare Pages でホスティング
- 解説コンテンツとテンプレート間で相互リンク（双方向参照）
