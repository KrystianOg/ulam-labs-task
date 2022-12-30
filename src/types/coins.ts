type Image = {
    thumb: string;
    small: string;
    large: string;
}

// output of /search endpoint
type TrendingCoin = {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
} & Image

// output of /search/list
type ListCoin = {
    id: string;
    symbol: string;
    name: string;
}

// output of /search/trending endpoint
type SearchCoin = Omit<TrendingCoin, "small">

// output of /coins/markets
type CoinMarket = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: {
        times: number;
        currency: string;
        percentage: number;
    };
    last_updated: string;
}

// output of /coin/{id}/market_chart endpoint
type MarketChart = {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
    id: string;
}

type Display = "prices" | "market_caps" | "total_volumes";

export type {
    SearchCoin,
    CoinMarket,
    TrendingCoin,
    MarketChart,
    ListCoin,
    Display
}