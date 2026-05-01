import { getWorks } from '@/lib/data';
import WorksClient from './WorksClient';

export default function WorksPage() {
  const works = getWorks();
  return <WorksClient works={works} />;
}
