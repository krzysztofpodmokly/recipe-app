import React from 'react';
import '../styles/RecipeItem.css';

/* 
 'Pasta with tomato and spinach'
    acc: 0 | acc + curr.length = 5 | newTitle = ['Pasta']
    acc: 5 | acc + curr.length = 9 | newTitle = ['Pasta', 'with']
    acc: 9 | acc + curr.length = 15 | newTitle = ['Pasta', 'with', 'tomato'] 
    acc: 15 | acc + curr.length = 18 | newTitle = ['Pasta', 'with', 'tomato'] => 'and' is not pushed to array 
*/
const limitRecipeTitle = (title, limit = 15) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, curr) => {
            if (acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0);
        return `${newTitle.join(' ')} ...`
    }

    return title;
};

const RecipeItem = ({ recipe, onRecipeSelect }) => {
    return (
        <div className="recipe-item item" onClick={() => onRecipeSelect(recipe)}>
            <img className="ui avatar image" src={ recipe.image_url } alt={ recipe.title } />
            <div className="content">
                <h4 className="header">{ limitRecipeTitle(recipe.title) }</h4>
                <div className="description">{ recipe.publisher }</div>
            </div>
        </div>
    )
};

export default RecipeItem;