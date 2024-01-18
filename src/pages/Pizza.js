import React from "react";
import { MenuList } from "../helpers/PizzaList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      
      <h1 className="menuTitle">Нашите пици</h1>
      
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
  );
}

export default Menu;