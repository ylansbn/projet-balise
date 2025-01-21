import React, { useState, useEffect } from 'react';
import { Wind, Thermometer, Droplets, Gauge } from 'lucide-react';
import type { MeteoData } from '../types/mqtt';

export const Meteo = () => {
  const [meteoData, setMeteoData] = useState<MeteoData>({
    temperature: 22,
    windSpeed: 15,
    windDirection: "SE",
    humidity: 65,
    pressure: 1013
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Météo Marine</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <Thermometer className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Température</p>
              <p className="text-2xl font-bold">{meteoData.temperature}°C</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <Wind className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Vent</p>
              <p className="text-2xl font-bold">{meteoData.windSpeed} km/h {meteoData.windDirection}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <Droplets className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Humidité</p>
              <p className="text-2xl font-bold">{meteoData.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <Gauge className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Pression</p>
              <p className="text-2xl font-bold">{meteoData.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Prévisions à 24h</h2>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <p className="text-gray-600">{`${(i + 1) * 6}h`}</p>
              <Wind className="h-6 w-6 mx-auto my-2 text-blue-600" />
              <p className="font-semibold">{Math.round(meteoData.temperature + (Math.random() * 4 - 2))}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};