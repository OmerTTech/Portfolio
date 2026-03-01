import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CursorTrail = () => {
  const isDarkmode = useSelector((state) => state.darkmode.darkmode);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.globalCompositeOperation = 'difference';

    let mouseMoved = false;
    let isMouseInWindow = true;

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Trail parametreleri (renklere dokunma) -- renk kullanılmayacak
    const params = {
      pointsNumber: 10, // Kuyruk uzunluğu
      widthFactor: 0.8,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
      alpha: 1, // Tam opaklık ile difference uygula
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
      mouseMoved = true;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = (t) => {
      if (!mouseMoved && isMouseInWindow) {
        pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
        pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      ctx.shadowBlur = 0;

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);

        // Sadece tam beyaz ile çizim yapılacak, difference blend modunda tersini gösterir
        ctx.strokeStyle = `rgba(255, 255, 255, ${params.alpha})`;
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }

      const lastIdx = trail.length - 1;
      ctx.lineTo(trail[lastIdx].x, trail[lastIdx].y);
      ctx.stroke();

      animationRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
    window.addEventListener('mouseenter', () => { isMouseInWindow = true; });
    window.addEventListener('mouseleave', () => { isMouseInWindow = false; });
    window.addEventListener('touchmove', (e) => updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY));
    window.addEventListener('resize', handleResize);

    handleResize();
    animate(0);

    return () => {
      window.removeEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
      window.removeEventListener('mouseenter', () => { isMouseInWindow = true; });
      window.removeEventListener('mouseleave', () => { isMouseInWindow = false; });
      window.removeEventListener('touchmove', (e) => updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY));
      window.removeEventListener('resize', handleResize);

      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkmode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        display: 'block',
        background: 'transparent',
        // Trail arka planla difference modda gözükecek
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CursorTrail;
