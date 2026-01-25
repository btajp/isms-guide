# ISMS Guide 実装計画

**最終更新:** 2026-01-25

---

## 現在のタスク: Copyright Page（最優先）

ISMS Guide サイトに著作権・コンテンツ出典に関するページを実装する。トップページに要約セクションを追加し、詳細ページ（`docs/about/copyright.md`）に ISO・JISC への問い合わせ経緯と法的根拠を記載する。

### 必須記載事項

1. ISO・JISC に事前問い合わせ実施済みであること
2. ISO から購入した規格原文をベースに、自身で解釈・要約して作成したオリジナルコンテンツであること
3. JISC（JIS規格）のコンテンツの流用ではないこと
4. JISC 回答の根拠:「規格を読み込み、ご自身の言葉で概要や要約等を作成される場合には引用の対象外」

### 仕様ファイル

- `.kiro/specs/copyright-page/requirements.md`
- `.kiro/specs/copyright-page/design.md`
- `.kiro/specs/copyright-page/tasks.md`

### 参照ファイル

- `private/inquiry_iso_jisc.md`

### Architecture Changes

```
docs/
├── index.md              # 変更: 「本サイトのコンテンツについて」セクション追加
├── about/                # 新規: ディレクトリ作成
│   └── copyright.md      # 新規: 詳細ページ（問い合わせ経緯・根拠）
└── .vitepress/
    └── config.mts        # 変更: サイドバー・フッター更新
```

### Implementation Steps

#### Phase 1: テスト作成（TDD）

1. **著作権ページ関連テストを追加** (`docs/content.test.ts`)
   - Action: 新しい describe ブロック `Copyright Section` を追加
   - テスト項目:
     - `about/copyright.md` ファイルの存在確認
     - 必須記載事項（4項目）の存在確認
     - JISC 回答の引用文の存在確認
     - トップページ `index.md` に著作権セクションが存在すること
     - トップページに詳細ページへのリンクが存在すること

#### Phase 2: 詳細ページ作成

2. **about/ ディレクトリ作成** (`docs/about/`)

3. **copyright.md 作成** (`docs/about/copyright.md`)
   - コンテンツの作成方針（ISO 原文ベース、独自解釈）
   - ISO への問い合わせ経緯
   - JISC への問い合わせ内容と回答（引用部分）
   - 免責事項
   - 正規規格の入手先リンク

#### Phase 3: トップページ更新

4. **index.md に著作権セクション追加** (`docs/index.md`)
   - ファイル末尾（`### 特徴` セクションの後）に追加

#### Phase 4: ナビゲーション更新

5. **config.mts サイドバー更新** (`docs/.vitepress/config.mts`)
   - `sidebar` に `/about/` セクションを追加

6. **config.mts フッター更新** (`docs/.vitepress/config.mts`)
   - `footer.message` を更新してリンク追加

#### Phase 5: 動作確認

7. **テスト実行** (`npm test`)

8. **ローカルビルド・プレビュー** (`npm run build && npm run preview`)

### Testing Strategy

```typescript
describe('Copyright Section', () => {
  it('should have about/copyright.md', () => {
    expect(existsSync(resolve(docsDir, 'about/copyright.md'))).toBe(true)
  })

  it('should have required copyright statements in copyright.md', () => {
    const content = readFileSync(resolve(docsDir, 'about/copyright.md'), 'utf-8')
    expect(content).toContain('JISC')
    expect(content).toContain('ISO')
    expect(content).toContain('ISO/IEC 27001:2022')
    expect(content).toContain('購入')
    expect(content).toContain('流用ではない')
    expect(content).toContain('引用の対象外')
  })

  it('should have JISC response quote', () => {
    const content = readFileSync(resolve(docsDir, 'about/copyright.md'), 'utf-8')
    expect(content).toContain('ご自身の言葉で概要や要約等を作成される場合には')
  })

  it('should have copyright section in index.md', () => {
    const content = readFileSync(resolve(docsDir, 'index.md'), 'utf-8')
    expect(content).toContain('本サイトのコンテンツについて')
  })

  it('should have link to copyright detail page in index.md', () => {
    const content = readFileSync(resolve(docsDir, 'index.md'), 'utf-8')
    expect(content).toContain('/about/copyright')
  })

  it('should have links to official standard sources', () => {
    const content = readFileSync(resolve(docsDir, 'about/copyright.md'), 'utf-8')
    expect(content).toContain('iso.org')
    expect(content).toContain('jsa.or.jp')
  })
})
```

### Success Criteria

- [ ] トップページに「本サイトのコンテンツについて」セクションが表示される
- [ ] ISO・JISC への問い合わせ済みであることが明記されている
- [ ] ISO から購入した規格原文ベースであることが明記されている
- [ ] JISC コンテンツの流用ではないことが明記されている
- [ ] JISC の回答（要約作成は引用対象外）が引用されている
- [ ] 詳細ページへのリンクが動作する
- [ ] 正規規格の入手先リンクが表示される
- [ ] `npm run build` がエラーなく完了する
- [ ] `npm test` が全て PASS する

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `docs/content.test.ts` | Modify | Copyright Section テストを追加 |
| `docs/about/` | Create | 新規ディレクトリ |
| `docs/about/copyright.md` | Create | 詳細ページ（問い合わせ経緯・根拠） |
| `docs/index.md` | Modify | 著作権セクションを追加 |
| `docs/.vitepress/config.mts` | Modify | sidebar, footer を更新 |

---

## 残タスク: ドメイン取得・デプロイ

- [ ] isms-guide.jp ドメイン取得
- [ ] Cloudflare Pages にカスタムドメイン設定
- [ ] DNS 設定
- [ ] SSL 証明書確認
- [ ] 本番デプロイ確認

---

## Phase 3: テンプレートコンテンツ作成

| タスク | 説明 |
|--------|------|
| 文書テンプレート一覧確定 | 作成するテンプレートの種類と範囲を決定 |
| ISMSマニュアル | 組織のISMS基本方針テンプレート |
| 適用宣言書（SoA） | 93管理策の適用状況テンプレート |
| 手順書類 | リスクアセスメント、インシデント対応等 |
| 記録テンプレート類 | 監査記録、レビュー記録等 |
| フォーク利用ガイド作成 | フォーク後のカスタマイズ手順書 |

---

## Phase 4: 代替形式（後回し）

- Notion版
- Google Workspace版
- Microsoft Office版

---

## サイト構造

```
isms-guide.jp
│
├── /docs              ← 解説コンテンツ
│   ├── /requirements/    要求事項解説（箇条4-10）
│   ├── /controls/        管理策解説（Annex A 93項目）
│   ├── /glossary/        用語集
│   └── /about/           サイトについて（著作権等）
│
├── /isms              ← フォーク対象テンプレート
│   ├── /manual/          ISMSマニュアル
│   ├── /soa/             適用宣言書（SoA）
│   ├── /procedures/      手順書
│   └── /records/         記録テンプレート
│
└── /guide             ← フォーク・カスタマイズ手順
```

---

## 経緯

| 日付 | イベント |
|------|----------|
| 2026-01-13 | プロジェクト開始 |
| 2026-01-13 | Phase 1 コンテンツ作成完了（requirements, controls, 詳細18件, 用語集） |
| 2026-01-24 | VitePress + Cloudflare Pages セットアップ完了 |
| 2026-01-24 | Phase 1 コンテンツをリポジトリに追加 |
| 2026-01-25 | コンテンツ統合（phase1/ → docs/）完了 |
| 2026-01-25 | 著作権ページ仕様作成・実装計画策定 |

---

**Status**: WAITING FOR CONFIRMATION
