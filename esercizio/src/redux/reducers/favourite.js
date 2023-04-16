import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, ADD_MUSIC } from "../action"

const initialState = {
    playedSong: {
        songInAction: [],
    },
    favouriteSong: {
        content: [],
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favouriteSong: {
                    content: [...state.favouriteSong.content, action.payload],
                },
            }

        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favouriteSong: {
                    content: [
                        ...state.favouriteSong.content.slice(0, action.payload),
                        ...state.favouriteSong.content.slice(action.payload + 1),
                    ],
                },
            }
        case ADD_MUSIC:
            return {
                ...state,
                playedSong: {
                    songInAction: [action.payload]
                }
            }
        default:
            return state
    }
}

export default mainReducer