'use client';

import { useState, useEffect, useCallback } from 'react';

const PHOTOS = [
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_3721_wadsf0' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428924/IMG_8453_zdxt6v' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8459_oimqwg' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_9124_wlts6e' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428925/IMG_8636_usbkui' },
  { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428922/IMG_8914_pkdqye' },
];

export default function PhotoPage() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const goTo = useCallback((idx) => {
    if (idx === current || transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(idx); setTransitioning(false); }, 280);
  }, [current, transitioning]);

  const prev = useCallback(() => goTo((current - 1 + PHOTOS.length) % PHOTOS.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % PHOTOS.length), [current, goTo]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const photo = PHOTOS[current];

  const btnStyle = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(245,242,236,0.1)', border: '1px solid rgba(245,242,236,0.2)',
    color: 'var(--color-bg)', width: 48, height: 48,
    fontFamily: 'var(--font-mono)', fontSize: '1rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    backdropFilter: 'blur(4px)', transition: 'background 160ms', zIndex: 2,
  };

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div style={{ padding: '40px var(--px) 32px', borderBottom: '1px solid var(--color-ink)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 8 }}>Photography / 写真</div>
          <h1 style={{ fontFamily: 'var(--font-display-en)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontStyle: 'italic', margin: 0, lineHeight: 1 }}>Moments</h1>
        </div>
        <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-ink-faint)' }}>
          <span style={{ color: 'var(--color-accent-1)', fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: '1.25rem' }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          {' / '}
          {String(PHOTOS.length).padStart(2, '0')}
        </div>
      </div>

      {/* Main photo */}
      <div
        style={{ flex: 1, position: 'relative', background: 'var(--color-ink)', overflow: 'hidden', cursor: 'zoom-in', minHeight: 480 }}
        onClick={() => setLightbox(true)}
      >
        <img
          key={current}
          src={photo.src} alt=""
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
            position: 'absolute', inset: 0,
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'scale(1.03)' : 'scale(1)',
            transition: 'opacity 280ms ease, transform 280ms ease',
            maxHeight: '72vh',
          }}
        />
        <button onClick={e => { e.stopPropagation(); prev(); }} style={{ ...btnStyle, left: 24 }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,242,236,0.1)'}
        >←</button>
        <button onClick={e => { e.stopPropagation(); next(); }} style={{ ...btnStyle, right: 24 }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,242,236,0.1)'}
        >→</button>
        <div style={{ position: 'absolute', bottom: 16, right: 20, fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.3)' }}>
          click to zoom
        </div>
      </div>

      {/* Thumbnail strip */}
      <div style={{ borderTop: '1px solid var(--color-ink)', background: 'var(--color-ink)', display: 'flex', overflowX: 'auto' }}>
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              flex: '0 0 auto', width: 100, height: 72,
              position: 'relative', overflow: 'hidden',
              opacity: i === current ? 1 : 0.4,
              transition: 'opacity 200ms ease',
              borderRight: '1px solid rgba(245,242,236,0.08)',
            }}
            onMouseEnter={e => { if (i !== current) e.currentTarget.style.opacity = 0.75; }}
            onMouseLeave={e => { if (i !== current) e.currentTarget.style.opacity = 0.4; }}
          >
            <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {i === current && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'var(--color-accent-1)' }} />}
          </div>
        ))}
      </div>

      {/* Caption */}
      <div style={{ padding: '20px var(--px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '0.5px solid var(--color-ink-faint)' }}>
        <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
          日常と非日常のあいだにある、<br className="mobile-br" />小さな体験の記録。
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={prev} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em',
            background: 'none', border: '1px solid var(--color-ink-faint)',
            color: 'var(--color-ink-muted)', padding: '6px 14px', transition: 'all 160ms',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-ink)'; e.currentTarget.style.color = 'var(--color-ink)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-ink-faint)'; e.currentTarget.style.color = 'var(--color-ink-muted)'; }}
          >← prev</button>
          <button onClick={next} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em',
            background: 'var(--color-ink)', border: '1px solid var(--color-ink)',
            color: 'var(--color-bg)', padding: '6px 14px', transition: 'background 160ms',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
          >next →</button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,22,20,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <img src={photo.src} alt="" style={{ maxWidth: '92vw', maxHeight: '92vh', objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
          <button onClick={() => setLightbox(false)} style={{ position: 'absolute', top: 24, right: 32, background: 'none', border: 'none', color: 'rgba(245,242,236,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em' }}>
            ESC / close
          </button>
          <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid rgba(245,242,236,0.2)', color: 'var(--color-bg)', width: 56, height: 56, fontFamily: 'var(--font-mono)', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
          <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid rgba(245,242,236,0.2)', color: 'var(--color-bg)', width: 56, height: 56, fontFamily: 'var(--font-mono)', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
        </div>
      )}
    </div>
  );
}
