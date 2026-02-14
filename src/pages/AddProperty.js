// src/pages/AddProperty.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import "./PostProperty.css";


export default function AddProperty(){
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({ title:"", price:"", location:"", description:"", image:"" });

  function change(e){ setForm(prev => ({...prev, [e.target.name]: e.target.value})); }

  async function submit(e){
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          Authorization: token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(res.ok) {
        alert(data.message || "Property added");
        setForm({ title:"", price:"", location:"", description:"", image:"" });
      } else {
        alert(data.message || "Failed to add property");
      }
    } catch (err) {
      console.error(err);
      alert("Could not reach backend (demo). Property not saved.");
    }
  }

  if(!token) return <div className="container" style={{padding:20}}>Please login to post property.</div>;

  return (
    <div className="container post-property">
      <h2>Post Property</h2>
      <form onSubmit={submit}>
        <input name="title" value={form.title} onChange={change} placeholder="Title" required />
        <input name="price" value={form.price} onChange={change} placeholder="Price (number)" required />
        <input name="location" value={form.location} onChange={change} placeholder="Location" required />
        <input name="image" value={form.image} onChange={change} placeholder="Image URL (optional)" />
        <textarea name="description" value={form.description} onChange={change} placeholder="Description" rows="5" />
        <button className="btn primary" type="submit">Submit Property</button>
      </form>
    </div>
  );
}
