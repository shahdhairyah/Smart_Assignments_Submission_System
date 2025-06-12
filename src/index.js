import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import AuthProvider from Comp folder
import { AuthProvider } from './Comp/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* 🔐 Wrap the app in Auth context */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Optional performance reporting
reportWebVitals();
