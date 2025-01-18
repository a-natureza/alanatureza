// src/components/TarifsOverview.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import des variants d'animation
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/fadeAnimations';

const tarifsData = [
  {
    title: 'Relaxamento Essencial',
    duration: '1 heure',
    price: '225 R$',
  },
  {
    title: 'Harmonia Profunda',
    duration: '1h30',
    price: '270 R$',
  },
  {
    title: 'Bem-Estar Supremo',
    duration: '2 heures',
    price: '333 R$',
  },
];

const TarifsOverview = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      className="bg-[#3c9d9b] text-white py-16 px-6 overflow-hidden" 
      //                                         ^^^^^^^^^^^^^^^
      // overflow-hidden pour éviter le débordement horizontal.
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
          Tarifs
        </motion.h2>

        {/* Description avec animation */}
        <motion.p
          className="text-lg mb-8"
          variants={fadeInRight}
          transition={{ delay: 0.2 }}
        >
          Découvrez nos offres pour une expérience unique de bien-être.
        </motion.p>

        {/* Grille de Tarifs avec animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {tarifsData.map((tarif, index) => (
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
            Voir tous les tarifs
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TarifsOverview;
