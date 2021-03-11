import React from "react";
import CustomBtn from "../custom-button/CustomBtn";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartAction";

import "./CardDropdown.scss";
import CartItem from "../cart-item/CartItem";

const CardDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CardDropdown));
