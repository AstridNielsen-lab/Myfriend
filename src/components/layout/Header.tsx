import React from 'react';
import { Shield, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-100">Myfriend</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-gray-100">Home</Link>
            <Link to="/chat" className="text-gray-300 hover:text-gray-100">Chat</Link>
            <Link to="/settings" className="text-gray-300 hover:text-gray-100">Settings</Link>
          </nav>
          <button className="md:hidden text-gray-300 hover:text-gray-100">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};