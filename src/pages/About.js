// src/pages/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner in real estate excellence.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of real estate professionals committed to helping you find the perfect property. With years of experience in the market, we bring deep insights and personalized service to every client interaction.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            To make property buying, selling, and renting seamless and transparent. We leverage technology, market data, and personal connections to deliver an unmatched experience.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔️ Wide network of verified properties</li>
            <li>✔️ Trusted by thousands of buyers and sellers</li>
            <li>✔️ Local expertise with global standards</li>
            <li>✔️ Transparent pricing and support</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
