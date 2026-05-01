export default function AzamiFlower({
  size        = 180,
  color       = 'var(--color-accent-1)',
  accentColor = 'var(--color-accent-2)',
  opacity     = 0.82,
  style       = {},
}) {
  const angles = [0,30,60,90,120,150,180,210,240,270,300,330];

  const petals = angles.map((angle, i) => {
    const rad   = angle * Math.PI / 180;
    const inner = 28;
    const outer = 72 + (i % 3 === 0 ? 10 : 0);
    const x1 = 90 + inner * Math.cos(rad);
    const y1 = 90 + inner * Math.sin(rad);
    const x2 = 90 + outer * Math.cos(rad);
    const y2 = 90 + outer * Math.sin(rad);
    const cx = 90 + (inner + (outer - inner) * 0.55) * Math.cos(rad + 0.18);
    const cy = 90 + (inner + (outer - inner) * 0.55) * Math.sin(rad + 0.18);
    return (
      <path
        key={i}
        d={`M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`}
        stroke={color}
        strokeWidth={i % 3 === 0 ? 1.8 : 1.2}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      style={{ opacity, ...style }}
      width={size} height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {petals}
      <circle cx={90} cy={90} r={27} stroke={color} strokeWidth={1} fill="none" />
      <circle cx={90} cy={90} r={20} stroke={color} strokeWidth={0.6} strokeDasharray="2 2" fill="none" />
      <circle cx={90} cy={90} r={7}  fill={color} opacity={0.9} />
      <circle cx={90} cy={90} r={3}  fill={accentColor} />
      <line x1={90} y1={162} x2={90} y2={175} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}
