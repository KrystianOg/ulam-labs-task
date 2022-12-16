import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store'
import { SearchCoin, TrendingCoin } from '../types'

interface CoinsState {
    currentCoins: string[], // where string[] is array of ids
    searchedCoins: SearchCoin[]
}

const initialState = {
    currentCoins: [] as string[], // max size 5
    searchedCoins: [] as SearchCoin[]// max size let's say 25
} as CoinsState

class AddCoinError extends Error {
    constructor(cause: string) {
        super('Max number of coins reached')
        this.name = 'AddCoinError'
        this.cause=cause
    }
}

const slice = createSlice({
    name: 'coins',
    initialState: initialState,
    reducers: {
        setSearchedCoins: ({currentCoins, searchedCoins}, {payload: coins}: PayloadAction<SearchCoin[]>) => {
            if (coins.length === 6) throw new AddCoinError("Full")
        
            if (coins.length > currentCoins.length || currentCoins === null) {
                // we have to push new coin
                currentCoins.push(coins.at(-1)!.id)
                const i = searchedCoins.map(c => c.id).indexOf(coins.at(-1)!.id)

                if (i !== -1) 
                    searchedCoins.splice(i, 1)
                searchedCoins.push(coins.at(-1)!)
            } else {
                // remove non-included coins
                let c =currentCoins.filter(id => coins.map(c => c.id).includes(id))
                return {
                    currentCoins: currentCoins.filter(id => coins.map(c => c.id).includes(id)),
                    searchedCoins
                }
            }
        },
        addSearchedCoin: ({currentCoins, searchedCoins}, {payload: coin}: PayloadAction<TrendingCoin>) => {
            if (currentCoins.includes(coin.id)) throw new AddCoinError("Included")

            if (currentCoins.length === 5) throw new AddCoinError("Full")

            currentCoins.push(coin.id)
            searchedCoins.push(coin)
        }
    }
})

const selectCoins = (state: RootState) => state.coins
export const selectSearchedCoins = createSelector([selectCoins], coins => coins.searchedCoins);
export const selectCurrentCoinsIds = createSelector([selectCoins], coins => coins.currentCoins);
export const selectCurrentCoins = createSelector([selectSearchedCoins, selectCurrentCoinsIds], (searched, ids) => 
    searched.filter(coin => ids.includes(coin.id))
)

export const { addSearchedCoin, setSearchedCoins } = slice.actions;
export default slice.reducer
