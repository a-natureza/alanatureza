// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importez vos fichiers de traduction
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

i18n
  // Ajout du plugin de détection
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Ressources de traduction
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      pt: { translation: pt },
    },
    // Langue fallback (si la langue détectée n'est pas supportée)
    fallbackLng: 'en',
    // Liste des langues supportées
    supportedLngs: ['en', 'fr', 'es', 'pt'],

    // Configuration du détecteur
    detection: {
      // L'ordre de priorité pour déterminer la langue
      // -> On commence par "navigator" (la langue du navigateur),
      // puis "cookie", "localStorage", etc.
      order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'querystring'],

      // Où stocker la langue détectée ?
      // -> Ici, dans un cookie (ou localStorage si vous préférez).
      caches: ['cookie'],
      
      // Options supplémentaires (si besoin)
      // cookieMinutes: 10080, // Durée de validité du cookie en minutes (7 jours)
    },

    // Désactivation de l'échappement de valeurs (pour React)
    interpolation: {
      escapeValue: false,
    },

    // Activez `debug: true` si vous souhaitez voir les logs de détection dans la console
    debug: false,
  });

export default i18n;
