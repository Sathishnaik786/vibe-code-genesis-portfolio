
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Advanced Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "November 2024",
      description: "Deep learning, neural networks, and advanced ML algorithms"
    },
    {
      name: "OpenAI API Certification",
      issuer: "OpenAI",
      date: "October 2024",
      description: "GPT models, fine-tuning, and API integration best practices"
    },
    {
      name: "LangChain Developer Certificate",
      issuer: "LangChain Academy",
      date: "September 2024",
      description: "Building production-ready LLM applications"
    },
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "August 2024",
      description: "ML services, model deployment, and cloud infrastructure"
    },
    {
      name: "TensorFlow Professional Certificate",
      issuer: "Google via Coursera",
      date: "July 2024",
      description: "Deep learning with TensorFlow and model optimization"
    },
    {
      name: "HuggingFace Transformers Certification",
      issuer: "HuggingFace",
      date: "June 2024",
      description: "Natural language processing and transformer architectures"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.name}
              className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-sora text-lg">{cert.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {cert.issuer}
                </CardDescription>
                <div className="text-sm text-muted-foreground">
                  {cert.date}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full neon-border hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
