import PhotoGallery from './PhotoGallery';
import styles from './photo.module.css';
import { photos } from '@/lib/photos';

export const metadata = {
  title: '写真 — azami',
  description: '日常のひとコマや、いつもと違う時間を写真に残しています。azamiの写真ギャラリー。',
};

export default function PhotoPage() {
  return (
    <section className={styles.page} aria-labelledby="photo-heading">
      <header className={styles.header}>
        <div>
          <p className={styles.label}>Photography / 写真</p>
          <h1 id="photo-heading">Moments</h1>
          <p className={styles.intro}>日常のひとコマや、いつもと違う時間を写真に残しています。</p>
        </div>
        <p className={styles.count}>{String(photos.length).padStart(2, '0')} photographs</p>
      </header>
      <PhotoGallery />
    </section>
  );
}
