import React from 'react';
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes, onRecipeSelect }) => {
    const renderedList = recipes.map(recipe => {
        return (
                <RecipeItem
                    key={ recipe.recipe_id }
                    recipe={ recipe }
                    onRecipeSelect={ onRecipeSelect }
                />
        );
    });


    return (
        <div className="ui relaxed divided list">{ renderedList }</div>
    );
};

export default RecipesList;