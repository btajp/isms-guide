# Implementation Tasks: Copyright Page

## Phase 1: 詳細ページ作成

- [x] **Task 1.1**: `docs/about/` ディレクトリを作成する
  - _Requirements: AC-2.1_

- [x] **Task 1.2**: `docs/about/copyright.md` を作成する
  - コンテンツの作成方針（ISO 原文ベース、独自解釈）
  - ISO への問い合わせ経緯
  - JISC への問い合わせ内容と回答（引用部分）
  - 免責事項
  - 正規規格の入手先リンク
  - ライセンス（MIT / CC BY-NC 4.0 デュアルライセンス）
  - クレジット表示の免除
  - 「非営利」の明確化
  - _Requirements: AC-1.2, AC-1.3, AC-1.4, AC-2.2, AC-2.3, AC-3.1_

## Phase 2: トップページ更新

- [x] **Task 2.1**: `docs/index.md` に「本サイトのコンテンツについて」セクションを追加する
  - 要約（ISO 原文ベース、独自解釈、JISC 問い合わせ済み）
  - 詳細ページへのリンク
  - 正規規格の入手先リンク
  - ライセンスについてセクション追加
  - _Requirements: AC-1.1, AC-1.2, AC-1.3, AC-1.4, AC-2.1_

## Phase 3: ナビゲーション更新

- [x] **Task 3.1**: `docs/.vitepress/config.mts` のサイドバーに `/about/` を追加する
  - _Requirements: AC-2.1_

- [x] **Task 3.2**: フッターにデュアルライセンス（MIT / CC BY-NC 4.0）と著作権リンクを追加
  - _Requirements: -_

## Phase 4: 動作確認

- [x] **Task 4.1**: ローカルでビルド・プレビューして表示確認する
  - トップページのセクション表示
  - 詳細ページへのリンク動作
  - 外部リンク（ISO Store、JSA Webdesk）の動作
  - _Requirements: AC-1.1, AC-2.1, AC-3.1_

## Dependencies

```mermaid
graph TD
    T1_1[Task 1.1: about/ 作成] --> T1_2[Task 1.2: copyright.md 作成]
    T1_2 --> T2_1[Task 2.1: index.md 更新]
    T1_2 --> T3_1[Task 3.1: config.mts 更新]
    T2_1 --> T4_1[Task 4.1: 動作確認]
    T3_1 --> T4_1
```

## Completion Criteria

- [x] トップページに「本サイトのコンテンツについて」セクションが表示される
- [x] ISO・JISC への問い合わせ済みであることが明記されている
- [x] ISO から購入した規格原文ベースであることが明記されている
- [x] JISC コンテンツの流用ではないことが明記されている
- [x] JISC の回答（要約作成は引用対象外）が引用されている
- [x] 詳細ページへのリンクが動作する
- [x] 正規規格の入手先リンクが表示される
- [x] デュアルライセンス（MIT / CC BY-NC 4.0）が明記されている
- [x] クレジット表示の免除が明記されている
- [x] `npm run build` がエラーなく完了する

## Completion Notes

- 2026年1月: 全タスク完了
- ライセンスは MIT（コード）/ CC BY-NC 4.0（コンテンツ）のデュアルライセンス
- クレジット表示は著作権者により免除
