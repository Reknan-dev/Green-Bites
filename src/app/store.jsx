// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../slices/recipeSlice'

export const store = configureStore({
  reducer: {
    recipes: recipesReducer
  }
});
