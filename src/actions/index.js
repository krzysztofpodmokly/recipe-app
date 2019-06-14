import instance from '../apis/food2fork';
import { FETCH_RECIPES, FETCH_RECIPE } from './types';

export const fetchRecipes = (query) => async dispatch => {
    const response = instance.get('/search');
    dispatch({ type: FETCH_RECIPES, payload: response });
}

export const fetchRecipe = (id) => async dispatch => {
    const response = instance.get(`/search/${id}`);
    dispatch({ type: FETCH_RECIPE, payload: response })
}