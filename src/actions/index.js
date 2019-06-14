import instance from '../apis/food2fork';
import { FETCH_RECIPES, FETCH_RECIPE } from './types';

const KEY = '6e981cfec347ee90bf44bf1c93ac02c5'

export const fetchRecipes = (query) => async dispatch => {
    const response = await instance.get('/search', {
        params: {
            key: KEY,
            q: query
        }
    });
    dispatch({ type: FETCH_RECIPES, payload: response.data });
}

export const fetchRecipe = (id) => async dispatch => {
    const response = await instance.get(`/search/${id}`);
    dispatch({ type: FETCH_RECIPE, payload: response })
}