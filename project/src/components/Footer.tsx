import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Rahul<span className="text-primary">.</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Building exceptional digital experiences with creative solutions and cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-gray-400 mb-4">
              © {new Date().getFullYear()} All rights reserved
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="mx-1 text-red-500" size={16} />
              <span>using React & GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;