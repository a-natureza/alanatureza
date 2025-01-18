// src/components/FAQ.jsx

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Définir les variants d'animation pour les questions
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Délai entre chaque enfant pour l'effet de cascade
    },
  },
};

const questionVariants = {
  hidden: { opacity: 0, x: -50 }, // Commence invisible et décalé vers la gauche
  visible: { 
    opacity: 1, 
    x: 0, // Finit visible et à sa position d'origine
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Détecter quand la section est visible dans le viewport
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% de la section doit être visible pour déclencher l'animation
    triggerOnce: true, // Ne déclenche l'animation qu'une seule fois
  });

  return (
    <section ref={ref} className="bg-[#f5e6cc] text-black py-16 px-6"
    style={{
        background: "linear-gradient(180deg, rgba(245,230,204,1) 0%, rgba(60,157,155,1) 100%), rgba(125,60,152,1) 100%",
      }}>
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={questionVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-[#3c9d9b]">Questions Fréquemment Posées</h2>
          <p className="text-lg">Trouvez ici les réponses aux questions les plus courantes sur nos services.</p>
        </motion.div>

        {/* Liste des FAQ avec animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={questionVariants}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-[#7d3c98] font-semibold focus:outline-none focus:ring-2 focus:ring-[#7d3c98]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="p-4 text-gray-700 border-t"
                >
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton de Contact */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={questionVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
          className="text-center mt-8"
        >
          <button className="bg-[#7d3c98] text-white py-2 px-6 rounded-full hover:bg-[#3c9d9b] transition duration-300">
            Poser une autre question
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

// Données de FAQ
const faqData = [
  {
    question: 'Quels sont les bienfaits de l’acupuncture ?',
    answer: 'L’acupuncture aide à rééquilibrer l’énergie du corps, soulager les douleurs, réduire le stress et améliorer le bien-être général.',
  },
  {
    question: 'Combien de séances sont nécessaires pour obtenir des résultats ?',
    answer: 'Le nombre de séances dépend de la condition traitée. Certaines personnes ressentent des bienfaits dès la première séance, tandis que d’autres nécessitent plusieurs consultations.',
  },
  {
    question: 'Vos services sont-ils adaptés à tous ?',
    answer: 'Oui, nos services conviennent aux adultes, enfants et seniors. Cependant, certaines techniques peuvent être adaptées selon les besoins individuels.',
  },
  {
    question: 'Proposez-vous des consultations personnalisées ?',
    answer: 'Oui, chaque consultation est personnalisée en fonction des besoins et des objectifs du client.',
  },
  {
    question: 'Quelles sont les contre-indications aux traitements ?',
    answer: 'Certaines conditions spécifiques, comme les infections aiguës, les plaies ouvertes ou les grossesses à risque, peuvent nécessiter des ajustements ou éviter certains traitements.',
  },
  {
    question: 'Puis-je réserver une séance en ligne ?',
    answer: 'Oui, vous pouvez réserver une séance directement en ligne via notre site ou en nous contactant par téléphone.',
  },
];
