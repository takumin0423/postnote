'use client';

import { BookOpen, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeaderActionButtons() {
  const handleDraftSave = () => {
    console.log('下書き保存');
  };

  const handlePublish = () => {
    console.log('投稿する');
  };

  return (
    <>
      <Button variant="outline" onClick={handleDraftSave}>
        下書き保存
      </Button>
      <Button onClick={handlePublish}>
        <Save className="mr-2 h-4 w-4" />
        投稿する
      </Button>
    </>
  );
}

export function FooterActionButtons() {
  const handlePreview = () => {
    console.log('プレビュー');
  };

  const handlePublish = () => {
    console.log('投稿する');
  };

  return (
    <>
      <Button variant="outline" onClick={handlePreview}>
        <BookOpen className="mr-2 h-4 w-4" />
        プレビュー
      </Button>
      <Button onClick={handlePublish}>
        <Save className="mr-2 h-4 w-4" />
        投稿する
      </Button>
    </>
  );
}
