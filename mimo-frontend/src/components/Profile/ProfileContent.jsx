import React from "react";

import FooterNav from "../Layout/nav/FooterNav";
import basket from "../../Assets/img/shopping_basket.png";
import like from "../../Assets/img/like.png";
import { NavLink } from "react-router-dom";
import "./ProfileContent.css";
function ProfileContent() {
  return (
    <div className="profilecontent">
      <NavLink to="/cart">
        <div className="cart">
          <img className="cartimg" src={basket} />
          <p className="carttext">장바구니</p>
        </div>
      </NavLink>

      <hr />

      <NavLink to="/review">
        {" "}
        <div className="review">
          <img className="reviewimg" src={like} />
          <p className="reviewtext">리뷰쓰기</p>
        </div>
      </NavLink>

      <div className="been" stype="height:300px;"></div>
    </div>
  );
}

export default ProfileContent;
