'use client';

import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';

const placeholderImgs = [
  'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j',
  'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk',
  'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428924/IMG_8453_zdxt6v',
  'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8459_oimqwg',
  'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_9124_wlts6e',
];

export default function WorksClient({ works }) {
  const router = useRouter();
  const featured = works[0];
  const rest = works.slice(1);

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: 'var(--space-7) var(--px) 40px', borderBottom: '1px solid var(--color-ink)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', bottom: '-0.1em', right: -4,
          fontFamily: 'var(--font-display-en)',
          fontSize: 'clamp(5rem, 12vw, 10rem)',
          lineHeight: 0.9, color: 'transparent',
          WebkitTextStroke: '1px var(--color-bg-alt)', pointerEvents: 'none',
          fontStyle: 'italic', letterSpacing: '-0.04em',
        }}>Works</div>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 12 }}>
                Selected Work / 仕事の記録
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>Works</h1>
            </div>
            <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-ink-faint)' }}>
              {works.length} projects
            </div>
          </div>
        </Reveal>
      </div>

      {/* Featured */}
      <Reveal>
        <div
          onClick={() => router.push(`/work/${featured.slug}`)}
          className="featured-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', cursor: 'pointer', overflow: 'hidden', borderBottom: '1px solid var(--color-ink)' }}
        >
          <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src={featured.image || placeholderImgs[0]} alt={featured.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 600ms ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ padding: '64px var(--px)', background: 'var(--color-ink)', color: 'var(--color-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent-2)', border: '1px solid var(--color-accent-2)', padding: '2px 8px' }}>Featured</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 12px', color: 'var(--color-bg)' }}>{featured.title}</h2>
              <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '1.125rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.5)', marginBottom: 24 }}>{featured.category}</div>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', lineHeight: 1.85, color: 'rgba(245,242,236,0.7)', margin: 0 }}>{featured.description}</p>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-1)', marginTop: 40 }}>View →</span>
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
        {rest.map((w, i) => (
          <Reveal key={w.slug} delay={i * 60}>
            <div
              onClick={() => router.push(`/work/${w.slug}`)}
              className="work-card"
              style={{
                cursor: 'pointer', overflow: 'hidden',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--color-ink-faint)' : 'none',
                borderBottom: '1px solid var(--color-ink-faint)',
                background: i === 1 ? 'var(--color-ink)' : 'var(--color-bg)',
                transition: 'background var(--dur-mid) ease',
              }}
              onMouseEnter={e => { if (i !== 1) e.currentTarget.style.background = 'var(--color-bg-alt)'; }}
              onMouseLeave={e => { if (i !== 1) e.currentTarget.style.background = 'var(--color-bg)'; }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                <img
                  src={w.image || placeholderImgs[i % placeholderImgs.length]}
                  alt={w.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms ease', opacity: i === 1 ? 0.5 : 1 }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 24px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: i === 1 ? 'rgba(245,242,236,0.3)' : 'var(--color-ink-faint)', letterSpacing: '0.06em' }}>{w.category?.split(' · ')[0]}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'var(--color-accent-1)', border: '1px solid var(--color-accent-1)', padding: '1px 6px', letterSpacing: '0.04em' }}>
                    {w.category?.split(' · ')[1] || w.category?.split(' · ')[0]}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 8px', color: i === 1 ? 'var(--color-bg)' : 'var(--color-ink)' }}>{w.title}</h3>
                <p className="work-desc" style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.8125rem', color: i === 1 ? 'rgba(245,242,236,0.6)' : 'var(--color-ink-muted)', lineHeight: 1.75, margin: 0 }}>{w.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
