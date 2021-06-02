import React, { useEffect } from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ ingredients, setIngredients }) => {
  useEffect(() => {
    const localData = localStorage.getItem("ingredients");
    if (localData) {
      setIngredients(JSON.parse(localData));
    }
  }, [setIngredients]);

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  });

  return (
    <div>
      <div>
        {ingredients.map((ingredient) => (
          <IngredientItem
            ingredients={ingredients}
            setIngredients={setIngredients}
            key={ingredient.id}
            text={ingredient.text}
            ingredient={ingredient}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
