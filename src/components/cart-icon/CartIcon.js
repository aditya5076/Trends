import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div>
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  // itemCount: cartItems.reduce(
  //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  //   0
  // ),

  // MEMOIZE SELECTOR
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
