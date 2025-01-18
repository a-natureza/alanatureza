// src/components/ReservationCTA.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "../animations/fadeAnimations";

const ReservationCTA = () => {
  // Détecter quand la section est visible
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-[#7d3c98] text-white py-16 px-6 text-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(60,157,155,1) 0%, rgba(44,44,44,1) 100%, rgba(125,60,152,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Container avec animation de cascade */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Titre avec animation */}
          <motion.h2 className="text-4xl font-bold mb-4" variants={fadeInLeft}>
            Prêt à prendre soin de vous ?
          </motion.h2>

          {/* Description avec animation */}
          <motion.p
            className="text-lg mb-8"
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
          >
            Offrez-vous un moment de bien-être et d'équilibre grâce à nos
            séances personnalisées. Prenez rendez-vous dès maintenant pour
            découvrir nos soins adaptés à vos besoins.
          </motion.p>

          {/* Bouton de réservation avec animation */}
          <motion.button
            className="bg-[#f5e6cc] text-[#7d3c98] py-3 px-8 rounded-full shadow-lg hover:bg-[#ebd5b3] hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Réserver maintenant
          </motion.button>

          {/* Infos pratiques avec animation */}
          <motion.div
            className="mt-8 text-sm"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <p>
              📍 Adresse : Rod. Jorn. Manoel de Menezes, 1666 - Barra da Lagoa,
              Florianópolis SC, 88061-700, Brésil
            </p>
            <p>📞 Téléphone : +55 38 98839-1892</p>
            <p>🕒 Horaires : Lundi - Dimanche : 8h - 20h</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationCTA;
