// src/components/PresentationImage.jsx

import React from 'react';

const PresentationImage = () => {
  return (
    <div className="w-full max-h-[300px] md:max-h-[500px] overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Pont_des_Arts%2C_Paris.jpg" // Remplacez par le chemin vers votre image
        alt="Présentation"
          className="w-full h-full object-cover md:object-center"
      />
    </div>
  );
};

export default PresentationImage;
