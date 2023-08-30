import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "../actions/actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((favorite) => favorite.id !== Number(action.payload))
            }

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === action.payload)
            }

        case ORDER:
            // eslint-disable-next-line no-case-declarations
            let ordenados;
            if (action.payload === "Upward") {
                ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1))
            } else {
                ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1))
            }

            return {
                ...state,
                myFavorites: [...ordenados]
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