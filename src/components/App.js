import React, { useState, useEffect } from "react";
import Form from "./Form";
import MealList from "./MealList";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [meals, setMeals] = useState([]);

  const [ingredientText, setIngredientText] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const APP_ID = "558f8aea";
  const APP_KEY = "5856f2efc08f4f2f48c1d305e8e4af86";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="container ui form App">
      <h4>Meal Planner</h4>
      <Form
        meals={meals}
        setMeals={setMeals}
        inputText={inputText}
        setInputText={setInputText}
      />
      <MealList meals={meals} setMeals={setMeals} />

      <IngredientForm
        ingredientText={ingredientText}
        setIngredientText={setIngredientText}
        ingredients={ingredients}
        setIngredients={setIngredients}
      />

      <IngredientList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />

      <RecipeForm search={search} setSearch={setSearch} setQuery={setQuery} />

      <RecipeList recipies={recipies} />
    </div>
  );
};

export default App;
