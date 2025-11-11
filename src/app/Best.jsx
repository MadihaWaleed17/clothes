import React, { useState } from "react";

const brands = [
  {
    name: "Sana Safinaz",
    image: "/images/sana/415-offwhite-m-3.png",
    gallery: [
      "/images/sana/415-offwhite-m-1.png",
      "/images/sana/415-offwhite-m-2.png",
      "/images/sana/415-offwhite-m-3.png",
      "/images/sana/415-offwhite-m-1.png",
    ],
  },
  {
    name: "Charizma",
    image: "/images/ch/14-C-STND-SKIN BLACK-1.png",
    gallery: [
      "/images/ch/14-C-STND-SKIN BLACK-1.png",
      "/images/ch/14-C-STND-SKIN BLACK-2.png",
      "/images/ch/14-C-STND-SKIN BLACK-3.png",
      "/images/ch/14-C-STND-SKIN BLACK-4.png",
    ],
  },
  {
    name: "Ethnic",
    image: "/images/et/8-E-S-1-PAL-YEL.png",
    gallery: [
      "/images/et/8-E-S-1-PAL-YEL.png",
      "/images/et/8-E-S--2-PAL YEL.png",
      "/images/et/8-E-S--3-PAL YEL.png",
      "/images/et/8-E-S--4-PAL YEL.png",
    ],
  },
];

const Best = () => {
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
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 tracking-wider">
          Bestsellers
        </h2>
        <h5 className="text-center my-4 sm:my-6 font-medium text-lg sm:text-xl text-gray-600">
          Discover this season’s favorites and explore what's trending now
        </h5>

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
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
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
    </section>
  );
};

export default Best;
