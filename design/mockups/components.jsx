// ============================================================
// azami portfolio — shared components
// ============================================================

// ---- CUSTOM CURSOR ----
function Cursor() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [hover, setHover] = React.useState(false);
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const over = e => {
      if (e.target.closest('a, button, [data-cursor]')) setHover(true);
      else setHover(false);
    };
    const down = () => setClick(true);
    const up = () => setClick(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return React.createElement('div', {
    style: {
      position: 'fixed',
      left: pos.x,
      top: pos.y,
      width: hover ? 40 : click ? 8 : 12,
      height: hover ? 40 : click ? 8 : 12,
      borderRadius: '50%',
      background: hover ? 'transparent' : 'oklch(55% 0.20 295)',
      border: hover ? '1.5px solid oklch(55% 0.20 295)' : 'none',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 9999,
      transition: 'width 180ms cubic-bezier(0.34,1.56,0.64,1), height 180ms cubic-bezier(0.34,1.56,0.64,1), background 120ms ease',
      mixBlendMode: 'multiply',
    }
  });
}

// ---- NAV ----
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return React.createElement('nav', {
    style: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      height: scrolled ? 52 : 64,
      background: scrolled ? 'rgba(245,242,236,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #C4BFB8' : 'none',
      transition: 'height 240ms ease, background 240ms ease, border-color 240ms ease',
    }
  },
    // Logo
    React.createElement('a', {
      onClick: () => setPage('home'),
      style: {
        display: 'flex', alignItems: 'center', gap: 10,
        textDecoration: 'none', cursor: 'pointer',
      }
    },
      React.createElement('img', {
        src: '../uploads/Gemini_Generated_Image_iwd2i2iwd2i2iwd2.svg',
        alt: 'azami',
        style: { width: 36, height: 36, objectFit: 'contain' },
      }),
      React.createElement('span', {
        style: {
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: '1.25rem', letterSpacing: '-0.02em',
          color: '#1A1614',
        }
      }, 'azami')
    ),
    // Links
    React.createElement('div', { style: { display: 'flex', gap: 40, alignItems: 'center' } },
      ['home', 'work', 'about', 'photo', 'note', 'contact'].map(p =>
        React.createElement('a', {
          key: p,
          onClick: () => setPage(p),
          style: {
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: page === p ? 'oklch(55% 0.20 295)' : '#6B6460',
            textDecoration: 'none', cursor: 'pointer',
            borderBottom: page === p ? '1px solid oklch(55% 0.20 295)' : '1px solid transparent',
            paddingBottom: 2,
            transition: 'color 160ms ease, border-color 160ms ease',
          }
        }, p)
      )
    )
  );
}

// ---- REVEAL WRAPPER (scroll fade-in) ----
function Reveal({ children, delay = 0, y = 28 }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return React.createElement('div', {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : `translateY(${y}px)`,
      transition: `opacity 640ms ${delay}ms cubic-bezier(0.0,0.0,0.2,1), transform 640ms ${delay}ms cubic-bezier(0.0,0.0,0.2,1)`,
    }
  }, children);
}

// ---- MARQUEE ----
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return React.createElement('div', {
    style: {
      overflow: 'hidden',
      borderTop: '1px solid #1A1614', borderBottom: '1px solid #1A1614',
      padding: '12px 0', background: '#F5F2EC',
    }
  },
    React.createElement('div', {
      style: {
        display: 'flex', gap: 48, width: 'max-content',
        animation: 'marquee 20s linear infinite',
        whiteSpace: 'nowrap',
      }
    },
      doubled.map((item, i) =>
        React.createElement('span', {
          key: i,
          style: {
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '1.25rem', fontStyle: 'italic', letterSpacing: '-0.01em',
            color: '#1A1614', display: 'flex', alignItems: 'center', gap: 48,
          }
        },
          item,
          React.createElement('span', { style: { color: 'oklch(55% 0.20 295)', fontStyle: 'normal', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem' } }, '×')
        )
      )
    )
  );
}

// ---- FOOTER ----
function Footer({ setPage }) {
  return React.createElement('footer', {
    style: {
      borderTop: '1px solid #1A1614',
      background: '#F5F2EC',
      padding: '64px 48px 48px',
    }
  },
    // Top row
    React.createElement('div', {
      style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginBottom: 48 }
    },
      React.createElement('div', null,
        React.createElement('div', {
          style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.7, letterSpacing: '0.02em' }
        }, '体験の価値は', React.createElement('br'), 'これから上がる。'),
        React.createElement('div', {
          style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: '#6B6460', marginTop: 16, letterSpacing: '0.06em' }
        }, '© 2026 azami')
      ),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
        ['work', 'about', 'photo', 'note', 'contact'].map(p =>
          React.createElement('a', {
            key: p, onClick: () => setPage(p),
            style: {
              fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(245,242,236,0.5)', textDecoration: 'none', cursor: 'pointer',
              transition: 'color 160ms',
            },
            onMouseEnter: e => e.target.style.color = 'oklch(55% 0.20 295)',
            onMouseLeave: e => e.target.style.color = '#6B6460',
          }, p)
        )
      ),
      React.createElement('div', {
        style: { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end', justifyContent: 'space-between' }
      },
        React.createElement('div', { style: { textAlign: 'right' } },
          React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.04em', marginBottom: 6, textTransform: 'uppercase' } }, 'Contact'),
          React.createElement('a', {
            href: 'mailto:hello@azami.jp',
            style: {
              fontFamily: "'Space Mono', monospace", fontSize: '0.75rem',
              color: '#F5F2EC', textDecoration: 'none', letterSpacing: '0.04em',
              borderBottom: '1px solid rgba(245,242,236,0.2)', paddingBottom: 2,
              transition: 'color 160ms, border-color 160ms',
            },
            onMouseEnter: e => { e.target.style.color = 'oklch(55% 0.20 295)'; e.target.style.borderBottomColor = 'oklch(55% 0.20 295)'; },
            onMouseLeave: e => { e.target.style.color = '#F5F2EC'; e.target.style.borderBottomColor = 'rgba(245,242,236,0.2)'; },
          }, 'hello@azami.jp')
        ),
        React.createElement('div', {
          style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.04em', lineHeight: 2, textAlign: 'right' }
        },
          'UX Designer / Researcher', React.createElement('br'),
          'Tokyo, Japan', React.createElement('br'),
          React.createElement('span', { style: { color: 'oklch(55% 0.20 295)' } }, '人の行動や感情から考える')
        )
      )
    ),
    // Bottom rule
    React.createElement('div', {
      style: { borderTop: '0.5px solid rgba(245,242,236,0.1)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
    },
      React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', color: 'rgba(245,242,236,0.2)', letterSpacing: '0.06em' } }, 'azami portfolio — 2026'),
      React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '0.875rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.2)' } }, 'Experience Design')
    )
  );
}

// ---- TAG ----
function Tag({ children, accent }) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center',
      fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
      letterSpacing: '0.06em', textTransform: 'uppercase',
      padding: '2px 8px',
      border: `1px solid ${accent ? 'oklch(55% 0.20 295)' : '#C4BFB8'}`,
      color: accent ? 'oklch(55% 0.20 295)' : '#6B6460',
    }
  }, children);
}

// ---- AZAMI FLOWER SVG ----
function AzamiFlower({ size = 180, color = 'oklch(55% 0.20 295)', accentColor = 'oklch(72% 0.18 145)', opacity = 0.82, style = {} }) {
  const angles = [0,30,60,90,120,150,180,210,240,270,300,330];
  const petals = angles.map((angle, i) => {
    const rad = angle * Math.PI / 180;
    const inner = 28, outer = 72 + (i % 3 === 0 ? 10 : 0);
    const x1 = 90 + inner * Math.cos(rad), y1 = 90 + inner * Math.sin(rad);
    const x2 = 90 + outer * Math.cos(rad), y2 = 90 + outer * Math.sin(rad);
    const cx = 90 + (inner + (outer-inner)*0.55) * Math.cos(rad + 0.18);
    const cy = 90 + (inner + (outer-inner)*0.55) * Math.sin(rad + 0.18);
    return React.createElement('path', {
      key: i,
      d: `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`,
      stroke: color, strokeWidth: i % 3 === 0 ? 1.8 : 1.2, strokeLinecap: 'round',
    });
  });
  return React.createElement('svg', {
    style: Object.assign({ opacity }, style),
    width: size, height: size, viewBox: '0 0 180 180', fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
    ...petals,
    React.createElement('circle', { cx: 90, cy: 90, r: 27, stroke: color, strokeWidth: 1, fill: 'none' }),
    React.createElement('circle', { cx: 90, cy: 90, r: 20, stroke: color, strokeWidth: 0.6, strokeDasharray: '2 2', fill: 'none' }),
    React.createElement('circle', { cx: 90, cy: 90, r: 7, fill: color, opacity: 0.9 }),
    React.createElement('circle', { cx: 90, cy: 90, r: 3, fill: accentColor }),
    React.createElement('line', { x1: 90, y1: 162, x2: 90, y2: 175, stroke: color, strokeWidth: 1.5, strokeLinecap: 'round' })
  );
}

// ---- AZAMI MARK (small radial) ----
function AzamiMark({ size = 48, color = '#1A1614', style = {} }) {
  const angles = [0,45,90,135,180,225,270,315];
  const lines = angles.map((angle, i) => {
    const rad = angle * Math.PI / 180;
    const x1 = 90 + 22 * Math.cos(rad), y1 = 90 + 22 * Math.sin(rad);
    const x2 = 90 + 68 * Math.cos(rad), y2 = 90 + 68 * Math.sin(rad);
    return React.createElement('line', { key: i, x1: x1.toFixed(1), y1: y1.toFixed(1), x2: x2.toFixed(1), y2: y2.toFixed(1), stroke: color, strokeWidth: 2, strokeLinecap: 'round' });
  });
  return React.createElement('svg', {
    style, width: size, height: size, viewBox: '0 0 180 180', fill: 'none',
  },
    ...lines,
    React.createElement('circle', { cx: 90, cy: 90, r: 22, stroke: color, strokeWidth: 1.5, fill: 'none' }),
    React.createElement('circle', { cx: 90, cy: 90, r: 7, fill: color })
  );
}

// Export all to window
Object.assign(window, { Cursor, Nav, Reveal, Marquee, Footer, Tag, AzamiFlower, AzamiMark });
