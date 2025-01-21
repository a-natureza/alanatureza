// src/pages/MentionsLegales.jsx

import React from 'react';

const MentionsLegales = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3c9d9b]">Mentions Légales</h1>

        <div className="space-y-6">
          {/* Informations sur l'Entreprise */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Informations sur l'Entreprise</h2>
            <p><strong>Nom de l'entreprise :</strong> Alana Tureza</p>
            <p><strong>Forme juridique :</strong> [Votre forme juridique]</p>
            <p><strong>Adresse du siège social :</strong> Rod. Jorn. Manoel de Menezes, 1666 - Barra da Lagoa, Florianópolis SC, 88061-700, Brésil</p>
            <p><strong>Email :</strong> contact@alanatureza.com</p>
            <p><strong>Téléphone :</strong> +55 38 98839-1892</p>
            <p><strong>Directeur de la publication :</strong> [Nom du directeur]</p>
            <p><strong>Numéro d'inscription au Registre du Commerce :</strong> [Numéro]</p>
            <p><strong>Numéro de TVA Intracommunautaire :</strong> [Numéro, si applicable]</p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Hébergement du Site</h2>
            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
            <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
          </div>

          {/* Propriété Intellectuelle */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Propriété Intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de Alana Tureza à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Responsabilité</h2>
            <p>
              Alana Tureza ne saurait être tenue pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées, soit de l’apparition d’un bug ou d’une incompatibilité.
            </p>
            <p>
              Alana Tureza ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site.
            </p>
            <p>
              Des espaces interactifs (possibilité de poser des questions dans les forums, commentaires, etc.) sont à la disposition des utilisateurs. Alana Tureza se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans ces espaces qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Alana Tureza se réserve également la possibilité de mettre en cause la responsabilité civile et pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamatoire, etc.
            </p>
          </div>

          {/* Liens Externes */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Liens Externes</h2>
            <p>
              Ce site peut contenir des liens hypertextes vers d’autres sites présents sur Internet. Les liens vers ces autres ressources vous font quitter le site Alana Tureza. Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Alana Tureza. Cependant, il est interdit de faire un lien vers une page de ce site sans autorisation préalable de Alana Tureza.
            </p>
          </div>

          {/* Contact pour les Mentions Légales */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:contact@alanatureza.com" className="text-[#7d3c98] hover:underline">contact@alanatureza.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;
