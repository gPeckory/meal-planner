import React from "react";

const Form = ({ inputText, setInputText, meals, setMeals }) => {
  const inputTextFunc = (e) => {
    setInputText(e.target.value);
  };
  const submitMeal = (e) => {
    setMeals([
      ...meals,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");

    e.preventDefault();
  };
  return (
    <div>
      <form className="input-form" onSubmit={submitMeal}>
        <input
          value={inputText}
          onChange={inputTextFunc}
          placeholder="Enter a meal"
          type="text"
        />

        <button className="ui button" onClick={submitMeal}>
          +
        </button>
      </form>
    </div>
  );
};

export default Form;
