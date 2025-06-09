import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot built with OpenAI GPT-4 and LangChain, featuring context-aware conversations and custom knowledge base integration.',
    techStack: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Neural Style Transfer',
    description: 'Real-time style transfer application using PyTorch and deep learning, allowing users to apply artistic styles to their images.',
    techStack: ['Python', 'PyTorch', 'React', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Sentiment Analysis API',
    description: 'RESTful API for sentiment analysis using HuggingFace transformers, supporting multiple languages and custom model fine-tuning.',
    techStack: ['Python', 'HuggingFace', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  },
  {
    title: 'AI Image Generator',
    description: 'Web application for generating images using Stable Diffusion, featuring custom model training and style mixing capabilities.',
    techStack: ['Python', 'PyTorch', 'React', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Code Assistant',
    description: 'VS Code extension powered by GPT-4 for intelligent code completion, documentation generation, and refactoring suggestions.',
    techStack: ['TypeScript', 'OpenAI', 'VS Code API'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  },
  {
    title: 'ML Model Dashboard',
    description: 'Interactive dashboard for monitoring and managing machine learning models in production, with real-time metrics and alerts.',
    techStack: ['Python', 'React', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects showcasing the intersection of AI and creative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-xl p-6 border border-border
                transition-all duration-300 hover:-translate-y-2
                dark:shadow-[0_0_20px_hsl(var(--glow)/0.3)]
                hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold font-sora mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground
                    transition-colors duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  className="flex-1 bg-gradient-cyber hover:scale-105 transition-transform"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
