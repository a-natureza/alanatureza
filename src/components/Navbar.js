// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { menuVariants, overlayVariants } from "../animations/animationVariants";
import VideoWithFallback from "./VideoWithFallback";

// Importez les icônes souhaitées depuis react-icons
import {
  FaHome,
  FaServicestack,
  FaDollarSign,
  FaEnvelope,
} from "react-icons/fa";

// Exemple de logo, remplacez par votre logo si disponible

const menuItems = [
  {
    title: "Accueil",
    path: "/",
    icon: <FaHome className="inline-block mr-2" />,
  },
  {
    title: "Prestations",
    path: "/prestations",
    icon: <FaServicestack className="inline-block mr-2" />,
  },
  {
    title: "Tarifs",
    path: "/prices",
    icon: <FaDollarSign className="inline-block mr-2" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaEnvelope className="inline-block mr-2" />,
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Fermer le menu mobile quand on change de route
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Fermer le menu mobile quand on resize
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fermer le menu mobile en cliquant en dehors
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest("#mobile-menu-button") &&
        !e.target.closest("#mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 w-full z-50">
        {/* Info Bar */}
        <div className="bg-[#3c9d9b] text-white py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>📞 +55 38 98839-1892</span>
            <button className="bg-[#7d3c98] hover:bg-[#5c2b71] text-white py-1 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5c2b71]">
              Réserver Une Séance
            </button>
          </div>
        </div>

        {/* Navbar */}
        <div className="bg-gradient-to-r from-[#7d3c98] to-[#5c2b71] shadow-lg">
          <nav className="py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <NavLink to="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt="Alana Tureza Logo"
                    className="h-10 w-auto mr-2"
                    loading="lazy"
                  />
                </NavLink>
                <NavLink
                  to="/"
                  style={{ fontFamily: '"Great Vibes", cursive' }}
                  className="text-3xl text-[#f5e6cc] transition-colors hover:text-[white]"
                >
                  <span className="inline-block border-b border-[#f5e6cc] pb-1">
                  Alana Tureza
                  </span>
                </NavLink>
              </div>

              {/* Menu Desktop */}
              <div className="hidden md:flex space-x-6">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      classNames(
                        "relative flex items-center text-lg font-medium transition-colors duration-300",
                        isActive
                          ? "text-[#f5e6cc]"
                          : "text-white hover:text-[#f5e6cc]"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.icon}
                        {item.title}
                        {/* Sous-ligne animée */}
                        <span
                          className={classNames(
                            "absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f5e6cc] transition-all duration-300",
                            isActive ? "w-full" : "hover:w-full"
                          )}
                        ></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <button
                  id="mobile-menu-button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* Overlay */}
                  <motion.div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Slide-in Menu */}
                  <motion.div
                    id="mobile-menu"
                    className="fixed top-0 right-0 w-3/4 max-w-xs bg-[#7d3c98] h-full z-50 shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <div className="mt-16 px-4">
                      <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                          <motion.li
                            key={index}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                          >
                            <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                classNames(
                                  "flex items-center text-white text-xl font-medium hover:text-[#f5e6cc] transition-colors duration-300",
                                  isActive ? "text-[#f5e6cc]" : ""
                                )
                              }
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.icon}
                              {item.title}
                            </NavLink>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>

      {/* Header Content */}
      <div className="pt-12 relative">
        {" "}
        {/* 3rem padding-top to account for Info Bar (py-2) and Navbar (py-4) */}
        {isHomePage && (
          <div className="relative flex flex-col items-center justify-center h-screen text-center">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <VideoWithFallback
                videoSrc={`${process.env.PUBLIC_URL}/assets/videos/Massage.mp4`}
                fallbackImageSrc={`${process.env.PUBLIC_URL}/assets/images/massage.png`}
                videoClassName="w-full h-full object-cover"
                imageClassName="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                Découvrez l'harmonie entre votre corps et votre esprit
              </h1>
              <p className="text-lg md:text-2xl text-[#f5e6cc] drop-shadow-lg">
                Massage thérapeutique et acupuncture traditionnelle au service
                de votre bien-être.
              </p>
            </div>
          </div>
        )}
        {/* Autres contenus peuvent être ajoutés ici */}
      </div>
    </>
  );
};

export default Navbar;
