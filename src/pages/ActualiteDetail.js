// src/pages/ActualiteDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import actualitesData from '../data/actualitesData';

const ActualiteDetail = () => {
  const { slug } = useParams();

  const actualite = actualitesData.find(
    (act) => act.link === `/actualites/${slug}`
  );

  if (!actualite) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-roboto">
        <h2 className="text-2xl font-bold mb-4">Actualité Non Trouvée</h2>
        <p className="mb-4">L'actualité que vous recherchez n'existe pas.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Retour à l'Accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-roboto">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Retour à l'Accueil
      </Link>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={actualite.image}
          alt={actualite.title}
          className="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-4">{actualite.title}</h1>
          <p className="text-gray-700 mb-4">{actualite.description}</p>
          <p className="text-gray-500 mb-4">
            Date :{' '}
            {new Date(actualite.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          {/* Ajoutez plus de détails si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default ActualiteDetail;
