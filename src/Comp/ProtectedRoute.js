// src/Comp/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  // ❌ If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If logged in, show the dashboard
  return children;
}

export default ProtectedRoute;
