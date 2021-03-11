import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  clearItem,
} from "../../redux/cart/cartAction";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItemQuantity,
  clearItemQuantity,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => clearItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItemQuantity: (item) => dispatch(addItem(item)),
  clearItemQuantity: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
