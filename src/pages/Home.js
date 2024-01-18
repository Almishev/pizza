import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {

  const [currentColor, setCurrentColor] = useState('initialColor'); // Set an initial color

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      // Generate a random color (you can customize this logic)
      const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      setCurrentColor(newColor);
    }, 1000); // Change color every second

    // Cleanup interval on component unmount
    return () => clearInterval(colorChangeInterval);
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">

        <h1> PizzaHub Pizzeria </h1>
        <span className="animated-span" style={{ color: currentColor }}>За поръчка-</span> <span className='phone'> 0877382224</span>
        <p>ПИЦА ЗА ВСЕКИ ВКУС</p>
        <Link to="/menu">
          <button>ВИЖ ПИЦИ</button>
        </Link> <br/>
        <Link to="/desserts">
          <button>ВИЖ ДЕСЕРТИ</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
