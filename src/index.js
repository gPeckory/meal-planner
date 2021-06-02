import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Use "vercel --prod" to update

/* Meal planner notes
I want to create a meal planner that:
1. Has a nice and pleasing UI

2. Uses hooks to update or setState(find out the difference and what is better)

3. Enables the user to create a dropdown list of ingredients needed to pick up to make that particular meal

4. Makes it so you can locally store and delete items with an easy click button

5. Has seperate reusable components for each item that gets created with a dropdown ingridient feature

6. component for the App

Advanced ideas

1. Make it scrape an API to get inspiraton for recipes based on search term

2. Use an API to track the calories

3. Let the users know nutritional information on each recipe in real time as they make it

4. Enable search based on dietry requirements*/
