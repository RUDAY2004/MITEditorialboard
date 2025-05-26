import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
  
  update: (mouseX: number, mouseY: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

interface ParticleCanvasProps {
  particleCount?: number;
  mouseEffect?: boolean;
  connectionDistance?: number;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ 
  particleCount = 80,
  mouseEffect = true,
  connectionDistance = 120
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    // Set dimensions on mount and when window resizes
    const handleResize = () => {
<<<<<<< HEAD
      if (canvasRef.current) {
        // Get the parent element's dimensions
        const parent = canvasRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight
          });
        }
      }
    };
    
    // Initial setup
    handleResize();
    
    // Add resize observer for more reliable size updates
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvasRef.current?.parentElement) {
      resizeObserver.observe(canvasRef.current.parentElement);
    }

    // Add window resize listener as fallback
    window.addEventListener('resize', handleResize);
    
    return () => {
      resizeObserver.disconnect();
=======
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
>>>>>>> origin/sangini
      window.removeEventListener('resize', handleResize);
    };
  }, []);

<<<<<<< HEAD
  // Adjust particle count based on screen size
  useEffect(() => {
    const adjustedParticleCount = Math.floor(
      (dimensions.width * dimensions.height) / (1920 * 1080) * particleCount
    );
    
    // Reinitialize particles with adjusted count
=======
  useEffect(() => {
>>>>>>> origin/sangini
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Initialize particles when canvas dimensions change
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create particles
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.3;
      
      const particle: Particle = {
        x,
        y,
        radius,
        color: `rgba(255, 255, 255, ${opacity})`,
        vx: (Math.random() - 0.5) * 0.5, // Slower movement
        vy: (Math.random() - 0.5) * 0.5, // Slower movement
        originalX: x,
        originalY: y,
        
        update(mouseX, mouseY) {
          // Regular movement
          this.x += this.vx;
          this.y += this.vy;
          
          // Bounce off walls
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
          
          // Mouse interaction - follow mouse with stronger effect
          if (mouseEffect && mouseX > 0 && mouseY > 0) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              // Follow mouse with stronger force based on distance
              const force = 0.03 * (1 - distance / 200);
              this.vx += dx * force;
              this.vy += dy * force;
            }
          }
          
          // Add slight return to original position for stability
          this.vx += (this.originalX - this.x) * 0.0005;
          this.vy += (this.originalY - this.y) * 0.0005;
          
          // Dampen velocity to prevent extreme speeds
          this.vx *= 0.99;
          this.vy *= 0.99;
        },
        
        draw(ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      };
      
      particles.push(particle);
    }
    
    particlesRef.current = particles;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mousePosition.x, mousePosition.y);
        particle.draw(ctx);
      });
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up on unmount or when dependencies change
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [dimensions, particleCount, mouseEffect, connectionDistance]);

  // Setup mouse move event listener separately to ensure it's always active
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

<<<<<<< HEAD
  // Add touch support for mobile
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({
          x: touch.clientX,
          y: touch.clientY
        });
      }
    };

    const handleTouchEnd = () => {
      setMousePosition({ x: -1000, y: -1000 });
    };

    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full" 
      width={dimensions.width}
      height={dimensions.height}
      style={{ touchAction: 'none' }} // Prevent default touch actions
=======
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0" 
      width={dimensions.width}
      height={dimensions.height}
>>>>>>> origin/sangini
    />
  );
};

export default ParticleCanvas;