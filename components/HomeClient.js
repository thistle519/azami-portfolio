'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import AzamiMark from '@/components/AzamiMark';

export default function HomeClient({ works }) {
  const router = useRouter();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handler = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="hero-section" style={{
        minHeight: '100vh', background: 'var(--color-bg)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 48px 80px',
      }}>
        <div className="hero-ghost" style={{
          position: 'absolute', top: '-0.05em', left: '-0.03em',
          fontFamily: 'var(--font-display-en)',
          fontSize: 'clamp(12rem, 28vw, 26rem)',
          lineHeight: 0.88, letterSpacing: '-0.04em',
          color: 'transparent', WebkitTextStroke: '1px var(--color-ink-faint)',
          pointerEvents: 'none', userSelect: 'none',
          transform: `translateY(${offsetY * 0.18}px)`, transition: 'transform 0ms',
          whiteSpace: 'nowrap',
        }}>UX</div>

        <div style={{
          position: 'absolute', bottom: 80, left: 48, right: 48,
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.15em',
          color: 'var(--color-ink-faint)', overflow: 'hidden', whiteSpace: 'nowrap',
          pointerEvents: 'none', userSelect: 'none', opacity: 0.6,
        }}>{'· '.repeat(200)}</div>

        {/* Hero portrait */}
        <div className="hero-portrait" style={{
          position: 'absolute', right: 80, bottom: 0,
          height: '64%', width: 'auto',
          pointerEvents: 'none', userSelect: 'none',
        }}>
          <img
            src="https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto,e_grayscale/v1777658170/Subject_shqsbv"
            alt=""
            style={{
              height: '100%', width: 'auto',
              objectFit: 'contain', display: 'block',
              opacity: 0.75, mixBlendMode: 'multiply',
            }}
          />
          {/* Dot overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(245,242,236,0.18) 1px, transparent 1px)',
            backgroundSize: '5px 5px',
            mixBlendMode: 'screen',
          }} />
        </div>

        <div style={{ position: 'absolute', top: 80, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, zIndex: 2 }}>
          <div style={{ width: 64, height: 64, border: '1px solid var(--color-accent-1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-1)', textAlign: 'center', lineHeight: 1.5 }}>azami</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.1em', color: 'var(--color-ink-faint)', textAlign: 'right', lineHeight: 2, writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginTop: 8 }}>人の行動や感情から考える</div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 24 }}>Experience Designer / UX</div>
          <h1 className="hero-h1" style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 20px' }}>いい体験を、<br />増やしていく。</h1>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
            <div style={{ fontFamily: 'var(--font-display-en)', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontStyle: 'italic', color: 'var(--color-ink-muted)', lineHeight: 1.3 }}>"Designing from human behavior and emotion."</div>
            <Link href="/work" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--color-ink)', color: 'var(--color-bg)', padding: '16px 32px', flexShrink: 0, transition: 'background var(--dur-mid) ease' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
            >Work を見る →</Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 40, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', color: 'var(--color-ink-faint)' }}>
          <div style={{ width: 1, height: 48, background: 'var(--color-ink-faint)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
          scroll
        </div>
      </section>

      {/* ---- PHILOSOPHY ---- */}
      <section style={{ background: 'var(--color-ink)', color: 'var(--color-bg)', padding: '96px var(--px) 88px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-0.1em', right: '-0.04em', fontFamily: 'var(--font-display-en)', fontSize: 'clamp(6rem, 16vw, 14rem)', letterSpacing: '-0.04em', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.05)', pointerEvents: 'none', lineHeight: 1, fontStyle: 'italic' }}>experience</div>

        <Reveal>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 56 }}>Philosophy / 設計の起点</div>
        </Reveal>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', position: 'relative', zIndex: 1 }}>
          <Reveal delay={60}>
            <div>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.75, letterSpacing: '0.03em', margin: 0 }}>
                体験は、小さな<em style={{ fontStyle: 'normal', color: 'var(--color-accent-1)' }}>気づき</em>から始まる。<br />
                その瞬間に誠実に向き合うことが、<br />
                良い体験を設計する出発点だと思っています。
              </p>
              <AzamiMark size={48} color="var(--color-bg)" style={{ marginTop: 40, opacity: 0.25 }} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', fontWeight: 300, lineHeight: 2, color: 'rgba(245,242,236,0.75)', margin: 0 }}>UXリサーチを起点に、デジタルプロダクトから場づくり・イベントまでを横断して体験を設計しています。日常と非日常、どちらの文脈にも等しく向き合いながら、人の生活の中に豊かな体験を実装することを仕事としています。</p>
              <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', fontWeight: 300, lineHeight: 2, color: 'rgba(245,242,236,0.75)', margin: 0 }}>「体験の価値はこれから上がる」という確信のもと、リサーチによる洞察・思考の鋭さ・クリエイティブな広がりを重ねていきます。</p>
              <div style={{ width: 40, height: 2, background: 'var(--color-accent-1)' }} />
              <p style={{ fontFamily: 'var(--font-display-en)', fontSize: '1.125rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.4)', lineHeight: 1.6, margin: 0 }}>"Designing from human behavior and emotion."</p>
              <Link href="/about" style={{ alignSelf: 'flex-start', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.5)', borderBottom: '1px solid rgba(245,242,236,0.2)', padding: '4px 0', transition: 'color 160ms, border-color 160ms' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent-1)'; e.currentTarget.style.borderBottomColor = 'var(--color-accent-1)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,242,236,0.5)'; e.currentTarget.style.borderBottomColor = 'rgba(245,242,236,0.2)'; }}
              >About を読む →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- MARQUEE ---- */}
      <Marquee items={['UX Research', 'Experience Design', '場づくり', 'Photography', 'Strategy', 'Writing']} />

      {/* ---- SELECTED WORKS ---- */}
      <section style={{ padding: '96px var(--px)', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M-80,200 Q200,-60 520,180 Q840,420 1100,80" stroke="var(--color-ink-faint)" strokeWidth="0.6" opacity="0.5" />
          <path d="M-40,320 Q240,60 560,300 Q880,540 1140,200" stroke="var(--color-ink-faint)" strokeWidth="0.4" strokeDasharray="6 8" opacity="0.4" />
          <circle cx="1080" cy="780" r="220" stroke="var(--color-bg-alt)" strokeWidth="1" opacity="0.7" />
          <circle cx="1080" cy="780" r="160" stroke="var(--color-bg-alt)" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.5" />
          <line x1="60" y1="48" x2="60" y2="96" stroke="var(--color-ink-faint)" strokeWidth="1" opacity="0.5" />
          <line x1="36" y1="72" x2="84" y2="72" stroke="var(--color-ink-faint)" strokeWidth="1" opacity="0.5" />
          <path d="M80,760 L104,784 L80,808 L56,784 Z" stroke="var(--color-ink-faint)" strokeWidth="0.8" opacity="0.4" />
          <path d="M900,50 Q1050,300 860,500" stroke="var(--color-accent-1)" strokeWidth="0.5" opacity="0.18" />
        </svg>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56, borderBottom: '1px solid var(--color-ink)', paddingBottom: 16, position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>Works</h2>
            <span style={{ fontFamily: 'var(--font-display-en)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-ink-muted)' }}>仕事の記録</span>
          </div>
        </Reveal>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, position: 'relative', zIndex: 1 }}>
          {works.map((w, i) => (
            <Reveal key={w.slug} delay={i * 80}>
              <div
                onClick={() => router.push(`/work/${w.slug}`)}
                style={{ cursor: 'pointer', background: i === 0 ? 'var(--color-ink)' : 'var(--color-bg-alt)', gridColumn: i === 0 ? '1 / 2' : 'auto', gridRow: i === 0 ? '1 / 3' : 'auto', overflow: 'hidden', transition: 'transform var(--dur-mid) var(--ease-out)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ width: '100%', aspectRatio: i === 0 ? '4/3' : '16/9', overflow: 'hidden', position: 'relative', background: i === 0 ? '#2a2224' : '#D8D4CC' }}>
                  {w.image
                    ? <img src={w.image} alt={w.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms var(--ease-out)' }} onMouseEnter={e => e.target.style.transform = 'scale(1.04)'} onMouseLeave={e => e.target.style.transform = 'none'} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: i === 0 ? 'rgba(245,242,236,0.2)' : 'var(--color-ink-faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>project image</div>
                  }
                  <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: 'var(--font-display-en)', fontSize: '4rem', lineHeight: 1, color: i === 0 ? 'rgba(245,242,236,0.08)' : 'rgba(0,0,0,0.06)' }}>{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div style={{ padding: '20px 24px 28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.08em', color: i === 0 ? 'rgba(245,242,236,0.4)' : 'var(--color-ink-muted)' }}>{w.category?.split(' · ')[0]}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.04em', color: i === 0 ? 'var(--color-accent-2)' : 'var(--color-accent-1)', border: `1px solid ${i === 0 ? 'var(--color-accent-2)' : 'var(--color-accent-1)'}`, padding: '1px 6px' }}>{w.category?.split(' · ')[1] || w.category?.split(' · ')[0]}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', color: i === 0 ? 'var(--color-bg)' : 'var(--color-ink)', marginBottom: 6 }}>{w.title}</div>
                  <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '0.875rem', fontStyle: 'italic', color: i === 0 ? 'rgba(245,242,236,0.45)' : 'var(--color-ink-muted)' }}>{w.description}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: 48, position: 'relative', zIndex: 1 }}>
            <Link href="/work" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'transparent', color: 'var(--color-ink)', border: '1px solid var(--color-ink)', padding: '14px 40px', display: 'inline-block', transition: 'all var(--dur-mid) ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-ink)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-ink)'; }}
            >All Works →</Link>
          </div>
        </Reveal>
      </section>

      {/* ---- CATEGORY PEEK ---- */}
      <section style={{ padding: '0 var(--px) 96px', background: 'var(--color-bg)' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '0.5px solid var(--color-ink-faint)', paddingBottom: 16, marginBottom: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>More / その他のこと</div>
          </div>
        </Reveal>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Reveal delay={0}>
            <div onClick={() => router.push('/photo')} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-alt)' }}
              onMouseEnter={e => e.currentTarget.querySelector('.peek-overlay').style.opacity = 1}
              onMouseLeave={e => e.currentTarget.querySelector('.peek-overlay').style.opacity = 0}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '120px 120px', gap: 2 }}>
                <img src="https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_3721_wadsf0" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', gridRow: '1/3' }} alt="" />
                <img src="https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428911/IMG_7483_ujhp6j" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="" />
                <img src="https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/v1777428919/IMG_8186_an3ldk" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="" />
              </div>
              <div className="peek-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(26,22,20,0.72)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20, opacity: 0, transition: 'opacity 240ms ease' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 6 }}>Photography</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-bg)' }}>写真・記録 →</div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 12px', background: 'linear-gradient(transparent, rgba(26,22,20,0.55))' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.6)' }}>Photography / 写真</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div onClick={() => router.push('/note')} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', background: 'var(--color-ink)', display: 'flex', flexDirection: 'column', minHeight: 242, transition: 'transform var(--dur-mid) ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <img src="https://assets.st-note.com/production/uploads/images/211650218/rectangle_large_type_2_d0f915e83035b6e7fa4afdaa1956691a.jpg" style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block', opacity: 0.5 }} alt="" />
              <div style={{ padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 8 }}>note / Writing</div>
                  <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-bg)', lineHeight: 1.4 }}>月イチBAR「あのひと」— 場の設計と主催</div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(245,242,236,0.3)', letterSpacing: '0.06em' }}>書いたものを読む →</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div onClick={() => router.push('/about')} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', background: 'var(--color-surface-warm)', border: '0.5px solid var(--color-bg-alt)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px 24px', minHeight: 242, transition: 'transform var(--dur-mid) ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <AzamiMark size={56} color="var(--color-ink)" style={{ opacity: 0.15, alignSelf: 'flex-end' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 10 }}>About / 私について</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: 'var(--color-ink)', marginBottom: 10 }}>azami</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--color-ink-muted)' }}>体験は、小さな気づきから始まる。</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'var(--color-accent-1)', letterSpacing: '0.06em', marginTop: 16 }}>プロフィールを読む →</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
