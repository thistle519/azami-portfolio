'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import AzamiMark from '@/components/AzamiMark';

const skills = ['UXリサーチ', '場づくり・イベント設計', 'PdMバックグラウンド', 'フォトグラフィー', 'ライティング（note）', '開発への理解'];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* Header strip */}
      <div style={{ borderBottom: '1px solid var(--color-ink)', padding: 'var(--space-7) var(--px) 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-0.08em', right: -4,
          fontFamily: 'var(--font-display-en)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          lineHeight: 0.9, letterSpacing: '-0.04em',
          color: 'transparent', WebkitTextStroke: '1px var(--color-bg-alt)',
          pointerEvents: 'none',
        }}>azami</div>

        <Reveal>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 16 }}>
            About / 私について
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 style={{
            fontFamily: 'var(--font-serif-ja)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700,
            lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
          }}>azami</h1>
        </Reveal>
        <Reveal delay={120}>
          <div style={{
            fontFamily: 'var(--font-display-en)',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontStyle: 'italic', color: 'var(--color-ink-muted)', marginTop: 8,
          }}>UX Designer / Researcher</div>
        </Reveal>
      </div>

      {/* Main content */}
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

        {/* Left: photo */}
        <Reveal>
          <div style={{
            borderRight: '1px solid var(--color-ink-faint)',
            padding: '64px var(--px)',
            display: 'flex', flexDirection: 'column', gap: 32,
            position: 'relative',
          }}>
            <div style={{ width: '100%', position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img
                  src="https://res.cloudinary.com/dzppjuy5g/image/upload/f_auto,q_auto/Profile_iopahq"
                  alt="azami"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Sticker — overlaps bottom-right of photo */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    position: 'absolute', bottom: -28, right: 16,
                    width: 92, height: 92, borderRadius: '50%',
                    border: '2px solid var(--color-accent-1)',
                    background: 'var(--color-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-accent-1)', textAlign: 'center', lineHeight: 1.5,
                    transform: 'rotate(-8deg)',
                    transition: 'transform var(--dur-mid) var(--ease-spring)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-8deg)'}
                >Available<br />for work</div>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Right: text */}
        <div style={{ padding: '64px var(--px)', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <Reveal>
            <div style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300,
              lineHeight: 1.85, letterSpacing: '0.02em',
            }}>
              <p style={{ margin: 0 }}>体験は、小さな気づきから始まる。</p>
              <p style={{ margin: '20px 0 0' }}>人がどう行動し、何を感じているのかを知ることから、体験づくりを始めています。</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', lineHeight: 1.95, color: 'var(--color-ink-muted)' }}>
              <p style={{ margin: 0 }}>UXリサーチをもとに、デジタルプロダクトやイベント、人が集まる場の体験を設計しています。</p>
              <p style={{ margin: '24px 0 0' }}>日常にも、非日常にも目を向けながら、暮らしの中に豊かな体験を増やすことを仕事にしています。</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', lineHeight: 1.95, color: 'var(--color-ink-muted)', margin: 0 }}>
              「体験の価値はこれから上がる」と信じています。リサーチで得た気づきを掘り下げ、発想を広げながら体験を考えていきます。
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 16 }}>
                Skills & Background
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((s, i) => (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'var(--font-serif-ja)', fontSize: '0.8125rem',
                    color: 'var(--color-ink-muted)', padding: '6px 12px',
                    border: '0.5px solid var(--color-ink-faint)', background: 'var(--color-surface-warm)',
                    whiteSpace: 'nowrap',
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent-1)', flexShrink: 0 }} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{
              borderTop: '0.5px solid var(--color-ink-faint)', paddingTop: 24,
              fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
              color: 'var(--color-ink-faint)', letterSpacing: '0.06em', lineHeight: 2,
            }}>
              人とのつながりを大切にしています。<br />
              — 人の行動や感情から考える
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
