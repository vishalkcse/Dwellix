// src/pages/AddProperty.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import "./PostProperty.css";

export default function AddProperty() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    image: ""
  });

  function change(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function submit(e) {
    e.preventDefault();

    // Get existing properties
    const existing = JSON.parse(localStorage.getItem("properties")) || [];

    const newProperty = {
      id: Date.now(),
      ...form,
      image: form.image || "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
    };

    const updated = [...existing, newProperty];

    localStorage.setItem("properties", JSON.stringify(updated));

    alert("Property added successfully 🎉");

    setForm({
      title: "",
      price: "",
      location: "",
      description: "",
      image: ""
    });

    navigate("/properties");
  }

  if (!token) {
    return (
      <div className="login-message-container">
        <div className="login-message">
          Please login to post a property.
        </div>
      </div>
    );
  }

  return (
    <div className="post-wrapper">
      <div className="post-card">
        <h2>List Your Property</h2>
        <p className="subtitle">
          Fill in property details to publish on Dwellix.
        </p>

        <form onSubmit={submit} className="post-form">

          <div className="form-group">
            <label>Property Title</label>
            <input
              name="title"
              value={form.title}
              onChange={change}
              placeholder="e.g. 3BHK Apartment in Mumbai"
              required
            />
          </div>

          <div className="form-group">
            <label>Price (in Lakhs)</label>
            <input
              name="price"
              value={form.price}
              onChange={change}
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              name="location"
              value={form.location}
              onChange={change}
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              name="image"
              value={form.image}
              onChange={change}
              placeholder="Paste image link here"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={change}
              rows="4"
            />
          </div>

          <button type="submit" className="post-btn">
            Submit Property
          </button>

        </form>
      </div>
    </div>
  );
}
