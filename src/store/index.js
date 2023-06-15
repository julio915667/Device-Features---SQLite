import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  categoriesReducer,
  productsReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, composedEnhancer);
