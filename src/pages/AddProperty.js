// src/pages/AddProperty.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import "../styles/PostProperty.css";

export default function AddProperty() {
  const { token } = useContext(AuthContext);

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

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Property added successfully");
        setForm({
          title: "",
          price: "",
          location: "",
          description: "",
          image: ""
        });
      } else {
        alert(data.message || "Failed to add property");
      }
    } catch (err) {
      console.error(err);
      alert("Backend not connected (demo mode).");
    }
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
              placeholder="e.g. 85"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              name="location"
              value={form.location}
              onChange={change}
              placeholder="e.g. Mumbai"
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
              placeholder="Describe your property..."
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
