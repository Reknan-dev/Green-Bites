import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const API_KEY = "a0d0f0c32af342db80cee5a02d66c55a";

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      )
      .then((response) => {
        setRecipeDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the recipe details:", error);
      });
  }, [id]); //

  if (!recipeDetails) return <div>Loading...</div>;

  return (
    <div className="recipe-details-container">
      <h2>{recipeDetails.title}</h2>

      <p>Preparation: {recipeDetails.readyInMinutes} minutes</p>

      <h3>Ingredients:</h3>
      <div className="ingredients">
        <ul>
          {recipeDetails.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <img
        className="recipe-details-image"
        src={recipeDetails.image}
        alt={recipeDetails.title}
      />
    </div>
  );
}
