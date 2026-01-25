# フォークガイド

このリポジトリをフォークして、組織専用の ISMS ガイドを構築する方法を説明します。

## クイックスタート

### 1. リポジトリのフォーク

GitHub で「Fork」ボタンをクリックして、リポジトリをフォークします。

### 2. ローカルにクローン

```bash
git clone https://github.com/YOUR-ORG/isms-guide.git
cd isms-guide
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いて確認します。

## カスタマイズ

### サイト設定の変更

`docs/.vitepress/config.mts` を編集して、組織に合わせた設定に変更します：

```typescript
export default defineConfig({
  title: 'YOUR-ORG ISMS Guide',
  description: 'YOUR-ORG の ISMS ガイド',
  // ...
})
```

### コンテンツの追加

- `docs/requirements/`: 要求事項の詳細解説を追加
- `docs/controls/`: 管理策の実装ガイドを追加
- `docs/glossary/`: 組織固有の用語を追加

### テンプレートの活用

`isms/` ディレクトリに組織の ISMS 文書を配置します。

## デプロイ

### GitHub Pages

1. リポジトリの Settings > Pages を開く
2. Source で「GitHub Actions」を選択
3. main ブランチにプッシュすると自動デプロイ

### その他のホスティング

```bash
npm run build
```

`docs/.vitepress/dist/` を任意のホスティングサービスにデプロイします。

## サポート

質問や問題がある場合は、Issue を作成してください。
