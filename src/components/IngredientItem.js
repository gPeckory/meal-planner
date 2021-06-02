import React from "react";

const IngredientItem = ({ text, ingredient, ingredients, setIngredients }) => {
  const deleteFunc = () => {
    setIngredients(ingredients.filter((el) => el.id !== ingredient.id));
  };

  const completeFunc = () => {
    setIngredients(
      ingredients.map((el) => {
        if (ingredient.id === el.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="item">
      <button onClick={deleteFunc} className="ui button">
        x
      </button>
      <div
        className={`ingredient-text ${ingredient.completed ? "completed" : ""}`}
        onClick={completeFunc}
      >
        {text}
      </div>
    </div>
  );
};

export default IngredientItem;
