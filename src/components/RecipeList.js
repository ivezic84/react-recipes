import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    console.log(recipes);
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center tex-upperase mb-3">
            <h1 className="text-slanted">Recipes list</h1>
          </div>
        </div>
        <div className="row">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe_id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}
