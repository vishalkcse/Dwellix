// src/components/Navbar.js

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { token, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Dwellix
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/post">Post Property</Link>
        </nav>

        <div className="nav-actions">
          {token ? (
            <>
              <span className="welcome">Hi, {user?.name || "User"}</span>
              <Link to="/post" className="btn primary">
                Post Property
              </Link>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/signup" className="btn primary">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
