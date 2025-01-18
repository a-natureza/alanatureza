import React, { useRef, useState } from 'react';

const VideoWithFallback = ({ videoSrc, fallbackImageSrc, videoClassName, imageClassName }) => {
  const videoRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);

  // Détecter une erreur dans le chargement de la vidéo
  const handleVideoError = () => {
    setShowFallback(true);
  };

  return (
    <div className="relative w-full h-full">
      {!showFallback ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className={videoClassName || 'w-full h-full object-cover'}
          onError={handleVideoError} // Affiche l'image si une erreur survient
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback au cas où aucune source vidéo n'est lisible */}
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={fallbackImageSrc}
          alt="Fallback"
          className={imageClassName || 'w-full h-full object-cover'}
        />
      )}
    </div>
  );
};

export default VideoWithFallback;
