import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipies }) => {
  return (
    <div className="recipe-list-wrapper">
      {recipies.map((recipe) => (
        <Recipe
          keys={recipe.recipe.uri}
          ingredientKey={recipe.recipe.ingredients.foodId}
          url={recipe.recipe.url}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
