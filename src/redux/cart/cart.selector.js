// USED FOR MEMOIZATION
import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //from rootreducer

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //extends from cartreducer
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
