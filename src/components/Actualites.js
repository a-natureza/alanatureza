// src/components/Actualites.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import actualitesData from '../data/actualitesData';
import classNames from 'classnames';

const Actualites = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // Recherche de l'actualité basée sur le slug de l'URL
  const initialActualite = actualitesData.find(
    (act) => act.link === `/actualites/${slug}`
  ) || actualitesData[0];

  const [currentIndex, setCurrentIndex] = useState(
    actualitesData.indexOf(initialActualite)
  );
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Fonction pour passer à l'actualité suivante
  const nextActualite = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === actualitesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cycle automatique des actualités toutes les 5 secondes
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextActualite();
      }, 5000);
    }

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  // Mise à jour de l'URL lorsque l'actualité change
  useEffect(() => {
    navigate(actualitesData[currentIndex].link, { replace: true });
  }, [currentIndex, navigate]);

  // Fonction pour sélectionner une actualité spécifique
  const selectActualite = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Reprendre le cycle après 5 secondes d'inactivité
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const currentActualite = actualitesData[currentIndex];

  return (
    <div className="min-w-[320px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-roboto">
      {/* Titre avec Lignes Illustratives */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="text-2xl font-bold text-center mx-4">Actualités</h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Liste des Actualités */}
        <div className="md:w-1/3">
          <ul>
            {actualitesData.map((act, index) => (
              <li key={act.id} className="mb-4">
                <button
                  onClick={() => selectActualite(index)}
                  className={classNames(
                    'w-full text-left p-2 rounded-md transition-colors duration-200',
                    {
                      'bg-blue-500 text-white':
                        index === currentIndex && isPaused,
                      'bg-gray-100 hover:bg-gray-200':
                        index !== currentIndex,
                    }
                  )}
                >
                  {act.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Aperçu de l'Actualité */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={currentActualite.image}
              alt={currentActualite.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {currentActualite.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {currentActualite.description}
              </p>
              <p className="text-gray-500 mb-4">
                Date :{' '}
                {new Date(currentActualite.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <Link
                to={currentActualite.link}
                className="text-blue-500 hover:underline"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
