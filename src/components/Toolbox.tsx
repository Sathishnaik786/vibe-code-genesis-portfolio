
import React from 'react';
import { Card } from '@/components/ui/card';

const Toolbox = () => {
  const tools = [
    { name: 'OpenAI', description: 'Advanced language models and AI APIs', icon: '🤖' },
    { name: 'HuggingFace', description: 'Open-source ML models and datasets', icon: '🤗' },
    { name: 'LangChain', description: 'Framework for LLM-powered applications', icon: '🔗' },
    { name: 'Pinecone', description: 'Vector database for AI applications', icon: '🌲' },
    { name: 'TensorFlow', description: 'End-to-end ML platform', icon: '🧠' },
    { name: 'PyTorch', description: 'Dynamic neural network framework', icon: '🔥' },
    { name: 'Weaviate', description: 'Vector search engine with ML models', icon: '🕸️' },
    { name: 'Vercel', description: 'Platform for frontend deployment', icon: '▲' },
  ];

  return (
    <section id="toolbox" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            AI Toolbox
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge tools and frameworks that power my AI innovations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={tool.name}
              className="p-6 text-center hover-lift neon-border bg-card/50 backdrop-blur-sm group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="font-bold font-sora text-lg mb-2 text-primary">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
