import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed in:', formData);

    // Simulate login
    if (formData.email && formData.password) {
      localStorage.setItem('authToken', 'dummy-signin-token');
      if (setIsAuthenticated) setIsAuthenticated(true);
    }

    // Redirect to /todo regardless of login status
    navigate('/todo');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Sign In</h3>

        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn signin-btn w-100">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
