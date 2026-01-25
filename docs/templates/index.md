# ISMS 文書テンプレート一覧

ISO/IEC 27001:2022 に基づく ISMS 構築に必要な文書・記録テンプレートの一覧です。

## テンプレートの使い方

1. GitHub リポジトリから [`/isms`](https://github.com/btajp/isms-guide/tree/main/isms) ディレクトリをダウンロード
2. 各テンプレートの `{{プレースホルダー}}` を自組織の情報に置換
3. フロントマターの `status` を `draft` → `active` に変更

詳細は [フォーク利用ガイド](/templates/fork-guide) を参照してください。

## 必須文書テンプレート

ISO/IEC 27001:2022 の規格本文で要求される文書です。

### マニュアル・適用宣言書

| 文書ID | 文書名 | 対応箇条 | ファイル |
|--------|--------|----------|----------|
| DOC-000 | ISMS マニュアル | 4.3, 4.4 | [`manual/isms-manual.md`](https://github.com/btajp/isms-guide/blob/main/isms/manual/isms-manual.md) |
| DOC-004 | 適用宣言書 | 6.1.3 d) | [`soa/statement-of-applicability.md`](https://github.com/btajp/isms-guide/blob/main/isms/soa/statement-of-applicability.md) |

### 方針文書

| 文書ID | 文書名 | 対応箇条/管理策 | ファイル |
|--------|--------|-----------------|----------|
| DOC-002 | 情報セキュリティ方針 | 5.2 | [`policies/information-security-policy.md`](https://github.com/btajp/isms-guide/blob/main/isms/policies/information-security-policy.md) |
| DOC-102 | 情報の許容される利用方針 | A.5.10 | [`policies/acceptable-use-policy.md`](https://github.com/btajp/isms-guide/blob/main/isms/policies/acceptable-use-policy.md) |
| DOC-106 | アクセス制御方針 | A.5.15 | [`policies/access-control-policy.md`](https://github.com/btajp/isms-guide/blob/main/isms/policies/access-control-policy.md) |
| DOC-107 | サプライヤー管理方針 | A.5.19 | [`policies/supplier-security-policy.md`](https://github.com/btajp/isms-guide/blob/main/isms/policies/supplier-security-policy.md) |

### 手順書

| 文書ID | 文書名 | 対応箇条 | ファイル |
|--------|--------|----------|----------|
| DOC-003 | リスクアセスメント手順 | 6.1.2 | [`procedures/risk-assessment-procedure.md`](https://github.com/btajp/isms-guide/blob/main/isms/procedures/risk-assessment-procedure.md) |
| DOC-103 | インシデント対応手順 | A.5.24 | [`procedures/incident-response-procedure.md`](https://github.com/btajp/isms-guide/blob/main/isms/procedures/incident-response-procedure.md) |
| DOC-201 | 内部監査手順 | 9.2 | [`procedures/internal-audit-procedure.md`](https://github.com/btajp/isms-guide/blob/main/isms/procedures/internal-audit-procedure.md) |
| DOC-202 | 是正処置手順 | 10.2 | [`procedures/corrective-action-procedure.md`](https://github.com/btajp/isms-guide/blob/main/isms/procedures/corrective-action-procedure.md) |

### 計画書

| 文書ID | 文書名 | 対応箇条 | ファイル |
|--------|--------|----------|----------|
| DOC-005 | リスク対応計画 | 6.1.3 | [`plans/risk-treatment-plan.md`](https://github.com/btajp/isms-guide/blob/main/isms/plans/risk-treatment-plan.md) |
| DOC-006 | 情報セキュリティ目的 | 6.2 | [`plans/security-objectives.md`](https://github.com/btajp/isms-guide/blob/main/isms/plans/security-objectives.md) |
| DOC-108 | 事業継続計画 | A.5.30 | [`plans/business-continuity-plan.md`](https://github.com/btajp/isms-guide/blob/main/isms/plans/business-continuity-plan.md) |

### 台帳・一覧

| 文書ID | 文書名 | 対応箇条/管理策 | ファイル |
|--------|--------|-----------------|----------|
| DOC-101 | 情報資産台帳 | A.5.9 | [`registers/asset-inventory.md`](https://github.com/btajp/isms-guide/blob/main/isms/registers/asset-inventory.md) |
| DOC-301 | リスク台帳 | 6.1.2 | [`registers/risk-register.md`](https://github.com/btajp/isms-guide/blob/main/isms/registers/risk-register.md) |
| DOC-104 | 法的・規制要求事項一覧 | A.5.31 | [`registers/legal-requirements.md`](https://github.com/btajp/isms-guide/blob/main/isms/registers/legal-requirements.md) |

## 必須記録テンプレート

ISMS 運用で作成・保持が必要な記録です。

| 記録ID | 記録名 | 対応箇条/管理策 | ファイル |
|--------|--------|-----------------|----------|
| REC-001 | 教育訓練記録 | 7.2 | [`records/training-record.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/training-record.md) |
| REC-002 | リスクアセスメント報告書 | 6.1.2, 8.2 | [`records/risk-assessment-report.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/risk-assessment-report.md) |
| REC-004 | 監視・測定記録 | 9.1 | [`records/monitoring-measurement-record.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/monitoring-measurement-record.md) |
| REC-005 | 内部監査報告書 | 9.2 | [`records/internal-audit-report.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/internal-audit-report.md) |
| REC-006 | マネジメントレビュー議事録 | 9.3 | [`records/management-review-minutes.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/management-review-minutes.md) |
| REC-007 | 是正処置記録 | 10.2 | [`records/corrective-action-record.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/corrective-action-record.md) |
| REC-102 | インシデント報告書 | A.5.24 | [`records/incident-report.md`](https://github.com/btajp/isms-guide/blob/main/isms/records/incident-report.md) |

## ディレクトリ構造

```
isms/
├── manual/          # ISMS マニュアル
├── soa/             # 適用宣言書
├── policies/        # 方針文書
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
