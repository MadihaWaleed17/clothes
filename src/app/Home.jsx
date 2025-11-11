import React, { useState } from "react";
import Best from "./Best";

const brands = [
  {
    name: "Sana Safinaz",
    image: "/images/sana/071-m-yellow-1.png",
    gallery: [
      "/images/sana/071-m-yellow-1.png",
      "/images/sana/071-m-yellow-2.png",
      "/images/sana/071-m-yellow-3.png",
      "/images/sana/071-m-yellow-4.png",
    ],
  },
  {
    name: "Charizma",
    image: "/images/ch/13-C-L-BROWN-5.png",
    gallery: [
      "/images/ch/13-C-L-BROWN-1.png",
      "/images/ch/13-C-L-BROWN-5.png",
      "/images/ch/13-C-L-BROWN-3.png",
      "/images/ch/13-C-L-BROWN-2.png",
    ],
  },
  {
    name: "Ethnic",
    image: "/images/et/5-E-S-LIME-1.png",
    gallery: [
      "/images/et/5-E-S-LIME-1.png",
      "/images/et/5-E-S-LIME-2.png",
      "/images/et/5-E-S-LIME-3.png",
      "/images/et/5-E-S-LIME-4.png",
    ],
  },
];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

  const openModal = (gallery) => {
    setCurrentGallery(gallery);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentGallery([]);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Premium Picks
        </h2>

        {/* Brand Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => openModal(brand.gallery)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-90 sm:h-90 md:h-120 lg:h-120 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-gray-700">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-3xl font-bold hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {currentGallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Best />
    </section>
  );
};

export default Home;
   