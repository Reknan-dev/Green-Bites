import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = "a0d0f0c32af342db80cee5a02d66c55a";

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (term) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${term}&apiKey=${API_KEY}&diet=vegetarian`
  );
  return response.data.results;
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default recipesSlice.reducer;
