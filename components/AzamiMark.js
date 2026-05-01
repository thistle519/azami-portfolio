export default function AzamiMark({ size = 48, color = 'var(--color-ink)', style = {} }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  const lines = angles.map((angle, i) => {
    const rad = angle * Math.PI / 180;
    const x1  = 90 + 22 * Math.cos(rad);
    const y1  = 90 + 22 * Math.sin(rad);
    const x2  = 90 + 68 * Math.cos(rad);
    const y2  = 90 + 68 * Math.sin(rad);
    return (
      <line
        key={i}
        x1={x1.toFixed(1)} y1={y1.toFixed(1)}
        x2={x2.toFixed(1)} y2={y2.toFixed(1)}
        stroke={color} strokeWidth={2} strokeLinecap="round"
      />
    );
  });

  return (
    <svg style={style} width={size} height={size} viewBox="0 0 180 180" fill="none">
      {lines}
      <circle cx={90} cy={90} r={22} stroke={color} strokeWidth={1.5} fill="none" />
      <circle cx={90} cy={90} r={7}  fill={color} />
    </svg>
  );
}
