import React from "react";
import { Link } from "react-router-dom";

export default function RecipeList({ recipes }) {
  return (
    <div className="grid-recipe">
      {recipes.map((recipe) => (
        <div className="card-recipe" key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img
              className="recipe-image"
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              alt={recipe.title}
            />
          </Link>
          <h3 className="recipe-name">{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}

