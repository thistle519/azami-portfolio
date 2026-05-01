'use client';

import { useState, useEffect } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const over  = e => setHover(!!e.target.closest('a, button, [data-cursor]'));
    const down  = () => setClick(true);
    const up    = () => setClick(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup',   up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup',   up);
    };
  }, []);

  const size = hover ? 40 : click ? 8 : 12;

  return (
    <div style={{
      position:     'fixed',
      left:         pos.x,
      top:          pos.y,
      width:        size,
      height:       size,
      borderRadius: '50%',
      background:   hover ? 'transparent' : 'oklch(55% 0.20 295)',
      border:       hover ? '1.5px solid oklch(55% 0.20 295)' : 'none',
      transform:    'translate(-50%, -50%)',
      pointerEvents:'none',
      zIndex:        9999,
      transition:   'width 180ms var(--ease-spring), height 180ms var(--ease-spring), background 120ms ease',
      mixBlendMode: 'multiply',
    }} />
  );
}
