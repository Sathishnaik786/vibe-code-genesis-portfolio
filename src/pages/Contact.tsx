
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Contact = () => {
  const socialCards = [
    {
      name: 'GitHub',
      icon: Github,
      description: 'View my code repositories and open source contributions',
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Connect with me professionally',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      description: 'Watch my AI tutorials and project walkthroughs',
      url: 'https://youtube.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'Email',
      icon: Mail,
      description: 'Send me a direct message',
      url: 'mailto:sathish@example.com',
      color: 'hover:text-green-600'
    },
    {
      name: 'Instagram',
      icon: Github, // Placeholder - you can replace with Instagram icon
      description: 'Follow my tech journey and behind-the-scenes',
      url: 'https://instagram.com',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: Github, // Placeholder - you can replace with Twitter icon
      description: 'Follow my thoughts on AI and technology',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on something amazing! Connect with me on your preferred platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-96 overflow-y-auto">
          {socialCards.map((social, index) => (
            <Card 
              key={social.name}
              className="hover-lift neon-border bg-card/50 backdrop-blur-sm fade-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(social.url, '_blank')}
            >
              <CardHeader className="text-center">
                {/* Placeholder for image - will be replaced with actual images later */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <social.icon className={`w-10 h-10 text-white group-hover:scale-110 transition-transform ${social.color}`} />
                </div>
                <CardTitle className="font-sora text-xl">{social.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  {social.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
