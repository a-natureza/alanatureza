// src/pages/TarifsPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next"; 
import { useNavigate } from 'react-router-dom'; 

const TarifsPage = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate(); 

  const experiences = [
    {
      titleKey: 'tarifsPage.experiences.relaxamentoEssencial.title',
      duration: '1 heure',
      descriptionKey: 'tarifsPage.experiences.relaxamentoEssencial.description',
      price: '225 R$',
    },
    {
      titleKey: 'tarifsPage.experiences.harmoniaProfunda.title',
      duration: '1h30',
      descriptionKey: 'tarifsPage.experiences.harmoniaProfunda.description',
      price: '270 R$',
    },
    {
      titleKey: 'tarifsPage.experiences.bemEstarSupremo.title',
      duration: '2 heures',
      descriptionKey: 'tarifsPage.experiences.bemEstarSupremo.description',
      price: '333 R$',
    },
  ];

  const plans = [
    {
      titleKey: 'tarifsPage.plans.renoveSuaEnergia.title',
      sessions: '4 séances d\'une heure',
      descriptionKey: 'tarifsPage.plans.renoveSuaEnergia.description',
      price: '720 R$',
    },
    {
      titleKey: 'tarifsPage.plans.transformacaoTotal.title',
      sessions: '4 séances de 2 heures',
      descriptionKey: 'tarifsPage.plans.transformacaoTotal.description',
      price: '1.233 R$',
    },
    {
      titleKey: 'tarifsPage.plans.massagemTherapeutica.title',
      sessions: '10 séances',
      descriptionKey: 'tarifsPage.plans.massagemTherapeutica.description',
      price: '1.800 R$',
    },
    {
      titleKey: 'tarifsPage.plans.acupunturaIntensiva.title',
      sessions: '10 séances',
      descriptionKey: 'tarifsPage.plans.acupunturaIntensiva.description',
      price: '1.233 R$',
    },
  ];

  // Détecter quand la section est visible
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: experiencesRef, inView: experiencesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: plansRef, inView: plansInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="bg-[#f5e6cc] text-black py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-[#3c9d9b]">{t("tarifsPage.title")}</h2>
        </motion.div>

        {/* Experiences */}
        <motion.div
          ref={experiencesRef}
          initial="hidden"
          animate={experiencesInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">{t("tarifsPage.experiences.heading")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial="hidden"
                animate={experiencesInView ? "visible" : "hidden"}
                variants={listVariants}
                custom={index}
              >
                <h4 className="text-xl font-semibold text-[#7d3c98] mb-2">{t(item.titleKey)}</h4>
                <p className="text-gray-700"><strong>{t("tarifsPage.duration")}:</strong> {item.duration}</p>
                <p className="text-gray-700">{t(item.descriptionKey)}</p>
                <p className="text-gray-700 font-bold mt-2"><strong>{t("tarifsPage.price")}:</strong> {item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Plans */}
        <motion.div
          ref={plansRef}
          initial="hidden"
          animate={plansInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">{t("tarifsPage.plans.heading")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial="hidden"
                animate={plansInView ? "visible" : "hidden"}
                variants={listVariants}
                custom={index}
              >
                <h4 className="text-xl font-semibold text-[#7d3c98] mb-2">{t(item.titleKey)}</h4>
                <p className="text-gray-700"><strong>{t("tarifsPage.sessions")}:</strong> {item.sessions}</p>
                <p className="text-gray-700">{t(item.descriptionKey)}</p>
                <p className="text-gray-700 font-bold mt-2"><strong>{t("tarifsPage.price")}:</strong> {item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bouton de Redirection vers les Avis Google ou la Page de Réservation */}
        <motion.div
          ref={buttonRef}
          initial="hidden"
          animate={buttonInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <motion.button
            className="inline-block bg-[#3c9d9b] hover:bg-[#2b7a79] text-white py-3 px-6 rounded-full transition-colors duration-300"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("tarifsPage.bookNow")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsPage;
