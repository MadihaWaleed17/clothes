import { useState } from "react";
import products from "./Product";
import ProductCard from "./ProductCard";

const Gallery = () => {
  const [openModel, setOpenModel] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 tracking-wider text-amber-600">
        Noor Luxury Collection
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setOpenModel(product)}
          />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg w-full sm:w-auto ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-amber-600 text-white hover:bg-amber-700"
          }`}
        >
          Previous
        </button>

        <span className="text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg w-full sm:w-auto ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-amber-600 text-white hover:bg-amber-700"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal for Extra Images */}
      {openModel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto"
          onClick={() => setOpenModel(null)}
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-600 text-3xl font-bold hover:text-gray-900"
              onClick={() => setOpenModel(null)}
            >
              &times;
            </button>

            <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {openModel.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {openModel.extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Extra View"
                  className="w-full h-70 sm:h-70 md:h-100 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>

            {openModel.description && (
              <p className="mt-4 text-gray-700 text-center sm:text-left">
                {openModel.description}
              </p>
            )}

            <button
              className="mt-6 block mx-auto sm:mx-0 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
              onClick={() => setOpenModel(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
