// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module';

// Initialize GTM with your new GTM ID
const tagManagerArgs = {
  gtmId: 'GTM-KQT8ZV8J',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // You can keep React.StrictMode if you wish
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
