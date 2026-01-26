# ISMS 文書テンプレート一覧

ISO/IEC 27001:2022 に基づく ISMS 構築に必要な文書・記録テンプレートの一覧です。

## テンプレートの使い方

1. GitHub リポジトリから [`/docs/isms`](https://github.com/btajp/isms-guide/tree/main/docs/isms) ディレクトリをダウンロード
2. 各テンプレートの `{{プレースホルダー}}` を自組織の情報に置換
3. フロントマターの `status` を `draft` → `active` に変更

詳細は [フォーク利用ガイド](/templates/fork-guide) を参照してください。

## 必須文書テンプレート

ISO/IEC 27001:2022 の規格本文で要求される文書です。

### マニュアル・適用宣言書

| 文書ID | 文書名 | 対応箇条 |
|--------|--------|----------|
| DOC-000 | [ISMS マニュアル](/isms/manual/isms-manual) | 4.3, 4.4 |
| DOC-004 | [適用宣言書](/isms/soa/statement-of-applicability) | 6.1.3 d) |

### 方針文書

| 文書ID | 文書名 | 対応箇条/管理策 |
|--------|--------|-----------------|
| DOC-002 | [情報セキュリティ方針](/isms/policies/information-security-policy) | 5.2 |
| DOC-102 | [情報の許容される利用方針](/isms/policies/acceptable-use-policy) | A.5.10 |
| DOC-106 | [アクセス制御方針](/isms/policies/access-control-policy) | A.5.15 |
| DOC-107 | [サプライヤー管理方針](/isms/policies/supplier-security-policy) | A.5.19 |
| POL-005 | [技術的セキュリティ方針](/isms/policies/technical-security-policy) | A.8.7-A.8.32 |

### ガイドライン

方針を具体的なルールに落とし込んだ実践文書です。

| 文書ID | 文書名 | 対象者 |
|--------|--------|--------|
| GL-001 | [従業員向けセキュリティガイドライン](/isms/guidelines/employee-security-guideline) | 全従業員 |
| GL-002 | [エンジニア向けセキュリティガイドライン](/isms/guidelines/engineer-security-guideline) | 開発者・運用者 |

### 手順書

| 文書ID | 文書名 | 対応箇条 |
|--------|--------|----------|
| DOC-003 | [リスクアセスメント手順](/isms/procedures/risk-assessment-procedure) | 6.1.2 |
| DOC-103 | [インシデント対応手順](/isms/procedures/incident-response-procedure) | A.5.24 |
| DOC-201 | [内部監査手順](/isms/procedures/internal-audit-procedure) | 9.2 |
| DOC-202 | [是正処置手順](/isms/procedures/corrective-action-procedure) | 10.2 |

### 計画書

| 文書ID | 文書名 | 対応箇条 |
|--------|--------|----------|
| DOC-005 | [リスク対応計画](/isms/plans/risk-treatment-plan) | 6.1.3 |
| DOC-006 | [情報セキュリティ目的](/isms/plans/security-objectives) | 6.2 |
| DOC-108 | [事業継続計画](/isms/plans/business-continuity-plan) | A.5.30 |

### 台帳・一覧

| 文書ID | 文書名 | 対応箇条/管理策 |
|--------|--------|-----------------|
| DOC-101 | [情報資産台帳](/isms/registers/asset-inventory) | A.5.9 |
| DOC-301 | [リスク台帳](/isms/registers/risk-register) | 6.1.2 |
| DOC-104 | [法的・規制要求事項一覧](/isms/registers/legal-requirements) | A.5.31 |

## 必須記録テンプレート

ISMS 運用で作成・保持が必要な記録です。

| 記録ID | 記録名 | 対応箇条/管理策 |
|--------|--------|-----------------|
| REC-001 | [教育訓練記録](/isms/records/training-record) | 7.2 |
| REC-002 | [リスクアセスメント報告書](/isms/records/risk-assessment-report) | 6.1.2, 8.2 |
| REC-004 | [監視・測定記録](/isms/records/monitoring-measurement-record) | 9.1 |
| REC-005 | [内部監査報告書](/isms/records/internal-audit-report) | 9.2 |
| REC-006 | [マネジメントレビュー議事録](/isms/records/management-review-minutes) | 9.3 |
| REC-007 | [是正処置記録](/isms/records/corrective-action-record) | 10.2 |
| REC-102 | [インシデント報告書](/isms/records/incident-report) | A.5.24 |

## ディレクトリ構造

```
docs/isms/
├── manual/          # ISMS マニュアル
├── soa/             # 適用宣言書
├── policies/        # 方針文書
├── guidelines/      # ガイドライン
├── procedures/      # 手順書
├── plans/           # 計画書
├── registers/       # 台帳・一覧
└── records/         # 記録テンプレート
```

## フロントマター形式

すべてのテンプレートは以下の YAML フロントマターを含みます：

```yaml
---
title: "文書名"
document_id: "DOC-XXX"
version: "1.0"
effective_date: "{{発効日}}"
owner: "{{ISMS責任者}}"
iso_clause: "対応箇条"
iso_control: "対応管理策"
status: "draft"
---
```

## プレースホルダー規約

テンプレート内のプレースホルダーは `{{変数名}}` 形式で統一されています。

| カテゴリ | 例 |
|----------|-----|
| 日付 | `{{発効日}}`, `{{作成日}}` |
| 人名・組織 | `{{ISMS責任者}}`, `{{組織名}}` |
| 選択肢 | `{{高/中/低}}`, `{{完了/継続}}` |
| 説明 | `{{目的の説明}}`, `{{リスクの詳細}}` |

## 関連リンク

- [フォーク利用ガイド](/templates/fork-guide) - カスタマイズ手順
- [要求事項](/requirements/) - ISO/IEC 27001 要求事項の解説
- [管理策](/controls/) - Annex A 管理策の解説
