import React from 'react';
import { Anchor, Ship, Sun } from 'lucide-react';

export const Accueil = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Capitainerie Méditerranée</h1>
            <p className="text-xl">Votre port d'attache sur la côte méditerranéenne</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Ship className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services Portuaires</h3>
            <p className="text-gray-600">Gestion des amarrages, assistance à la navigation, et services aux plaisanciers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Sun className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Informations Météo</h3>
            <p className="text-gray-600">Bulletins météo en temps réel, prévisions marines et état de la mer.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Anchor className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gestion Portuaire</h3>
            <p className="text-gray-600">Réservation de places, informations sur les services et équipements disponibles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};