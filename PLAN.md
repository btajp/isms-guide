# ISMS Guide 実装計画

**最終更新:** 2026-01-26

---

## 完了タスク

### Phase 1: 基盤構築 (完了)

- [x] VitePress + Cloudflare Pages セットアップ
- [x] Phase 1 コンテンツ作成（requirements, controls, 詳細18件, 用語集）
- [x] コンテンツ統合（phase1/ → docs/）

### Phase 2: 著作権・ライセンス整備 (完了)

- [x] 著作権ページ実装 (`docs/about/copyright.md`)
- [x] トップページに著作権セクション追加
- [x] MIT / CC0 デュアルライセンス化
- [x] フッター更新（2026 BTAJP、ライセンスリンク）
- [x] Cloudflare Pages デプロイ修正（UTF-8 エラー対応）

### Phase 3: テンプレートコンテンツ作成 (完了)

- [x] 文書テンプレート一覧確定（仕様駆動開発による設計）
- [x] ディレクトリ構造作成（`/isms` 配下）
- [x] ISMS マニュアル（DOC-000）
- [x] 適用宣言書（DOC-004、93管理策の適用表）
- [x] 方針文書 4件（DOC-002, DOC-102, DOC-106, DOC-107）
- [x] 手順書 4件（DOC-003, DOC-103, DOC-201, DOC-202）
- [x] 計画書 3件（DOC-005, DOC-006, DOC-108）
- [x] 台帳・一覧 3件（DOC-101, DOC-301, DOC-104）
- [x] 記録テンプレート 7件（REC-001, REC-002, REC-004-007, REC-102）
- [x] テンプレート一覧ページ作成（`/templates/`）
- [x] フォーク利用ガイド作成（`/templates/fork-guide`）
- [x] テスト・検証（フロントマター、プレースホルダー、内部リンク）

### インフラ (完了)

- [x] isms-guide.com ドメイン設定
- [x] Cloudflare Pages カスタムドメイン設定
- [x] SSL 証明書設定
- [x] 本番デプロイ確認

---

## 次のタスク

### Phase 4: 自動生成機能

| タスク | 説明 | 状態 |
|--------|------|------|
| 文書自動生成機能 | テンプレートから組織ごとの文書一式を自動生成 | 未着手 |

### Phase 5: 代替形式

| タスク | 説明 | 状態 |
|--------|------|------|
| Google Docs版 | Google Workspace 向けテンプレート | 未着手 |
| Word版 | Microsoft Office 向けテンプレート | 未着手 |
| Notion版 | Notion 向けテンプレート | 未着手 |

---

## サイト構造

```
isms-guide.com
│
├── /docs              ← 解説コンテンツ
│   ├── /requirements/    要求事項解説（箇条4-10）
│   ├── /controls/        管理策解説（Annex A 93項目）
│   ├── /templates/       テンプレート一覧・利用ガイド
│   ├── /glossary/        用語集
│   └── /about/           サイトについて（著作権等）
│
├── /isms              ← フォーク対象テンプレート
│   ├── /manual/          ISMS マニュアル
│   ├── /soa/             適用宣言書（SoA）
│   ├── /policies/        方針文書（4件）
│   ├── /procedures/      手順書（4件）
│   ├── /plans/           計画書（3件）
│   ├── /registers/       台帳・一覧（3件）
│   └── /records/         記録テンプレート（7件）
│
└── README.md          ← プロジェクト概要
```

---

## テンプレート一覧

### 必須文書（16件）

| ID | 文書名 | ファイル |
|----|--------|----------|
| DOC-000 | ISMS マニュアル | `manual/isms-manual.md` |
| DOC-004 | 適用宣言書 | `soa/statement-of-applicability.md` |
| DOC-002 | 情報セキュリティ方針 | `policies/information-security-policy.md` |
| DOC-102 | 情報の許容される利用方針 | `policies/acceptable-use-policy.md` |
| DOC-106 | アクセス制御方針 | `policies/access-control-policy.md` |
| DOC-107 | サプライヤー管理方針 | `policies/supplier-security-policy.md` |
| DOC-003 | リスクアセスメント手順 | `procedures/risk-assessment-procedure.md` |
| DOC-103 | インシデント対応手順 | `procedures/incident-response-procedure.md` |
| DOC-201 | 内部監査手順 | `procedures/internal-audit-procedure.md` |
| DOC-202 | 是正処置手順 | `procedures/corrective-action-procedure.md` |
| DOC-005 | リスク対応計画 | `plans/risk-treatment-plan.md` |
| DOC-006 | 情報セキュリティ目的 | `plans/security-objectives.md` |
| DOC-108 | 事業継続計画 | `plans/business-continuity-plan.md` |
| DOC-101 | 情報資産台帳 | `registers/asset-inventory.md` |
| DOC-301 | リスク台帳 | `registers/risk-register.md` |
| DOC-104 | 法的・規制要求事項一覧 | `registers/legal-requirements.md` |

### 必須記録（7件）

| ID | 記録名 | ファイル |
|----|--------|----------|
| REC-001 | 教育訓練記録 | `records/training-record.md` |
| REC-002 | リスクアセスメント報告書 | `records/risk-assessment-report.md` |
| REC-004 | 監視・測定記録 | `records/monitoring-measurement-record.md` |
| REC-005 | 内部監査報告書 | `records/internal-audit-report.md` |
| REC-006 | マネジメントレビュー議事録 | `records/management-review-minutes.md` |
| REC-007 | 是正処置記録 | `records/corrective-action-record.md` |
| REC-102 | インシデント報告書 | `records/incident-report.md` |

---

## 経緯

| 日付 | イベント |
|------|----------|
| 2026-01-13 | プロジェクト開始 |
| 2026-01-13 | Phase 1 コンテンツ作成完了 |
| 2026-01-24 | VitePress + Cloudflare Pages セットアップ完了 |
| 2026-01-24 | Phase 1 コンテンツをリポジトリに追加 |
| 2026-01-25 | コンテンツ統合（phase1/ → docs/）完了 |
| 2026-01-25 | 著作権ページ仕様作成・実装計画策定 |
| 2026-01-26 | 著作権ページ実装完了 |
| 2026-01-26 | MIT / CC0 デュアルライセンス化 |
| 2026-01-26 | フッター更新（BTAJP、ライセンスリンク） |
| 2026-01-26 | 今後のアップデート予定をトップページに追加 |
| 2026-01-26 | Phase 3 テンプレートコンテンツ作成完了（23テンプレート） |

---

## 関連リンク

- 本番サイト: https://isms-guide.com
- GitHub: https://github.com/btajp/isms-guide
- 著作権ページ: https://isms-guide.com/about/copyright
- テンプレート一覧: https://isms-guide.com/templates/
