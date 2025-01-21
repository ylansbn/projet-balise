import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Home, Info, Phone, Wind } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Anchor className="h-8 w-8" />
            <span className="font-semibold text-xl">Capitainerie Méditerranée</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200">
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <Link to="/meteo" className="flex items-center space-x-1 hover:text-blue-200">
              <Wind className="h-4 w-4" />
              <span>Météo</span>
            </Link>
            <Link to="/infos" className="flex items-center space-x-1 hover:text-blue-200">
              <Info className="h-4 w-4" />
              <span>Informations</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-blue-200">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};