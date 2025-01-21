// src/components/TarifsOverview.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Import du hook useTranslation

// Import des variants d'animation
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/fadeAnimations';

const TarifsOverview = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { t } = useTranslation(); // Initialisation de useTranslation

  // Récupérer la liste des tarifs depuis les traductions
  const tarifsList = t('tarifs.list', { returnObjects: true }) || [];

  return (
    <motion.section
      ref={ref}
      className="bg-[#3c9d9b] text-white py-16 px-6 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre avec animation */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          variants={fadeInLeft}
        >
          {t('tarifs.title')}
        </motion.h2>

        {/* Description avec animation */}
        <motion.p
          className="text-lg mb-8"
          variants={fadeInRight}
          transition={{ delay: 0.2 }}
        >
          {t('tarifs.description')}
        </motion.p>

        {/* Grille de Tarifs avec animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {tarifsList.map((tarif, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#7d3c98] mb-2">
                {tarif.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {tarif.duration} - {tarif.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton de navigation avec animation */}
        <motion.div
          className="text-center mt-8"
          variants={fadeInUp}
          transition={{ delay: 1 }}
        >
          <NavLink
            to="/prices"
            className="bg-[#7d3c98] text-white py-2 px-6 rounded-full hover:bg-[#f5e6cc] hover:text-black transition duration-300"
          >
            {t('tarifs.button')}
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TarifsOverview;
