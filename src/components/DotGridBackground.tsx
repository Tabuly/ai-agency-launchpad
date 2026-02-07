import { useCallback, useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
}

const DOT_SPACING = 14;
const DOT_RADIUS = 1.5;
const INFLUENCE_RADIUS = 120;
const REPULSION_STRENGTH = 18;
const SMOOTHING = 0.12;
const DOT_COUNT_VARIATION = 0.7;

export const DotGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const cols = Math.ceil(width / DOT_SPACING) + 2;
    const rows = Math.ceil(height / DOT_SPACING) + 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (Math.random() > DOT_COUNT_VARIATION) continue;

        const baseX = col * DOT_SPACING;
        const baseY = row * DOT_SPACING;
        const opacityVar = 0.3 + Math.random() * 0.6;

        dots.push({
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          radius: DOT_RADIUS * (0.8 + Math.random() * 0.4),
          opacity: opacityVar,
          vx: 0,
          vy: 0,
        });
      }
    }

    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initDots(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      mouseRef.current = inBounds
        ? { x: e.clientX - rect.left, y: e.clientY - rect.top }
        : { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    let rafId: number;
    const animate = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dots = dotsRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.baseX - mx;
        const dy = dot.baseY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const falloff = 1 - dist / INFLUENCE_RADIUS;
          const strength = falloff * falloff * REPULSION_STRENGTH;
          const nx = dx / dist;
          const ny = dy / dist;
          offsetX = nx * strength;
          offsetY = ny * strength;
          const stretchFactor = 1 + (1 - dist / INFLUENCE_RADIUS) * 0.5;
          offsetX *= stretchFactor;
          offsetY *= stretchFactor;
        }

        dot.vx += (offsetX - dot.vx) * SMOOTHING;
        dot.vy += (offsetY - dot.vy) * SMOOTHING;
        dot.vx *= 0.92;
        dot.vy *= 0.92;

        dot.x = dot.baseX + dot.vx;
        dot.y = dot.baseY + dot.vy;

        const isDark = document.documentElement.classList.contains("dark");
        const hue = isDark ? 220 : 220;
        const saturation = isDark ? 8 : 12;
        const lightness = isDark ? 55 : 45;
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${dot.opacity * 0.8})`;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [initDots]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-background"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};
