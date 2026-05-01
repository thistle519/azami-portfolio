'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const TYPES = ['転職・採用について', 'フリーランス依頼', '体験設計の相談', 'その他'];

const inputStyle = {
  width: '100%', fontFamily: "'Noto Serif JP', Georgia, serif", fontSize: '1rem',
  background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-ink-faint)',
  padding: '8px 0', color: 'var(--color-ink)', outline: 'none',
  transition: 'border-color 200ms',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ paddingTop: 64, background: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* Left: philosophy */}
        <div style={{
          background: 'var(--color-ink)', padding: '80px var(--px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: '-0.1em', right: '-0.04em',
            fontFamily: 'var(--font-display-en)',
            fontSize: 'clamp(6rem, 14vw, 11rem)',
            lineHeight: 0.9, color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            pointerEvents: 'none', letterSpacing: '-0.04em', fontStyle: 'italic',
          }}>hello</div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-1)', marginBottom: 32 }}>
              Contact / お問い合わせ
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: 'var(--color-bg)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
              一緒に良い体験を作りましょう。
            </h1>
            <p style={{ fontFamily: 'var(--font-display-en)', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(245,242,236,0.5)', lineHeight: 1.5 }}>
              "Let's build something meaningful."
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.3)', marginBottom: 8 }}>
              Available for
            </div>
            {['転職・フルタイム', 'フリーランス案件', '体験設計の相談'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 5, height: 5, background: 'var(--color-accent-1)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9375rem', color: 'rgba(245,242,236,0.7)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ padding: '80px var(--px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {sent ? (
            <Reveal>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display-en)', fontSize: '4rem', fontStyle: 'italic', color: 'var(--color-accent-1)', marginBottom: 24, lineHeight: 1 }}>ありがとう。</div>
                <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.85 }}>
                  送信しました。2〜3営業日以内にご返信いたします。
                </p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Reveal>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[['name', 'text', 'お名前'], ['email', 'email', 'Email']].map(([field, type, label]) => (
                    <div key={field}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', display: 'block', marginBottom: 8 }}>{label}</label>
                      <input
                        type={type} required
                        value={form[field]}
                        onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = 'var(--color-accent-1)'}
                        onBlur={e => e.target.style.borderBottomColor = 'var(--color-ink-faint)'}
                      />
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginBottom: 12 }}>
                    お問い合わせの種類
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {TYPES.map(t => (
                      <button key={t} type="button" onClick={() => setForm(p => ({ ...p, type: t }))} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        padding: '6px 14px',
                        background: form.type === t ? 'var(--color-accent-1)' : 'transparent',
                        color: form.type === t ? 'var(--color-bg)' : 'var(--color-ink-muted)',
                        border: form.type === t ? '1px solid var(--color-accent-1)' : '1px solid var(--color-ink-faint)',
                        transition: 'all 160ms',
                      }}>{t}</button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', display: 'block', marginBottom: 8 }}>メッセージ</label>
                  <textarea
                    rows={5} required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="体験設計のご相談、お気軽にどうぞ。"
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.8 }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--color-accent-1)'}
                    onBlur={e => e.target.style.borderBottomColor = 'var(--color-ink-faint)'}
                  />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <button type="submit" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: 'var(--color-ink)', color: 'var(--color-bg)',
                  border: 'none', padding: '16px 40px', alignSelf: 'flex-start',
                  transition: 'background var(--dur-mid) ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ink)'}
                >送信する →</button>
              </Reveal>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
