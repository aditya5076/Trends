import React from "react";
import CustomBtn from "../custom-button/CustomBtn";
import "./CardDropdown.scss";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

export default CardDropdown;
