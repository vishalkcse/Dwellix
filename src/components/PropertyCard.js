// src/components/PropertyCard.js
import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <img
        src={property.img}
        alt={property.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-3">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-orange-600 font-semibold">{property.price}</p>
      <Link
        to={`/property/${property.id}`}
        className="block text-center bg-blue-600 text-white py-2 mt-3 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;
