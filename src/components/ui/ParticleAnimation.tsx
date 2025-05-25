import React, { useEffect } from 'react';

const ParticleAnimation: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("spiderWebCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const maxParticles = 120;
    const connectDistance = 120;

    class Particle {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.dx = (Math.random() - 0.5) * 1.0;
        this.dy = (Math.random() - 0.5) * 1.0;
      }

      move() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
      }

      draw() {
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = "white";
        ctx?.fill();
      }
    }

    function createParticles() {
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            ctx?.beginPath();
            ctx!.strokeStyle = `rgba(255, 255, 255, ${
              1 - distance / connectDistance
            })`;
            ctx!.lineWidth = 1;
            ctx?.moveTo(particles[i].x, particles[i].y);
            ctx?.lineTo(particles[j].x, particles[j].y);
            ctx?.stroke();
          }
        }
      }
    }

    function animate() {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.move();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return (
    <canvas
      id="spiderWebCanvas"
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#030816]"
    />
  );
};

export default ParticleAnimation;
