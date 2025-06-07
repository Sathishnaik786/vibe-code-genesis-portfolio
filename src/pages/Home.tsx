
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

const Home = () => {
  const navigate = useNavigate();
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  
  const subtitles = [
    "AI Engineer",
    "Vibe Coder", 
    "Creative Technologist"
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com', 
      color: 'hover:text-gray-900 dark:hover:text-gray-100' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com', 
      color: 'hover:text-blue-600' 
    },
    { 
      icon: Youtube, 
      label: 'YouTube', 
      href: 'https://youtube.com', 
      color: 'hover:text-red-600' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:sathish@example.com', 
      color: 'hover:text-green-600' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    navigate('/projects');
  };

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ParticleBackground />
      
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sora leading-tight">
                <span className="bg-gradient-cyber bg-clip-text text-transparent neon-text">
                  Islavath
                </span>
                <br />
                <span className="bg-gradient-cyber bg-clip-text text-transparent neon-text">
                  Sathish Naik
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl font-medium text-muted-foreground font-jetbrains h-8 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentSubtitle * 100}%)` }}
                >
                  {subtitles.map((subtitle, index) => (
                    <div key={index} className="h-8 flex items-center">
                      <span className="text-primary animate-fade-in">{subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-in">
              "Merging Machine Intelligence with Creative Code."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
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

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-border hover:scale-110 transition-all duration-300 neon-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border-2 border-tech-accent/20 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-pulse-slow"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-cyber p-1 neon-glow">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="text-6xl sm:text-8xl font-bold text-primary">ISN</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>
    </div>
  );
};

export default Home;
