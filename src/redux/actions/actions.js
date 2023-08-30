import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "./actions-types"

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    }

}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const resetFav = () => {
    return {
        type: RESET,
    }
}