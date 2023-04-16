export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const ADD_MUSIC = 'ADD_MUSIC'

export const addToFavouriteAction = (song) => ({
    type: ADD_TO_FAVOURITE,
    payload: song,
})

export const removeFromFavouriteAction = (song) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: song,
})

export const playMusic = (song) => ({
    type: ADD_MUSIC,
    payload: song,
})