import React from "react";

const IngredientForm = ({
  ingredientText,
  setIngredientText,
  ingredients,
  setIngredients,
}) => {
  const IngredientTextFunc = (e) => {
    setIngredientText(e.target.value);
  };
  const submitIngredient = (e) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      { text: ingredientText, completed: false, id: Math.random() * 1000 },
    ]);
    setIngredientText("");
  };
  return (
    <div>
      <form onSubmit={submitIngredient} className="input-form">
        <input
          value={ingredientText}
          onChange={IngredientTextFunc}
          type="text"
          placeholder="Enter ingredients"
        />
        <button onClick={submitIngredient} className="ui button">
          +
        </button>
      </form>
    </div>
  );
};

export default IngredientForm;
