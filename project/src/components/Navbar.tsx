import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Animate nav items on page load
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0.5,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 1.5
    });

    // Set up scroll spy
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpy = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', scrollSpy);
    
    return () => {
      window.removeEventListener('scroll', scrollSpy);
    };
  }, []);

  // Handle mobile menu animations
  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu opening
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
      
      gsap.from('.mobile-nav-item', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3
      });
    } else {
      // Animate menu closing
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in'
      });
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full z-40 bg-background/90 backdrop-blur transition-transform duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="logo text-2xl font-bold flex items-center">
          Rahul<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-item nav-link ${activeSection === link.id ? 'active' : ''}`}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
        
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button onClick={toggleMenu} className="text-2xl" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 h-full w-full md:w-72 bg-card z-50 transform translate-x-full transition-transform">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-2xl font-bold">
              Rahul<span className="text-primary">.</span>
            </a>
            <button onClick={toggleMenu} className="text-2xl">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`mobile-nav-item text-lg ${activeSection === link.id ? 'text-primary' : ''}`}
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;