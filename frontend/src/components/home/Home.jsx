import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todo');
  };

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1>My Tasks</h1>
        <button className="home-btn p-2 mt-3" onClick={handleClick}>
          Make ToDo List
        </button>
      </div>
    </div>
  );
};

export default Home;

