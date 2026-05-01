import { getWorkBySlug, getWorks } from '@/lib/data';
import { notFound } from 'next/navigation';
import WorkDetailClient from './WorkDetailClient';

export async function generateStaticParams() {
  const works = getWorks();
  return works.map(w => ({ id: w.slug }));
}

export default async function WorkDetailPage({ params }) {
  const { id } = await params;
  const works = getWorks();
  const work = getWorkBySlug(id);
  if (!work) notFound();

  const idx = works.findIndex(w => w.slug === id);
  const next = works[idx + 1] || null;

  return <WorkDetailClient work={work} next={next} />;
}
