# ISMS 文書テンプレート

ISO/IEC 27001:2022 認証取得に必要な文書テンプレート集です。

## 概要

このディレクトリには、ISMS 構築・運用に必要な文書テンプレートが含まれています。
リポジトリをフォークして、組織に合わせてカスタマイズしてご利用ください。

## ディレクトリ構造

```
isms/
├── manual/                   # ISMS マニュアル
│   └── isms-manual.md
├── soa/                      # 適用宣言書
│   └── statement-of-applicability.md
├── policies/                 # 方針文書
│   ├── information-security-policy.md
│   ├── acceptable-use-policy.md
│   ├── access-control-policy.md
│   └── supplier-security-policy.md
├── procedures/               # 手順書
│   ├── risk-assessment-procedure.md
│   ├── incident-response-procedure.md
│   ├── internal-audit-procedure.md
│   └── corrective-action-procedure.md
├── plans/                    # 計画書
│   ├── risk-treatment-plan.md
│   ├── security-objectives.md
│   └── business-continuity-plan.md
├── registers/                # 台帳・一覧
│   ├── asset-inventory.md
│   ├── risk-register.md
│   └── legal-requirements.md
└── records/                  # 記録テンプレート
    ├── training-record.md
    ├── risk-assessment-report.md
    ├── monitoring-measurement-record.md
    ├── internal-audit-report.md
    ├── management-review-minutes.md
    ├── corrective-action-record.md
    └── incident-report.md
```

## 使い方

### 1. リポジトリをフォーク

このリポジトリをフォークして、組織専用のリポジトリを作成します。

```bash
# フォーク後
git clone https://github.com/YOUR_ORG/isms-guide.git
cd isms-guide
```

### 2. プレースホルダーの置換

各テンプレートには `{{組織名}}` などのプレースホルダーが含まれています。
組織の情報に置き換えてください。

**標準プレースホルダー:**

| プレースホルダー | 説明 | 例 |
|-----------------|------|-----|
| `{{組織名}}` | 組織の正式名称 | 株式会社サンプル |
| `{{組織略称}}` | 組織の略称 | サンプル社 |
| `{{適用範囲}}` | ISMS の適用範囲 | 本社 IT 部門 |
| `{{代表者}}` | 代表者名 | 山田太郎 |
| `{{ISMS責任者}}` | ISMS 管理責任者 | 鈴木一郎 |
| `{{発効日}}` | 文書の発効日 | 2026-04-01 |

### 3. 文書のカスタマイズ

各文書は組織の実情に合わせてカスタマイズしてください。
不要なセクションは削除し、必要な内容を追記してください。

### 4. バージョン管理

Git を使用して文書のバージョン管理を行います。
変更履歴は Git のコミット履歴で追跡できます。

## テンプレート一覧

### 必須文書（規格本文で要求）

| 文書名 | ファイル | 対応箇条 |
|--------|----------|----------|
| ISMS マニュアル | `manual/isms-manual.md` | 4.3, 5.2 |
| 情報セキュリティ方針 | `policies/information-security-policy.md` | 5.2 |
| リスクアセスメント手順 | `procedures/risk-assessment-procedure.md` | 6.1.2 |
| 適用宣言書（SoA） | `soa/statement-of-applicability.md` | 6.1.3 d) |
| リスク対応計画 | `plans/risk-treatment-plan.md` | 6.1.3 e), 6.2 |
| 情報セキュリティ目的 | `plans/security-objectives.md` | 6.2 |

### 必須記録（規格本文で要求）

| 記録名 | ファイル | 対応箇条 |
|--------|----------|----------|
| 教育訓練記録 | `records/training-record.md` | 7.2 |
| リスクアセスメント報告書 | `records/risk-assessment-report.md` | 8.2, 8.3 |
| 監視・測定記録 | `records/monitoring-measurement-record.md` | 9.1 |
| 内部監査報告書 | `records/internal-audit-report.md` | 9.2 |
| マネジメントレビュー議事録 | `records/management-review-minutes.md` | 9.3 |
| 是正処置記録 | `records/corrective-action-record.md` | 10.2 |

### 推奨文書（附属書 A 管理策）

| 文書名 | ファイル | 対応管理策 |
|--------|----------|------------|
| 情報の許容される利用方針 | `policies/acceptable-use-policy.md` | A.5.10 |
| アクセス制御方針 | `policies/access-control-policy.md` | A.5.15 |
| サプライヤー管理方針 | `policies/supplier-security-policy.md` | A.5.19-A.5.22 |
| インシデント対応手順 | `procedures/incident-response-procedure.md` | A.5.24, A.5.26 |
| 内部監査手順 | `procedures/internal-audit-procedure.md` | 9.2 |
| 是正処置手順 | `procedures/corrective-action-procedure.md` | 10.2 |
| 事業継続計画 | `plans/business-continuity-plan.md` | A.5.29, A.5.30 |
| 情報資産台帳 | `registers/asset-inventory.md` | A.5.9 |
| リスク台帳 | `registers/risk-register.md` | 6.1.2 |
| 法的・規制要求事項一覧 | `registers/legal-requirements.md` | A.5.31 |
| インシデント報告書 | `records/incident-report.md` | A.5.24 |

## 注意事項

- 機密情報を含む文書は、リポジトリをプライベートに設定してください
- 実際の組織情報・個人情報を含める前に、セキュリティを確認してください
- 文書の承認・発行は組織の文書管理規定に従ってください

## 関連リンク

- [ISMS Guide 解説サイト](https://isms-guide.com)
- [要求事項解説](/requirements/)
- [管理策解説](/controls/)
