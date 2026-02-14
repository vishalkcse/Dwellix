// src/components/Navbar.js

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { token, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Dwellix
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/add-property" onClick={() => setMenuOpen(false)}>Post Property</Link>

          {token ? (
            <>
              <span className="welcome">
                Hi, {user?.name || user?.email || "User"}
              </span>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn primary">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
