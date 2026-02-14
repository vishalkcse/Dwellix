import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../components/PropertyCard.css";

const defaultProperties = [
  {
    id: 1,
    title: "2BHK Apartment",
    location: "Mumbai",
    price: "80",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Spacious 2BHK apartment in prime Mumbai location."
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Delhi",
    price: "150",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    description: "Premium luxury villa with modern amenities."
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Pune",
    price: "60",
    type: "Plot",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    description: "Affordable residential plot in growing area."
  },
  {
    id: 4,
    title: "Modern Apartment",
    location: "Bangalore",
    price: "95",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    description: "Modern apartment in IT hub Bangalore."
  },
  {
    id: 5,
    title: "Beachside Villa",
    location: "Goa",
    price: "220",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    description: "Luxury beachside villa with ocean view."
  },
  {
    id: 6,
    title: "City Apartment",
    location: "Hyderabad",
    price: "70",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    description: "Affordable apartment in Hyderabad city center."
  }
];

export default function AvailableProperties() {
  const navigate = useNavigate();

  const [allProperties, setAllProperties] = useState([]);
  const [properties, setProperties] = useState([]);

  /* ✅ No ESLint warning now */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    const combined = [...defaultProperties, ...stored];

    setAllProperties(combined);
    setProperties(combined);
  }, []);

  const handleSearch = ({ location, type, budget }) => {
    let filtered = allProperties;

    if (location) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((p) => p.type === type);
    }

    if (budget) {
      filtered = filtered.filter(
        (p) => Number(p.price) <= Number(budget)
      );
    }

    setProperties(filtered);
  };

  return (
    <div className="property-list">
      <h2>Available Properties</h2>
      <SearchBar onSearch={handleSearch} />

      <div className="property-grid">
        {properties.map((p) => (
          <div key={p.id} className="property-card">
            <img src={p.image} alt={p.title} className="property-image" />
            <h3>{p.title}</h3>
            <p>{p.location}</p>
            <p>₹ {p.price} Lakhs</p>

            <button
              className="details-btn"
              onClick={() => navigate(`/properties/${p.id}`)}
            >
              View Details
            </button>
          </div>
        ))}

        {properties.length === 0 && (
          <p>No properties match your search.</p>
        )}
      </div>
    </div>
  );
}
