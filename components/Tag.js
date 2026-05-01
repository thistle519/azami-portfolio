export default function Tag({ children, accent }) {
  return (
    <span style={{
      display:       'inline-flex',
      alignItems:    'center',
      fontFamily:    'var(--font-mono)',
      fontSize:      '0.625rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding:       '2px 8px',
      border:        `1px solid ${accent ? 'var(--color-accent-1)' : 'var(--color-ink-faint)'}`,
      color:         accent ? 'var(--color-accent-1)' : 'var(--color-ink-muted)',
    }}>
      {children}
    </span>
  );
}
