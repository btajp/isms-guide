# Tasks: Blog/Column Feature

## Task 1: 記事データローダーを用意する

### Description
`createContentLoader` で記事一覧データを生成する。

### Files to modify
- `docs/blog/posts.data.ts`

### Acceptance criteria
- [x] `createContentLoader` で `blog/posts/*.md` を読み込む
- [x] 公開フラグでフィルタリングできる
- [x] 日付降順でソートされる

---

## Task 2: 記事一覧ページを作成する

### Description
ブログ一覧ページを作成し、タグでフィルタリングできるようにする。

### Files to modify
- `docs/blog/index.md`

### Acceptance criteria
- [x] 記事一覧が表示される
- [x] タグフィルタが利用できる

---

## Task 3: ブログディレクトリ構造を作成する

### Description
ブログの投稿ディレクトリとサンプル記事を作成する。

### Files to create
- `docs/blog/posts/` (ディレクトリ)
- `docs/blog/posts/2026-01-26-getting-started-with-isms.md`
- `docs/blog/posts/2026-01-27-risk-assessment-tips.md`
- `docs/blog/posts/2026-01-28-what-is-isms.md`

### Acceptance criteria
- [x] frontmatter が正しく設定されている（blogPost: true）
- [x] 記事一覧ページに表示される
- [x] タグが設定されている

---

## Task 4: ナビゲーションを追加する

### Description
ヘッダーナビとサイドバーにブログを追加する。

### Files to modify
- `docs/.vitepress/config.mts`

### Acceptance criteria
- [x] nav に「ブログ」リンクが追加される
- [x] sidebar に '/blog/' 設定が追加される

---

## Task 5: OGP画像生成のカテゴリにブログを追加する

### Description
OGP 画像生成設定に blog のカテゴリを追加する。

### Files to modify
- `docs/.vitepress/config.mts`

### Acceptance criteria
- [x] category.byPathPrefix に 'blog' が追加される

---

## Task 6: 機能拡張（未完）

### Description
ブログ機能として未実装の項目を追加する。

### Acceptance criteria
- [ ] ページネーション
- [ ] 前後記事ナビゲーション
- [ ] 読了時間表示
- [ ] RSS/Atom フィード

---

## Task 7: ビルドと動作確認

### Description
ビルドと動作を確認する。

### Commands
- `npm run build`
- `npm run preview`

### Acceptance criteria
- [ ] ビルドが成功する
- [ ] 記事一覧ページが表示される
- [ ] 記事詳細ページが表示される

---

## Dependencies

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7
```

## Estimated Effort

| Task | Effort |
|------|--------|
| Task 1 | 10 min |
| Task 2 | 15 min |
| Task 3 | 10 min |
| Task 4 | 10 min |
| Task 5 | 5 min |
| Task 6 | 60 min |
| Task 7 | 20 min |
| **Total** | **~130 min** |
