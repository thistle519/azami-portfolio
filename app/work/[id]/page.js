import { getWorkBySlug, getWorks } from '@/lib/data';
import { notFound } from 'next/navigation';
import WorkDetailClient from './WorkDetailClient';

export async function generateStaticParams() {
  const works = getWorks();
  return works.map(w => ({ id: w.slug }));
}

export default function WorkDetailPage({ params }) {
  const work = getWorkBySlug(params.id);
  if (!work) notFound();
  return <WorkDetailClient work={work} />;
}
