
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
    },
    {
      title: "Multimodal Chat Assistant",
      description: "Advanced chatbot that processes text, images, and voice input to provide contextual responses using multiple AI models.",
      tech: ["OpenAI", "Whisper", "CLIP", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Content Generator",
      description: "Comprehensive content creation platform that generates blog posts, social media content, and marketing copy using fine-tuned language models.",
      tech: ["GPT-4", "Next.js", "Supabase", "Stripe"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions that push the boundaries of technology and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-6">
                <CardTitle className="font-sora text-lg">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 p-6 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-jetbrains"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 neon-border hover:bg-primary hover:text-primary-foreground transition-all text-xs"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-cyber hover:scale-105 transition-transform text-xs"
                  >
                    <ArrowUp className="w-3 h-3 mr-1 rotate-45" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
