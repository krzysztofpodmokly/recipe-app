import React from 'react';
import RecipeItem from './RecipeItem';
import PaginationButton from './PaginationButton';

const createButton = (page, type) => {
    <PaginationButton 
        page={ type === 'prev' ? page - 1 : page + 1 }
        onClick={ e => console.log(e) }
    />
}

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage); // 30 Results given by API and we want to display 10
    // if API gives 45 results we have to round the number of pages to top in order to have 5 pages
    let button;
    
    if (page === 1 && pages > 1) { // make sure we've got more than one page
        // Only one button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
                    ${createButton(page, 'prev')}
                    ${createButton(page, 'next')}
                `;
    } else if (page === pages && pages > 1) {
        // Only one button to go to prev page
        button = createButton(page, 'prev');
    }
}

const RecipesList = ({ recipes, onRecipeSelect, page = 1, resPerPage = 10 }) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    const renderedList = recipes.slice(start, end).map(recipe => {
        return (
                <RecipeItem
                    key={ recipe.recipe_id }
                    recipe={ recipe }
                    onRecipeSelect={ onRecipeSelect }
                />
        );
    });


    return (
        <div>
            <div className="ui relaxed divided list">{ renderedList }</div>
            {/* {this.renderButtons(page, recipes.length, resPerPage)} */}
        </div>
    );
};

export default RecipesList;