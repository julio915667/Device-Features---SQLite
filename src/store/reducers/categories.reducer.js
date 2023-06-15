/* eslint-disable no-case-declarations */
import { CATEGORIES } from "../../constants/data/categories";
import { categoriesTypes } from "../types";

const { SELECT_CATEGORY } = categoriesTypes;
const initialState = {
  data: CATEGORIES,
  selected: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.data.findIndex((category) => category.id === action.categoryId);

      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.data[indexCategory],
      };
    default:
      return state;
  }
};

export default categoriesReducer;
