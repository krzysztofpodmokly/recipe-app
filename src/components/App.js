import React from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
// import RecipeDetails from './RecipeDetails';
// import Error from './Error';
import '../styles/utilities.css';

const App = () => {
    return (
      <div className="ui container">
        <SearchBar />
        <div className="ui grid">
          <div className="ui row">
            <div className="nine wide column">
              <RecipesList />
            </div>
            <div className="seven wide column">
              {/* <RecipeDetails /> */}
            </div>
          </div>
        </div>
      </div>
    );

};

export default App;