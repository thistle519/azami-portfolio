import { getNotes } from '@/lib/data';
import NoteClient from './NoteClient';

async function fetchOgImage(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bot)' },
      next: { revalidate: 86400 },
    });
    const html = await res.text();
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
           || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

export default async function NotePage() {
  const notes = getNotes();
  const notesWithImgs = await Promise.all(
    notes.map(async (n) => {
      if (n.img) return n;
      const img = await fetchOgImage(n.url);
      return { ...n, img };
    })
  );
  return <NoteClient notes={notesWithImgs} />;
}
