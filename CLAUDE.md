# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

PostNoteは「読んだ投稿を管理し、得た学びをノートとして共有できるサービス」です。現在開発中の段階です。

## 技術スタック

- **フレームワーク**: Next.js 15.3.5 (App Router使用)
- **言語**: TypeScript (strictモード)
- **デプロイメント**: Cloudflare Workers (OpenNext.js Cloudflareアダプタ使用)
- **データベース**: PostgreSQL (Supabase経由)
- **ORM**: Drizzle ORM
- **スタイリング**: Tailwind CSS v4
- **パッケージマネージャー**: pnpm v10.13.0 (mise経由で管理)

## プロジェクト構造

```
src/
├── app/          # Next.js App Router
│   ├── page.tsx  # ホームページ
│   ├── layout.tsx # ルートレイアウト (メタデータ含む)
│   └── globals.css
└── db/           # データベース層
    ├── index.ts  # データベース接続
    └── schema.ts # Drizzleスキーマ定義
```

## 開発コマンド

### 基本的な開発コマンド
- `pnpm dev` - 開発サーバー起動 (Turbopack使用)
- `pnpm build` - プロダクションビルド
- `pnpm lint` - Next.jsリンター実行
- `pnpm deploy` - Cloudflare Workersへデプロイ
- `pnpm preview` - Cloudflare Workersビルドのプレビュー

### データベース関連コマンド
- `pnpm db:start` - ローカルSupabase起動
- `pnpm db:stop` - ローカルSupabase停止
- `pnpm db:status` - Supabaseステータス確認
- `pnpm db:migrate` - データベースマイグレーション実行

### その他
- `pnpm cf-typegen` - Cloudflare環境の型生成

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

## 開発時の注意事項

1. **データベース接続**: `src/db/index.ts` で Drizzle 経由の接続を管理
2. **マイグレーション**: `supabase/migrations/` に出力される
3. **Cloudflareデプロイ**: `wrangler.json` で設定、OpenNext.jsアダプタ使用
