import { fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import type { SearchCoin, MarketChart, TrendingCoin, CoinMarket} from '@types'
import { RootState } from './store';

type TrendingCoinData = {
    coins: {item: TrendingCoin}[],
    exchanges: []
}

type SearchCoinData = {
    categories: [],
    coins: SearchCoin[], 
    exchanges: [], 
    icons: [],
    nfts: []
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
})

const api = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: [],
    endpoints: (build) => ({
        search: build.query<SearchCoin[], string>({
            query: (query) => `search?query=${query}`,
            transformResponse: ({coins}: SearchCoinData) => coins.slice(0, 25)
        }),
        searchTrending: build.query<TrendingCoin[], void>({
            query: () => `search/trending`,
            transformResponse: ({coins}:  TrendingCoinData) => coins.map(coin => coin.item)
        }),
        coinsMarkets: build.query<CoinMarket[], string[]>({
            // for future - refreshing 
            query: (ids) => `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=${ids.join(',')}`,
        }),
        coinsMarketChartById: build.query<MarketChart, string>({
            query: (id) => `coins/${id}/market_chart?vs_currency=usd&days=1`
        })
    })
})

export const {
    useLazySearchQuery,
    useSearchTrendingQuery,
    useLazyCoinsMarketsQuery,
    useCoinsMarketChartByIdQuery
} = api

export const selectAllCoinsMarketData = (ids: string[])=> (state: RootState ): (MarketChart| undefined)[] =>  ids.map(id => api.endpoints.coinsMarketChartById.select(id)(state)?.data)

export default api
