// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-10 text-center flex flex-col">    
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></main>
      <h1 className="text-3xl font-bold">404 - Page Non Trouvée</h1>
      <p className="mt-4">La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
