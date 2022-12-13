import type { TrendingCoin } from "../../types";

const TrendingItem = ({ id, name, small }: TrendingCoin) => {
	return (
		<li className="hover-grow">
			<a href={`https://www.coingecko.com/en/coins/${id}`}>
				<img src={small} alt={name} />
			</a>
		</li>
	);
};

export default TrendingItem;
