// src/pages/Accueil.jsx

import React from 'react';
import QuickAccessMenu from '../components/QuickAccessMenu';
import ActualitesPreview from '../components/ActualitesPreview';
import EquipePreview from '../components/EquipePreview'; 
import PresentationImage from '../components/PresentationImage';
import Navbar from '../components/Navbar';

const Accueil = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=""> {/* Ajustez le padding-top selon la hauteur de votre navbar */}
        <PresentationImage />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAccessMenu />
        <ActualitesPreview />
        <EquipePreview />
      </main>
    </div>
    </div>
  );
};

export default Accueil;
