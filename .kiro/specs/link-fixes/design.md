# Design: Link Fixes

## Overview

SoA と controls/index.md のリンク不足を修正する。

## Current State Analysis

### SoA（適用宣言書）の実装文書列

現在「-」になっている管理策:
- A.5.5, A.5.6, A.5.7, A.5.8（組織的管理策）
- A.6.1（人的管理策）
- A.7.1, A.7.2, A.7.3, A.7.4, A.7.6, A.7.8, A.7.12, A.7.13, A.7.14（物理的管理策）

これらの管理策には対応する詳細ページが存在するため、リンクを追加する必要がある。

## Implementation Plan

### Phase 1: SoA リンク修正

SoA ファイル（docs/isms/soa/statement-of-applicability.md）の「実装文書」列を修正:

| 管理策 | 修正前 | 修正後 |
|--------|--------|--------|
| A.5.5 | `-` | `[管理策詳細](/controls/a-5-5)` |
| A.5.6 | `-` | `[管理策詳細](/controls/a-5-6)` |
| A.5.7 | `-` | `[管理策詳細](/controls/a-5-7)` |
| A.5.8 | `-` | `[管理策詳細](/controls/a-5-8)` |
| A.6.1 | `-` | `[管理策詳細](/controls/a-6-1)` |
| A.7.1 | `-` | `[管理策詳細](/controls/a-7-1)` |
| A.7.2 | `-` | `[管理策詳細](/controls/a-7-2)` |
| A.7.3 | `-` | `[管理策詳細](/controls/a-7-3)` |
| A.7.4 | `-` | `[管理策詳細](/controls/a-7-4)` |
| A.7.6 | `-` | `[管理策詳細](/controls/a-7-6)` |
| A.7.8 | `-` | `[管理策詳細](/controls/a-7-8)` |
| A.7.12 | `-` | `[管理策詳細](/controls/a-7-12)` |
| A.7.13 | `-` | `[管理策詳細](/controls/a-7-13)` |
| A.7.14 | `-` | `[管理策詳細](/controls/a-7-14)` |

### Phase 2: controls/index.md リンク確認

controls/index.md を確認し、以下の詳細ページへのリンクが存在することを検証:
- A.5.5, A.5.6, A.5.7, A.5.8, A.5.23, A.5.24, A.5.30, A.5.33, A.5.37
- A.6.1
- A.7.1, A.7.2, A.7.3, A.7.4, A.7.6, A.7.8, A.7.12, A.7.13, A.7.14
- A.8.8, A.8.9, A.8.10, A.8.11, A.8.12, A.8.16, A.8.23, A.8.25, A.8.28

## Link Format

### SoA からのリンク形式

```markdown
[管理策詳細](/controls/a-5-5)
```

既存のリンクがある管理策のスタイルと一致させる。

## Testing

1. `npm run build` でビルドが成功することを確認
2. 開発サーバーでリンク先が正しく表示されることを確認
3. リンク切れチェック

## Files to Modify

1. `docs/isms/soa/statement-of-applicability.md` - SoA の実装文書列修正（14箇所）
2. `docs/controls/index.md` - 必要に応じてリンク追加
