// ============================================================
// azami portfolio — pages: Photography, Note, Contact
// ============================================================

const PHOTOS = [
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_3721_wadsf0", layout: "sq" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j", layout: "tall" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk", layout: "tall" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428924/IMG_8453_zdxt6v", layout: "tall" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8459_oimqwg", layout: "tall" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_9124_wlts6e", layout: "sq" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428925/IMG_8636_usbkui", layout: "tall" },
  { src: "https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428922/IMG_8914_pkdqye", layout: "tall" },
];

const NOTES = [
  { title: "月イチBAR「あのひと」— 場の設計と主催", date: "2025", tag: "場づくり", url: "https://note.com/thistle/n/n8bea21b42ef0", img: "https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg" },
  { title: "うみのそとの図書館レポ", date: "2019.12", tag: "旅", url: "https://note.com/thistle/n/n07aff389d4ad", img: null },
  { title: "体験設計の仕事について", date: "2024", tag: "思考", url: "https://note.com/thistle", img: null },
  { title: "日常の気づきと体験のあいだ", date: "2023", tag: "エッセイ", url: "https://note.com/thistle", img: null },
  { title: "場づくりとリサーチは地続きだ", date: "2023", tag: "仕事", url: "https://note.com/thistle", img: null },
];

// ---- PHOTOGRAPHY PAGE ----
function PhotoPage() {
  const [current, setCurrent] = React.useState(0);
  const [transitioning, setTransitioning] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(false);

  const goTo = (idx) => {
    if (idx === current || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 280);
  };

  const prev = () => goTo((current - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => goTo((current + 1) % PHOTOS.length);

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, transitioning]);

  const photo = PHOTOS[current];

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh', display: 'flex', flexDirection: 'column' } },

    // Header
    React.createElement('div', { style: { padding: '40px 48px 32px', borderBottom: '1px solid #1A1614', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } },
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 8 } }, 'Photography / 写真'),
        React.createElement('h1', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontStyle: 'italic', margin: 0, lineHeight: 1 } }, 'Moments')
      ),
      React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1rem', fontStyle: 'italic', color: '#C4BFB8' } },
        React.createElement('span', { style: { color: 'oklch(55% 0.20 295)', fontStyle: 'normal', fontFamily: "'Space Mono', monospace", fontSize: '1.25rem' } }, String(current + 1).padStart(2, '0')),
        React.createElement('span', { style: { margin: '0 4px' } }, ' / '),
        String(PHOTOS.length).padStart(2, '0')
      )
    ),

    // MAIN PHOTO — large, full-bleed
    React.createElement('div', {
      style: {
        flex: 1, position: 'relative',
        background: '#1A1614', overflow: 'hidden',
        cursor: 'zoom-in', minHeight: 480,
      },
      onClick: () => setLightbox(true),
    },
      React.createElement('img', {
        key: current,
        src: photo.src, alt: photo.alt,
        style: {
          width: '100%', height: '100%',
          objectFit: 'contain', display: 'block',
          position: 'absolute', inset: 0,
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? 'scale(1.03)' : 'scale(1)',
          transition: 'opacity 280ms ease, transform 280ms ease',
          maxHeight: '72vh',
        }
      }),

      // Prev / Next buttons
      React.createElement('button', {
        onClick: e => { e.stopPropagation(); prev(); },
        style: {
          position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(245,242,236,0.1)', border: '1px solid rgba(245,242,236,0.2)',
          color: '#F5F2EC', width: 48, height: 48, cursor: 'pointer',
          fontFamily: "'Space Mono', monospace", fontSize: '1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)', transition: 'background 160ms',
          zIndex: 2,
        },
        onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
        onMouseLeave: e => e.currentTarget.style.background = 'rgba(245,242,236,0.1)',
      }, '←'),
      React.createElement('button', {
        onClick: e => { e.stopPropagation(); next(); },
        style: {
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(245,242,236,0.1)', border: '1px solid rgba(245,242,236,0.2)',
          color: '#F5F2EC', width: 48, height: 48, cursor: 'pointer',
          fontFamily: "'Space Mono', monospace", fontSize: '1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)', transition: 'background 160ms',
          zIndex: 2,
        },
        onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
        onMouseLeave: e => e.currentTarget.style.background = 'rgba(245,242,236,0.1)',
      }, '→'),

      // Zoom hint
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: 16, right: 20,
          fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(245,242,236,0.3)',
        }
      }, 'click to zoom')
    ),

    // THUMBNAIL STRIP
    React.createElement('div', {
      style: {
        borderTop: '1px solid #1A1614',
        padding: '0',
        background: '#1A1614',
        display: 'flex',
        overflowX: 'auto',
      }
    },
      PHOTOS.map((p, i) =>
        React.createElement('div', {
          key: i,
          onClick: () => goTo(i),
          style: {
            flex: '0 0 auto',
            width: 100, height: 72,
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            opacity: i === current ? 1 : 0.4,
            transition: 'opacity 200ms ease',
            borderRight: '1px solid rgba(245,242,236,0.08)',
          },
          onMouseEnter: e => { if (i !== current) e.currentTarget.style.opacity = 0.75; },
          onMouseLeave: e => { if (i !== current) e.currentTarget.style.opacity = 0.4; },
        },
          React.createElement('img', {
            src: p.src, alt: p.alt,
            style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
          }),
          i === current && React.createElement('div', {
            style: {
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 2, background: 'oklch(55% 0.20 295)',
            }
          })
        )
      )
    ),

    // Caption + description
    React.createElement('div', {
      style: {
        padding: '20px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '0.5px solid #C4BFB8',
      }
    },
      React.createElement('div', {
        style: {
          fontFamily: "'Noto Serif JP', Georgia, serif",
          fontSize: '0.875rem', fontWeight: 300,
          color: '#6B6460', lineHeight: 1.6,
        }
      }, '日常と非日常のあいだにある、小さな体験の記録。'),
      React.createElement('div', { style: { display: 'flex', gap: 8 } },
        React.createElement('button', {
          onClick: prev,
          style: {
            fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
            letterSpacing: '0.08em', background: 'none', border: '1px solid #C4BFB8',
            color: '#6B6460', padding: '6px 14px', cursor: 'pointer',
            transition: 'all 160ms',
          },
          onMouseEnter: e => { e.currentTarget.style.borderColor = '#1A1614'; e.currentTarget.style.color = '#1A1614'; },
          onMouseLeave: e => { e.currentTarget.style.borderColor = '#C4BFB8'; e.currentTarget.style.color = '#6B6460'; },
        }, '← prev'),
        React.createElement('button', {
          onClick: next,
          style: {
            fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
            letterSpacing: '0.08em', background: '#1A1614', border: '1px solid #1A1614',
            color: '#F5F2EC', padding: '6px 14px', cursor: 'pointer',
            transition: 'background 160ms',
          },
          onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
          onMouseLeave: e => e.currentTarget.style.background = '#1A1614',
        }, 'next →')
      )
    ),

    // Lightbox
    lightbox && React.createElement('div', {
      onClick: () => setLightbox(false),
      style: {
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(26,22,20,0.96)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out',
      }
    },
      React.createElement('img', {
        src: photo.src, alt: photo.alt,
        style: { maxWidth: '92vw', maxHeight: '92vh', objectFit: 'contain' },
        onClick: e => e.stopPropagation()
      }),
      React.createElement('button', {
        onClick: () => setLightbox(false),
        style: {
          position: 'absolute', top: 24, right: 32,
          background: 'none', border: 'none', color: 'rgba(245,242,236,0.5)',
          fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
          letterSpacing: '0.08em', cursor: 'pointer',
        }
      }, 'ESC / close'),
      React.createElement('button', {
        onClick: e => { e.stopPropagation(); prev(); },
        style: {
          position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: '1px solid rgba(245,242,236,0.2)',
          color: '#F5F2EC', width: 56, height: 56, cursor: 'pointer',
          fontFamily: "'Space Mono', monospace", fontSize: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }
      }, '←'),
      React.createElement('button', {
        onClick: e => { e.stopPropagation(); next(); },
        style: {
          position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: '1px solid rgba(245,242,236,0.2)',
          color: '#F5F2EC', width: 56, height: 56, cursor: 'pointer',
          fontFamily: "'Space Mono', monospace", fontSize: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }
      }, '→')
    )
  );
}


// ---- NOTE PAGE ----
function NotePage() {
  const [hovered, setHovered] = React.useState(null);

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh' } },

    // Header
    React.createElement('div', { style: { padding: '48px 48px 40px', borderBottom: '1px solid #1A1614', position: 'relative', overflow: 'hidden' } },
      React.createElement('div', {
        style: {
          position: 'absolute', top: '-0.05em', right: -4,
          fontFamily: "'Noto Serif JP', Georgia, serif",
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          lineHeight: 0.9, color: 'transparent',
          WebkitTextStroke: '1px #EDEAE2', pointerEvents: 'none',
          fontWeight: 700, letterSpacing: '-0.02em',
        }
      }, '書く'),
      React.createElement(Reveal, null,
        React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 12 } }, 'Writing / 書くこと')
      ),
      React.createElement(Reveal, { delay: 60 },
        React.createElement('h1', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, margin: '0 0 12px', lineHeight: 1, letterSpacing: '-0.02em' } }, 'note')
      ),
      React.createElement(Reveal, { delay: 100 },
        React.createElement('p', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem', color: '#6B6460', maxWidth: 520, lineHeight: 1.85, margin: 0, position: 'relative', zIndex: 1 } },
          '体験・旅・日常の観察をnoteで綴る。書くことで思考を整理し、気づきを言語化するプラクティス。'
        )
      )
    ),

    // Featured note
    React.createElement('div', { style: { padding: '48px 48px 0' } },
      React.createElement(Reveal, null,
        React.createElement('a', {
          href: NOTES[0].url, target: '_blank', rel: 'noreferrer',
          style: {
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            background: '#1A1614', textDecoration: 'none', overflow: 'hidden',
            transition: 'transform 240ms ease',
            marginBottom: 24,
          },
          onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
          onMouseLeave: e => e.currentTarget.style.transform = 'none',
        },
          NOTES[0].img && React.createElement('div', { style: { overflow: 'hidden' } },
            React.createElement('img', { src: NOTES[0].img, alt: NOTES[0].title, style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms ease' } })
          ),
          React.createElement('div', { style: { padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 } },
            React.createElement('div', null,
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(72% 0.18 145)', marginBottom: 16 } }, '— Featured'),
              React.createElement('h2', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#F5F2EC', lineHeight: 1.4, margin: '0 0 16px', letterSpacing: '-0.01em' } }, NOTES[0].title)
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
              React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.06em' } }, NOTES[0].date),
              React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', border: '1px solid oklch(55% 0.20 295)', padding: '2px 8px' } }, NOTES[0].tag)
            )
          )
        )
      )
    ),

    // Note list
    React.createElement('div', { style: { padding: '0 48px 80px' } },
      NOTES.slice(1).map((n, i) =>
        React.createElement(Reveal, { key: i, delay: i * 60 },
          React.createElement('a', {
            href: n.url, target: '_blank', rel: 'noreferrer',
            onMouseEnter: () => setHovered(i),
            onMouseLeave: () => setHovered(null),
            style: {
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: 32, alignItems: 'center',
              padding: '24px 0',
              borderBottom: '0.5px solid #C4BFB8',
              textDecoration: 'none',
              background: hovered === i ? '#FAF8F3' : 'transparent',
              margin: '0 -48px', padding: '24px 48px',
              transition: 'background 160ms ease',
            }
          },
            React.createElement('div', null,
              React.createElement('h3', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.125rem', fontWeight: 700, color: '#1A1614', margin: '0 0 6px', lineHeight: 1.4, letterSpacing: '-0.01em' } }, n.title),
              React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.06em', color: '#C4BFB8' } }, n.date)
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 } },
              React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', border: '1px solid oklch(55% 0.20 295)', padding: '1px 6px' } }, n.tag),
              React.createElement('span', { style: { color: hovered === i ? 'oklch(55% 0.20 295)' : '#C4BFB8', fontSize: '1rem', transition: 'color 160ms, transform 160ms', transform: hovered === i ? 'translateX(4px)' : 'none', display: 'block' } }, '→')
            )
          )
        )
      ),

      // note link
      React.createElement(Reveal, { delay: 200 },
        React.createElement('div', { style: { textAlign: 'center', marginTop: 48 } },
          React.createElement('a', {
            href: 'https://note.com/thistle', target: '_blank', rel: 'noreferrer',
            style: {
              fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#F5F2EC', background: '#1A1614',
              border: 'none', padding: '14px 36px', cursor: 'pointer',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 200ms ease',
            },
            onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
            onMouseLeave: e => e.currentTarget.style.background = '#1A1614',
          }, 'note をすべて読む →')
        )
      )
    )
  );
}

// ---- CONTACT PAGE ----
function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const types = ['転職・採用について', 'フリーランス依頼', '体験設計の相談', 'その他'];

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh' } },

    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 64px)' } },

      // Left: philosophy
      React.createElement('div', {
        style: {
          background: '#1A1614', padding: '80px 64px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
        }
      },
        React.createElement('div', {
          style: {
            position: 'absolute', bottom: '-0.1em', right: '-0.04em',
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(6rem, 14vw, 11rem)',
            lineHeight: 0.9, color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            pointerEvents: 'none', letterSpacing: '-0.04em', fontStyle: 'italic',
          }
        }, 'hello'),
        React.createElement('div', null,
          React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 32 } }, 'Contact / お問い合わせ'),
          React.createElement('h1', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#F5F2EC', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 24px' } }, '一緒に良い体験を作りましょう。'),
          React.createElement('p', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.5)', lineHeight: 1.5 } }, '"Let\'s build something meaningful."')
        ),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 1 } },
          React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.3)', marginBottom: 8 } }, 'Available for'),
          ['転職・フルタイム', 'フリーランス案件', '体験設計の相談'].map((t, i) =>
            React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 10 } },
              React.createElement('div', { style: { width: 5, height: 5, background: 'oklch(55% 0.20 295)', flexShrink: 0 } }),
              React.createElement('span', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem', color: 'rgba(245,242,236,0.7)' } }, t)
            )
          )
        )
      ),

      // Right: form
      React.createElement('div', { style: { padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
        sent
          ? React.createElement(Reveal, null,
              React.createElement('div', { style: { textAlign: 'center' } },
                React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '4rem', fontStyle: 'italic', color: 'oklch(55% 0.20 295)', marginBottom: 24, lineHeight: 1 } }, 'ありがとう。'),
                React.createElement('p', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem', color: '#6B6460', lineHeight: 1.85 } }, '送信しました。2〜3営業日以内にご返信いたします。')
              )
            )
          : React.createElement('form', { onSubmit: handleSubmit, style: { display: 'flex', flexDirection: 'column', gap: 24 } },
              React.createElement(Reveal, null,
                React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 } },
                  ['name', 'email'].map(field =>
                    React.createElement('div', { key: field },
                      React.createElement('label', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', display: 'block', marginBottom: 8 } },
                        field === 'name' ? 'お名前' : 'Email'
                      ),
                      React.createElement('input', {
                        type: field === 'email' ? 'email' : 'text',
                        value: form[field], required: true,
                        onChange: e => setForm(p => ({ ...p, [field]: e.target.value })),
                        style: {
                          width: '100%', fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem',
                          background: 'transparent', border: 'none', borderBottom: '1px solid #C4BFB8',
                          padding: '8px 0', color: '#1A1614', outline: 'none',
                          transition: 'border-color 200ms',
                        },
                        onFocus: e => e.target.style.borderBottomColor = 'oklch(55% 0.20 295)',
                        onBlur: e => e.target.style.borderBottomColor = '#C4BFB8',
                      })
                    )
                  )
                )
              ),

              // Type selector
              React.createElement(Reveal, { delay: 60 },
                React.createElement('div', null,
                  React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', marginBottom: 12 } }, 'お問い合わせの種類'),
                  React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8 } },
                    types.map(t =>
                      React.createElement('button', {
                        key: t, type: 'button',
                        onClick: () => setForm(p => ({ ...p, type: t })),
                        style: {
                          fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          padding: '6px 14px', cursor: 'pointer',
                          background: form.type === t ? 'oklch(55% 0.20 295)' : 'transparent',
                          color: form.type === t ? '#F5F2EC' : '#6B6460',
                          border: form.type === t ? '1px solid oklch(55% 0.20 295)' : '1px solid #C4BFB8',
                          transition: 'all 160ms',
                        }
                      }, t)
                    )
                  )
                )
              ),

              // Message
              React.createElement(Reveal, { delay: 100 },
                React.createElement('div', null,
                  React.createElement('label', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', display: 'block', marginBottom: 8 } }, 'メッセージ'),
                  React.createElement('textarea', {
                    rows: 5, required: true,
                    value: form.message,
                    onChange: e => setForm(p => ({ ...p, message: e.target.value })),
                    placeholder: '体験設計のご相談、お気軽にどうぞ。',
                    style: {
                      width: '100%', fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem',
                      background: 'transparent', border: 'none', borderBottom: '1px solid #C4BFB8',
                      padding: '8px 0', color: '#1A1614', outline: 'none', resize: 'none',
                      lineHeight: 1.8, transition: 'border-color 200ms',
                    },
                    onFocus: e => e.target.style.borderBottomColor = 'oklch(55% 0.20 295)',
                    onBlur: e => e.target.style.borderBottomColor = '#C4BFB8',
                  })
                )
              ),

              React.createElement(Reveal, { delay: 140 },
                React.createElement('button', {
                  type: 'submit',
                  style: {
                    fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: '#1A1614', color: '#F5F2EC',
                    border: 'none', padding: '16px 40px', cursor: 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 200ms',
                  },
                  onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
                  onMouseLeave: e => e.currentTarget.style.background = '#1A1614',
                }, '送信する →')
              )
            )
      )
    )
  );
}

Object.assign(window, { PhotoPage, NotePage, ContactPage });
