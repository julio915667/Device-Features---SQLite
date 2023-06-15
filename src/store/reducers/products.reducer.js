import { PRODUCTS } from "../../constants/data/products";
import { productTypes } from "../types";

const { FILTER_PRODUCTS, SELECT_PRODUCT } = productTypes;

const initialState = {
  data: PRODUCTS,
  selected: null,
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.data.find((product) => product.id === action.productId),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.data.filter((product) => product.category === action.categoryId),
      };
    default:
      return state;
  }
};

export default productsReducer;
