import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function RecipeList() {
  const recipes = useSelector((state) => state.recipes.data);
  const searchTerm = useSelector((state) => state.recipes.searchTerm);
  return (
    <div className="search-result-container">
      {searchTerm && ( 
        <h1 className="search-results">
          Search results for: "{searchTerm}"
        </h1>
  )}
    <div className="grid-recipe">
      
      
    
      
      {recipes.map((recipe) => (
        
        <div className="card-recipe" key={recipe.id}>
          
            <img
              className="recipe-image"
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              alt={recipe.title}
            />
            <div className="description-container">
              <h3 className="recipe-name">{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`}style={{ textDecoration: 'none' }}>
              <button className="button-recipe">RECIPE</button>
              </Link>
            </div>
          
        </div>
        
      ))}
    </div>
    </div>
  );
}
