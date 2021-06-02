import React from "react";

const Recipe = ({ title, image, ingredients, url, keys }) => {
  return (
    <div key={keys} className="recipe-wrapper">
      <h4>{title}</h4>
      <a href={url} target="blank">
        <img src={image} alt="Click here for the website" />
      </a>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
