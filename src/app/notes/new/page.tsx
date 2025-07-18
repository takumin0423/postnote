import { ChevronLeft, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  FooterActionButtons,
  HeaderActionButtons,
} from '../_components/ActionButtons';
import TagInput from '../_components/TagInput';

export default function NewNotePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <ChevronLeft className="h-5 w-5" />
              <h1 className="text-xl font-bold">PostNote</h1>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <HeaderActionButtons />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Page Title */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              新規記録を作成
            </h2>
            <p className="text-muted-foreground">
              読んだ投稿や記事から得た学びを記録しましょう
            </p>
          </div>

          {/* Form */}
          <div className="grid gap-6">
            {/* Title Input */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">基本情報</CardTitle>
                <CardDescription>
                  記録のタイトルと参照元の情報を入力してください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">タイトル *</Label>
                  <Input
                    id="title"
                    placeholder="例：Next.js 15の新機能について学んだこと"
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url">参照元URL</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="url"
                      type="url"
                      placeholder="https://example.com/article"
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Input */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">学びの内容</CardTitle>
                <CardDescription>
                  投稿から得た学びや気づき、重要なポイントを記録してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="この投稿から学んだことを詳しく記載してください..."
                  className="min-h-[300px] resize-y"
                />
              </CardContent>
            </Card>

            {/* Category and Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">カテゴリーとタグ</CardTitle>
                <CardDescription>
                  記録を整理するためのカテゴリーとタグを設定してください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">カテゴリー *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="カテゴリーを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">技術</SelectItem>
                      <SelectItem value="business">ビジネス</SelectItem>
                      <SelectItem value="design">デザイン</SelectItem>
                      <SelectItem value="marketing">マーケティング</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <TagInput />
              </CardContent>
            </Card>

            {/* Visibility Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">公開設定</CardTitle>
                <CardDescription>
                  この記録の公開範囲を設定してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select defaultValue="public">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        公開 - 誰でも閲覧可能
                      </div>
                    </SelectItem>
                    <SelectItem value="private">
                      <div className="flex items-center">
                        <Lock className="mr-2 h-4 w-4" />
                        非公開 - 自分のみ閲覧可能
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6">
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  キャンセル
                </Link>
              </Button>
              <div className="space-x-2">
                <FooterActionButtons />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
