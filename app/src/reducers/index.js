import { FETCH_STARWARS_DATA } from '../actions/index'

export const initialState = {
    characters: []
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_STARWARS_DATA:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}