/* eslint-disable no-case-declarations */
import { sumTotal } from "../../utils";
import { cartTypes } from "../types";

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = cartTypes;

const initialState = {
  data: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart = [];
      if (state.data.find((item) => item.id === action.item.id)) {
        updatedCart = state.data.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        updatedCart = [...state.data, item];
      }
      return {
        ...state,
        data: updatedCart,
        total: sumTotal(updatedCart),
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.data.filter((item) => item.id !== action.id);
      return {
        ...state,
        data: filteredCart,
        total: sumTotal(filteredCart),
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        data: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
