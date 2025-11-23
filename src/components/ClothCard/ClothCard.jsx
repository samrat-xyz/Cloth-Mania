import React from "react";

function ClothCard({ cloth }) {
  return (
    <div className="p-4">
      <div
        className="
          bg-white rounded-xl shadow-md overflow-hidden 
          hover:shadow-xl transition-all duration-300
        "
      >
        {/* Image */}
        <div className="h-[420px] overflow-hidden">
          <img
            src={cloth.image}
            alt={cloth.name}
            className="w-full h-full object-cover 
                       hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Name */}
          <h3 className="text-xl font-semibold text-gray-900">
            {cloth.name}
          </h3>

          {/* Price */}
          <p className="text-lg font-bold text-emerald-600">
            ${cloth.price}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {cloth.description}
          </p>

          {/* Stock */}
          <p
            className={`text-sm font-medium ${
              cloth.inStock
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {cloth.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClothCard;
