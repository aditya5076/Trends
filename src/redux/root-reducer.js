import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import CartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
