
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'PyTorch', 
    'OpenAI', 'HuggingFace', 'LangChain', 'FastAPI', 'Git'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate AI Engineer and Creative Technologist with a deep fascination for 
              merging cutting-edge machine intelligence with innovative code solutions. My journey 
              began with curiosity about how AI could transform the way we interact with technology, 
              and has evolved into building sophisticated applications using Large Language Models, 
              neural networks, and creative programming paradigms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From developing intelligent chatbots to creating immersive AI-powered experiences, 
              I thrive on pushing the boundaries of what's possible when human creativity meets 
              artificial intelligence. Every project is an opportunity to explore new frontiers 
              in technology and create solutions that genuinely impact people's lives.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold font-sora mb-8 text-center">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="flex flex-col items-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-cyber flex items-center justify-center neon-glow hover-lift mb-3">
                    <span className="text-white font-bold text-xs">{skill.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="text-sm font-jetbrains text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
