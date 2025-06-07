
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Islavath Sathish Naik. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="neon-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using React, TypeScript, and cutting-edge AI technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
