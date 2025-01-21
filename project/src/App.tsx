import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Accueil } from './pages/Accueil';
import { Meteo } from './pages/Meteo';
import { Infos } from './pages/Infos';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/meteo" element={<Meteo />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;