// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';

// Initialize ReactGA with your GA4 Measurement ID
ReactGA.initialize('G-3F5ESK7TMC'); // Replace with your GA4 Measurement ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // You can keep React.StrictMode if you wish
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
