import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const worksDir = path.join(process.cwd(), 'content/works');
const notesDir  = path.join(process.cwd(), 'content/notes');

export function getWorks() {
  const files = fs.readdirSync(worksDir).filter(f => f.endsWith('.md'));
  const works = files.map(filename => {
    const slug = filename.replace('.md', '');
    const raw  = fs.readFileSync(path.join(worksDir, filename), 'utf-8');
    const { data } = matter(raw);
    return { slug, ...data };
  });
  return works.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getWorkBySlug(slug) {
  const file = path.join(worksDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data } = matter(fs.readFileSync(file, 'utf-8'));
  return { slug, ...data };
}

export function getNotes() {
  const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));
  const notes = files.map(filename => {
    const raw = fs.readFileSync(path.join(notesDir, filename), 'utf-8');
    const { data } = matter(raw);
    return data;
  }).filter(n => n.published !== false);
  return notes.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}
