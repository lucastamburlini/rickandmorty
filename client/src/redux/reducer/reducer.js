import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "../actions/actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    let sorted;

    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload
            };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === action.payload)
            }

        case ORDER:

            if (action.payload === "Upward") {
                sorted = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1))
            } else {
                sorted = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1))
            }

            return {
                ...state,
                myFavorites: [...sorted]
            }

        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;