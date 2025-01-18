import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Informations de Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="mb-2">📍 Rod. Jorn. Manoel de Menezes</p>
          <p className="mb-2">
            <strong>1666 - Barra da Lagoa</strong>
          </p>
          <p className="mb-2">Florianópolis, SC, 88061-700, Brésil</p>
          <p className="mb-2">✉️ contact@alanatureza.com</p>

          <p>📞 +55 38 98839-1892</p>
        </div>

        {/* Carte de Localisation */}
        <div>
          <h3 className="text-xl font-bold mb-4">Où Nous Trouver</h3>
          <div className="w-full h-48">
            <iframe
              title="Carte de Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.855119317759!2d-48.43821742378752!3d-27.598021022187417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273e7cc4df2fd7%3A0x63dd1df82e08e170!2sRod.%20Jorn.%20Manoel%20de%20Menezes%2C%201666%20-%20Barra%20da%20Lagoa%2C%20Florian%C3%B3polis%20-%20SC%2C%2088061-700%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sfr!4v1737157090789!5m2!1sfr!2sfr"
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
        <div className="flex flex-col justify-between h-full">
          {/* Bloc “Suivez-Nous” */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-Nous</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Bloc “Horaires” */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <p className="mb-2">Lundi - Dimanche : 8h - 20h</p>
          </div>
        </div>
      </div>
        
            

      {/* Bas du Footer */}
      <div className="mt-8 border-t border-[#7d3c98] pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Alana Tureza. Tous droits réservés.
        </p>
        <p>
          <a href="/mentions-legales" className="hover:text-[#f5e6cc]">
            Mentions légales
          </a>{" "}
          |
          <a href="/confidentialite" className="hover:text-[#f5e6cc]">
            {" "}
            Politique de confidentialité
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
