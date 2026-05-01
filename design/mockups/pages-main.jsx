// ============================================================
// azami portfolio — pages: Home, About, Work, WorkDetail
// ============================================================

// ---- HOME PAGE ----
function HomePage({ setPage }) {
  const [offsetY, setOffsetY] = React.useState(0);
  React.useEffect(() => {
    const handler = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const works = [
    { id: 1, title: '月イチBAR「あのひと」', en: 'Monthly Bar Experience', cat: '場づくり · Experience Design', year: '2024–', img: 'https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg' },
    { id: 2, title: 'うみのそとの図書館', en: 'Library by the Sea', cat: 'リサーチ · フィールドワーク', year: '2019', img: null },
    { id: 3, title: 'プロダクト体験設計', en: 'Product UX', cat: 'UXリサーチ · 戦略', year: '2023', img: null },
    { id: 4, title: 'イベント体験設計', en: 'Event Design', cat: '場づくり · 運営', year: '2022', img: null },
  ];

  return React.createElement('div', null,

    // ---- HERO ----
    React.createElement('section', {
      style: {
        minHeight: '100vh', background: '#F5F2EC',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 48px 80px',
      }
    },
      // Deco: giant ghost text, parallax
      React.createElement('div', {
        style: {
          position: 'absolute', top: '-0.05em', left: '-0.03em',
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(12rem, 28vw, 26rem)',
          lineHeight: 0.88, letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px #C4BFB8',
          pointerEvents: 'none', userSelect: 'none',
          transform: `translateY(${offsetY * 0.18}px)`,
          transition: 'transform 0ms',
          whiteSpace: 'nowrap',
        }
      }, 'UX'),

      // Dot decoration line — harkenic inspired
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: 80, left: 48, right: 48,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.5rem', letterSpacing: '0.15em',
          color: '#C4BFB8', overflow: 'hidden', whiteSpace: 'nowrap',
          pointerEvents: 'none', userSelect: 'none',
          opacity: 0.6,
        }
      }, '· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·'),

      // Hero content
      // Top-right label decorations
      React.createElement('div', {
        style: {
          position: 'absolute', top: 80, right: 48,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
          zIndex: 2,
        }
      },
        React.createElement('div', {
          style: {
            width: 64, height: 64,
            border: '1px solid oklch(55% 0.20 295)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'oklch(55% 0.20 295)', textAlign: 'center', lineHeight: 1.5,
          }
        }, 'azami'),
        React.createElement('div', {
          style: {
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5625rem', letterSpacing: '0.1em',
            color: '#C4BFB8', textAlign: 'right', lineHeight: 2,
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            marginTop: 8,
          }
        }, '人の行動や感情から考える')
      ),
      React.createElement('div', { style: { position: 'relative', zIndex: 2 } },
        React.createElement('div', {
          style: {
            fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'oklch(55% 0.20 295)', marginBottom: 24,
          }
        }, 'Experience Designer / UX'),

        React.createElement('h1', {
          style: {
            fontFamily: "'Noto Serif JP', Georgia, serif",
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            fontWeight: 700, lineHeight: 1.02,
            letterSpacing: '-0.02em', margin: '0 0 20px',
          }
        }, 'いい体験を、', React.createElement('br'), '増やしていく。'),

        React.createElement('div', {
          style: {
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32,
          }
        },
          React.createElement('div', {
            style: {
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              fontStyle: 'italic', color: '#6B6460', lineHeight: 1.3,
            }
          }, '"Designing from human behavior and emotion."'),
          React.createElement('button', {
            onClick: () => setPage('work'),
            style: {
              fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#1A1614', color: '#F5F2EC',
              border: 'none', padding: '16px 32px', cursor: 'pointer',
              transition: 'background 200ms ease',
              flexShrink: 0,
            },
            onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
            onMouseLeave: e => e.currentTarget.style.background = '#1A1614',
          }, 'Work を見る →')
        )
      ),

      // Scroll indicator
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: 40, right: 48,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
          letterSpacing: '0.1em', color: '#C4BFB8',
        }
      },
        React.createElement('div', { style: { width: 1, height: 48, background: '#C4BFB8', animation: 'scrollPulse 2s ease-in-out infinite' } }),
        'scroll'
      )
    ),

    // ---- PHILOSOPHY ----
    React.createElement('section', {
      style: {
        background: '#1A1614', color: '#F5F2EC',
        padding: '96px 48px 88px', position: 'relative', overflow: 'hidden',
      }
    },
      // Ghost deco word
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: '-0.1em', right: '-0.04em',
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(6rem, 16vw, 14rem)',
          letterSpacing: '-0.04em', color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.05)',
          pointerEvents: 'none', lineHeight: 1, fontStyle: 'italic',
        }
      }, 'experience'),

      // Label
      React.createElement(Reveal, null,
        React.createElement('div', {
          style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 56 }
        }, 'Philosophy / 設計の起点')
      ),

      // Two-column layout: large lead + paragraphs
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', position: 'relative', zIndex: 1 }
      },
        // Left: big lead sentence
        React.createElement(Reveal, { delay: 60 },
          React.createElement('div', null,
            React.createElement('p', {
              style: {
                fontFamily: "'Noto Serif JP', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 300, lineHeight: 1.75,
                letterSpacing: '0.03em',
                margin: 0,
              }
            },
              '体験は、小さな',
              React.createElement('em', { style: { fontStyle: 'normal', color: 'oklch(55% 0.20 295)' } }, '気づき'),
              'から始まる。',
              React.createElement('br'),
              'その瞬間に誠実に向き合うことが、',
              React.createElement('br'),
              '良い体験を設計する出発点だと思っています。'
            ),
            // Decorative azami mark
            React.createElement(AzamiMark, { size: 48, color: '#F5F2EC', style: { marginTop: 40, opacity: 0.25 } })
          )
        ),

        // Right: body paragraphs
        React.createElement(Reveal, { delay: 120 },
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 28 } },
            React.createElement('p', {
              style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem', fontWeight: 300, lineHeight: 2, color: 'rgba(245,242,236,0.75)', margin: 0 }
            }, 'UXリサーチを起点に、デジタルプロダクトから場づくり・イベントまでを横断して体験を設計しています。日常と非日常、どちらの文脈にも等しく向き合いながら、人の生活の中に豊かな体験を実装することを仕事としています。'),
            React.createElement('p', {
              style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem', fontWeight: 300, lineHeight: 2, color: 'rgba(245,242,236,0.75)', margin: 0 }
            }, '「体験の価値はこれから上がる」という確信のもと、リサーチによる洞察・思考の鋭さ・クリエイティブな広がりを重ねていきます。'),
            // Divider accent
            React.createElement('div', { style: { width: 40, height: 2, background: 'oklch(55% 0.20 295)' } }),
            React.createElement('p', {
              style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.125rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.4)', lineHeight: 1.6, margin: 0 }
            }, '"Designing from human behavior and emotion."'),
            // About link
            React.createElement('button', {
              onClick: () => {},
              style: {
                alignSelf: 'flex-start', marginTop: 8,
                fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'transparent', color: 'rgba(245,242,236,0.5)',
                border: 'none', borderBottom: '1px solid rgba(245,242,236,0.2)',
                padding: '4px 0', cursor: 'pointer',
                transition: 'color 160ms, border-color 160ms',
              },
              onMouseEnter: e => { e.currentTarget.style.color = 'oklch(55% 0.20 295)'; e.currentTarget.style.borderBottomColor = 'oklch(55% 0.20 295)'; },
              onMouseLeave: e => { e.currentTarget.style.color = 'rgba(245,242,236,0.5)'; e.currentTarget.style.borderBottomColor = 'rgba(245,242,236,0.2)'; },
            }, 'About を読む →')
          )
        )
      )
    ),

    // ---- MARQUEE ----
    React.createElement(Marquee, { items: ['UX Research', 'Experience Design', '場づくり', 'Photography', 'Strategy', 'Writing'] }),

    // ---- SELECTED WORKS ----
    React.createElement('section', {
      style: { padding: '96px 48px', background: '#F5F2EC', position: 'relative', overflow: 'hidden' }
    },
      // Background stroke decoration
      React.createElement('svg', {
        style: { position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 },
        viewBox: '0 0 1200 900', preserveAspectRatio: 'xMidYMid slice', fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
        // Large arc sweeping top-left
        React.createElement('path', { d: 'M-80,200 Q200,-60 520,180 Q840,420 1100,80', stroke: '#C4BFB8', strokeWidth: 0.6, opacity: 0.5 }),
        // Second arc, offset
        React.createElement('path', { d: 'M-40,320 Q240,60 560,300 Q880,540 1140,200', stroke: '#C4BFB8', strokeWidth: 0.4, strokeDasharray: '6 8', opacity: 0.4 }),
        // Bottom right circle
        React.createElement('circle', { cx: 1080, cy: 780, r: 220, stroke: '#EDEAE2', strokeWidth: 1, opacity: 0.7 }),
        React.createElement('circle', { cx: 1080, cy: 780, r: 160, stroke: '#EDEAE2', strokeWidth: 0.5, strokeDasharray: '3 5', opacity: 0.5 }),
        // Top-left cross mark
        React.createElement('line', { x1: 60, y1: 48, x2: 60, y2: 96, stroke: '#C4BFB8', strokeWidth: 1, opacity: 0.5 }),
        React.createElement('line', { x1: 36, y1: 72, x2: 84, y2: 72, stroke: '#C4BFB8', strokeWidth: 1, opacity: 0.5 }),
        // Diamond bottom-left
        React.createElement('path', { d: 'M80,760 L104,784 L80,808 L56,784 Z', stroke: '#C4BFB8', strokeWidth: 0.8, opacity: 0.4 }),
        // Accent arc — purple, thin
        React.createElement('path', { d: 'M900,50 Q1050,300 860,500', stroke: 'oklch(55% 0.20 295)', strokeWidth: 0.5, opacity: 0.18 }),
      ),

      // Content (z-index above bg) — children passed directly to section
      React.createElement(Reveal, null,
        React.createElement('div', {
          style: {
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: 56, borderBottom: '1px solid #1A1614', paddingBottom: 16,
          }
        },
          React.createElement('h2', {
            style: {
              fontFamily: "'Noto Serif JP', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
              letterSpacing: '-0.02em', lineHeight: 1,
            }
          }, 'Selected Works'),
          React.createElement('span', {
            style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1rem', fontStyle: 'italic', color: '#6B6460' }
          }, '仕事の記録')
        )
      ),

      // Works grid
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } },
        works.map((w, i) =>
          React.createElement(Reveal, { key: w.id, delay: i * 80 },
            React.createElement('div', {
              onClick: () => setPage('work-detail-' + w.id),
              style: {
                cursor: 'pointer', background: i === 0 ? '#1A1614' : '#EDEAE2',
                gridColumn: i === 0 ? '1 / 2' : 'auto',
                gridRow: i === 0 ? '1 / 3' : 'auto',
                overflow: 'hidden',
                transition: 'transform 240ms cubic-bezier(0.0,0.0,0.2,1)',
              },
              onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-6px)',
              onMouseLeave: e => e.currentTarget.style.transform = 'none',
            },
              // Thumb
              React.createElement('div', {
                style: {
                  width: '100%',
                  aspectRatio: i === 0 ? '4/3' : '16/9',
                  overflow: 'hidden', position: 'relative',
                  background: i === 0 ? '#2a2224' : '#D8D4CC',
                }
              },
                w.img
                  ? React.createElement('img', {
                      src: w.img, alt: w.title,
                      style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        transition: 'transform 400ms cubic-bezier(0.0,0.0,0.2,1)',
                      },
                      onMouseEnter: e => e.target.style.transform = 'scale(1.04)',
                      onMouseLeave: e => e.target.style.transform = 'none',
                    })
                  : React.createElement('div', {
                      style: {
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
                        color: i === 0 ? 'rgba(245,242,236,0.2)' : '#C4BFB8',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        background: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 10px)',
                      }
                    }, 'project image'),
                React.createElement('div', {
                  style: {
                    position: 'absolute', bottom: 12, right: 16,
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '4rem', lineHeight: 1,
                    color: i === 0 ? 'rgba(245,242,236,0.08)' : 'rgba(0,0,0,0.06)',
                  }
                }, String(i + 1).padStart(2, '0'))
              ),
              // Body
              React.createElement('div', { style: { padding: '20px 24px 28px' } },
                React.createElement('div', {
                  style: {
                    display: 'flex', justifyContent: 'space-between', marginBottom: 10,
                  }
                },
                  React.createElement('span', {
                    style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.08em', color: i === 0 ? 'rgba(245,242,236,0.4)' : '#6B6460' }
                  }, w.year),
                  React.createElement('span', {
                    style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.04em',
                      color: i === 0 ? 'oklch(72% 0.18 145)' : 'oklch(55% 0.20 295)',
                      border: `1px solid ${i === 0 ? 'oklch(72% 0.18 145)' : 'oklch(55% 0.20 295)'}`,
                      padding: '1px 6px',
                    }
                  }, w.cat.split(' · ')[0])
                ),
                React.createElement('div', {
                  style: {
                    fontFamily: "'Noto Serif JP', Georgia, serif",
                    fontSize: '1.25rem', fontWeight: 700,
                    lineHeight: 1.3, letterSpacing: '-0.01em',
                    color: i === 0 ? '#F5F2EC' : '#1A1614',
                    marginBottom: 6,
                  }
                }, w.title),
                React.createElement('div', {
                  style: {
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '0.875rem', fontStyle: 'italic',
                    color: i === 0 ? 'rgba(245,242,236,0.45)' : '#6B6460',
                  }
                }, w.en)
              )
            )
          )
        )
      ),

      // View all
      React.createElement(Reveal, { delay: 200 },
        React.createElement('div', { style: { textAlign: 'center', marginTop: 48 } },
          React.createElement('button', {
            onClick: () => setPage('work'),
            style: {
              fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'transparent', color: '#1A1614',
              border: '1px solid #1A1614', padding: '14px 40px', cursor: 'pointer',
              transition: 'all 200ms ease',
            },
            onMouseEnter: e => { e.currentTarget.style.background = '#1A1614'; e.currentTarget.style.color = '#F5F2EC'; },
            onMouseLeave: e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1A1614'; },
          }, 'All Works →')
        ) // close Reveal view-all
    )), // close Selected Works section

    // ---- CATEGORY PEEK STRIP ----
    React.createElement('section', {
      style: { padding: '0 48px 96px', background: '#F5F2EC' }
    },
      React.createElement(Reveal, null,
        React.createElement('div', {
          style: {
            display: 'flex', alignItems: 'center', gap: 16,
            borderBottom: '0.5px solid #C4BFB8', paddingBottom: 16, marginBottom: 32,
          }
        },
          React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8' } }, 'More / その他のこと'),
        )
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 } },

        // Photography peek
        React.createElement(Reveal, { delay: 0 },
          React.createElement('div', {
            onClick: () => setPage('photo'),
            style: { cursor: 'pointer', position: 'relative', overflow: 'hidden', background: '#EDEAE2' },
            onMouseEnter: e => e.currentTarget.querySelector('.peek-overlay').style.opacity = 1,
            onMouseLeave: e => e.currentTarget.querySelector('.peek-overlay').style.opacity = 0,
          },
            // Collage of 3 stacked thumbnails
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '120px 120px', gap: 2 } },
              React.createElement('img', { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_3721_wadsf0', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', gridRow: '1/3' } }),
              React.createElement('img', { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }),
              React.createElement('img', { src: 'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }),
            ),
            // Overlay
            React.createElement('div', {
              className: 'peek-overlay',
              style: {
                position: 'absolute', inset: 0,
                background: 'rgba(26,22,20,0.72)',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '20px 20px',
                opacity: 0, transition: 'opacity 240ms ease',
              }
            },
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 6 } }, 'Photography'),
              React.createElement('div', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#F5F2EC' } }, '写真・記録 →')
            ),
            // Label (default visible)
            React.createElement('div', {
              style: {
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '24px 16px 12px',
                background: 'linear-gradient(transparent, rgba(26,22,20,0.55))',
              }
            },
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.6)' } }, 'Photography / 写真')
            )
          )
        ),

        // Note peek
        React.createElement(Reveal, { delay: 60 },
          React.createElement('div', {
            onClick: () => setPage('note'),
            style: { cursor: 'pointer', position: 'relative', overflow: 'hidden', background: '#1A1614', display: 'flex', flexDirection: 'column', minHeight: 242 },
            onMouseEnter: e => { e.currentTarget.style.transform = 'translateY(-4px)'; },
            onMouseLeave: e => { e.currentTarget.style.transform = 'none'; },
          },
            // Featured note image
            React.createElement('img', {
              src: 'https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg',
              style: { width: '100%', height: 120, objectFit: 'cover', display: 'block', opacity: 0.5 }
            }),
            React.createElement('div', { style: { padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } },
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 8 } }, 'note / Writing'),
                React.createElement('div', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem', fontWeight: 700, color: '#F5F2EC', lineHeight: 1.4 } }, '月イチBAR「あのひと」— 場の設計と主催'),
              ),
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.06em' } }, '書いたものを読む →')
            )
          )
        ),

        // About peek
        React.createElement(Reveal, { delay: 120 },
          React.createElement('div', {
            onClick: () => setPage('about'),
            style: {
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              background: '#FAF8F3', border: '0.5px solid #EDEAE2',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: '28px 24px', minHeight: 242,
              transition: 'transform 240ms ease',
            },
            onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
            onMouseLeave: e => e.currentTarget.style.transform = 'none',
          },
            // Azami motif small
            React.createElement(AzamiMark, { size: 56, color: '#1A1614', style: { opacity: 0.15, alignSelf: 'flex-end' } }),
            React.createElement('div', null,
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', marginBottom: 10 } }, 'About / 私について'),
              React.createElement('div', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: '#1A1614', marginBottom: 10 } }, 'azami'),
              React.createElement('div', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6460' } }, '体験は、小さな気づきから始まる。'),
              React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', color: 'oklch(55% 0.20 295)', letterSpacing: '0.06em', marginTop: 16 } }, 'プロフィールを読む →')
            )
          )
        )
      )
    )
  );
}

// ---- ABOUT PAGE ----
function AboutPage() {
  const skills = ['UXリサーチ', '場づくり・イベント設計', 'PdMバックグラウンド', 'フォトグラフィー', 'ライティング（note）', '開発への理解'];

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh' } },

    // Top strip with name
    React.createElement('div', {
      style: { borderBottom: '1px solid #1A1614', padding: '48px 48px 40px', position: 'relative', overflow: 'hidden' }
    },
      React.createElement('div', {
        style: {
          position: 'absolute', top: '-0.08em', right: -4,
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          lineHeight: 0.9, letterSpacing: '-0.04em',
          color: 'transparent', WebkitTextStroke: '1px #EDEAE2',
          pointerEvents: 'none',
        }
      }, 'azami'),
      React.createElement(Reveal, null,
        React.createElement('div', {
          style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 16 }
        }, 'About / 私について')
      ),
      React.createElement(Reveal, { delay: 60 },
        React.createElement('h1', {
          style: {
            fontFamily: "'Noto Serif JP', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700,
            lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
          }
        }, 'azami')
      ),
      React.createElement(Reveal, { delay: 120 },
        React.createElement('div', {
          style: {
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontStyle: 'italic', color: '#6B6460', marginTop: 8,
          }
        }, 'UX Designer / Researcher')
      )
    ),

    // Main content
    React.createElement('div', {
      style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }
    },
      // Left: photo + sticker
      React.createElement(Reveal, null,
        React.createElement('div', {
          style: {
            borderRight: '1px solid #C4BFB8',
            padding: '64px 48px',
            display: 'flex', flexDirection: 'column', gap: 32,
            position: 'relative',
          }
        },
          // Photo placeholder
          React.createElement('div', {
            style: {
              width: '100%', aspectRatio: '3/4',
              background: 'repeating-linear-gradient(-45deg, #EDEAE2, #EDEAE2 4px, #F5F2EC 4px, #F5F2EC 12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }
          },
            React.createElement('div', {
              style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: '#C4BFB8', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }
            }, 'profile photo'),
            // Geometric overlay
            React.createElement('svg', {
              style: { position: 'absolute', bottom: 20, right: 20, opacity: 0.5 },
              width: 60, height: 60, viewBox: '0 0 60 60', fill: 'none'
            },
              React.createElement('circle', { cx: 30, cy: 30, r: 28, stroke: 'oklch(55% 0.20 295)', strokeWidth: 1 }),
              React.createElement('circle', { cx: 30, cy: 30, r: 18, stroke: 'oklch(55% 0.20 295)', strokeWidth: 0.5, strokeDasharray: '3 3' })
            )
          ),
          // Sticker
          React.createElement('div', {
            style: {
              alignSelf: 'flex-start',
              width: 88, height: 88, borderRadius: '50%',
              border: '2px solid oklch(55% 0.20 295)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Mono', monospace", fontSize: '0.5rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'oklch(55% 0.20 295)', textAlign: 'center', lineHeight: 1.5,
              transform: 'rotate(-8deg)',
              transition: 'transform 240ms cubic-bezier(0.34,1.56,0.64,1)',
              cursor: 'default',
            },
            onMouseEnter: e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.08)',
            onMouseLeave: e => e.currentTarget.style.transform = 'rotate(-8deg)',
          }, 'Available', React.createElement('br'), 'for work')
        )
      ),

      // Right: text
      React.createElement('div', { style: { padding: '64px 48px', display: 'flex', flexDirection: 'column', gap: 40 } },
        React.createElement(Reveal, null,
          React.createElement('p', {
            style: {
              fontFamily: "'Noto Serif JP', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300,
              lineHeight: 1.85, letterSpacing: '0.02em', margin: 0,
            }
          }, '体験は、小さな気づきから始まる。', React.createElement('br'), 'その瞬間に誠実に向き合うことが、', React.createElement('br'), '良い体験を設計する出発点だと思っています。')
        ),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('p', {
            style: {
              fontFamily: "'Noto Serif JP', Georgia, serif",
              fontSize: '1rem', lineHeight: 1.95, color: '#6B6460', margin: 0,
            }
          }, 'UXリサーチを起点に、デジタルプロダクトから場づくり・イベントまでを横断して体験を設計しています。日常と非日常、どちらの文脈にも等しく向き合いながら、人の生活の中に豊かな体験を実装することを仕事としています。')
        ),
        React.createElement(Reveal, { delay: 120 },
          React.createElement('p', {
            style: {
              fontFamily: "'Noto Serif JP', Georgia, serif",
              fontSize: '1rem', lineHeight: 1.95, color: '#6B6460', margin: 0,
            }
          }, '「体験の価値はこれから上がる」という確信のもと、リサーチによる洞察・思考の鋭さ・クリエイティブな広がりを重ねていきます。')
        ),

        // Skills
        React.createElement(Reveal, { delay: 160 },
          React.createElement('div', null,
            React.createElement('div', {
              style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', marginBottom: 16 }
            }, 'Skills & Background'),
            React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8 } },
              skills.map((s, i) =>
                React.createElement('span', {
                  key: i,
                  style: {
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.8125rem',
                    color: '#6B6460', padding: '6px 12px',
                    border: '0.5px solid #C4BFB8', background: '#FAF8F3',
                    whiteSpace: 'nowrap',
                  }
                },
                  React.createElement('span', { style: { width: 5, height: 5, borderRadius: '50%', background: 'oklch(55% 0.20 295)', flexShrink: 0 } }),
                  s
                )
              )
            )
          )
        ),

        // Micro detail
        React.createElement(Reveal, { delay: 200 },
          React.createElement('div', {
            style: {
              borderTop: '0.5px solid #C4BFB8', paddingTop: 24,
              fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
              color: '#C4BFB8', letterSpacing: '0.06em', lineHeight: 2,
            }
          }, '人との繋がりを大切にするスタンス。', React.createElement('br'), '— 人の行動や感情から考える')
        )
      )
    )
  );
}

// ---- WORKS PAGE ----
function WorksPage({ setPage }) {
  const works = [
    { id: 1, title: '月イチBAR「あのひと」', en: 'Monthly Bar Experience Design', cat: '場づくり · Experience Design', year: '2024–', desc: '清澄白河のリトルトーキョーで月1回開催する、おつかれさまのよりみちナイト。場のコンセプト設計から当日の体験フローまでを一手に担う。', img: 'https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg', tags: ['場づくり', 'コンセプト設計', 'イベント運営'], featured: true },
    { id: 2, title: 'うみのそとの図書館', en: 'Library Outside the Sea', cat: 'リサーチ · フィールドワーク', year: '2019', desc: '海辺の非日常空間で開催される図書館イベント。場の体験設計とフィールドリサーチのドキュメント。', img: null, tags: ['フィールドリサーチ', '体験設計', '旅'] },
    { id: 3, title: 'プロダクト体験設計', en: 'Product UX Research & Strategy', cat: 'UXリサーチ · 戦略', year: '2023', desc: 'ユーザーインタビューとデータ分析を起点に、プロダクトのコア体験を再定義。リサーチから施策立案まで。', img: null, tags: ['UXリサーチ', 'インタビュー', '戦略'] },
    { id: 4, title: 'イベント体験設計', en: 'Event Experience Architecture', cat: '場づくり · 運営', year: '2022', desc: '複数のステークホルダーが関わる大規模イベントの体験設計。参加者の感情動線を設計の軸に据えた。', img: null, tags: ['イベント', '体験設計', 'ファシリテーション'] },
    { id: 5, title: 'コミュニティ設計', en: 'Community Design', cat: 'UXリサーチ · 場づくり', year: '2023', desc: 'オンライン・オフラインを横断するコミュニティの体験設計。繋がりの質を高める場の構造を探求。', img: null, tags: ['コミュニティ', 'リサーチ', '場づくり'] },
    { id: 6, title: 'ライティング / note', en: 'Writing & Reflection', cat: 'ライティング · 思考', year: '2019–', desc: '体験・旅・日常の観察をnoteで綴る。書くことで思考を整理し、気づきを言語化するプラクティス。', img: null, tags: ['ライティング', '思考', 'note'] },
  ];

  // Placeholder images from photography collection for variety
  const placeholderImgs = [
    'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j',
    'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk',
    'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428924/IMG_8453_zdxt6v',
    'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8459_oimqwg',
    'https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_9124_wlts6e',
  ];

  const getImg = (w, i) => w.img || placeholderImgs[i % placeholderImgs.length];

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh' } },

    // Header
    React.createElement('div', {
      style: { padding: '48px 48px 40px', borderBottom: '1px solid #1A1614', position: 'relative', overflow: 'hidden' }
    },
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: '-0.1em', right: -4,
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(5rem, 12vw, 10rem)',
          lineHeight: 0.9, color: 'transparent',
          WebkitTextStroke: '1px #EDEAE2', pointerEvents: 'none',
          fontStyle: 'italic', letterSpacing: '-0.04em',
        }
      }, 'Works'),
      React.createElement(Reveal, null,
        React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', position: 'relative', zIndex: 1 } },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 12 } }, 'Selected Work / 仕事の記録'),
            React.createElement('h1', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1 } }, 'Works')
          ),
          React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1rem', fontStyle: 'italic', color: '#C4BFB8' } }, `${works.length} projects`)
        )
      )
    ),

    // Featured work — full-width
    React.createElement('div', { style: { padding: '0' } },
      React.createElement(Reveal, null,
        React.createElement('div', {
          onClick: () => setPage('work-detail-1'),
          style: {
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            cursor: 'pointer', overflow: 'hidden',
            borderBottom: '1px solid #1A1614',
            transition: 'transform 240ms ease',
          },
          onMouseEnter: e => e.currentTarget.style.transform = 'none',
          onMouseLeave: e => e.currentTarget.style.transform = 'none',
        },
          // Image
          React.createElement('div', { style: { overflow: 'hidden', aspectRatio: '4/3', position: 'relative' } },
            React.createElement('img', {
              src: works[0].img, alt: works[0].title,
              style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 600ms ease' },
              onMouseEnter: e => e.target.style.transform = 'scale(1.04)',
              onMouseLeave: e => e.target.style.transform = 'scale(1)',
            })
          ),
          // Text
          React.createElement('div', {
            style: { padding: '64px 56px', background: '#1A1614', color: '#F5F2EC', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
          },
            React.createElement('div', null,
              React.createElement('div', { style: { display: 'flex', gap: 12, marginBottom: 24 } },
                React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(72% 0.18 145)', border: '1px solid oklch(72% 0.18 145)', padding: '2px 8px' } }, 'Featured'),
                React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: 'rgba(245,242,236,0.4)', letterSpacing: '0.06em' } }, works[0].year)
              ),
              React.createElement('h2', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 12px', color: '#F5F2EC' } }, works[0].title),
              React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.125rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.5)', marginBottom: 24 } }, works[0].en),
              React.createElement('p', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem', lineHeight: 1.85, color: 'rgba(245,242,236,0.7)', margin: 0 } }, works[0].desc)
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 } },
              React.createElement('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } },
                works[0].tags.map(t => React.createElement('span', { key: t, style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', letterSpacing: '0.06em', color: 'rgba(245,242,236,0.4)', border: '1px solid rgba(245,242,236,0.15)', padding: '2px 8px' } }, t))
              ),
              React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'oklch(55% 0.20 295)' } }, 'View →')
            )
          )
        )
      )
    ),

    // Grid of remaining works
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 } },
      works.slice(1).map((w, i) =>
        React.createElement(Reveal, { key: w.id, delay: i * 60 },
          React.createElement('div', {
            onClick: () => setPage('work-detail-' + w.id),
            style: {
              cursor: 'pointer', overflow: 'hidden',
              borderRight: (i + 1) % 3 !== 0 ? '1px solid #C4BFB8' : 'none',
              borderBottom: '1px solid #C4BFB8',
              background: i === 1 ? '#1A1614' : '#F5F2EC',
              transition: 'background 200ms ease',
            },
            onMouseEnter: e => { if (i !== 1) e.currentTarget.style.background = '#EDEAE2'; },
            onMouseLeave: e => { if (i !== 1) e.currentTarget.style.background = '#F5F2EC'; },
          },
            // Image
            React.createElement('div', { style: { overflow: 'hidden', aspectRatio: '4/3', position: 'relative' } },
              React.createElement('img', {
                src: getImg(w, i),
                alt: w.title,
                style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms ease', opacity: i === 1 ? 0.5 : 1 },
                onMouseEnter: e => e.target.style.transform = 'scale(1.05)',
                onMouseLeave: e => e.target.style.transform = 'scale(1)',
              })
            ),
            // Body
            React.createElement('div', { style: { padding: '20px 24px 28px' } },
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 } },
                React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', color: i === 1 ? 'rgba(245,242,236,0.3)' : '#C4BFB8', letterSpacing: '0.06em' } }, w.year),
                React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.5625rem', color: 'oklch(55% 0.20 295)', border: '1px solid oklch(55% 0.20 295)', padding: '1px 6px', letterSpacing: '0.04em' } }, w.cat.split(' · ')[0])
              ),
              React.createElement('h3', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 6px', color: i === 1 ? '#F5F2EC' : '#1A1614' } }, w.title),
              React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '0.875rem', fontStyle: 'italic', color: i === 1 ? 'rgba(245,242,236,0.4)' : '#6B6460', marginBottom: 12 } }, w.en),
              React.createElement('p', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.8125rem', color: i === 1 ? 'rgba(245,242,236,0.6)' : '#6B6460', lineHeight: 1.75, margin: 0 } }, w.desc)
            )
          )
        )
      )
    )
  );
}

// ---- WORK DETAIL PAGE ----
function WorkDetailPage({ workId, setPage }) {
  const id = parseInt(workId);
  const works = {
    1: {
      title: '月イチBAR「あのひと」', en: 'Monthly Bar — Experience Design',
      cat: '場づくり · Experience Design', year: '2024–',
      img: 'https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg',
      url: 'https://note.com/thistle/n/n8bea21b42ef0',
      tags: ['場づくり', 'コンセプト設計', 'イベント運営', '体験設計'],
      overview: '清澄白河のリトルトーキョーで月1回開催する、おつかれさまのよりみちナイト。仕事帰りの人々が、ゆるやかに繋がれる場を設計しています。',
      role: '場のコンセプト設計・体験フロー設計・当日の運営・参加者との関係設計',
      insight: '「疲れた日でも、ふらっと立ち寄れる場があること」が、人の回復力に深く関わる。体験設計の焦点は、来場者が感じる「安心して場に馴染めるか」という入口の体験。',
      sections: ['コンセプト設計', '場の体験フロー', '参加者インサイト', '継続的な改善'],
    },
    2: {
      title: 'うみのそとの図書館', en: 'Library Outside the Sea',
      cat: 'リサーチ · フィールドワーク', year: '2019',
      img: null,
      url: 'https://note.com/thistle/n/n07aff389d4ad',
      tags: ['フィールドリサーチ', '体験設計', '旅', '非日常'],
      overview: '海辺の非日常空間で開催される図書館イベントのフィールドリサーチとドキュメント。日常から切り離された空間での読書体験を観察・記録した。',
      role: 'フィールドリサーチ・観察・ドキュメンテーション・note執筆',
      insight: '非日常の空間は、人の感受性の閾値を下げる。日常では気づかないような小さな体験に、感動が宿る。',
      sections: ['フィールドリサーチ', '観察記録', 'インサイト', 'note掲載'],
    },
  };
  const w = works[id] || works[1];

  return React.createElement('div', { style: { paddingTop: 64, background: '#F5F2EC', minHeight: '100vh' } },

    // Back
    React.createElement('div', { style: { padding: '32px 48px 0' } },
      React.createElement('button', {
        onClick: () => setPage('work'),
        style: {
          fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'none', border: 'none', color: '#6B6460',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
          padding: 0,
          transition: 'color 160ms',
        },
        onMouseEnter: e => e.currentTarget.style.color = 'oklch(55% 0.20 295)',
        onMouseLeave: e => e.currentTarget.style.color = '#6B6460',
      }, '← Works')
    ),

    // Hero
    React.createElement('div', { style: { padding: '40px 48px 0', borderBottom: '1px solid #C4BFB8' } },
      React.createElement(Reveal, null,
        React.createElement('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 } },
          w.tags.map(t => React.createElement(Tag, { key: t }, t))
        )
      ),
      React.createElement(Reveal, { delay: 60 },
        React.createElement('h1', {
          style: {
            fontFamily: "'Noto Serif JP', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 12px',
          }
        }, w.title)
      ),
      React.createElement(Reveal, { delay: 100 },
        React.createElement('div', {
          style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.5rem', fontStyle: 'italic', color: '#6B6460', marginBottom: 40 }
        }, w.en)
      ),

      // Image
      w.img && React.createElement(Reveal, { delay: 140 },
        React.createElement('div', {
          style: { width: '100%', aspectRatio: '16/7', overflow: 'hidden', marginBottom: 40 }
        },
          React.createElement('img', { src: w.img, alt: w.title, style: { width: '100%', height: '100%', objectFit: 'cover' } })
        )
      )
    ),

    // Content grid
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 } },
      // Main
      React.createElement('div', { style: { padding: '64px 48px', borderRight: '0.5px solid #C4BFB8' } },
        React.createElement(Reveal, null,
          React.createElement('div', {
            style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 16 }
          }, 'Overview'),
          React.createElement('p', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.85, margin: '0 0 48px' } }, w.overview)
        ),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('div', {
            style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.20 295)', marginBottom: 16 }
          }, 'Key Insight'),
          React.createElement('div', {
            style: {
              borderLeft: '2px solid oklch(55% 0.20 295)', paddingLeft: 24,
              fontFamily: "'Noto Serif JP', Georgia, serif",
              fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8, color: '#1A1614',
            }
          }, w.insight)
        ),

        // Placeholder sections
        React.createElement('div', { style: { marginTop: 64 } },
          w.sections.map((s, i) =>
            React.createElement(Reveal, { key: i, delay: i * 60 },
              React.createElement('div', { style: { marginBottom: 48 } },
                React.createElement('div', {
                  style: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }
                },
                  React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: '#C4BFB8' } }, `0${i + 1}`),
                  React.createElement('h3', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1.25rem', fontWeight: 700, margin: 0 } }, s)
                ),
                React.createElement('div', {
                  style: {
                    width: '100%', aspectRatio: '16/9',
                    background: 'repeating-linear-gradient(-45deg, #EDEAE2, #EDEAE2 3px, #F5F2EC 3px, #F5F2EC 9px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }
                },
                  React.createElement('span', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: '#C4BFB8', letterSpacing: '0.08em', textTransform: 'uppercase' } }, 'content')
                )
              )
            )
          )
        )
      ),

      // Sidebar
      React.createElement('div', { style: { padding: '64px 40px', display: 'flex', flexDirection: 'column', gap: 40 } },
        React.createElement(Reveal, null,
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', marginBottom: 12 } }, 'Role'),
            React.createElement('div', { style: { fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6460' } }, w.role)
          )
        ),
        React.createElement(Reveal, { delay: 60 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BFB8', marginBottom: 12 } }, 'Year'),
            React.createElement('div', { style: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2rem', fontStyle: 'italic', color: '#1A1614' } }, w.year)
          )
        ),
        w.url && React.createElement(Reveal, { delay: 100 },
          React.createElement('a', {
            href: w.url, target: '_blank', rel: 'noreferrer',
            style: {
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: "'Space Mono', monospace", fontSize: '0.625rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#F5F2EC', background: '#1A1614',
              padding: '12px 20px', textDecoration: 'none',
              transition: 'background 200ms',
            },
            onMouseEnter: e => e.currentTarget.style.background = 'oklch(55% 0.20 295)',
            onMouseLeave: e => e.currentTarget.style.background = '#1A1614',
          }, 'note で読む →')
        )
      )
    )
  );
}

Object.assign(window, { HomePage, AboutPage, WorksPage, WorkDetailPage });
