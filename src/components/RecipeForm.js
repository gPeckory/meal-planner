import React from "react";

const RecipeForm = ({ search, setSearch, setQuery }) => {
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={getSearch} className="input-form recipe-form">
        <input
          className="recipe-input"
          placeholder="Find a recipe"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button onClick={getSearch} className="ui button recipe-button">
          +
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
