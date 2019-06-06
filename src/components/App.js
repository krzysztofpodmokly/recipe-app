import React from 'react';
import instance from './apis/food2fork';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';
import Error from './Error';

const KEY = '6e981cfec347ee90bf44bf1c93ac02c5'

class App extends React.Component {
    state = { recipes: [], selectedRecipe: null, hasError: false }

    onFormSubmit = async (term) => {
        // Make API call
        try {
          const response = await instance.get('/search', {
            params: {
                key: KEY,
                q: term
            }
          });

          // Update state by recipes fetched from food2fork
          this.setState({
            recipes: response.data.recipes,
            selectedRecipe: response.data.recipes[0]
          })
        } catch (err) { // catch error if API limit is exceeded
          this.setState({ hasError: true });
        }
          
        
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

        
    }

    onRecipeSelect = (recipe) => {
        this.setState({ selectedRecipe: recipe });
    }

    componentDidMount = () => {
      this.onFormSubmit('chicken');
    }

    render() {
      if (this.state.hasError) {
        // Rendering custom fallback UI
        return <Error reason="API calls exceeded!" meta="Please try again tomorrow." />
      }
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