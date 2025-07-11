import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Todo from './components/todo/Todo';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/todo" element={<Todo />} /> {/* ✅ Open route, no auth required */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
