import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const outerRingSize = '20rem';
  const profileSize = '16rem';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Neutron class
    class Neutron {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw neutron
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 2);
        ctx.lineTo(this.size, this.size);
        ctx.lineTo(-this.size, this.size);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Create neutrons
    const neutrons: Neutron[] = [];
    for (let i = 0; i < 50; i++) {
      neutrons.push(new Neutron());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      neutrons.forEach(neutron => {
        neutron.update();
        neutron.draw();
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      neutrons.forEach(neutron => {
        const dx = mouseX - neutron.x;
        const dy = mouseY - neutron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100;
          neutron.speedX -= Math.cos(angle) * force * 0.5;
          neutron.speedY -= Math.sin(angle) * force * 0.5;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Neutron Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Profile Image with Names */}
      <div className="relative mb-12" style={{ width: outerRingSize, height: outerRingSize }}>
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border-2 border-tech-accent/20 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full border border-primary/10 animate-pulse-slow"></div>

        {/* Profile */}
        <div
          className="relative rounded-full bg-gradient-cyber p-1 neon-glow"
          style={{
            width: profileSize,
            height: profileSize,
            margin: 'auto',
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Islavath Sathish Naik"
              className="object-cover w-full h-full rounded-full"
            />
        </div>
      </div>

        {/* Names below profile image */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora leading-tight">
          <span className="bg-gradient-cyber bg-clip-text text-transparent neon-text">
            Islavath
          </span>
          <br />
          <span className="bg-gradient-cyber bg-clip-text text-transparent neon-text">
            Sathish Naik
          </span>
        </h1>
        </div>
      </div>

      {/* Role & Description */}
      <div className="space-y-6 max-w-3xl mt-20">
        <div className="text-xl sm:text-2xl font-medium text-muted-foreground font-jetbrains">
          <span className="text-primary">AI Engineer</span> | <span className="text-tech-accent">Vibe Coder</span> | <span className="text-primary">Creative Technologist</span>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
          "Merging Machine Intelligence with Creative Code."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-cyber hover:scale-105 transition-transform neon-glow text-lg px-8 py-3"
          >
            ⚡ View Projects
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all text-lg px-8 py-3 neon-border"
          >
            ✉️ Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
