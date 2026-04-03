import React, { useState } from "react";

import img1 from "../assets/mirissa.jpg";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic4.jpg";
import img4 from "../assets/pic8.jpg";
import img5 from "../assets/pic10.jpg";
import img6 from "../assets/pic11.jpg";
import img7 from "../assets/pic12.jpg";
import img8 from "../assets/pic 7.jpg";

import GalleryHero from "../assets/pic2.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="w-full bg-white">


      {/* HERO */}
            <div
              className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${GalleryHero})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
      
              <div className="relative text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Gallery
                </h1>
                <p className="mt-4 text-sm md:text-lg text-gray-200">
                  Discover the beauty of Sri Lanka through our lens
                </p>
              </div>
            </div>


      {/* GALLERY GRID */}
     <div className="columns-2 md:columns-3 gap-4 space-y-4 px-4 py-10">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      onClick={() => openLightbox(img)}
      className="w-full mb-4 rounded-xl shadow-md hover:scale-105 transition cursor-pointer"
    />
  ))}
</div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={currentImage}
            alt="Enlarged"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;