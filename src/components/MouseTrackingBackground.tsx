
import React, { useEffect, useRef } from 'react';

interface MouseTrackingBackgroundProps {
  mousePosition: { x: number; y: number };
}

const MouseTrackingBackground = ({ mousePosition }: MouseTrackingBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create base particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: 0,
        color: `hsl(${250 + Math.random() * 60}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const distance = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );

        // Reveal particles within 150px of cursor
        const maxDistance = 150;
        if (distance < maxDistance) {
          particle.opacity = Math.max(0, 1 - (distance / maxDistance));
        } else {
          particle.opacity = Math.max(0, particle.opacity - 0.02);
        }

        if (particle.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = particle.opacity * 0.6;
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Draw connections between nearby particles
          particles.forEach((otherParticle) => {
            const particleDistance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (particleDistance < 100 && otherParticle.opacity > 0) {
              ctx.save();
              ctx.globalAlpha = (particle.opacity + otherParticle.opacity) * 0.1;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        }
      });

      // Add mouse glow effect
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, 100
      );
      gradient.addColorStop(0, 'rgba(139, 69, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(139, 69, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(mousePosition.x - 100, mousePosition.y - 100, 200, 200);

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

export default MouseTrackingBackground;
