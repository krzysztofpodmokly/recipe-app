import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';

export default (state = [], action) => {
    switch (action.payload) {
        case FETCH_RECIPES:
            return [ ...state, action.payload ]
        case FETCH_RECIPE:
            return [ ...state, action.payload ]
        default:
            return state;
    }
}