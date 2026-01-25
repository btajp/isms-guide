# Implementation Tasks: 文書テンプレート一覧確定

## Phase 1: ディレクトリ構造の作成

- [x] **Task 1.1**: `/docs/isms` ディレクトリ構造を作成
  - `manual/`, `soa/`, `policies/`, `procedures/`, `plans/`, `registers/`, `records/`
  - _Requirements: AC-2.1_

- [x] **Task 1.2**: `/docs/isms/README.md` を作成（利用ガイド概要）
  - テンプレート一覧と使い方の概要
  - _Requirements: AC-1.1, AC-1.2_

## Phase 2: 必須文書テンプレート作成

### 2.1 統合文書

- [x] **Task 2.1.1**: ISMS マニュアル (`manual/isms-manual.md`)
  - ISMS 適用範囲（DOC-001）を含む
  - 解説ページへのインラインリンクを見出し内に配置
  - _Requirements: DOC-000, DOC-001, AC-2.2, AC-2.3_

### 2.2 適用宣言書

- [x] **Task 2.2.1**: 適用宣言書 (`soa/statement-of-applicability.md`)
  - 93 管理策の適用/除外/理由を記載する表形式
  - _Requirements: DOC-004, AC-2.2, AC-2.3_

### 2.3 方針文書

- [x] **Task 2.3.1**: 情報セキュリティ方針 (`policies/information-security-policy.md`)
  - _Requirements: DOC-002, AC-2.2, AC-2.3_

- [x] **Task 2.3.2**: 情報の許容される利用方針 (`policies/acceptable-use-policy.md`)
  - _Requirements: DOC-102, AC-2.2, AC-2.3_

- [x] **Task 2.3.3**: アクセス制御方針 (`policies/access-control-policy.md`)
  - _Requirements: DOC-106, AC-2.2, AC-2.3_

- [x] **Task 2.3.4**: サプライヤー管理方針 (`policies/supplier-security-policy.md`)
  - _Requirements: DOC-107, AC-2.2, AC-2.3_

### 2.4 手順書

- [x] **Task 2.4.1**: リスクアセスメント手順 (`procedures/risk-assessment-procedure.md`)
  - _Requirements: DOC-003, AC-2.2, AC-2.3, AC-3.1, AC-3.2_

- [x] **Task 2.4.2**: インシデント対応手順 (`procedures/incident-response-procedure.md`)
  - _Requirements: DOC-103, AC-2.2, AC-2.3_

- [x] **Task 2.4.3**: 内部監査手順 (`procedures/internal-audit-procedure.md`)
  - _Requirements: AC-2.2, AC-2.3_

- [x] **Task 2.4.4**: 是正処置手順 (`procedures/corrective-action-procedure.md`)
  - _Requirements: AC-2.2, AC-2.3_

### 2.5 計画書

- [x] **Task 2.5.1**: リスク対応計画 (`plans/risk-treatment-plan.md`)
  - _Requirements: DOC-005, AC-2.2, AC-2.3_

- [x] **Task 2.5.2**: 情報セキュリティ目的 (`plans/security-objectives.md`)
  - _Requirements: DOC-006, AC-2.2, AC-2.3_

- [x] **Task 2.5.3**: 事業継続計画 (`plans/business-continuity-plan.md`)
  - _Requirements: DOC-108, AC-2.2, AC-2.3_

### 2.6 台帳・一覧

- [x] **Task 2.6.1**: 情報資産台帳 (`registers/asset-inventory.md`)
  - _Requirements: DOC-101, AC-2.2, AC-2.3_

- [x] **Task 2.6.2**: リスク台帳 (`registers/risk-register.md`)
  - _Requirements: AC-2.2, AC-2.3_

- [x] **Task 2.6.3**: 法的・規制要求事項一覧 (`registers/legal-requirements.md`)
  - _Requirements: DOC-104, AC-2.2, AC-2.3_

## Phase 3: 必須記録テンプレート作成

- [x] **Task 3.1**: 教育訓練記録 (`records/training-record.md`)
  - _Requirements: REC-001, AC-2.2, AC-2.3_

- [x] **Task 3.2**: リスクアセスメント報告書 (`records/risk-assessment-report.md`)
  - リスク対応結果も含む
  - _Requirements: REC-002, REC-003, AC-2.2, AC-2.3_

- [x] **Task 3.3**: 監視・測定記録 (`records/monitoring-measurement-record.md`)
  - _Requirements: REC-004, AC-2.2, AC-2.3_

- [x] **Task 3.4**: 内部監査報告書 (`records/internal-audit-report.md`)
  - _Requirements: REC-005, AC-2.2, AC-2.3_

- [x] **Task 3.5**: マネジメントレビュー議事録 (`records/management-review-minutes.md`)
  - _Requirements: REC-006, AC-2.2, AC-2.3_

- [x] **Task 3.6**: 是正処置記録 (`records/corrective-action-record.md`)
  - _Requirements: REC-007, AC-2.2, AC-2.3_

- [x] **Task 3.7**: インシデント報告書 (`records/incident-report.md`)
  - _Requirements: REC-102, AC-2.2, AC-2.3_

## Phase 4: テスト・検証

- [x] **Task 4.1**: 全テンプレートのフロントマター検証
  - YAML 形式、必須フィールドの確認
  - _Requirements: NFR-3_

- [x] **Task 4.2**: プレースホルダー形式の統一確認
  - `{{}}` 形式で統一、`<div v-pre>` でラップ
  - _Requirements: AC-2.3, NFR-2_

- [x] **Task 4.3**: 内部リンクの検証
  - 相対パスでリンクが機能するか
  - _Requirements: NFR-1_

- [x] **Task 4.4**: Markdown レンダリング確認
  - VitePress での表示確認（ビルド成功）
  - _Requirements: AC-2.2_

## Phase 5: ドキュメント整備

- [x] **Task 5.1**: テンプレート一覧ページの作成
  - `/docs/isms/README.md` で全テンプレートの概要と対応箇条を一覧表示
  - _Requirements: AC-1.1, AC-1.2, AC-1.3_

- [x] **Task 5.2**: 解説ページからのバックリンク追加
  - requirements/index.md, controls/index.md に関連テンプレートを追加
  - 個別ページ（6-1-2, 6-1-3, 9-2, 9-3, a-5-24, a-5-30）に「関連テンプレート」セクション追加
  - **配置位置**: 各項・節の見出し直後（「要求事項の概要」の前）
  - **リンク形式**: テンプレート内セクションへのアンカーリンク（例: `/isms/manual/isms-manual#2-適用範囲`）
  - _Requirements: AC-2.1_

- [x] **Task 5.3**: テンプレートからのインラインリンク追加
  - ISMSマニュアルの見出し内に解説ページへのリンクを配置
  - _Requirements: N/A_

## Summary

| Phase | タスク数 | 説明 | 状態 |
|-------|---------|------|:----:|
| 1 | 2 | ディレクトリ構造 | 完了 |
| 2 | 16 | 必須文書テンプレート | 完了 |
| 3 | 7 | 必須記録テンプレート | 完了 |
| 4 | 4 | テスト・検証 | 完了 |
| 5 | 3 | ドキュメント整備 | 完了 |
| **合計** | **32** | | **完了** |

## Priority Order

1. **最優先**: ISMS マニュアル、情報セキュリティ方針、適用宣言書、リスクアセスメント手順 ✅
2. **高**: その他の必須文書（規格本文で要求） ✅
3. **中**: 必須記録テンプレート ✅
4. **低**: 推奨文書（附属書 A 管理策関連） ✅

## Completion Notes

- 全 21 テンプレートを作成
- テンプレートは `/docs/isms/` に配置（サイト上で閲覧可能）
- プレースホルダーは `<div v-pre>` でラップ（VitePress 対応）
- 解説 ⇔ テンプレート間の双方向リンクを実装
