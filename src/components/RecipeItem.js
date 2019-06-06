import React from 'react';
import './styles/RecipeItem.css';

const RecipeItem = ({ recipe, onRecipeSelect }) => {
    return (
        <div className="recipe-item item" onClick={() => onRecipeSelect(recipe)}>
            <img className="ui avatar image" src={ recipe.image_url } alt={ recipe.title } />
            <div className="content">
                <h4 className="header">{ recipe.title }</h4>
                <div className="description">{ recipe.publisher }</div>
            </div>
        </div>
    )
};

export default RecipeItem;