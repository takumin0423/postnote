# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

PostNoteは「読んだ投稿を管理し、得た学びをノートとして共有できるサービス」です。現在開発中の段階です。

## 重要ルール
- 開発サーバーは起動中なことがほとんどなので、Claude Codeがpnpm run devを行う際はport番号3001を指定する
- コード修正を行った場合、作業を終える前に`pnpm run precommit`を実行し、リントエラーと型チェックエラーが発生していないことを必ず確認する

## 技術スタック

- **フレームワーク**: Next.js 15.3.5 (App Router使用)
- **言語**: TypeScript (strictモード)
- **デプロイメント**: Cloudflare Workers (OpenNext.js Cloudflareアダプタ使用)
- **データベース**: PostgreSQL (Supabase経由)
- **ORM**: Drizzle ORM
- **UIコンポーネント**: shadcn/ui (New Yorkスタイル、RSC対応)
- **スタイリング**: Tailwind CSS v4
- **コードフォーマッター・リンター**: Biome 2.1.1
- **アイコン**: Lucide React
- **パッケージマネージャー**: pnpm v10.13.0 (mise経由で管理)

## プロジェクト構造

```
src/
├── app/          # Next.js App Router
│   ├── page.tsx  # ホームページ
│   ├── layout.tsx # ルートレイアウト (メタデータ含む)
│   └── globals.css
├── components/   # UIコンポーネント
│   └── ui/       # shadcn/ui コンポーネント (badge, button, card, input, scroll-area, tabs)
├── lib/          # ユーティリティ関数
│   └── utils.ts  # clsx + tailwind-merge (cn関数)
└── db/           # データベース層
    ├── index.ts  # データベース接続
    └── schema.ts # Drizzleスキーマ定義
```

## 開発コマンド

### 基本的な開発コマンド
- `pnpm run dev` - 開発サーバー起動 (Turbopack使用)
- `pnpm run build` - プロダクションビルド
- `pnpm run precommit` - Biomeチェック（フォーマット・リント）と型チェック
- `pnpm run deploy` - Cloudflare Workersへデプロイ
- `pnpm run preview` - Cloudflare Workersビルドのプレビュー

### コードフォーマット・リント (Biome)
- `pnpm run format` - コードフォーマットのチェック
- `pnpm run format:fix` - コードフォーマットの自動修正
- `pnpm run lint` - リントチェック
- `pnpm run lint:fix` - リントエラーの自動修正
- `pnpm run check` - フォーマット・リントの統合チェック
- `pnpm run check:fix` - フォーマット・リントの統合自動修正
- `pnpm run typecheck` - TypeScript型チェック

### データベース関連コマンド
- `pnpm run db:start` - ローカルSupabase起動
- `pnpm run db:stop` - ローカルSupabase停止
- `pnpm run db:status` - Supabaseステータス確認
- `pnpm run db:migrate` - データベースマイグレーション実行

### その他
- `pnpm run cf-typegen` - Cloudflare環境の型生成

## データベーススキーマ

現在定義されているテーブル:
- `todos` - サンプルTodoテーブル (id, title, completed, createdAt)

## 環境変数

必須:
- `DATABASE_URL` - PostgreSQL接続文字列

## Supabase設定

ローカル開発では最小限の設定:
- PostgreSQLデータベース (ポート: 54322)
- Supabase Studio (ポート: 54323)
- その他のサービス (Auth, Storage等) は無効化

## shadcn/ui設定

- **スタイル**: New York
- **BaseColor**: neutral
- **アイコンライブラリ**: Lucide
- **CSS変数**: 有効
- **RSC対応**: 有効
- **TypeScript**: 有効

### インストール済みコンポーネント
- badge, button, card, input, scroll-area, tabs

### エイリアス設定
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/ui` → `src/components/ui`

## 開発時の注意事項

1. **データベース接続**: `src/db/index.ts` で Drizzle 経由の接続を管理
2. **マイグレーション**: `supabase/migrations/` に出力される
3. **Cloudflareデプロイ**: `wrangler.json` で設定、OpenNext.jsアダプタ使用
4. **コードスタイル**: Biomeによる自動フォーマット（スペース2つ、シングルクォート）
5. **UIコンポーネント**: 新しいコンポーネントが必要な場合は `pnpm dlx shadcn@latest add [component]` でインストール
