'use client';

import { useEffect, useRef, useState } from 'react';
import { photos } from '@/lib/photos';
import styles from './photo.module.css';

const sizes = '(max-width: 560px) calc(100vw - 40px), (max-width: 860px) calc((100vw - 64px) / 2), (max-width: 1000px) calc((100vw - 120px) / 2), (max-width: 1600px) calc((100vw - 152px) / 3), 483px';

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const open = selected !== null;
  const photo = open ? photos[selected] : null;

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (openerRef.current?.isConnected) openerRef.current.focus({ preventScroll: true });
    };
  }, [open]);

  function move(direction) {
    setSelected(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  return (
    <>
      <ol className={styles.grid}>
        {photos.map((item, index) => (
          <li key={item.id}>
            <a
              className={styles.photoLink}
              href={item.large}
              aria-label={`写真${index + 1}を拡大：${item.alt}`}
              onClick={event => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                openerRef.current = event.currentTarget;
                setSelected(index);
              }}
            >
              <img
                src={item.src}
                srcSet={item.srcSet}
                sizes={sizes}
                width={item.width}
                height={item.height}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <span className={styles.caption} aria-hidden="true">
                <span>{item.id}</span>
                <span>写真を拡大 ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ol>

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        aria-label="写真の拡大表示"
        onClose={() => setSelected(null)}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            dialogRef.current.close();
          }
        }}
      >
        {photo && (
          <>
            <div className={styles.viewerBar}>
              <p aria-live="polite">{photo.id} / {String(photos.length).padStart(2, '0')}</p>
              <button type="button" onClick={() => dialogRef.current.close()} autoFocus>閉じる ×</button>
            </div>
            <div className={styles.viewerImage}>
              <img key={photo.id} src={photo.large} alt={photo.alt} width={photo.width} height={photo.height} />
            </div>
            <div className={styles.viewerBar}>
              <p>{photo.alt}</p>
              <div className={styles.controls}>
                <button type="button" onClick={() => move(-1)} aria-label="前の写真">←</button>
                <button type="button" onClick={() => move(1)} aria-label="次の写真">→</button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
