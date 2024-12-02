// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const menuItems = [
  {
    title: 'Accueil',
    path: '/',
    submenu: [
      { title: 'Présentation', link: '/presentation' },
      { title: 'Équipe', link: '/equipe' },
    ],
  },
  {
    title: 'Services',
    path: '/services',
    submenu: [
      { title: 'Consultation', link: '/consultation' },
      { title: 'Support', link: '/support' },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
    submenu: [
      { title: 'Email', link: '/email' },
      { title: 'Localisation', link: '/localisation' },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // États pour la date, le lieu et la température
  const [currentDate, setCurrentDate] = useState('');
  const [location] = useState('Paris'); // Lieu factice
  const [temperature] = useState('10°C'); // Température factice

  // Mettre à jour la date actuelle lors du montage du composant
  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('fr-FR', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className=" min-w-[320px] fixed top-0 w-full shadow z-50">
      {/* Barre d'informations au-dessus de la Navbar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div>
            <span className="font-medium">{currentDate}</span>
          </div>
          <div>
            <span className="font-medium">{location}</span>
            <span className="ml-2">| {temperature}</span>
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold">
              Logo
            </NavLink>
          </div>

          {/* Menu Principal */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      classNames(
                        'block px-3 py-2 rounded-md text-sm font-medium',
                        isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                      )
                    }
                  >
                    {item.title}
                  </NavLink>
                  {/* Sous-menu */}
                  {item.submenu && (
                    <ul className="absolute left-0 top-full bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-10">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.link}
                            className={({ isActive }) =>
                              classNames(
                                'block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white',
                                isActive ? 'bg-blue-500 text-white' : ''
                              )
                            }
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Hamburger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      classNames(
                        'block px-3 py-2 rounded-md text-base font-medium',
                        isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                      )
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                  {/* Sous-menu Mobile */}
                  {item.submenu && (
                    <ul className="ml-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.link}
                            className={({ isActive }) =>
                              classNames(
                                'block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white',
                                isActive ? 'bg-blue-500 text-white' : ''
                              )
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
