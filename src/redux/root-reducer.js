import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userReducer";
import CartReducer from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory-reducer";
import { shopDataReducer } from "./shop-data/shop-data-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  collections: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
