import fakeSearchTrending from "../../static/search-trending.json";
import TrendingItem from "./Item";
import type { TrendingCoin } from "../../types";

import "../../styles/trending.scss";
const index = () => {
	const trending: TrendingCoin[] = fakeSearchTrending.coins.map(
		(coin) => coin.item
	);

	return (
		<ul className="trending-carousel">
			{trending.map((coin) => (
				<TrendingItem key={coin.name} {...coin} />
			))}
		</ul>
	);
};

export default index;
