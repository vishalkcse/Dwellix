import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/properties");
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Buy, Sell & Rent Properties in Major Indian Cities</p>
          <button className="explore-btn" onClick={handleExplore}>
            Explore Properties
          </button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <h3>Verified Listings</h3>
            <p>All properties are verified by our team for your peace of mind.</p>
          </div>
          <div className="feature-box">
            <h3>Trusted Agents</h3>
            <p>Connect with certified real estate professionals instantly.</p>
          </div>
          <div className="feature-box">
            <h3>Pan-India Reach</h3>
            <p>Properties available in all major metros and towns.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
