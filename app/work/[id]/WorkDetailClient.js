'use client';

import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Tag from '@/components/Tag';

export default function WorkDetailClient({ work }) {
  const router = useRouter();
  const tags = work.category ? work.category.split(' · ') : [];

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* Back */}
      <div style={{ padding: '32px var(--px) 0' }}>
        <button
          onClick={() => router.push('/work')}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: 8, padding: 0, transition: 'color 160ms' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink-muted)'}
        >← Works</button>
      </div>

      {/* Hero */}
      <div style={{ padding: '40px var(--px) 0', borderBottom: '1px solid var(--color-ink-faint)' }}>
        <Reveal>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {tags.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 12px' }}>
            {work.title}
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--color-ink-muted)', marginBottom: 40 }}>
            {work.category}
          </div>
        </Reveal>

        {work.image && (
          <Reveal delay={140}>
            <div style={{ width: '100%', aspectRatio: '16/7', overflow: 'hidden', marginBottom: 40 }}>
              <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
        )}
      </div>

      {/* Content grid */}
      <div className="grid-2-1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 }}>
        <div style={{ padding: '64px var(--px)', borderRight: '0.5px solid var(--color-ink-faint)' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 16 }}>Overview</div>
            <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.85, margin: '0 0 48px' }}>{work.description}</p>
          </Reveal>
        </div>

        <div className="detail-sidebar" style={{ padding: '64px 40px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <Reveal>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 12 }}>Category</div>
              <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--color-ink-muted)' }}>{work.category}</div>
            </div>
          </Reveal>

          {work.url && (
            <Reveal delay={60}>
              <a
                href={work.url} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', background: 'var(--color-ink)', padding: '12px 20px', transition: 'background var(--dur-mid) ease' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
              >詳細を見る →</a>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
