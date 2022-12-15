import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store'
import { SearchCoin } from '../types'

interface CoinsState {
    currentCoins: string[], // where string[] is array of ids
    searchedCoins: SearchCoin[]
}

const initialState = {
    currentCoins: [] as string[], // max size 5
    searchedCoins: [] as SearchCoin[]// max size let's say 25
} as CoinsState

const slice = createSlice({
    name: 'coins',
    initialState: initialState,
    reducers: {
        addSearchedCoin: (state, action: PayloadAction<SearchCoin>) => {
            // check if we reached max of 5 coins
            if (state.currentCoins.length === 5) 
                throw new Error('Max number of coins reached')
            
            state.currentCoins.push(action.payload.id)
            state.searchedCoins.push(action.payload)

            if (state.searchedCoins.length > 25)
                state.searchedCoins.shift()
        },
        removeSearchedCoin: (state, action: PayloadAction<SearchCoin>) => {
            state.currentCoins = state.currentCoins.filter(id => id !== action.payload.id)
        }
    }
})

const selectCoins = (state: RootState) => state.coins
export const selectSearchedCoins = createSelector([selectCoins], coins => coins.searchedCoins);
export const selectCurrentCoinsIds = createSelector([selectCoins], coins => coins.currentCoins);
export const selectCurrentCoins = createSelector([selectSearchedCoins, selectCurrentCoinsIds], (searched, ids) => 
    searched.filter(coin => ids.includes(coin.id))
)

export const { addSearchedCoin, removeSearchedCoin } = slice.actions;
export default slice.reducer
