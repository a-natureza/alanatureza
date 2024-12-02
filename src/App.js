// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import du Footer

// Importez vos composants de pages ici
import Accueil from './pages/Accueil';
// import Presentation from './pages/Presentation';
// import Equipe from './pages/Equipe';
import NotFound from './pages/NotFound'; // Optionnel : Page 404
import Actualites from './components/Actualites';
import ActualiteDetail from './pages/ActualiteDetail'; // Composant pour les détails

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-16">
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* <Route path="/presentation" element={<Presentation />} />
          <Route path="/equipe" element={<Equipe />} /> */}
           <Route path="/actualites" element={<Actualites />} />
           <Route path="/actualites/:slug" element={<ActualiteDetail />} />
          <Route path="*" element={<NotFound />} /> {/* Optionnel */}
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
