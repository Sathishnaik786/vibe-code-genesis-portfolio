import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Import local images
import githubImage from './images/github.png';
import linkedinImage from './images/linkedin.png';
import twitterImage from './images/twitter.png';
import instagramImage from './images/instagram.png';
import youtubeImage from './images/youtube.png';
import emailImage from './images/email.png';

const socialPlatforms = [
  {
    name: 'GitHub',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
    description: 'Check out my open-source projects and contributions.',
    link: 'https://github.com',
    image: githubImage
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'hover:text-blue-600',
    description: 'Connect with me professionally and view my experience.',
    link: 'https://linkedin.com',
    image: linkedinImage
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'hover:text-blue-400',
    description: 'Follow my thoughts on AI, tech, and development.',
    link: 'https://twitter.com',
    image: twitterImage
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'hover:text-pink-600',
    description: 'See my creative side and behind-the-scenes moments.',
    link: 'https://instagram.com',
    image: instagramImage
  },
  {
    name: 'YouTube',
    icon: Youtube,
    color: 'hover:text-red-600',
    description: 'Watch my tutorials and tech content.',
    link: 'https://youtube.com',
    image: youtubeImage
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'hover:text-green-600',
    description: 'Get in touch for collaborations and opportunities.',
    link: 'mailto:sathish@example.com',
    image: emailImage
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-sora mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred platform to get in touch or collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={platform.image}
                  alt={`${platform.name} background`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50" />
              </div>

              <div className="relative p-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <platform.icon className={`w-6 h-6 ${platform.color}`} />
                    <h3 className="text-2xl font-bold font-sora">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {platform.description}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground
                    transition-colors duration-300 mt-4"
                  onClick={() => window.open(platform.link, '_blank')}
                >
                  Connect on {platform.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Me a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Message subject"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
