
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'PyTorch', 
    'OpenAI', 'HuggingFace', 'LangChain', 'FastAPI', 'Git'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <h3 className="text-2xl font-bold font-sora mb-6 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card 
                  key={skill}
                  className="p-4 text-center hover-lift neon-border bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-semibold text-primary font-jetbrains">{skill}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
