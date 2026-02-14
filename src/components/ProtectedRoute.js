// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // replace with your auth logic

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return (
      <div className="login-warning">
        Please <a href="/login">login</a> to post property.
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
