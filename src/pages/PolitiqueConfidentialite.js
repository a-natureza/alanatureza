// src/pages/PolitiqueConfidentialite.jsx

import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3c9d9b]">Politique de Confidentialité</h1>

        <div className="space-y-6">
          {/* Introduction */}
          <div>
            <p>
              Chez Alana Tureza, nous nous engageons à protéger et à respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
            </p>
          </div>

          {/* Responsable du Traitement */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Responsable du Traitement</h2>
            <p>
              <strong>Nom de l'entreprise :</strong> Alana Tureza<br />
              <strong>Adresse :</strong> Rod. Jorn. Manoel de Menezes, 1666 - Barra da Lagoa, Florianópolis SC, 88061-700, Brésil<br />
              <strong>Email :</strong> <a href="mailto:contact@alanatureza.com" className="text-[#7d3c98] hover:underline">contact@alanatureza.com</a><br />
              <strong>Téléphone :</strong> +55 38 98839-1892
            </p>
          </div>

          {/* Données Collectées */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Données Collectées</h2>
            <p>
              Nous collectons différentes informations pour fournir et améliorer nos services :
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Données personnelles :</strong> nom, adresse email, numéro de téléphone, adresse postale.</li>
              <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées.</li>
              <li><strong>Données de réservation :</strong> détails des réservations effectuées via notre site.</li>
              <li><strong>Cookies :</strong> Nous utilisons des cookies pour améliorer votre expérience de navigation.</li>
            </ul>
          </div>

          {/* Utilisation des Données */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Utilisation des Données</h2>
            <p>
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc list-inside">
              <li>Gérer et traiter vos réservations.</li>
              <li>Améliorer notre site web et nos services.</li>
              <li>Personnaliser votre expérience utilisateur.</li>
              <li>Envoyer des communications marketing (si vous y avez consenti).</li>
            </ul>
          </div>

          {/* Base Légale du Traitement */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Base Légale du Traitement</h2>
            <p>
              Notre traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Exécution d'un contrat :</strong> Traitement nécessaire pour gérer vos réservations et fournir nos services.</li>
              <li><strong>Consentement :</strong> Utilisation des données pour des communications marketing (lorsque vous avez donné votre consentement).</li>
              <li><strong>Intérêt légitime :</strong> Amélioration de notre site web et de nos services.</li>
            </ul>
          </div>

          {/* Partage des Données */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Partage des Données</h2>
            <p>
              Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos données avec :
            </p>
            <ul className="list-disc list-inside">
              <li>Nos prestataires de services qui nous aident à gérer notre site et nos services.</li>
              <li>Les autorités légales lorsque cela est requis par la loi.</li>
            </ul>
          </div>

          {/* Sécurité des Données */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Sécurité des Données</h2>
            <p>
              Nous mettons en œuvre diverses mesures de sécurité pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
          </div>

          {/* Droits des Utilisateurs */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Vos Droits</h2>
            <p>
              Vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles.</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes.</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
              <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander de restreindre le traitement de vos données.</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander la transmission de vos données à un autre responsable de traitement.</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à <a href="mailto:contact@alanatureza.com" className="text-[#7d3c98] hover:underline">contact@alanatureza.com</a>.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Gestion des Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience de navigation sur notre site. Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
            </p>
            <p>
              Pour en savoir plus sur notre utilisation des cookies, veuillez consulter notre <a href="/mentions-legales#cookies" className="text-[#7d3c98] hover:underline">section dédiée aux cookies</a>.
            </p>
          </div>

          {/* Contact pour la Politique de Confidentialité */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:contact@alanatureza.com" className="text-[#7d3c98] hover:underline">contact@alanatureza.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolitiqueConfidentialite;
