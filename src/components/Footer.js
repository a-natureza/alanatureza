// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="min-w-[320px] bg-gray-800 text-white py-10 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Informations de Contact 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Notre Adresse</h3>
          <p className="mb-2">123 Rue Principale</p>
          <p className="mb-2">75000 Paris</p>
          <p className="mb-2">France</p>
          <p className="mb-2">Email : contact@exemple.com</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
        </div>
        
        {/* Informations de Contact 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Horaires</h3>
          <p className="mb-2">Lundi - Vendredi : 9h - 18h</p>
          <p>Samedi : 10h - 16h</p>
          <p>Dimanche : Fermé</p>
        </div>
        
        {/* Carte de Localisation */}
        <div>
          <h3 className="text-xl font-bold mb-4">Où Nous Trouver</h3>
          <div className="w-full h-48">
            <iframe
              title="Carte de Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991126843374!2d2.292292615674703!3d48.85837307928725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66efdf1a3d56d%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1696176723456!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Réseaux Sociaux */}
        <div>
          <h3 className="text-xl font-bold mb-4">Suivez-Nous</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        
      </div>
      
      {/* Bas du Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
