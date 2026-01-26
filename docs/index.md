---
layout: home

hero:
  name: "ISMS Guide"
  text: "ISO/IEC 27001:2022 対応"
  tagline: 情報セキュリティマネジメントシステム構築ガイド
  actions:
    - theme: brand
      text: 要求事項を見る
      link: /requirements/
    - theme: alt
      text: 管理策を見る
      link: /controls/

features:
  - icon: "1"
    title: 要求事項（箇条4-10）
    details: ISO/IEC 27001:2022 の要求事項を分かりやすく解説します。
    link: /requirements/
  - icon: "2"
    title: 管理策（Annex A）
    details: 93項目の管理策について、実装のポイントを紹介します。
    link: /controls/
  - icon: "3"
    title: 用語集
    details: ISMS に関する重要な用語を解説します。
    link: /glossary/
---

## このサイトについて

ISMS Guide は、ISO/IEC 27001:2022 に基づく情報セキュリティマネジメントシステム（ISMS）の構築を支援するドキュメントサイトです。
[一般社団法人日本ビジネステクノロジー協会（BTAJP）](https://btajp.org)がメンテナンスしています。

### 特徴

- ISO/IEC 27001:2022 の最新版に対応
- 日本語で分かりやすく解説
- フローチャートなどを用いた実装のヒントや具体例を提供

### 本サイトのコンテンツについて

本サイトのコンテンツは、**ISO から正規に購入した規格原文をベースに、BTAJPのメンバー自身の言葉で解釈・要約したオリジナルコンテンツ**です。
本サイトのコンテンツ作成にあたって、ISO及びJISCに問い合わせを行い、両組織の指導のもとコンテンツ制作を行っています。

- ISO・JISC（日本規格協会）に事前問い合わせを実施済み
- JIS 規格のコンテンツの流用ではありません
- JISC 回答:「規格を読み込み、ご自身の言葉で概要や要約等を作成される場合には引用の対象外」

詳しくは [コンテンツの著作権・出典について](/about/copyright) をご覧ください。

**正規規格の入手先:**
- [ISO Store](https://www.iso.org/standard/27001) - ISO/IEC 27001:2022（英語）
- [JSA Webdesk](https://webdesk.jsa.or.jp/) - JIS Q 27001:2023（日本語）

## 利用方法

### 公開サイトとして利用

本サイト（isms-guide.com）をそのままご利用いただけます。要求事項や管理策の解説は、ISMS 構築の参考資料としてお使いください。

### 社内サイトとしてフォーク

[GitHub リポジトリ](https://github.com/btajp/isms-guide)をフォークして、自組織向けにカスタマイズした ISMS ドキュメントサイトを構築できます。

1. リポジトリをフォーク
2. テンプレート内のプレースホルダー（`{{組織名}}`、`{{ISMS責任者}}` など）を自組織の情報に置換
3. 認証付きの社内向けサイトとしてデプロイ

#### 社内限定サイトとしてデプロイ

認証付きの社内向けサイトとして公開することで、ISMS 文書を安全に共有できます。

| サービス | 認証方法 | 特徴 |
|----------|----------|------|
| **Cloudflare Pages + Zero Trust Access** | IdP連携（Google, Okta, Azure AD等） | 無料枠あり、グローバルCDN |
| **AWS Amplify + Cognito** | Cognito User Pool, SAML, OIDC | AWS エコシステムとの統合 |
| **Vercel + Auth0** | Auth0 によるIdP連携 | シンプルな設定 |
| **Azure Static Web Apps + Azure AD** | Azure AD | Microsoft 365 環境との親和性 |

静的サイトとして出力されるため、上記以外のホスティングサービスでも認証機能を組み合わせて利用可能です。

### ライセンスについて

本サイトのコンテンツは **CC BY-NC 4.0** でライセンスされています。**クレジット表示は不要**（著作権者により免除）です。

- 自組織の ISMS 構築のための利用は、営利企業でも OK
- コンテンツの改変・カスタマイズは自由
- テンプレート自体の販売や商用サービス化は NG

詳しくは [著作権・出典について](/about/copyright) をご覧ください。

## 今後のアップデート予定

本サイトでは、以下の機能・コンテンツの追加を予定しています。

- **ISMS 文書テンプレートの公開** - ISMSマニュアル、適用宣言書（SoA）、手順書、記録類のテンプレート（現在鋭意作成中）
- **文書自動生成機能** - テンプレートから組織ごとの文書一式を自動生成
- **複数フォーマット対応** - Google Docs版、Word版、Notion版の制作
