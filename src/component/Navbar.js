import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Начало</Link>
          <Link to="/menu">Пици</Link>
          <Link to="/desserts">Десерти</Link>
          <Link to="/about">За нас</Link>
          <Link to="/contact">Контакти</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Начало </Link>
        <Link to="/menu"> Пици </Link>
        <Link to="/desserts">Десерти</Link>
        <Link to="/about"> За нас </Link>
        <Link to="/contact"> Контакти </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;