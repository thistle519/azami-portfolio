'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const LINKS = ['work', 'about', 'photo', 'note', 'contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (p) => pathname.startsWith(`/${p}`);

  return (
    <>
      <nav style={{
        position:      'fixed',
        top: 0, left: 0, right: 0,
        zIndex:        100,
        display:       'flex',
        alignItems:    'center',
        justifyContent:'space-between',
        padding:       '0 var(--px)',
        height:        scrolled ? 52 : 64,
        background:    scrolled ? 'rgba(245,242,236,0.95)' : 'transparent',
        backdropFilter:scrolled ? 'blur(12px)' : 'none',
        borderBottom:  scrolled ? '1px solid var(--color-ink-faint)' : 'none',
        transition:    'height 240ms ease, background 240ms ease, border-color 240ms ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.svg" alt="azami" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          <span style={{
            fontFamily:    'var(--font-display-en)',
            fontSize:      '1.25rem',
            letterSpacing: '-0.02em',
            color:         'var(--color-ink)',
          }}>azami</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {LINKS.map(p => (
            <Link key={p} href={`/${p}`} style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         isActive(p) ? 'var(--color-accent-1)' : 'var(--color-ink-muted)',
              borderBottom:  isActive(p) ? '1px solid var(--color-accent-1)' : '1px solid transparent',
              paddingBottom: 2,
              transition:    'color 160ms ease, border-color 160ms ease',
            }}>{p}</Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: 'none', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5,
            cursor: 'pointer', alignItems: 'flex-end',
          }}
          aria-label="menu"
        >
          <span style={{ display: 'block', width: 22, height: 1, background: menuOpen ? 'var(--color-accent-1)' : 'var(--color-ink)', transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 14, height: 1, background: 'var(--color-ink)', transition: 'opacity 200ms', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1, background: menuOpen ? 'var(--color-accent-1)' : 'var(--color-ink)', transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'var(--color-bg)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 200ms ease',
        }}
      >
        {LINKS.map((p, i) => (
          <Link
            key={p}
            href={`/${p}`}
            style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: isActive(p) ? 'var(--color-accent-1)' : 'var(--color-ink)',
              padding: '20px 0',
              borderBottom: i < LINKS.length - 1 ? '0.5px solid var(--color-ink-faint)' : 'none',
              width: '80%',
              textAlign: 'center',
              transition: 'color 160ms',
            }}
          >{p}</Link>
        ))}
      </div>
    </>
  );
}
