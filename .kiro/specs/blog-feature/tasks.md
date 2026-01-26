# Tasks: Blog/Column Feature

## Task 1: Install vitepress-plugin-blog

### Description
ブログプラグインをインストールする

### Files to modify
- `package.json`

### Acceptance criteria
- [ ] `npm install vitepress-plugin-blog` が成功
- [ ] package.json に依存関係が追加される

---

## Task 2: Configure blog plugin in VitePress

### Description
config.mts に blogPlugin を追加し、テーマを設定する

### Files to modify
- `docs/.vitepress/config.mts`
- `docs/.vitepress/theme/index.ts` (新規作成)

### Acceptance criteria
- [ ] blogPlugin が vite.plugins に追加される
- [ ] theme/index.ts で withBlogTheme が設定される
- [ ] 開発サーバーが正常に起動する

---

## Task 3: Create blog directory structure

### Description
ブログ用のディレクトリ構造を作成する

### Files to create
- `docs/blog/index.md`
- `docs/blog/posts/` (ディレクトリ)

### Acceptance criteria
- [ ] docs/blog/index.md が BlogIndex コンポーネントを使用
- [ ] docs/blog/posts/ ディレクトリが存在

---

## Task 4: Update navigation

### Description
ヘッダーナビとサイドバーにブログを追加する

### Files to modify
- `docs/.vitepress/config.mts`

### Acceptance criteria
- [ ] nav に「ブログ」リンクが追加される
- [ ] sidebar に '/blog/' 設定が追加される
- [ ] ヘッダーからブログページにアクセスできる

---

## Task 5: Update OGP image generation

### Description
ブログ記事用の OGP 画像生成設定を追加する

### Files to modify
- `docs/.vitepress/config.mts`

### Acceptance criteria
- [ ] category.byPathPrefix に 'blog' が追加される
- [ ] ブログ記事の OGP 画像が生成される

---

## Task 6: Create sample blog posts

### Description
サンプル記事を2本作成する

### Files to create
- `docs/blog/posts/2026-01-26-getting-started-with-isms.md`
- `docs/blog/posts/2026-01-26-risk-assessment-tips.md`

### Acceptance criteria
- [ ] frontmatter が正しく設定されている（blogPost: true）
- [ ] 記事一覧ページに表示される
- [ ] タグが設定されている

---

## Task 7: Verify build and functionality

### Description
ビルドと機能動作を確認する

### Commands
- `npm run build`
- `npm run preview`

### Acceptance criteria
- [ ] ビルドが成功する
- [ ] 記事一覧ページが表示される
- [ ] タグフィルタリングが動作する
- [ ] 記事詳細ページが表示される
- [ ] 前後記事へのナビゲーションが動作する
- [ ] OGP 画像が生成される

---

## Dependencies

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7
```

## Estimated Effort

| Task | Effort |
|------|--------|
| Task 1 | 5 min |
| Task 2 | 15 min |
| Task 3 | 10 min |
| Task 4 | 10 min |
| Task 5 | 5 min |
| Task 6 | 20 min |
| Task 7 | 15 min |
| **Total** | **~80 min** |
