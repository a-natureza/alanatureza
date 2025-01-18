import React from 'react';

const TarifsPage = () => {
  const experiences = [
    {
      title: 'Relaxamento Essencial',
      duration: '1 heure',
      description: 'Une pause pour votre corps et votre esprit : choisissez entre un massage thérapeutique ou l\'acupuncture pour soulager les tensions.',
      price: '225 R$',
    },
    {
      title: 'Harmonia Profunda',
      duration: '1h30',
      description: '1h30 de massage thérapeutique ou 1h de massage combiné avec bain de pieds pour revitaliser vos énergies.',
      price: '270 R$',
    },
    {
      title: 'Bem-Estar Supremo',
      duration: '2 heures',
      description: 'La combinaison parfaite : massage relaxant et acupuncture pour une expérience transformante.',
      price: '333 R$',
    },
  ];

  const plans = [
    {
      title: 'Renove Sua Energia',
      sessions: '4 séances d\'une heure',
      description: 'Pour ceux qui recherchent un soin continu et profond, idéal pour soulager le stress accumulé.',
      price: '720 R$',
    },
    {
      title: 'Transformação Total',
      sessions: '4 séances de 2 heures',
      description: 'Le soin idéal pour transformer votre bien-être avec des traitements prolongés.',
      price: '1.233 R$',
    },
    {
      title: 'Massagem Terapêutica',
      sessions: '10 séances',
      description: 'Découvrez la puissance de 10 séances de massage pour restaurer votre santé et votre équilibre.',
      price: '1.800 R$',
    },
    {
      title: 'Acupuntura Intensiva',
      sessions: '10 séances',
      description: 'Un plan dédié pour traiter les inconforts et promouvoir l\'équilibre interne.',
      price: '1.233 R$',
    },
  ];

  return (
    <section className="bg-[#f5e6cc] text-black py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#3c9d9b]">Nos Tarifs</h2>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">Expériences Revitalisantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-[#7d3c98] mb-2">{item.title}</h4>
                <p className="text-gray-700">Durée : {item.duration}</p>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold mt-2">Prix : {item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div>
          <h3 className="text-2xl font-semibold text-[#7d3c98] mb-4">Plans de Traitement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-[#7d3c98] mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.sessions}</p>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold mt-2">Prix : {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsPage;
