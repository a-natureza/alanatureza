// src/components/Testimonials.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper et SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/react';
// Import des modules depuis swiper/modules (et non 'swiper')
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

// Import obligatoire des styles de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Données de témoignages optimisées
const testimonialsData = [
  {
    name: 'Kevin James',
    feedback:
      'Eu tinha um dor de corto velo para anos e duas visitas Ela cura. no 2009 ainda não tem nenhuma dor.  Excelente Atendimento!  Ela um Querida. Vale pena',
    photo: `${process.env.PUBLIC_URL}/assets/images/KevinJames.jpg`,
  },
  {
    name: 'Verena Carvalho vieira',
    feedback:
      'Excellent professionnel !',
    photo: `${process.env.PUBLIC_URL}/assets/images/VerenaCarvalho.jpg`,
  },
  {
    name: 'Wily Scur',
    feedback:
      'Alana é uma terapeuta excepcional, com um dom nato de conectividade com o ser. Simpática e envolvente. Sua intuição conduz as técnicas tradicionais serem profundamente potencilazadas.   Além de suas técnicas próprias, criativas e eficazes. Ela não uma simples massagista, tem uma bruxinha mestre aí. É uma benção interagir com Alana. Super recomendo.',
      photo: `${process.env.PUBLIC_URL}/assets/images/WilyScur.jpg`,
  },
  {
    name: 'Maíra Tonelli Santos',
    feedback:
      'Profissional excelente! Precisei de uma massagem de urgência e a contatei por indicação. Encontrei uma profissional extremamente qualificada, que me analisou como um ser completo, explicou, respeitou, acolheu e numa primeira sessão já fez eu me sentir incrivelmente melhor. Super recomendo!',
      photo: `${process.env.PUBLIC_URL}/assets/images/MaíraTonelliSantos.jpg`, 
  },
  {
    name: 'Valentina',
    feedback:
      'a Alana me atendeu super bem, pessoa querida e muito experiente :D',
      photo: `${process.env.PUBLIC_URL}/assets/images/Valentina.jpg`, 
  },
  {
    name: 'Anneesha Maitreya',
    feedback:
      'Ótima profissional. Foi a minha primeira sessão de acupuntura e amei',
      photo: `${process.env.PUBLIC_URL}/assets/images/Anneesha.png`, 
  },
];

// Animations pour les éléments internes
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  // Détecter quand la section est visible
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#7d3c98] text-white py-16 px-6"
      style={{
        background: "linear-gradient(180deg, rgba(125,60,152,1) 0%, rgba(245,230,204,1) 100%, rgba(60,157,155,1) 100%)",
      }}
    >
      
      <div className="max-w-7xl mx-auto">
        {/* Titre & description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: '#f5e6cc' }}
          >
            AVIS CLIENTS
          </h2>
          <p
            className="text-lg"
            style={{ color: '#f5e6cc' }}
          >
            Votre Satisfaction, Ma Priorité !
          </p>
        </motion.div>

        {/* Swiper avec Animations Internes */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1} // Valeur par défaut (mobile)
            spaceBetween={20} // Espace entre les slides
            loop={true} // Boucle infinie
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation // Flèches next/prev
            pagination={{ clickable: true }}
            breakpoints={{
              // Quand la largeur >= 640px, on affiche 2 slides par vue
              640: {
                slidesPerView: 2,
              },
            }}
            className="pb-10" // Padding bottom pour laisser de la place à la pagination
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + index * 0.2 }}
                  className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center h-full transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                    loading="lazy" // Lazy-loading de l'image
                  />
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: '#3c9d9b' }}
                  >
                    {testimonial.name}
                  </h3>

                  <div className="flex justify-center text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="italic text-center">"{testimonial.feedback}"</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
