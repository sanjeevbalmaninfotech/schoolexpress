"use client";

import { useEffect, useRef, useState } from "react";

// Counts up from 0 when scrolled into view. Final value is in the HTML first,
// so it shows correctly without JS or with reduced motion.
export default function CountUp({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [val, setVal] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    setVal(0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          const t0 = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * e));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <b ref={ref}>
      {val.toLocaleString("en-GB")}
      {suffix}
    </b>
  );
}
