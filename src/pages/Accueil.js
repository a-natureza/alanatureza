// src/pages/Accueil.jsx
import React from 'react';
import Presentation from '../components/Presentation';
import Services from '../components/Service';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import TarifsOverview from '../components/TarifsOverview';
import ReservationCTA from '../components/ReservationCTA';

const Accueil = () => {
  return (
    <div className="flex flex-col">
      <Presentation />
      <Services />
      <Testimonials />
      <FAQ />
      <TarifsOverview />
      <ReservationCTA />
    </div>
  );
};

export default Accueil;
