import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sathishnaik',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sathishnaik',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/sathishnaik',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/sathishnaik',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sathishnaik@example.com',
      color: 'hover:text-green-600'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative w-full">
      <div className="glass backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl mx-auto max-w-[1200px] min-h-[10px]">
        <div className="px-4 sm:px-8 py-8 sm:py-12 h-full flex flex-col">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 flex-grow">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={logo} alt="ISN Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-3xl font-bold font-sora bg-gradient-cyber bg-clip-text text-transparent">
                </span>
              </Link>
              <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
                Building innovative solutions that merge artificial intelligence with human creativity.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-border hover:scale-110 transition-all duration-300 neon-border ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">Contact</h3>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground">
                  Let's discuss your next project
                </p>
                <div className="space-y-2">
                  <p className="text-base text-muted-foreground">
                    Email: sathishnaik@example.com
                  </p>
                  <p className="text-base text-muted-foreground">
                    Location: Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-border">
            <div className="text-center text-sm text-muted-foreground">
              © 2025 Sathish Naik. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
