
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "An intelligent coding companion that helps developers write better code using advanced language models and real-time suggestions.",
      tech: ["Python", "OpenAI", "React", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Neural Style Transfer App",
      description: "Transform images using deep learning style transfer techniques with an intuitive web interface.",
      tech: ["PyTorch", "TensorFlow", "React", "WebGL"],
      github: "#",
      demo: "#"
    },
    {
      title: "LangChain Document AI",
      description: "Intelligent document analysis and Q&A system powered by large language models and vector databases.",
      tech: ["LangChain", "Pinecone", "HuggingFace", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Voice-to-Code Generator",
      description: "Revolutionary tool that converts natural language voice commands into executable code across multiple programming languages.",
      tech: ["Whisper", "GPT-4", "TypeScript", "Node.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Music Composer",
      description: "Create original music compositions using machine learning models trained on various musical genres and styles.",
      tech: ["TensorFlow", "Magenta", "React", "Web Audio API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Data Visualizer",
      description: "Automatically generate beautiful, interactive data visualizations from raw datasets using AI-driven insights.",
      tech: ["D3.js", "Python", "Pandas", "React"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions that push the boundaries of technology and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-sora text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm font-jetbrains"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 neon-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-cyber hover:scale-105 transition-transform"
                  >
                    <ArrowUp className="w-4 h-4 mr-2 rotate-45" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
