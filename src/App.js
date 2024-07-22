import React from 'react';
import Home from './components/Home'
import Contact from './components/Contact';
import Loginform from './components/Loginform';
import Privacy from './components/Privacy';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
