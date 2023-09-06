import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import "./style.css";
import axios from "axios";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = "a0d0f0c32af342db80cee5a02d66c55a";

  const handleSearch = (term) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${term}&apiKey=${API_KEY}&diet=vegetarian`
      )
      .then((response) => {
        setRecipes(response.data.results);
      })
      .catch((error) => {
        console.error("Error while searching for recipes:", error);
      });
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Main />
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />

          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
