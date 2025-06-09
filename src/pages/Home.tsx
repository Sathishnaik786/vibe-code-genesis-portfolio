import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

// Tech stack logos
const techStack = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-cyber p-1 neon-glow animate-pulse"></div>
                <div className="absolute inset-1 rounded-full bg-card overflow-hidden">
                  <img 
                    src={logo} 
                    alt="ISN Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Sathish Naik</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate software engineer and AI enthusiast focused on creating innovative solutions
              that make a difference.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          
          {/* First row - moving right to left */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-scroll-left">
              {techStack.slice(0, 6).map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 w-16 h-16">
                  <div className="w-full h-full rounded-full bg-background p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-left" aria-hidden="true">
              {techStack.slice(0, 6).map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 w-16 h-16">
                  <div className="w-full h-full rounded-full bg-background p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-right">
              {techStack.slice(6, 12).map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 w-16 h-16">
                  <div className="w-full h-full rounded-full bg-background p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-right" aria-hidden="true">
              {techStack.slice(6, 12).map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 w-16 h-16">
                  <div className="w-full h-full rounded-full bg-background p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
