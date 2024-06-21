import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Redirection par défaut vers la page de login */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
