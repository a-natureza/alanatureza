// src/components/ActualitesPreview.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import actualitesData from '../data/actualitesData';
import classNames from 'classnames';

const ActualitesPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // État pour gérer le chargement de l'image
  const timerRef = useRef(null);

  // Fonction pour passer à l'actualité suivante
  const nextActualite = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === actualitesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Réinitialiser imageLoaded lorsque currentIndex change
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextActualite();
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  useEffect(() => {
    setImageLoaded(false); // Réinitialise le chargement de l'image
  }, [currentIndex]);

  // Fonction pour sélectionner une actualité spécifique
  const selectActualite = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const currentActualite = actualitesData[currentIndex] || {
    title: "Chargement...",
    description: "Veuillez patienter",
    image: "/placeholder-image.jpg",
    date: new Date().toISOString(),
    link: "#",
  };

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
                      'bg-gray-500 text-white': index === currentIndex,
                      'bg-gray-500 hover:bg-gray-200': index === currentIndex,
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
          <div className="rounded-lg overflow-hidden shadow-lg h-96 flex flex-col max-w-[600px]">
            {/* Placeholder pour l'image */}
            {!imageLoaded && (
              <div className="w-full h-48 bg-gray-200 animate-pulse flex-shrink-0"></div>
            )}
            {/* Image réelle */}
            <img
              src={currentActualite.image}
              alt={currentActualite.title}
              className={`w-full h-48 object-cover flex-shrink-0 ${
                imageLoaded ? "block" : "hidden"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Contenu */}
            <div className="mt-1 ml-2">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {currentActualite.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
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
                className="mt-auto text-blue-500 hover:underline"
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

export default ActualitesPreview;
