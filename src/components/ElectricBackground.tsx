
import React, { useEffect, useRef } from 'react';

interface ElectricBackgroundProps {
  mousePosition: { x: number; y: number };
}

const ElectricBackground = ({ mousePosition }: ElectricBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    const bolts: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      segments: Array<{ x: number; y: number }>;
      life: number;
      maxLife: number;
      thickness: number;
    }> = [];

    const createBolt = (startX: number, startY: number, endX: number, endY: number) => {
      const segments = [];
      const steps = 15;
      const chaos = 30;

      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        let x = startX + (endX - startX) * progress;
        let y = startY + (endY - startY) * progress;

        if (i > 0 && i < steps) {
          x += (Math.random() - 0.5) * chaos;
          y += (Math.random() - 0.5) * chaos;
        }

        segments.push({ x, y });
      }

      return {
        x: startX,
        y: startY,
        targetX: endX,
        targetY: endY,
        segments,
        life: 30,
        maxLife: 30,
        thickness: Math.random() * 3 + 1
      };
    };

    const drawBolt = (bolt: typeof bolts[0]) => {
      const alpha = bolt.life / bolt.maxLife;
      const gradient = ctx.createLinearGradient(bolt.x, bolt.y, bolt.targetX, bolt.targetY);
      
      gradient.addColorStop(0, `rgba(139, 69, 255, ${alpha * 0.8})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.6})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = bolt.thickness;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#8b45ff';
      ctx.shadowBlur = 15;

      ctx.beginPath();
      bolt.segments.forEach((segment, index) => {
        if (index === 0) {
          ctx.moveTo(segment.x, segment.y);
        } else {
          ctx.lineTo(segment.x, segment.y);
        }
      });
      ctx.stroke();

      // Add glow effect
      ctx.shadowBlur = 0;
      ctx.lineWidth = bolt.thickness * 0.3;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
      ctx.beginPath();
      bolt.segments.forEach((segment, index) => {
        if (index === 0) {
          ctx.moveTo(segment.x, segment.y);
        } else {
          ctx.lineTo(segment.x, segment.y);
        }
      });
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate bolts near mouse position
      if (Math.random() < 0.03) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const startX = mousePosition.x + Math.cos(angle) * distance;
        const startY = mousePosition.y + Math.sin(angle) * distance;
        
        const endAngle = angle + (Math.random() - 0.5) * Math.PI;
        const endDistance = Math.random() * 300 + 150;
        const endX = startX + Math.cos(endAngle) * endDistance;
        const endY = startY + Math.sin(endAngle) * endDistance;

        bolts.push(createBolt(startX, startY, endX, endY));
      }

      // Generate random background bolts
      if (Math.random() < 0.01) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const endX = startX + (Math.random() - 0.5) * 400;
        const endY = startY + (Math.random() - 0.5) * 400;

        bolts.push(createBolt(startX, startY, endX, endY));
      }

      // Update and draw bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.life--;

        if (bolt.life <= 0) {
          bolts.splice(i, 1);
        } else {
          drawBolt(bolt);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ElectricBackground;
