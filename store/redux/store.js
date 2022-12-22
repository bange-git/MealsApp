import { configureStore } from "@reduxjs/toolkit";
import favoriteReduce from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReduce,
  },
});
