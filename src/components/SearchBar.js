import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value }); // Updating state by what was typed
    }

    onFormSubmit = (e) => {
        e.preventDefault(); // Preventing App from reloading after Enter
        this.props.onInputSubmit(this.state.term); // Transffering input value to App.js
    }

    render() {
        return (
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Ingredient</label>
                <input
                  type="text"
                  onChange={this.onInputChange}
                  value={this.state.term}
                />
              </div>
            </form>
          </div>
        );
    }
};

export default SearchBar;