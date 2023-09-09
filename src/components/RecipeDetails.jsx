import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Time from "../images/time.png";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

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
  }, [id, API_KEY]);

  if (!recipeDetails) return <div className="loading">Loading...</div>;

  return (
    <div className="recipe-details-container">
      <h2 className="detail-title">{recipeDetails.title}</h2>
      <div className="preparation-container">
        <img src={Time} alt={recipeDetails.readyInMinutes} />
        <p>
          <strong>Preparation</strong>: {recipeDetails.readyInMinutes} minutes
        </p>
      </div>
      <div className="ingredients-container">
        <h3 className="ingredients-title">Ingredients:</h3>
        <div className="ingredients">
          <ul className="recipe-details">
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      </div>
      {recipeDetails.instructions && (
        <div className="instructions-container">
          <h3 className="instructions-title">Instructions:</h3>
          <div
            className="instructions"
            dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
          />
        </div>
      )}
      <img
        className="recipe-details-image"
        src={recipeDetails.image}
        alt={recipeDetails.title}
      />
    </div>
  );
}
