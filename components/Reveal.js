'use client';

import { useRef, useState, useEffect } from 'react';

export default function Reveal({ children, delay = 0, y = 28, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity:    visible ? 1 : 0,
      transform:  visible ? 'none' : `translateY(${y}px)`,
      transition: `opacity 640ms ${delay}ms var(--ease-out), transform 640ms ${delay}ms var(--ease-out)`,
      ...style,
    }}>
      {children}
    </div>
  );
}
