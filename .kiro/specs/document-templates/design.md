# Design: 文書テンプレート一覧確定

## Architecture Overview

```
docs/isms/                      # フォーク対象（サイト上でも閲覧可能）
├── README.md                   # 利用ガイド（概要）
├── manual/                     # ISMS マニュアル
│   └── isms-manual.md
├── soa/                        # 適用宣言書
│   └── statement-of-applicability.md
├── policies/                   # 方針文書
│   ├── information-security-policy.md
│   ├── acceptable-use-policy.md
│   ├── access-control-policy.md
│   └── supplier-security-policy.md
├── procedures/                 # 手順書
│   ├── risk-assessment-procedure.md
│   ├── incident-response-procedure.md
│   ├── internal-audit-procedure.md
│   └── corrective-action-procedure.md
├── plans/                      # 計画書
│   ├── risk-treatment-plan.md
│   ├── security-objectives.md
│   └── business-continuity-plan.md
├── registers/                  # 台帳・一覧
│   ├── asset-inventory.md
│   ├── risk-register.md
│   └── legal-requirements.md
└── records/                    # 記録テンプレート
    ├── training-record.md
    ├── risk-assessment-report.md
    ├── monitoring-measurement-record.md
    ├── internal-audit-report.md
    ├── management-review-minutes.md
    ├── incident-report.md
    └── corrective-action-record.md
```

## Directory Design

### ディレクトリ分類の根拠

| ディレクトリ | 目的 | 内容 |
|-------------|------|------|
| `manual/` | 統合文書 | ISMS 全体像を示すマニュアル |
| `soa/` | 適用宣言 | 93 管理策の適用/除外を宣言 |
| `policies/` | 方針 | 組織の意図・方向性を示す |
| `procedures/` | 手順 | 活動の実施方法を規定 |
| `plans/` | 計画 | 目標達成のための行動計画 |
| `registers/` | 台帳 | 情報の一覧・管理表 |
| `records/` | 記録 | 活動の証拠となる記録様式 |

## File Naming Convention

### 規則

- ファイル名: `kebab-case.md`
- 日本語ファイル名は使用しない（Git 互換性）
- 箇条番号はファイル名に含めない（メタデータで管理）

### 例

```
# Good
risk-assessment-procedure.md
internal-audit-report.md
asset-inventory.md

# Bad
リスクアセスメント手順.md     # 日本語NG
6-1-2-risk-assessment.md     # 箇条番号不要
RiskAssessmentProcedure.md   # PascalCase NG
```

## Template Structure

### 共通フロントマター

各テンプレートの先頭に YAML フロントマターを配置：

```yaml
---
title: "文書タイトル"
document_id: "DOC-001"
version: "1.0"
effective_date: "{{発効日}}"
owner: "{{文書管理責任者}}"
iso_clause: "4.3"           # 対応箇条（複数可）
iso_control: ""             # 対応管理策（複数可）
status: "draft"             # draft | approved | obsolete
---
```

### 本文構造

```markdown
# 文書タイトル

## 1. 目的

{{この文書の目的を記載}}

## 2. 適用範囲

{{この文書が適用される範囲を記載}}

## 3. 用語の定義

| 用語 | 定義 |
|------|------|
| {{用語}} | {{定義}} |

## 4. 本文

<!-- 文書種別に応じた内容 -->

## 5. 関連文書

- {{関連文書名}}

## 改訂履歴

| 版 | 日付 | 変更内容 | 承認者 |
|----|------|----------|--------|
| 1.0 | {{日付}} | 初版作成 | {{承認者}} |
```

## Placeholder Convention

### 形式

```
{{変数名}}
```

### 標準プレースホルダー

| プレースホルダー | 説明 | 例 |
|-----------------|------|-----|
| `{{組織名}}` | 組織の正式名称 | 株式会社サンプル |
| `{{組織略称}}` | 組織の略称 | サンプル社 |
| `{{適用範囲}}` | ISMS の適用範囲 | 本社 IT 部門 |
| `{{代表者}}` | 代表者名 | 山田太郎 |
| `{{ISMS責任者}}` | ISMS 管理責任者 | 鈴木一郎 |
| `{{発効日}}` | 文書の発効日 | 2026-04-01 |
| `{{レビュー日}}` | 次回レビュー日 | 2027-04-01 |

### VitePress 対応

VitePress は `{{ }}` を Vue の interpolation として解釈するため、プレースホルダーを含むセクションは `<div v-pre>` でラップする：

```markdown
<div v-pre>

| 項目 | 内容 |
|------|------|
| 組織名 | {{組織名}} |
| 適用範囲 | {{適用範囲}} |

</div>
```

### 注釈形式

```markdown
<!--
  [記載のポイント]
  ここには○○を記載してください。
  例: xxxxx
-->
```

## Data Flow

```mermaid
graph LR
    A[テンプレート<br/>リポジトリ] -->|Fork| B[組織リポジトリ]
    B -->|Edit| C[カスタマイズ]
    C -->|Replace| D[プレースホルダー置換]
    D -->|Review| E[レビュー・承認]
    E -->|Deploy| F[社内公開]
```

## Interfaces

### 解説サイトとの連携（テンプレート → 解説）

テンプレートから解説ページへのリンクは、見出し内にインラインで配置：

```markdown
## 3. [リスクアセスメント](/requirements/6-1-2)プロセス

<!-- または本文中に自然な形で -->
本手順は [箇条 6.1.2](/requirements/6-1-2) の要求事項を満たすために...
```

### 解説サイトとの連携（解説 → テンプレート）

要求事項・管理策の解説ページからテンプレートへのバックリンク：

- **配置位置**: 各項・節の見出し直後に配置（「要求事項の概要」の前）
- **アンカーリンク**: テンプレート内の具体的なセクションへ直接リンク

```markdown
### 4.3 ISMSの適用範囲の決定 {#4-3}

> **関連テンプレート**: [ISMSマニュアル - 2. 適用範囲](/isms/manual/isms-manual#2-適用範囲)

**要求事項の概要**

...
```

```markdown
### 6.1.2 情報セキュリティリスクアセスメント {#6-1-2}

> **関連テンプレート**:
> - [リスクアセスメント手順](/isms/procedures/risk-assessment-procedure)
> - [リスク台帳 - 3. リスク一覧](/isms/registers/risk-register#3-リスク一覧)
> - [リスクアセスメント報告書](/isms/records/risk-assessment-report)

**要求事項の概要**

...
```

個別詳細ページでも同様に、ページ先頭のメタ情報の後に配置：

```markdown
# 6.1.2 情報セキュリティリスクアセスメント

> **関連テンプレート**:
> - [リスクアセスメント手順](/isms/procedures/risk-assessment-procedure) - 手順全体
> - [リスク台帳](/isms/registers/risk-register#3-リスク一覧) - リスク一覧表
> - [リスクアセスメント報告書](/isms/records/risk-assessment-report) - 報告書式

## 概要
...
```

### 相互参照（テンプレート間）

文書間の参照形式：

```markdown
関連文書:
- [情報セキュリティ方針](../policies/information-security-policy.md)
- [リスク台帳](../registers/risk-register.md)
```

## Error Handling

### バリデーション項目

テンプレート作成時のチェックリスト：

- [x] フロントマターが正しい YAML 形式
- [x] 必須フィールド（title, document_id, iso_clause/iso_control）が存在
- [x] プレースホルダーが `{{}}` 形式で統一
- [x] プレースホルダーを含むセクションが `<div v-pre>` でラップ
- [x] 内部リンクが相対パスで記述
- [x] VitePress ビルドエラーなし

## Security Considerations

- テンプレートにはサンプルデータのみ含める
- 実際の組織情報・機密情報は含めない
- 認証情報・API キー等のプレースホルダーは使用しない

## Migration Strategy

### 完了した移行

テンプレートを `/docs/isms/` に配置し、サイト上で閲覧可能にした：

```
docs/isms/
├── README.md           # 利用ガイド
├── manual/
├── soa/
├── policies/
├── procedures/
├── plans/
├── registers/
└── records/
```

これにより、VitePress でビルドされたサイト上でテンプレートを直接閲覧でき、かつリポジトリをフォークしてカスタマイズできる。

## File Mapping

### 必須文書マッピング

| 要件 ID | ファイルパス |
|---------|-------------|
| DOC-001 | `manual/isms-manual.md` (Section 2) |
| DOC-002 | `policies/information-security-policy.md` |
| DOC-003 | `procedures/risk-assessment-procedure.md` |
| DOC-004 | `soa/statement-of-applicability.md` |
| DOC-005 | `plans/risk-treatment-plan.md` |
| DOC-006 | `plans/security-objectives.md` |

### 必須記録マッピング

| 要件 ID | ファイルパス |
|---------|-------------|
| REC-001 | `records/training-record.md` |
| REC-002 | `records/risk-assessment-report.md` |
| REC-003 | `records/risk-assessment-report.md` (Section 5) |
| REC-004 | `records/monitoring-measurement-record.md` |
| REC-005 | `records/internal-audit-report.md` |
| REC-006 | `records/management-review-minutes.md` |
| REC-007 | `records/corrective-action-record.md` |
