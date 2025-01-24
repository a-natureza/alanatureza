import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Import du hook useTranslation

const Presentation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ne déclenche l'animation qu'une seule fois
    threshold: 0.1, // Le composant doit être visible à 10 % pour s'activer
  });

  const { t } = useTranslation(); // Initialisation de useTranslation

  const textAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const bottomAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Récupérer les listes depuis les traductions
  const degreesList = t('presentation.degrees.list', { returnObjects: true }) || [];
  const numbersList = t('presentation.numbers.list', { returnObjects: true }) || [];

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden pt-32 pb-12 md:pb-24 px-6"
      style={{
        background: "linear-gradient(180deg, rgba(245,230,204,1) 0%, rgba(60,157,155,1) 100%, rgba(125,60,152,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={bottomAnimation}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-3xl font-bold text-left text-[#7d3c98] mb-4"
        >
          {t('presentation.title')}
        </motion.h3>

        {/* Photo de présentation pour mobile */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageAnimation}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="block md:hidden flex justify-center mb-8"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/alana.jpg`} // Remplacez par votre chemin
            alt={t('presentation.imageAltMobile')}
            className="w-40 h-40 object-cover shadow-lg rounded-full"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          {/* Texte d'accroche */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textAnimation}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="md:w-1/2 text-left mb-8 md:mb-0"
          >
            <h2 className="text-4xl font-bold text-[#3c9d9b]">
              {t('presentation.name')}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mt-2">
              {t('presentation.subtitle')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              {t('presentation.intro')}
            </p>
          </motion.div>

          {/* Photo de présentation pour desktop */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageAnimation}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden md:flex md:w-1/2 justify-center"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/alana.jpg`}
              alt={t('presentation.imageAltDesktop')}
              className="w-40 h-40 md:w-80 md:h-96 object-cover shadow-lg rounded-lg"
            />
          </motion.div>
        </div>

        {/* Informations marquantes */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={bottomAnimation}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full"
        >
          {/* Diplômes et qualifications */}
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#3c9d9b] mb-2">
              {t('presentation.degrees.title')}
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              {degreesList.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
          </div>

          {/* Quelques chiffres */}
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#3c9d9b] mb-2">
              {t('presentation.numbers.title')}
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              {numbersList.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
