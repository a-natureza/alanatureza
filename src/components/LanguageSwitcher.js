// src/components/LanguageSwitcher.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'English', flag: `${process.env.PUBLIC_URL}/assets/flags/us.svg` },
  { code: 'fr', name: 'Français', flag: `${process.env.PUBLIC_URL}/assets/flags/fr.svg` },
  { code: 'es', name: 'Español', flag: `${process.env.PUBLIC_URL}/assets/flags/es.svg` },
  { code: 'pt', name: 'Português', flag: `${process.env.PUBLIC_URL}/assets/flags/pt.svg` },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Déterminer la langue actuelle
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) ||
    languages.find((lang) => lang.code === 'en'); // fallback en anglais

  // Changer la langue
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false); // Fermer le dropdown après sélection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center bg-[#3c9d9b] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#7d3c98] transition duration-300"
      >
        {/* Drapeau */}
        <img
          src={currentLanguage.flag}
          alt={`${currentLanguage.name} flag`}
          className="w-5 h-5 mr-2"
        />

        {/* Sur desktop : nom complet de la langue ; sur mobile : code de la langue */}
        <span className="hidden md:inline">
          {currentLanguage.name}
        </span>
        <span className="inline md:hidden uppercase">
          {currentLanguage.code}
        </span>

        <FaChevronDown className="ml-2" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
          {languages.map((lang) => {
            const isActive = lang.code === i18n.language;
            return (
              <li
                key={lang.code}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  isActive ? 'font-bold' : ''
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                {/* Drapeau */}
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-5 h-5 mr-2"
                />

                {/* Sur desktop : nom complet ; sur mobile : code */}
                <span className="hidden md:inline">{lang.name}</span>
                <span className="inline md:hidden uppercase">{lang.code}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
