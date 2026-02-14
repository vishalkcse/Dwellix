import React from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Find Your Dream Home</h1>
        <p>Buy, Sell & Rent Properties with Ease</p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
