'use client';

import Link from 'next/link';

const LINKS = ['work', 'about', 'photo', 'note', 'contact'];

export default function Footer() {
  return (
    <footer style={{
      borderTop:  '1px solid var(--color-ink)',
      background: 'var(--color-ink)',
      padding:    '64px var(--px) 48px',
    }}>
      {/* Top row */}
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginBottom: 48 }}>
        {/* Tagline */}
        <div>
          <div style={{
            fontFamily:    'var(--font-serif-ja)',
            fontSize:      '1.25rem',
            fontWeight:    300,
            lineHeight:    1.7,
            letterSpacing: '0.02em',
            color:         'var(--color-bg)',
          }}>
            体験の価値は<br />これから上がる。
          </div>
          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.625rem',
            color:         'var(--color-ink-muted)',
            marginTop:     16,
            letterSpacing: '0.06em',
          }}>
            © 2026 azami
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LINKS.map(p => (
            <Link key={p} href={`/${p}`} style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.6875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:         'var(--color-ink-muted)',
              transition:    'color 160ms',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink-muted)'}
            >{p}</Link>
          ))}
        </div>

        {/* Contact + info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.625rem',
              color:         'rgba(245,242,236,0.3)',
              letterSpacing: '0.04em',
              marginBottom:  6,
              textTransform: 'uppercase',
            }}>Contact</div>
            <a href="mailto:hello@azami.jp" style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.75rem',
              color:         'var(--color-bg)',
              letterSpacing: '0.04em',
              borderBottom:  '1px solid rgba(245,242,236,0.2)',
              paddingBottom: 2,
              transition:    'color 160ms, border-color 160ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent-1)'; e.currentTarget.style.borderBottomColor = 'var(--color-accent-1)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-bg)'; e.currentTarget.style.borderBottomColor = 'rgba(245,242,236,0.2)'; }}
            >hello@azami.jp</a>
          </div>
          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.625rem',
            color:         'rgba(245,242,236,0.3)',
            letterSpacing: '0.04em',
            lineHeight:    2,
            textAlign:     'right',
          }}>
            UX Designer / Researcher<br />
            Tokyo, Japan<br />
            <span style={{ color: 'var(--color-accent-1)' }}>人の行動や感情から考える</span>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div style={{ borderTop: '0.5px solid rgba(245,242,236,0.1)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(245,242,236,0.2)', letterSpacing: '0.06em' }}>
          azami portfolio — 2026
        </div>
        <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '0.875rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.2)' }}>
          Experience Design
        </div>
      </div>
    </footer>
  );
}
