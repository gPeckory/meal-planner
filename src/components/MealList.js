import React, { useEffect } from "react";
import MealItem from "./MealItem";

const MealList = ({ meals, setMeals }) => {
  useEffect(() => {
    const localData = localStorage.getItem("meals");
    if (localData) {
      setMeals(JSON.parse(localData));
    }
  }, [setMeals]);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  });

  return (
    <div>
      {meals.map((meal) => (
        <MealItem
          meals={meals}
          setMeals={setMeals}
          key={meal.id}
          text={meal.text}
          meal={meal}
        />
      ))}
    </div>
  );
};

export default MealList;
