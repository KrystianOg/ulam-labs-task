import { useTheme, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import { useSearchTrendingQuery } from "../app/api";
import {
	addSearchedCoin,
	SearchCoinExistsError,
	SearchCoinsFullError,
} from "../app/coins";
import { useAppDispatch } from "../hooks/useStore";
import type { TrendingCoin } from "../types";
import "../styles/trending.scss";

const TrendingItem = (trendingCoin: TrendingCoin) => {
	const dispatch = useAppDispatch();
	const { name, small } = trendingCoin;
	const { enqueueSnackbar } = useSnackbar();

	const handleAddCoin = () => {
		try {
			dispatch(addSearchedCoin(trendingCoin));
		} catch (e: any) {
			if (e instanceof SearchCoinsFullError)
				enqueueSnackbar(e.message, {
					variant: "error",
					autoHideDuration: 3000,
				});
			else if (e instanceof SearchCoinExistsError)
				enqueueSnackbar(e.message, {
					variant: "info",
					autoHideDuration: 3000,
				});
		}
	};

	return (
		<Tooltip describeChild title={name} arrow>
			{/* <a href={`https://www.coingecko.com/en/coins/${id}`}> */}
			<li className="hover-grow" onClick={() => handleAddCoin()}>
				<img src={small} alt={name} />
			</li>
			{/* </a> */}
		</Tooltip>
	);
};

const TrendingWrapper = () => {
	const { palette } = useTheme();
	const { data, isLoading } = useSearchTrendingQuery();
	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="trending-wrapper">
			<h2 style={{ backgroundColor: palette.background.default }}>
				Trending Now
			</h2>
			<ul className="trending-carousel">
				{data?.map((coin) => (
					<TrendingItem key={coin.name} {...coin} />
				))}
			</ul>
		</div>
	);
};

export default TrendingWrapper;
