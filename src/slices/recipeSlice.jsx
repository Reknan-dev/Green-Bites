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
  initialState: { data: [], status: 'idle', error: null},
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = recipesSlice.actions;
export default recipesSlice.reducer;
