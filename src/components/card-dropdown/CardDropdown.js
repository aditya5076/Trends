import React from "react";
import CustomBtn from "../custom-button/CustomBtn";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

import "./CardDropdown.scss";
import CartItem from "../cart-item/CartItem";

const CardDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CardDropdown);
