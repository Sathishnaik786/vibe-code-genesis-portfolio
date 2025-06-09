import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 rounded-2xl border border-white/10 ${
        isScrolled
          ? 'glass backdrop-blur-lg shadow-lg mx-auto max-w-7xl left-1/2 transform -translate-x-1/2'
          : 'bg-transparent mx-4 sm:mx-6 lg:mx-8'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold font-sora bg-gradient-cyber bg-clip-text text-transparent">
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-colors animated-underline font-medium ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden hover:scale-110 transition-transform"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 transition-all" />
              ) : (
                <Sun className="h-5 w-5 transition-all" />
              )}
            </Button>
            
            <Button className="bg-gradient-cyber hover:scale-105 transition-transform neon-glow font-semibold px-4">
              🚀 Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:scale-110 transition-transform"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass backdrop-blur-lg border-t border-white/10 rounded-b-2xl mt-2">
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-cyber neon-glow mt-4">
                🚀 Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
