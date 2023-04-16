import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/favourite'

const store = configureStore({
    reducer: mainReducer,
})

export default store