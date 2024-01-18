
import React from "react";
import { MenuList } from "../helpers/DessertList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";

function Desserts() {
  return (
    <div className="menu">
      
    <h1 className="menuTitle">Десерти</h1>
    
    <div className="menuList">
      {MenuList.map((menuItem, key) => {
        return (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        );
      })}
    </div>
  </div>
        
  )

}

export default Desserts