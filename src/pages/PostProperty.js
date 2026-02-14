import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import "./PostProperty.css";  // same folder import

export default function PostProperty() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  function change(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    // POST to backend (replace with your API)
    fetch("http://localhost:5000/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((d) => {
        alert(d.message || "Property added (demo).");
        navigate("/");
      })
      .catch(() => alert("Failed to add property (backend?)"));
  }

  if (!token)
    return (
      <div className="login-message-container">
        <div className="login-message">
          Please <a href="/login">login</a> to post a property.
        </div>
      </div>
    );

  return (
    <div className="post-property">
      <h2>Post Property</h2>
      <form onSubmit={submit}>
        <input
          name="title"
          value={form.title}
          onChange={change}
          placeholder="Title"
          required
        />
        <input
          name="location"
          value={form.location}
          onChange={change}
          placeholder="Location"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={change}
          placeholder="Price (in rupees)"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={change}
          placeholder="Image URL (optional)"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={change}
          placeholder="Description"
          rows="5"
        />
        <button className="btn primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
