// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ReactGA from 'react-ga4';

// Initialize ReactGA with debug mode enabled
// ReactGA.initialize('G-3F5ESK7TMC', { debug: true });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
