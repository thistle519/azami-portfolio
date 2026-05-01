import { getWorks } from '@/lib/data';
import HomeClient from '@/components/HomeClient';

export default function HomePage() {
  const works = getWorks().slice(0, 4);
  return <HomeClient works={works} />;
}
