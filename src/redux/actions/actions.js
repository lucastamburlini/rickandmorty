/* export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV'; */


import { ADD_FAV, REMOVE_FAV } from './actions-types'

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