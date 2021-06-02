import React from "react";

const MealItem = ({ text, meal, meals, setMeals }) => {
  const deleteHandler = () => {
    setMeals(meals.filter((el) => el.id !== meal.id));
  };

  return (
    <div className="item">
      <button onClick={deleteHandler} className="ui button">
        x
      </button>
      <div>{text}</div>
    </div>
  );
};

export default MealItem;
