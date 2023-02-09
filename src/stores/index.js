import { configureStore } from '@reduxjs/toolkit'
import playerReducer from 'stores/player'

export const store = configureStore({
  reducer: {
    player:playerReducer
  },
})