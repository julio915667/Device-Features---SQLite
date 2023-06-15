import { categoriesTypes } from "../types";

const { SELECT_CATEGORY } = categoriesTypes;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});
