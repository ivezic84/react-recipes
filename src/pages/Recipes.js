import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  state = {
    recipes: [],
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_API_KEY}`,
    base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_API_KEY}`,
    query: "&q=",
    еrror: ""
  };

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState({
          error: "Your search did not return any recipes"
        });
      } else {
        this.setState({
          recipes: jsonData.recipes
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => this.componentDidMount()
    );
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-center text-orange text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </div>
    );
  }
}
