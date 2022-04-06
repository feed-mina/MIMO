import React from "react";
import { NavLink, Link } from "react-router-dom";
import basket from "../../../Assets/img/shopping_basket.png";

import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <div className="first-nav">
      <NavLink to="/cart">
        <img className="basket" src={basket} />
      </NavLink>
    </div>
  );
};

export default HeaderNav;
