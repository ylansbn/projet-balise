import React from 'react';
import { Ship, Clock, AlertTriangle, Info as InfoIcon } from 'lucide-react';

export const Infos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Informations Portuaires</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <Clock className="h-6 w-6 mr-2" />
            Horaires d'Ouverture
          </h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Lundi - Vendredi:</span> 8h00 - 19h00</p>
            <p><span className="font-semibold">Samedi:</span> 9h00 - 18h00</p>
            <p><span className="font-semibold">Dimanche:</span> 9h00 - 17h00</p>
            <p className="text-sm text-gray-600 mt-4">
              En cas d'urgence en dehors des heures d'ouverture, contactez le numéro d'urgence.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <Ship className="h-6 w-6 mr-2" />
            Services Disponibles
          </h2>
          <ul className="space-y-2">
            <li>✓ Eau potable</li>
            <li>✓ Électricité</li>
            <li>✓ Sanitaires et douches</li>
            <li>✓ Wifi gratuit</li>
            <li>✓ Station carburant</li>
            <li>✓ Collecte des déchets</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2" />
            Avis aux Navigateurs
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-md">
              <p className="text-yellow-800">
                Travaux de maintenance sur le ponton B du 15 au 20 mars.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-blue-800">
                Rappel: Limitation de vitesse à 3 nœuds dans le port.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <InfoIcon className="h-6 w-6 mr-2" />
            Tarifs
          </h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Basse saison:</span> 20€/jour</p>
            <p><span className="font-semibold">Haute saison:</span> 35€/jour</p>
            <p><span className="font-semibold">Forfait mensuel:</span> À partir de 450€</p>
            <p className="text-sm text-gray-600 mt-4">
              Les tarifs varient selon la taille du bateau. Contactez-nous pour un devis personnalisé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};