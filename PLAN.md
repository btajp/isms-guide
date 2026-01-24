# Implementation Plan: Site Setup

## Source Spec

- `.kiro/specs/site-setup/requirements.md`
- `.kiro/specs/site-setup/design.md`
- `.kiro/specs/site-setup/tasks.md`

## Requirements Summary

VitePress を使用した ISMS Guide サイトの初期セットアップ。

### 主要な受入基準

| ID | 内容 |
|----|------|
| AC-1.1 | トップページにサイト概要とナビゲーションを表示 |
| AC-1.2 | 要求事項ページに箇条4-10をアンカー付きで表示 |
| AC-1.3 | 管理策ページに Annex A 93項目をアンカー付きで表示 |
| AC-1.4 | 詳細ページに Mermaid 図を含む解説を表示 |
| AC-1.5 | 日本語全文検索が動作 |
| AC-2.1 | モバイル端末でレスポンシブ表示 |
| AC-2.2 | ダークモード対応 |
| AC-3.1 | main プッシュで自動ビルド・デプロイ |
| AC-4.1 | isms/ ディレクトリがフォーク可能 |

### 非機能要件

- Lighthouse パフォーマンス/アクセシビリティ 90+
- HTTPS 必須
- sitemap.xml 自動生成
- 依存パッケージ最小限

## Implementation Order

### Phase 1: プロジェクト初期化

| Task | 内容 | 要件 |
|------|------|------|
| 1.1 | `npm init` で package.json 作成 | AC-3.1 |
| 1.2 | VitePress + Mermaid プラグインインストール | AC-1.4, AC-3.1 |
| 1.3 | npm scripts 設定（dev, build, preview） | AC-3.1 |
| 1.4 | .gitignore 作成 | NFR-9 |

**成果物:**
- `package.json`
- `package-lock.json`
- `.gitignore`

### Phase 2: VitePress 設定

| Task | 内容 | 要件 |
|------|------|------|
| 2.1 | `docs/.vitepress/config.mts` 作成（基本設定） | AC-1.1, NFR-7 |
| 2.2 | Mermaid プラグイン統合 | AC-1.4 |
| 2.3 | ナビゲーション設定 | AC-1.1-1.3 |
| 2.4 | サイドバー設定 | AC-1.2, AC-1.3 |
| 2.5 | 日本語検索設定 | AC-1.5 |
| 2.6 | メタタグ・OGP・sitemap 設定 | NFR-7, NFR-8 |
| 2.7 | 日本語 UI ラベル設定 | AC-1.1 |

**成果物:**
- `docs/.vitepress/config.mts`

### Phase 3: コンテンツ構造作成

| Task | 内容 | 要件 |
|------|------|------|
| 3.1 | `docs/index.md`（トップページ） | AC-1.1 |
| 3.2 | `docs/requirements/index.md`（プレースホルダー） | AC-1.2 |
| 3.3 | `docs/controls/index.md`（プレースホルダー） | AC-1.3 |
| 3.4 | `docs/glossary/index.md`（プレースホルダー） | AC-1.1 |
| 3.5 | `docs/public/` 静的アセット | NFR-7 |

**成果物:**
- `docs/index.md`
- `docs/requirements/index.md`
- `docs/controls/index.md`
- `docs/glossary/index.md`
- `docs/public/favicon.ico`（プレースホルダー）

### Phase 4: テンプレートディレクトリ構造

| Task | 内容 | 要件 |
|------|------|------|
| 4.1 | `isms/` ディレクトリ構造作成 | AC-4.1 |
| 4.2 | `isms/README.md` 作成 | AC-4.1, AC-4.2 |
| 4.3 | `guide/` ディレクトリ作成 | AC-4.2 |

**成果物:**
- `isms/README.md`
- `isms/manual/.gitkeep`
- `isms/soa/.gitkeep`
- `isms/procedures/.gitkeep`
- `isms/records/.gitkeep`
- `guide/index.md`

### Phase 5: CI/CD 設定

| Task | 内容 | 要件 |
|------|------|------|
| 5.1 | `.github/workflows/deploy.yml` 作成 | AC-3.1, AC-3.2 |
| 5.2 | ローカルビルドテスト | AC-3.3 |

**成果物:**
- `.github/workflows/deploy.yml`

### Phase 6: 動作確認

| Task | 内容 | 要件 |
|------|------|------|
| 6.1 | `npm run dev` でローカルプレビュー確認 | AC-1.1-1.4 |
| 6.2 | モバイル表示確認 | AC-2.1 |
| 6.3 | Mermaid 図レンダリング確認 | AC-1.4 |
| 6.4 | 日本語検索確認 | AC-1.5 |
| 6.5 | ダークモード確認 | AC-2.2 |

## Dependencies

```
Phase 1 → Phase 2 → Phase 3 ─┐
                    Phase 4 ─┼→ Phase 5 → Phase 6
```

- Phase 2 は Phase 1 完了後（npm パッケージが必要）
- Phase 3, 4 は Phase 2 完了後（VitePress 設定が必要）
- Phase 5 は Phase 3, 4 完了後（ビルド対象が必要）
- Phase 6 は Phase 5 完了後（全体動作確認）

## Risk Assessment

| レベル | リスク | 対策 |
|:------:|--------|------|
| LOW | VitePress バージョン互換性 | 安定版 1.5.x を使用 |
| LOW | Mermaid プラグイン互換性 | 公式推奨の vitepress-plugin-mermaid を使用 |
| LOW | 日本語検索精度 | VitePress 標準のローカル検索で十分 |

## Prerequisites

- [x] Node.js 20+ インストール済み
- [x] npm インストール済み
- [x] Git インストール済み
- [ ] GitHub Pages 有効化（リポジトリ設定で後から実施）

## Estimated Complexity

**Low-Medium**

- VitePress は設定がシンプル
- Mermaid プラグインは公式サポート
- コンテンツはプレースホルダーのみ（実コンテンツは content-integration で対応）

## Out of Scope（本計画に含まない）

- ドメイン取得・DNS 設定
- Phase 1 コンテンツの移行（content-integration spec）
- ISMS テンプレート文書作成（template-creation spec）
- Lighthouse スコア最適化（基本設定のみ）

## Completion Criteria

- [x] 仕様ファイル作成済み
- [ ] `npm run dev` でローカルプレビューが動作
- [ ] `npm run build` がエラーなく完了
- [ ] トップページ、要求事項、管理策、用語集のプレースホルダーが表示
- [ ] Mermaid 図が正しくレンダリング
- [ ] 日本語検索が動作
- [ ] ダークモード切り替えが動作
- [ ] モバイル表示が正常

---

**Status**: APPROVED (2026-01-24)

実装準備完了。`/tdd` で TDD 実装を開始できます。
