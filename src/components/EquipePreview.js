// src/components/EquipePreview.jsx

import React from 'react';
import teamData from '../data/teamData';

const EquipePreview = () => {
  return (
    <div className="min-w-[320px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-roboto">
      {/* Titre avec Lignes Illustratives */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="text-2xl font-bold text-center mx-4">Notre Équipe</h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Grille des Membres de l'Équipe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image avec Effet Noir et Blanc */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 filter grayscale group-hover:grayscale-0"
            />

            {/* Description en Bas de l'Image */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 text-center transition-all duration-500 transform group-hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipePreview;
