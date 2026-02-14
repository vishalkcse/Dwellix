// src/components/Filters.js
import React, { useState } from "react";
import "./Filters.css";

export default function Filters({ onFilter }) {
  const [filters, setFilters] = useState({ location:"", minPrice:"", maxPrice:"", type:"" });

  function change(e){ setFilters(prev => ({...prev, [e.target.name]: e.target.value})); }
  function apply(){ onFilter && onFilter(filters); }

  return (
    <div className="filters container">
      <input name="location" value={filters.location} onChange={change} placeholder="Location" />
      <input name="minPrice" value={filters.minPrice} onChange={change} placeholder="Min Price" />
      <input name="maxPrice" value={filters.maxPrice} onChange={change} placeholder="Max Price" />
      <select name="type" value={filters.type} onChange={change}>
        <option value="">Any Type</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
        <option value="commercial">Commercial</option>
      </select>
      <button className="btn" onClick={apply}>Apply</button>
    </div>
  );
}
