import { useTheme } from "@mui/material";
import { useSearchTrendingQuery } from "@app/api";
import TrendingItem from "./TrendingItem";
import "@styles/trending.scss";

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
