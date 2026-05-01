'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function NoteClient({ notes }) {
  const [hovered, setHovered] = useState(null);
  const featured = notes[0];
  const rest = notes.slice(1);

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: 'var(--space-7) var(--px) 40px', borderBottom: '1px solid var(--color-ink)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-0.05em', right: -4,
          fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(6rem, 15vw, 14rem)',
          lineHeight: 0.9, color: 'transparent',
          WebkitTextStroke: '1px var(--color-bg-alt)', pointerEvents: 'none',
          fontWeight: 700, letterSpacing: '-0.02em',
        }}>書く</div>
        <Reveal>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 12 }}>Writing / 書くこと</div>
        </Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, margin: '0 0 12px', lineHeight: 1, letterSpacing: '-0.02em' }}>note</h1>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', color: 'var(--color-ink-muted)', maxWidth: 520, lineHeight: 1.85, margin: 0, position: 'relative', zIndex: 1 }}>
            体験・旅・日常の観察をnoteで綴る。<br className="mobile-br" />書くことで思考を整理し、気づきを言語化するプラクティス。
          </p>
        </Reveal>
      </div>

      {/* Featured */}
      {featured && (
        <div style={{ padding: 'var(--space-7) var(--px) 0' }}>
          <Reveal>
            <a
              href={featured.url} target="_blank" rel="noreferrer"
              style={{ display: 'grid', gridTemplateColumns: featured.img ? '1fr 1fr' : '1fr', gap: 0, background: 'var(--color-ink)', overflow: 'hidden', transition: 'transform var(--dur-mid) ease', marginBottom: 24 }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              {featured.img && (
                <div style={{ overflow: 'hidden' }}>
                  <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent-2)', marginBottom: 16 }}>— Featured</div>
                  <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--color-bg)', lineHeight: 1.4, margin: '0 0 16px', letterSpacing: '-0.01em' }}>{featured.title}</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.06em' }}>{featured.date}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent-1)', border: '1px solid var(--color-accent-1)', padding: '2px 8px' }}>{featured.tag}</span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      )}

      {/* List */}
      <div style={{ padding: '0 var(--px) 80px', position: 'relative', overflow: 'hidden' }}>

        {/* Hover bg image */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          opacity: hovered !== null && rest[hovered]?.img ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}>
          {hovered !== null && rest[hovered]?.img && (
            <img src={rest[hovered].img} alt="" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              filter: 'blur(24px)', opacity: 0.13,
              transform: 'scale(1.08)',
            }} />
          )}
        </div>

        {rest.map((n, i) => (
          <Reveal key={i} delay={i * 60}>
            <a
              href={n.url} target="_blank" rel="noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
                borderBottom: '0.5px solid var(--color-ink-faint)',
                margin: '0 -48px', padding: '24px 48px',
                background: 'transparent',
                transition: 'background 160ms ease',
                position: 'relative', zIndex: 1,
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-ink)', margin: '0 0 6px', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{n.title}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.06em', color: 'var(--color-ink-faint)' }}>{n.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent-1)', border: '1px solid var(--color-accent-1)', padding: '1px 6px' }}>{n.tag}</span>
                <span style={{ color: hovered === i ? 'var(--color-accent-1)' : 'var(--color-ink-faint)', fontSize: '1rem', transition: 'color 160ms, transform 160ms', transform: hovered === i ? 'translateX(4px)' : 'none', display: 'block' }}>→</span>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href="https://note.com/thistle" target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', background: 'var(--color-ink)', padding: '14px 36px', display: 'inline-block', transition: 'background var(--dur-mid) ease' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
            >note をすべて読む →</a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
