export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      overflow:     'hidden',
      borderTop:    '1px solid var(--color-ink)',
      borderBottom: '1px solid var(--color-ink)',
      padding:      '12px 0',
      background:   'var(--color-bg)',
    }}>
      <div style={{
        display:   'flex',
        gap:       48,
        width:     'max-content',
        animation: 'marquee 20s linear infinite',
        whiteSpace:'nowrap',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily:    'var(--font-display-en)',
            fontSize:      '1.25rem',
            fontStyle:     'italic',
            letterSpacing: '-0.01em',
            color:         'var(--color-ink)',
            display:       'flex',
            alignItems:    'center',
            gap:           48,
          }}>
            {item}
            <span style={{ color: 'var(--color-accent-1)', fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
