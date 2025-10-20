"use client";

import { useEffect, useRef } from "react";

export default function CursorSpark() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const numDots = 10; // number of trailing dots

  useEffect(() => {
    // Initialize positions
    positions.current = Array(numDots).fill({ x: 0, y: 0 });

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      positions.current[0] = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      for (let i = 1; i < numDots; i++) {
        const prev = positions.current[i - 1];
        const curr = positions.current[i];

        positions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.35,
          y: curr.y + (prev.y - curr.y) * 0.35,
        };
      }

      if (cursorRef.current) {
        const dots = cursorRef.current.children;
        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i] as HTMLSpanElement;
          const pos = positions.current[i];
          const scale = 1 - i * 0.05; // trailing dots slightly smaller
          const size = 12 + (numDots - i) * 3; // bigger circles

          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.borderRadius = "50%";
          dot.style.backgroundColor = "#9b5de5"; // purple
          dot.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px) scale(${scale})`;
          dot.style.opacity = `${1 - i * 0.08}`;

          // **Added glow**
          dot.style.boxShadow = `0 0 ${5 + i * 2}px rgba(155, 93, 229, 0.7)`;
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
        <span
          key={i}
          className="absolute"
          style={{ transform: "translate(0,0)", opacity: 1 }}
        />
      ))}
    </div>
  );
}
