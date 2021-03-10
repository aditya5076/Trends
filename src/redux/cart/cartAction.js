export const toggleCartHidden = () => ({
  type: "TOGGLE_DROPDOWN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});
