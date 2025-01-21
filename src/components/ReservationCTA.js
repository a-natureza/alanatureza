// src/components/ReservationCTA.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next"; // Import du hook useTranslation
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate


// Import des variants d'animation
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "../animations/fadeAnimations";

const ReservationCTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const navigate = useNavigate(); // Initialisation de useNavigate

  const { t } = useTranslation(); // Initialisation de useTranslation

  return (
    <motion.section
      ref={ref}
      className="relative bg-[#7d3c98] text-white py-16 px-6 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(60,157,155,1) 0%, rgba(44,44,44,1) 100%, rgba(125,60,152,1) 100%)",
      }}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Titre avec animation */}
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={fadeInLeft}
          >
            {t('reservationCTA.title')}
          </motion.h2>

          {/* Description avec animation */}
          <motion.p
            className="text-lg mb-8"
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
          >
            {t('reservationCTA.description')}
          </motion.p>

          {/* Bouton de réservation avec animation */}
          <motion.button
            className="bg-[#f5e6cc] text-[#7d3c98] py-3 px-8 rounded-full shadow-lg hover:bg-[#ebd5b3] hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")
            }
           
          >
            {t('reservationCTA.button')}
          </motion.button>

          {/* Infos pratiques avec animation */}
          <motion.div
            className="mt-8 text-sm"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <p>
              📍 {t('reservationCTA.address')}
            </p>
            <p>📞 {t('reservationCTA.phone')}</p>
            <p>🕒 {t('reservationCTA.hours')}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReservationCTA;
