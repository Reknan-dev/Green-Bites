import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import "./style.css";
import { useDispatch } from 'react-redux';
import { fetchRecipes } from './slices/recipeSlice';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const API_KEY = "a0d0f0c32af342db80cee5a02d66c55a";



function SearchContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    dispatch(fetchRecipes(term));
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?query=${term}&apiKey=${API_KEY}&diet=vegetarian`)
      .then((response) => {
      
      })
      .catch((error) => {
        console.error("Error while searching for recipes:", error);
      });
      navigate('/');
    };
    return <SearchBar onSearch={handleSearch} />;
  }



export default function App() {


  return (
    <Router>
      <div className="container">
        <Header />
        <Main />
        <SearchContainer />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
