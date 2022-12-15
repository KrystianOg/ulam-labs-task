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
        setSearchedCoins: (state, action: PayloadAction<SearchCoin[]>) => {
            if (action.payload.length === 6) throw new Error('Max number of coins reached')
        
            if (action.payload.length > state.currentCoins.length || state.currentCoins === null) {
                // we have to add new coins
                action.payload.forEach(coin => {
                    if (!state.currentCoins.includes(coin.id)) {
                        state.currentCoins.push(coin.id)
                        state.searchedCoins.push(coin)
                    }

                    if (state.searchedCoins.length > 25)
                        state.searchedCoins.shift()
                })
            } else {
                // we have to remove coins
                state.currentCoins = state.currentCoins.filter(id => action.payload.map(coin => coin.id).includes(id))
                state.searchedCoins = state.searchedCoins.filter(coin => action.payload.map(coin => coin.id).includes(coin.id))
            }
        }
    }
})

const selectCoins = (state: RootState) => state.coins
export const selectSearchedCoins = createSelector([selectCoins], coins => coins.searchedCoins);
export const selectCurrentCoinsIds = createSelector([selectCoins], coins => coins.currentCoins);
export const selectCurrentCoins = createSelector([selectSearchedCoins, selectCurrentCoinsIds], (searched, ids) => 
    searched.filter(coin => ids.includes(coin.id))
)

export const { setSearchedCoins } = slice.actions;
export default slice.reducer
