import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-300">Visão e Desenvolvimento</h3>
            <p>Like Look Solutions</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-300">Programador Full Stack</h3>
            <p>Julio Campos Machado</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-300">Contato</h3>
            <a 
              href="https://wa.me/5511970603441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1"
            >
              WhatsApp: +55 11 97060-3441
              <ExternalLink size={16} />
            </a>
          </div>
          
          <div>
            <a 
              href="https://likelook.wixsite.com/solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1"
            >
              Like Look Solutions
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};