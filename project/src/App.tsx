import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ThemeProvider from './context/ThemeContext';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading animation
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false)
    });

    tl.to('.loader-text', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.loader', {
      y: '-100%',
      duration: 1,
      delay: 0.5,
      ease: 'expo.inOut'
    });

    // Smooth scroll setup
    gsap.utils.toArray<HTMLElement>('.section').forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(section, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true
      });
    });

    // Header scroll effect
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        const header = document.querySelector('.header');
        if (header) {
          if (self.direction === 1) {
            header.classList.add('header-hidden');
          } else {
            header.classList.remove('header-hidden');
          }
        }
      }
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="loader-text text-4xl font-bold opacity-0 transform translate-y-8">
          Rahul<span className="text-primary">.</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;