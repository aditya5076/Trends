export const addItemToCart = (cartItems, cartItemToAdd) => {
  // IF FOUND ? existingCartItem will be a cartItem : will be undefined
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // console.log("existingCartItem ", existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToClear.id
  );
  //remove item from an array if quantity === 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  }
  // decrease quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToClear.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
