import React from 'react';
import instance from './apis/food2fork';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';

const KEY = '6e981cfec347ee90bf44bf1c93ac02c5'

class App extends React.Component {
    state = { recipes: [], selectedRecipe: null }

    onFormSubmit = async (term) => {
        // Make API call
        const response = await instance.get('/search', {
            params: {
                key: KEY,
                q: term
            }
        });
        
        // data = {
        //     f2f_url: url
        //     image_url: url
        //     publisher: "All recipes"
        //     publisher_url: url
        //     recipe_id: "2193"
        //     social_rank: 100
        //     source_url: url
        //     title: "Random spice"
        // }

        console.log(response.data.recipes)
        // Update state by recipes fetched from food2fork
        this.setState({ recipes: response.data.recipes })
    }

    onRecipeSelect = (recipe) => {
        console.log(recipe)
        this.setState({ selectedRecipe: recipe })
    }

    render() {
        return (
          <div className="ui container">
            <SearchBar onInputSubmit={this.onFormSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="nine wide column">
                  <RecipesList
                    recipes={this.state.recipes}
                    onRecipeSelect={this.onRecipeSelect}
                  />
                </div>
                <div className="seven wide column">
                  <RecipeDetails recipe={this.state.selectedRecipe} />
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default App;