'use client';

import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';

const SECTIONS = [
  { num: '02', en: 'Background', ja: '背景・文脈' },
  { num: '03', en: 'Process',    ja: 'プロセス・アプローチ' },
  { num: '04', en: 'Outcome',    ja: 'アウトカム・学び' },
];

export default function WorkDetailClient({ work, prev, next }) {
  const router = useRouter();
  const tags = work.category ? work.category.split(' · ') : [];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>

        {/* Image */}
        {work.image ? (
          <img
            src={work.image} alt={work.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--color-ink)' }} />
        )}

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,22,20,0.2) 0%, rgba(26,22,20,0.75) 60%, rgba(26,22,20,0.96) 100%)',
        }} />

        {/* Back button */}
        <button
          onClick={() => router.push('/work')}
          style={{
            position: 'absolute', top: 80, left: 'var(--px)',
            fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'none', border: 'none',
            color: 'rgba(245,242,236,0.5)',
            display: 'flex', alignItems: 'center', gap: 8,
            padding: 0, transition: 'color 160ms', cursor: 'pointer', zIndex: 2,
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,242,236,0.5)'}
        >← Works</button>

        {/* Tags */}
        <div style={{
          position: 'absolute', top: 80, right: 'var(--px)',
          display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end', zIndex: 2,
        }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5625rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '3px 10px',
              border: '1px solid rgba(245,242,236,0.3)',
              color: 'rgba(245,242,236,0.6)',
            }}>{t}</span>
          ))}
        </div>

        {/* Title */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 var(--px) 56px',
        }}>
          <Reveal>
            <h1 style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', margin: '0 0 16px',
              color: 'var(--color-bg)',
            }}>{work.title}</h1>
          </Reveal>
          <Reveal delay={60}>
            <p style={{
              fontFamily: 'var(--font-serif-ja)', fontSize: '1rem',
              color: 'rgba(245,242,236,0.55)', lineHeight: 1.8,
              margin: 0, maxWidth: 640,
            }}>{work.description}</p>
          </Reveal>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 24, right: 'var(--px)',
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(245,242,236,0.3)',
        }}>scroll ↓</div>
      </div>

      {/* ── META STRIP ───────────────────────────────────── */}
      <div style={{
        padding: '20px var(--px)',
        borderBottom: '1px solid var(--color-ink-faint)',
        display: 'flex', gap: 48, flexWrap: 'wrap',
        background: 'var(--color-bg)',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 4 }}>Category</div>
          <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.875rem', color: 'var(--color-ink-muted)' }}>{work.category}</div>
        </div>
        {work.url && (
          <div style={{ marginLeft: 'auto' }}>
            <a
              href={work.url} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-bg)', background: 'var(--color-ink)',
                padding: '10px 20px', display: 'inline-block',
                transition: 'background var(--dur-mid) ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
            >詳細を見る →</a>
          </div>
        )}
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="grid-2-1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 }}>

        {/* Main column */}
        <div style={{ borderRight: '0.5px solid var(--color-ink-faint)' }}>

          {/* 01 Overview */}
          <Reveal>
            <section style={{ padding: '72px var(--px)', borderBottom: '0.5px solid var(--color-ink-faint)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 32 }}>— 01 &nbsp; Overview</div>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300, lineHeight: 1.9, margin: 0, maxWidth: 600 }}>{work.description}</p>
            </section>
          </Reveal>

          {/* Placeholder sections */}
          {SECTIONS.map((s, idx) => (
            <Reveal key={s.num} delay={idx * 40}>
              <section style={{
                padding: '72px var(--px)',
                borderBottom: '0.5px solid var(--color-ink-faint)',
                position: 'relative',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 32 }}>— {s.num} &nbsp; {s.en}</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 24, letterSpacing: '-0.01em' }}>{s.ja}</div>

                {/* Placeholder blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[80, 92, 65].map((w, i) => (
                    <div key={i} style={{
                      height: 12, borderRadius: 1,
                      width: `${w}%`,
                      background: 'var(--color-bg-alt)',
                    }} />
                  ))}
                </div>

                <div style={{
                  marginTop: 32,
                  fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--color-ink-faint)', opacity: 0.5,
                }}>content coming soon</div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar" style={{ padding: '72px 40px', display: 'flex', flexDirection: 'column', gap: 48, position: 'sticky', top: 64, alignSelf: 'start' }}>
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
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--color-accent-1)', letterSpacing: '0.06em' }}>0{i + 1}</span>
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
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--color-bg)', background: 'var(--color-ink)',
                  padding: '14px 20px', transition: 'background var(--dur-mid) ease',
                }}
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
          style={{
            borderTop: '1px solid var(--color-ink)',
            padding: '48px var(--px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer', background: 'var(--color-ink)',
            transition: 'background var(--dur-mid) ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.4)', marginBottom: 8 }}>Next Work</div>
            <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--color-bg)', lineHeight: 1.3 }}>{next.title}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--color-bg)', flexShrink: 0 }}>→</span>
        </div>
      )}

    </div>
  );
}
