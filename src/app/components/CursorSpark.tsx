"use client";

import { useEffect, useRef } from "react";

export default function CursorSpark() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const numDots = 10; // number of trailing dots

  useEffect(() => {
    positions.current = Array(numDots).fill({ x: 0, y: 0 });

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      positions.current[0] = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      for (let i = 1; i < numDots; i++) {
        const prev = positions.current[i - 1];
        const curr = positions.current[i];

        // make motion tighter (reduce gap)
        positions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.7, // smoother follow
          y: curr.y + (prev.y - curr.y) * 0.7,
        };
      }

      if (cursorRef.current) {
        const dots = cursorRef.current.children;
        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i] as HTMLSpanElement;
          const pos = positions.current[i];
          const size = 14 + (numDots - i) * 2.5; // slightly smaller difference
          const scale = 1; // no scaling fade
          const opacity = 1; // full opacity

          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.borderRadius = "50%";
          dot.style.backgroundColor = "#9b5de5";
          dot.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px) scale(${scale})`;
          dot.style.opacity = `${opacity}`;

          // stronger glow effect
          dot.style.boxShadow = `0 0 ${8 + i * 2}px rgba(155, 93, 229, 0.8)`;
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    >
      {Array.from({ length: numDots }).map((_, i) => (
        <span key={i} className="absolute" />
      ))}
    </div>
  );
}
