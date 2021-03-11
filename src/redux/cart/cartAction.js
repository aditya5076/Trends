export const toggleCartHidden = () => ({
  type: "TOGGLE_DROPDOWN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
});
