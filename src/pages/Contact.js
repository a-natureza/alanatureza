// src/pages/Contact.jsx

import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { t } = useTranslation(); // Initialisation de useTranslation

  // Détecter quand chaque section est visible
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: findUsRef, inView: findUsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: bookingRef, inView: bookingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Variants pour les animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
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

        {/* Titre Principal */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#3c9d9b]">{t('contactPage.title')}</h2>
          <p className="text-lg mt-2 text-gray-700">{t('contactPage.subtitle')}</p>
        </motion.div>

        {/* Informations de Contact */}
        <motion.div
          ref={contactInfoRef}
          initial="hidden"
          animate={contactInfoInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-6 text-center">
            {t('contactPage.contactInfo.heading')}
          </h3>
          <div className="flex flex-col md:flex-row items-center md:justify-center space-y-6 md:space-y-0 md:space-x-12">
            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <a
                href={`https://wa.me/${encodeURIComponent('+5538988391892')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-[#3c9d9b] transition-colors duration-300"
              >
                {t('contactPage.contactInfo.whatsapp')}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-3xl" />
              <a
                href="mailto:contact@alanatureza.com.br"
                className="text-lg text-gray-700 hover:text-[#3c9d9b] transition-colors duration-300"
              >
                {t('contactPage.contactInfo.email')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Où nous trouver */}
        <motion.div
          ref={findUsRef}
          initial="hidden"
          animate={findUsInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-6 text-center">
            {t('contactPage.findUs.heading')}
          </h3>
          <div className="flex space-x-6 justify-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/alanatureza_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-pink-600 hover:text-pink-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/shiatsueacupuntura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Prise de Rendez-vous */}
        <motion.div
          ref={bookingRef}
          initial="hidden"
          animate={bookingInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">
            {t('contactPage.booking.heading')}
          </h3>
          <p className="text-gray-700 text-lg">
            {t('contactPage.booking.message')}
          </p>
        </motion.div>

        {/* Formulaire de Contact */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">
            {t('contactPage.contactForm.heading')}
          </h3>
          <p className="text-gray-700 text-lg">
            {t('contactPage.contactForm.message')}
          </p>
          {/* Vous pouvez ajouter un formulaire ici si nécessaire */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
