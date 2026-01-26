# Requirements: OGP画像自動生成

## Overview

各ページのOGP画像（og:image）をビルド時に自動生成し、SNSでシェアした際にページタイトルを含む画像が表示されるようにする。

## User Stories

### US-1: SNSシェア時の画像表示

**As** サイト閲覧者
**I want** SNSでページをシェアした際にタイトル入りの画像が表示される
**So that** シェア先でページの内容が視覚的に伝わりやすくなる

#### Acceptance Criteria

1. **AC-1.1**: WHEN ページがビルドされる THE SYSTEM SHALL そのページのOGP画像を自動生成する
2. **AC-1.2**: WHEN OGP画像が生成される THE SYSTEM SHALL ページタイトルを画像内に表示する
3. **AC-1.3**: WHEN OGP画像が生成される THE SYSTEM SHALL サイト名「ISMS Guide」を画像内に表示する
4. **AC-1.4**: WHEN ページがビルドされる THE SYSTEM SHALL `og:image`メタタグを設定する
5. **AC-1.5**: WHEN ページがビルドされる THE SYSTEM SHALL `twitter:image`メタタグを設定する

### US-2: 適切な画像仕様

**As** サイト運営者
**I want** OGP画像がSNSプラットフォームの推奨仕様に準拠する
**So that** どのSNSでも適切に表示される

#### Acceptance Criteria

1. **AC-2.1**: THE SYSTEM SHALL 画像サイズを1200x630pxで生成する
2. **AC-2.2**: THE SYSTEM SHALL 画像形式をPNGで生成する
3. **AC-2.3**: THE SYSTEM SHALL 画像を`/og/`ディレクトリに出力する

## Non-Functional Requirements

- **Performance**: ビルド時間への影響は許容範囲内（+30秒以内）
- **Compatibility**: VitePress 1.x との互換性を維持する
- **Storage**: 生成画像はdistディレクトリに含まれる

## Out of Scope

- カスタム背景画像のアップロード機能
- ページごとの個別デザイン設定
- 動的生成（Cloudflare Workersでのオンデマンド生成）

## Technical Notes

- `vitepress-plugin-og-image`パッケージを使用
- VitePressの`buildEnd`フックで画像を生成
- 既存の`transformHead`フックにog:image設定を追加

## References

- [vitepress-plugin-og-image](https://github.com/ryohidaka/vitepress-plugin-og-image)
- Issue #70 で og:title, og:description, og:url は実装済み
