// src/pages/Properties.js
import React from 'react';
import './Properties.css'; // Optional: if you want custom styles

function Properties() {
  return (
    <div className="properties-page">
      <h1>Browse Properties</h1>
      <p>Explore residential, commercial, and rental properties across India.</p>

      <div className="property-grid">
        {/* You can replace these with dynamic property cards */}
        <div className="property-card">
          <img src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg" alt="Property 1" />
          <h3>2BHK Apartment in Mumbai</h3>
          <p>₹80 Lakhs</p>
        </div>
        <div className="property-card">
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="Property 2" />
          <h3>Luxury Villa in Delhi</h3>
          <p>₹1.5 Crore</p>
        </div>
        <div className="property-card">
          <img src="https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg" alt="Property 3" />
          <h3>Residential Plot in Pune</h3>
          <p>₹60 Lakhs</p>
        </div>
      </div>
    </div>
  );
}

export default Properties;
