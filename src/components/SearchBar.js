import "./SearchBar.css";

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, type, budget });
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
        <option value="Commercial">Commercial</option>
      </select>

      <input
        type="number"
        placeholder="Max Budget (in lakhs)"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        min="0"
      />

      <button type="submit">Search</button>
    </form>
  );
}
