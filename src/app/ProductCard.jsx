const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <img
        src={product.mainImage}
        alt={product.name}
        className="w-full h-48 sm:h-56 md:h-60 object-cover"
      />

      <div className="p-3 sm:p-4">
        <h3 className="text-md sm:text-lg font-semibold text-gray-800">{product.brandName}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          <strong>Fabric:</strong> {product.fabric}
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Color:</strong> {product.color}
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Size:</strong> {product.availableSize}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-400 line-through text-xs sm:text-sm">
            ${product.beforePrice}
          </span>
          <span className="text-amber-600 font-bold text-sm sm:text-base">
            ${product.nowPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
