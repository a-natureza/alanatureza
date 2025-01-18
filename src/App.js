// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loading pour améliorer les performances
const Accueil = lazy(() => import('./pages/Accueil'));
const Prices = lazy(() => import('./pages/Prices'));
const NotFound = lazy(() => import('./pages/NotFound')); // si vous avez une 404

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Suspense permet d’afficher un fallback le temps de charger la page */}
      <Suspense fallback={<div className="text-center py-10">Chargement…</div>}>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
