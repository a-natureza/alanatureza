// src/pages/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next"; // Import du hook useTranslation
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate

// Import des variants d'animation
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/fadeAnimations';

const servicesData = [
  {
    titleKey: 'servicesPage.massageRelaxant.title',
    descriptionKey: 'servicesPage.massageRelaxant.description',
    image: `${process.env.PUBLIC_URL}/assets/images/landscape.jpg`,
  },
  {
    titleKey: 'servicesPage.massageSportif.title',
    descriptionKey: 'servicesPage.massageSportif.description',
    image: `${process.env.PUBLIC_URL}/assets/images/massage.jpg`,
  },
  {
    titleKey: 'servicesPage.acupuncture.title',
    descriptionKey: 'servicesPage.acupuncture.description',
    image: `${process.env.PUBLIC_URL}/assets/images/landscape2.jpg`,
  },
  {
    titleKey: 'servicesPage.shiatsu.title',
    descriptionKey: 'servicesPage.shiatsu.description',
    image: `${process.env.PUBLIC_URL}/assets/images/massage2.jpg`,
  },
  {
    titleKey: 'servicesPage.espaceSoin.title',
    descriptionKey: 'servicesPage.espaceSoin.description',
    image: `${process.env.PUBLIC_URL}/assets/images/landscape3.jpg`,
  },
  // Ajoutez d'autres services si nécessaire
];

// Variants d'animation
const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Services = () => {
  const { t } = useTranslation(); // Initialisation de useTranslation

  // Détecter quand la section est visible
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate(); // Initialisation de useNavigate

  return (
    <section
      ref={ref}
      className="bg-white text-black py-16 px-6 overflow-hidden mt-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3c9d9b]">
            {t("servicesPage.title")}
          </h2>
          <p className="text-lg mt-2 text-gray-700">
            {t("servicesPage.subtitle")}
          </p>
        </div>

        {/* Liste des services */}
        <div className="space-y-12">
          {servicesData.map((service, idx) => {
            // Pour alterner la disposition image à gauche/droite
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center md:space-x-6"
              >
                {/* Image */}
                <motion.div
                  className={`w-full md:w-1/2 mb-6 md:mb-0 ${
                    isImageLeft ? '' : 'md:order-2'
                  }`}
                  variants={isImageLeft ? fadeFromLeft : fadeFromRight}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>

                {/* Texte */}
                <motion.div
                  className={`w-full md:w-1/2 ${
                    isImageLeft ? 'md:pl-6' : 'md:pr-6 md:order-1'
                  }`}
                  variants={isImageLeft ? fadeFromRight : fadeFromLeft}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.8, delay: 0.1 + idx * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bouton de Redirection vers les Avis Google ou la Page de Réservation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: servicesData.length * 0.2 }}
          className="text-center mt-12"
        >
          <button
            href="https://www.google.com/search?q=alanatureza+florianopolis+avis" // Remplacez par l'URL exacte de vos avis Google ou par votre page de réservation
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3c9d9b] hover:bg-[#2b7a79] text-white py-3 px-6 rounded-full transition-colors duration-300"
            onClick={() => navigate("/contact")} 
          >
            {t("servicesPage.bookNow")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
