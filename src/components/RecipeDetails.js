import React from 'react';

const RecipeDetails = ({ recipe }) => {

    if (!recipe) {
        return <div>Loading...</div>
    }

    return (
        <div className="ui card">
            <div className="image">
                <img src={ recipe.image_url } alt={ recipe.title } />
            </div>
            <div className="content">
                <div className="description">{ recipe.title }</div>
                <div className="meta">
                    <span className="date">{ recipe.publisher }</span>
                </div>
            </div>
            <div className="extra content">
                <span>
                    <i className="star icon"></i>
                    Rating: { recipe.social_rank }
                </span>
            </div>
        </div>
    );
};

export default RecipeDetails;