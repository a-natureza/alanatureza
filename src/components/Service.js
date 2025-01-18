import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdSelfImprovement, MdFitnessCenter } from 'react-icons/md';
import { GiLotusFlower, GiBamboo } from 'react-icons/gi';
import { FaHandsHelping, FaSmileBeam } from 'react-icons/fa';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const parentAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } },
  };

  const services = [
    {
      title: 'Massagem Relaxante',
      description: 'Promove relaxamento profundo, reduz o estresse e melhora a circulação sanguínea.',
      icon: <MdSelfImprovement className="text-4xl text-[#7d3c98]" />,
    },
    {
      title: 'Acupuntura Tradicional',
      description: 'Prática milenar chinesa que alivia dores e reequilibra o corpo através de pontos específicos.',
      icon: <GiLotusFlower className="text-4xl text-[#7d3c98]" />,
    },
    {
      title: 'Shiatsu Koho-Igaku',
      description: 'Técnica japonesa que utiliza pressão com os dedos para harmonizar corpo e mente.',
      icon: <FaHandsHelping className="text-4xl text-[#7d3c98]" />,
    },
    {
      title: 'Massagem Esportiva',
      description: 'Ideal para atletas, alivia tensões musculares e auxilia na recuperação pós-treino.',
      icon: <MdFitnessCenter className="text-4xl text-[#7d3c98]" />,
    },
    {
      title: 'Bamboo Massage',
      description: 'Massagem feita com bambus, proporcionando relaxamento e ativação da circulação.',
      icon: <GiBamboo className="text-4xl text-[#7d3c98]" />,
    },
    {
      title: 'Shiatsu Facial',
      description: 'Rejuvenesce a pele, melhora a circulação e alivia tensões na face.',
      icon: <FaSmileBeam className="text-4xl text-[#7d3c98]" />,
    },
  ];

  return (
<section
  ref={ref}
  className="relative flex flex-col items-center justify-center text-white py-12 px-6 component-spacing"
  style={{
    background: "linear-gradient(360deg, rgba(125,60,152,1) 0%, rgba(60,157,155,1) 100%, rgba(125,60,152,1) 100%)",
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
          Nos Services
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleAnimation}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-lg mb-8"
          style={{ color: '#f5e6cc' }}
        >
          Découvrez nos thérapies pour une vie plus équilibrée et harmonieuse.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={parentAnimation}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#7d3c98] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
