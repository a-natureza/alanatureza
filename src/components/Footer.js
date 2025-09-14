// src/components/Footer.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import du hook useTranslation
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';


const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { t } = useTranslation(); // Initialisation de useTranslation

  return (
    <motion.footer
      ref={ref}
      className="bg-[#2C2C2C] text-white py-10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Informations de Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            {t("footer.contactTitle")}
          </h3>
          <p className="mb-2">📍 {t("footer.address")}</p>
          <p className="mb-2">
            <strong>{t("footer.city")}</strong>
          </p>
          <p className="mb-2">{t("footer.fullAddress")}</p>
          <p className="mb-2">✉️ contact@alanatureza.com.br</p>

          <p>📞 {t("footer.phone")}</p>
        </div>

        {/* Carte de Localisation */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            {t("footer.locationTitle")}
          </h3>
          <div className="w-full h-48">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1897346824558!2d-48.52411212475055!3d-27.58764667625136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273f9b14b9d63b%3A0x59419eb3e9246d7f!2sMassagem%20%26%20Acupuntura%20-%20Alana%20Daniele!5e0!3m2!1spt-BR!2sbr!4v1757866907295!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex flex-col justify-between h-full">
          {/* Bloc “Suivez-Nous” */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.followUsTitle")}
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/shiatsueacupuntura/"
                target="_blank"
                rel="shiatsueacupuntura noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://www.instagram.com/alanatureza_/"
                target="_blank"
                rel="tendanapraia noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/5538988391892"
                target="_blank"
                rel="whatsapp noreferrer"
                className="hover:text-[#f5e6cc]"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Bloc “Horaires” */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.hoursTitle")}
            </h3>
            <p className="mb-2">{t("footer.hours")}</p>
          </div>
        </div>
      </div>

      {/* Bas du Footer */}
      <div className="mt-8 border-t border-[#7d3c98] pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Alana Tureza. {t("footer.allRights")}
        </p>
        <p>
          <Link to="/legal" className="hover:text-[#f5e6cc]">
            {t("footer.legalNotices")}
          </Link>
          |
          <Link to="/privacy" className="hover:text-[#f5e6cc]">
            {t("footer.privacyPolicy")}
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
