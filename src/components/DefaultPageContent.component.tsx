'use client';

import Link from 'next/link';
import {useEffect} from 'react';

export default function DefaultPageContent({slug}: {slug?: string}) {

  useEffect(() => {
    console.log('[DefaultPageContent] mounted');
    return () => console.log('[DefaultPageContent] unmounted (should not happen)');
  }, []);

  return (
    <div>
      <h2>"{slug}" Default Page Content</h2>
      <p><Link href="/">Home</Link></p>
      <p><Link href="/catch-all1">Catch-all 1</Link></p>
      <p><Link href="/catch-all2">Catch-all 2</Link></p>
    </div>
  );
}