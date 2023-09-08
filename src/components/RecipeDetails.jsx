import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Time from "../images/time.png";

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
      <h2 className="detail-title">{recipeDetails.title}</h2>
      <div className="preparation-container">
        <img src={Time} alt={recipeDetails.readyInMinutes}/>
        <p>
          <strong>Preparation</strong>: {recipeDetails.readyInMinutes} minutes
        </p>
      </div>
      <div className="ingredients-container">
        <h3 className="ingredients-title">Ingredients:</h3>
      </div>
      <div className="ingredients">
        <ul className="recipe-details">
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