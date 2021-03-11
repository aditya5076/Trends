// USED FOR MEMOIZATION{reselect} BCOZ MAPSTATETOPROPS ALWAYS RERENDERS ENTIRE STATE THAT MAY EFFECT TO PERFORMANCE
import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //from rootreducer

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //extends from cartreducer
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden //extends from cartreducer
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

export const selectCartItemPriceTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
