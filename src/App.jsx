import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import "./style.css";
import { useDispatch } from "react-redux";
import { fetchRecipes, setSearchTerm } from "./slices/recipeSlice";
import { useNavigate } from "react-router-dom";


const API_KEY = "a0d0f0c32af342db80cee5a02d66c55a";

function SearchContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleSearch = (term) => {
    dispatch(fetchRecipes(term));
    dispatch(setSearchTerm(term));
    navigate("/");
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
        <Footer />
      </div>
    </Router>
  );
}
