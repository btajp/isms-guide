# Requirements: OGP自動生成

## Overview

各ページのOGP（Open Graph Protocol）メタタグを自動生成し、SNSでのシェア時に適切なプレビューが表示されるようにする。

## User Stories

### US-1: ページ共有時のプレビュー表示

**As** サイト閲覧者
**I want** SNSでページをシェアした際に適切なタイトルと説明が表示される
**So that** シェア先でページの内容が伝わりやすくなる

#### Acceptance Criteria

1. **AC-1.1**: WHEN ページがビルドされる THE SYSTEM SHALL そのページの `og:title` メタタグを自動生成する
2. **AC-1.2**: WHEN ページがビルドされる THE SYSTEM SHALL そのページの `og:description` メタタグを自動生成する
3. **AC-1.3**: WHEN ページがビルドされる THE SYSTEM SHALL そのページの `og:url` メタタグを自動生成する
4. **AC-1.4**: WHEN frontmatterに `title` が設定されている THE SYSTEM SHALL その値を `og:title` に使用する
5. **AC-1.5**: WHEN frontmatterに `description` が設定されている THE SYSTEM SHALL その値を `og:description` に使用する
6. **AC-1.6**: WHEN frontmatterに `title` が設定されていない THE SYSTEM SHALL サイトのデフォルトタイトルを使用する

### US-2: Twitter/X カード対応

**As** サイト運営者
**I want** Twitter/X でシェアした際にサマリーカードが表示される
**So that** より多くのユーザーにリーチできる

#### Acceptance Criteria

1. **AC-2.1**: WHEN ページがビルドされる THE SYSTEM SHALL `twitter:card` メタタグを生成する
2. **AC-2.2**: WHEN ページがビルドされる THE SYSTEM SHALL `twitter:title` メタタグを生成する
3. **AC-2.3**: WHEN ページがビルドされる THE SYSTEM SHALL `twitter:description` メタタグを生成する

## Non-Functional Requirements

- **Performance**: ビルド時間への影響は最小限に抑える
- **Compatibility**: VitePress 1.x との互換性を維持する
- **Maintainability**: 設定は `config.mts` 内で完結させる

## Out of Scope

- OGP画像の自動生成（Phase 2 として別途検討）
- カスタムOGP画像のアップロード機能
- SNS固有の追加メタタグ（Facebook App ID等）

## Technical Notes

- VitePress の `transformHead` フックを使用
- 既存の `head` 設定との競合を避ける
- `property` 属性を使用（`name` ではなく）
