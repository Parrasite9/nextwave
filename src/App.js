// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
// Import other program pages...

function App() {
  return (
    <Router>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SharedLayout>
    </Router>
  );
}

export default App;
