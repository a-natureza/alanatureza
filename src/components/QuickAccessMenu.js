// src/components/QuickAccessMenu.jsx

import React from 'react';
import { FaLeaf, FaBook, FaUtensils, FaChild, FaRecycle, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const accessItems = [
  {
    title: 'Feuille Rose',
    link: '/feuille-rose',
    icon: <FaLeaf size={30} />,
    bgColor: 'bg-pink-100',
    hoverBgColor: 'hover:bg-pink-200',
  },
  {
    title: 'Médiathèque',
    link: '/mediatheque',
    icon: <FaBook size={30} />,
    bgColor: 'bg-blue-100',
    hoverBgColor: 'hover:bg-blue-200',
  },
  {
    title: 'Menus Cantine',
    link: '/menus-cantine',
    icon: <FaUtensils size={30} />,
    bgColor: 'bg-yellow-100',
    hoverBgColor: 'hover:bg-yellow-200',
  },
  {
    title: 'Centre Aéré',
    link: '/centre-aere',
    icon: <FaChild size={30} />,
    bgColor: 'bg-green-100',
    hoverBgColor: 'hover:bg-green-200',
  },
  {
    title: 'Recyclage',
    link: '/recyclage',
    icon: <FaRecycle size={30} />,
    bgColor: 'bg-purple-100',
    hoverBgColor: 'hover:bg-purple-200',
  },
  {
    title: 'Administratif',
    link: '/administratif',
    icon: <FaFileAlt size={30} />,
    bgColor: 'bg-gray-100',
    hoverBgColor: 'hover:bg-gray-200',
  },
];

const QuickAccessMenu = () => {
  return (
    <div className="min-w-[320px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-roboto">
      {/* Titre avec Lignes Illustratives */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="text-2xl font-bold text-center mx-4">Accès Rapide</h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Menu Responsive */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {accessItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <div
              className={`flex flex-col items-center justify-center p-4 rounded-md shadow-sm transition transform hover:-translate-y-1 ${item.bgColor} ${item.hoverBgColor}`}
            >
              <div className="mb-3 text-gray-700 min-w-[50px] flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-center">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessMenu;
