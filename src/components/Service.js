import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdSelfImprovement, MdFitnessCenter } from 'react-icons/md';
import { GiLotusFlower, GiBamboo } from 'react-icons/gi';
import { FaHandsHelping, FaSmileBeam } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import du hook useTranslation

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation(); // Initialisation de useTranslation

  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const parentAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  // Récupérer la liste des services depuis les traductions
  const servicesList = t('services.list', { returnObjects: true }) || [];

  // Définir les icônes en fonction de l'index ou d'un identifiant
  const icons = [
    <MdSelfImprovement className="text-4xl text-[#7d3c98]" />,
    <GiLotusFlower className="text-4xl text-[#7d3c98]" />,
    <FaHandsHelping className="text-4xl text-[#7d3c98]" />,
    <MdFitnessCenter className="text-4xl text-[#7d3c98]" />,
    <GiBamboo className="text-4xl text-[#7d3c98]" />,
    <FaSmileBeam className="text-4xl text-[#7d3c98]" />,
  ];

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-white py-12 px-6 component-spacing"
      style={{
        background:
          "linear-gradient(360deg, rgba(125,60,152,1) 0%, rgba(60,157,155,1) 100%, rgba(125,60,152,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleAnimation}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold mb-4"
          style={{ color: '#f5e6cc' }}
        >
          {t('services.title')}
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleAnimation}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-lg mb-8"
          style={{ color: '#f5e6cc' }}
        >
          {t('services.intro')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={parentAnimation}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-center mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-[#7d3c98] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
