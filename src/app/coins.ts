import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@app/store'
import { SearchCoin, TrendingCoin } from '@types'
import { SearchCoinsFullError, SearchCoinExistsError } from '@errors'

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
        setSearchedCoins: ({currentCoins, searchedCoins}, {payload: coins}: PayloadAction<SearchCoin[]>) => {
            if (coins.length >= 6) throw new SearchCoinsFullError()
        
            if (coins.length > currentCoins.length || currentCoins === null) {
                addWithSearchFilter({currentCoins, searchedCoins}, coins[coins.length - 1])
            } else {
                // remove non-included coins
                return {
                    currentCoins: currentCoins.filter(id => coins.map(c => c.id).includes(id)),
                    searchedCoins
                }
                
            }
        },
        addSearchedCoin: ({currentCoins, searchedCoins}, {payload: coin}: PayloadAction<TrendingCoin>) => {
            if (currentCoins.includes(coin.id)) throw new SearchCoinExistsError()

            if (currentCoins.length >= 5) throw new SearchCoinsFullError()

            addWithSearchFilter({currentCoins, searchedCoins}, coin)
        }
    }
})

const addWithSearchFilter = ({currentCoins, searchedCoins}: CoinsState, coin: SearchCoin) => {
    currentCoins.push(coin.id)
    const i = searchedCoins.map(c => c.id).indexOf(coin.id)

    if (i !== -1) 
        searchedCoins.splice(i, 1)
    searchedCoins.push(coin)
}

const selectCoins = (state: RootState) => state.coins
export const selectSearchedCoins = createSelector([selectCoins], coins => coins.searchedCoins);
export const selectCurrentCoinsIds = createSelector([selectCoins], coins => coins.currentCoins);
export const selectCurrentCoins = createSelector([selectSearchedCoins, selectCurrentCoinsIds], (searched, ids) => 
    searched.filter(coin => ids.includes(coin.id))
)

export const { addSearchedCoin, setSearchedCoins } = slice.actions;
export default slice.reducer
