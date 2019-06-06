import React from 'react';
import SearchBar from './SearchBar';
import instance from './apis/food2fork';

const KEY = '6e981cfec347ee90bf44bf1c93ac02c5'

class App extends React.Component {
    state = {}

    onFormSubmit = async (term) => {
        // Make API call
        const response = await instance.get('/search', {
            params: {
                key: KEY,
                q: term
            }
        });
        console.log(response);
    }

    render() {
        return (
            <div>
                <SearchBar onInputSubmit={this.onFormSubmit} />
            </div>
        );
    }
};

export default App;