'use client';

import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';

const SECTIONS = [
  { num: '02', en: 'Background', ja: '背景・文脈' },
  { num: '03', en: 'Process',    ja: 'プロセス・アプローチ' },
  { num: '04', en: 'Outcome',    ja: 'アウトカム・学び' },
];

export default function WorkDetailClient({ work, next }) {
  const router = useRouter();
  const tags = work.category ? work.category.split(' · ') : [];

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* ── HEADER ───────────────────────────────────────── */}
      <div style={{ padding: '40px var(--px) 0', borderBottom: '1px solid var(--color-ink)' }}>

        {/* Top row: back + tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
          <button
            onClick={() => router.push('/work')}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: 8, padding: 0, transition: 'color 160ms', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink-muted)'}
          >← Works</button>
          <div style={{ display: 'flex', gap: 8 }}>
            {tags.map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px', border: '1px solid var(--color-ink-faint)', color: 'var(--color-ink-muted)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Title block */}
        <Reveal>
          <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 20px', maxWidth: 840 }}>
            {work.title}
          </h1>
        </Reveal>
        <Reveal delay={60}>
          <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.85, margin: '0 0 40px', maxWidth: 560 }}>
            {work.description}
          </p>
        </Reveal>
      </div>

      {/* ── IMAGE ────────────────────────────────────────── */}
      {work.image && (
        <Reveal>
          <div style={{ width: '100%', aspectRatio: '16/7', overflow: 'hidden', borderBottom: '1px solid var(--color-ink-faint)' }}>
            <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </Reveal>
      )}

      {/* ── META STRIP ───────────────────────────────────── */}
      <div style={{ padding: '16px var(--px)', borderBottom: '1px solid var(--color-ink-faint)', display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>Category</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--color-ink-faint)' }}>—</span>
          <span style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.8125rem', color: 'var(--color-ink-muted)' }}>{work.category}</span>
        </div>
        {work.url && (
          <a
            href={work.url} target="_blank" rel="noreferrer"
            style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', background: 'var(--color-ink)', padding: '8px 18px', transition: 'background var(--dur-mid) ease' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
          >詳細を見る →</a>
        )}
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="grid-2-1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 }}>

        {/* Main column */}
        <div style={{ borderRight: '0.5px solid var(--color-ink-faint)' }}>

          {/* 01 Overview */}
          <Reveal>
            <section style={{ padding: '64px var(--px)', borderBottom: '0.5px solid var(--color-ink-faint)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 28 }}>— 01 &nbsp; Overview</div>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, lineHeight: 1.9, margin: 0, maxWidth: 560 }}>{work.description}</p>
            </section>
          </Reveal>

          {/* Placeholder sections */}
          {SECTIONS.map((s, idx) => (
            <Reveal key={s.num} delay={idx * 40}>
              <section style={{ padding: '64px var(--px)', borderBottom: '0.5px solid var(--color-ink-faint)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 20 }}>— {s.num} &nbsp; {s.en}</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 28, letterSpacing: '-0.01em' }}>{s.ja}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[72, 88, 60].map((w, i) => (
                    <div key={i} style={{ height: 10, borderRadius: 1, width: `${w}%`, background: 'var(--color-bg-alt)' }} />
                  ))}
                </div>
                <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', opacity: 0.4 }}>content coming soon</div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar" style={{ padding: '64px 40px', display: 'flex', flexDirection: 'column', gap: 40, position: 'sticky', top: 64, alignSelf: 'start' }}>
          <Reveal>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 12 }}>Category</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {tags.map(t => (
                  <span key={t} style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={40}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 12 }}>Sections</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Overview', ...SECTIONS.map(s => s.en)].map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--color-accent-1)' }}>0{i + 1}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: i === 0 ? 'var(--color-ink)' : 'var(--color-ink-faint)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {work.url && (
            <Reveal delay={80}>
              <a
                href={work.url} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', background: 'var(--color-ink)', padding: '14px 20px', transition: 'background var(--dur-mid) ease' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
              >詳細を見る →</a>
            </Reveal>
          )}
        </div>
      </div>

      {/* ── NEXT WORK ────────────────────────────────────── */}
      {next && (
        <div
          onClick={() => router.push(`/work/${next.slug}`)}
          style={{ borderTop: '1px solid var(--color-ink)', padding: '40px var(--px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', background: 'var(--color-ink)', transition: 'background var(--dur-mid) ease' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.4)', marginBottom: 8 }}>Next Work</div>
            <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: 'var(--color-bg)', lineHeight: 1.3 }}>{next.title}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--color-bg)', flexShrink: 0 }}>→</span>
        </div>
      )}

    </div>
  );
}
