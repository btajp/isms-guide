# ISMS Guide

ISO/IEC 27001:2022 に基づく情報セキュリティマネジメントシステム（ISMS）構築ガイド

https://isms-guide.com

## 概要

ISMS Guide は、ISMS 認証取得を目指す組織向けの日本語ドキュメントサイトです。

- **要求事項解説** - ISO/IEC 27001:2022 箇条4-10 の要求事項を分かりやすく解説
- **管理策解説** - Annex A 93項目の管理策について実装のポイントを紹介
- **用語集** - ISMS に関する重要な用語を解説

## コンテンツについて

本サイトのコンテンツは、ISO から正規に購入した規格原文をベースに、独自の言葉で解釈・要約したオリジナルコンテンツです。

- ISO・JISC（日本規格協会）に事前問い合わせを実施済み
- JIS 規格のコンテンツの流用ではありません

詳細: [著作権・出典について](https://isms-guide.com/about/copyright)

## ライセンス

本プロジェクトは **MIT / CC0 デュアルライセンス** で提供しています。

| 対象 | ライセンス |
|------|------------|
| コード | MIT License |
| コンテンツ | CC0 1.0（パブリックドメイン） |

コンテンツは著作権表示なしで自由にご利用いただけます。

## 利用方法

### 公開サイトを利用する

https://isms-guide.com にアクセスしてください。

### 社内サイトとして利用する

本リポジトリをフォークして、自組織向けにカスタマイズした ISMS ドキュメントサイトを構築できます。

```bash
# リポジトリをフォーク後、クローン
git clone https://github.com/your-org/isms-guide.git
cd isms-guide

# 依存関係のインストール
npm install

# テンプレート内のプレースホルダーを組織情報に置換
# {{組織名}}、{{ISMS責任者}} などを編集

# ローカルで確認
npm run dev

# ビルド
npm run build
```

#### 社内限定サイトとしてデプロイ

認証付きの社内向けサイトとして公開することで、ISMS 文書を安全に共有できます。

| サービス | 認証方法 | 特徴 |
|----------|----------|------|
| **Cloudflare Pages + Zero Trust Access** | IdP連携（Google, Okta, Azure AD等） | 無料枠あり、グローバルCDN |
| **AWS Amplify + Cognito** | Cognito User Pool, SAML, OIDC | AWS エコシステムとの統合 |
| **Vercel + Auth0** | Auth0 によるIdP連携 | シンプルな設定 |
| **Azure Static Web Apps + Azure AD** | Azure AD | Microsoft 365 環境との親和性 |

いずれの方法でも、ビルド成果物（`docs/.vitepress/dist`）を静的ホスティングし、その前段で認証を設定します。

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# テスト
npm test
```

## 技術スタック

- [VitePress](https://vitepress.dev/) - 静的サイトジェネレーター
- [Cloudflare Pages](https://pages.cloudflare.com/) - ホスティング
- [Vitest](https://vitest.dev/) - テストフレームワーク

## 今後の予定

- ISMS 文書テンプレートの公開
- テンプレートからの文書自動生成機能
- Google Docs / Word / Notion 版の制作

## コントリビューション

Issue や Pull Request を歓迎します。

## メンテナー

[一般社団法人日本ビジネステクノロジー協会（BTAJP）](https://btajp.org)
