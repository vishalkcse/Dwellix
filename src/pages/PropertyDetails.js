// src/pages/PropertyDetails.js
import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);


  const defaultProperties = useMemo(() => [
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
      description: "Premium luxury villa with modern interiors."
    },
    {
      id: 3,
      title: "Residential Plot",
      location: "Pune",
      price: "60",
      type: "Plot",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      description: "Perfect residential plot in growing area."
    },
    {
      id: 4,
      title: "Modern Apartment",
      location: "Bangalore",
      price: "95",
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
      description: "Modern apartment with smart features."
    },
    {
      id: 5,
      title: "Beachside Villa",
      location: "Goa",
      price: "220",
      type: "Villa",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      description: "Beautiful beachside villa with sea view."
    },
    {
      id: 6,
      title: "City Apartment",
      location: "Hyderabad",
      price: "70",
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description: "Affordable city apartment in prime location."
    }
  ], []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    const combined = [...defaultProperties, ...stored];

    const found = combined.find(
      (p) => String(p.id) === String(id)
    );

    setProperty(found);
  }, [id, defaultProperties]); 

  if (!property) {
    return (
      <div style={{ textAlign: "center", padding: "60px" }}>
        <h2>Property Not Found</h2>
        <Link to="/properties">← Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">

        <img src={property.image} alt={property.title} />

        <div className="details-content">
          <h2>{property.title}</h2>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Type:</strong> {property.type}</p>

          <div className="price-highlight">
            ₹ {property.price} Lakhs
          </div>

          <div className="description-box">
            {property.description || "No description provided."}
          </div>

          <Link to="/properties" className="back-btn">
            ← Back to Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
