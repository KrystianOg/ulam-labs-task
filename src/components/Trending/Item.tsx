import type { TrendingCoin } from "../../types";
import { Tooltip } from "@mui/material";

const TrendingItem = ({ id, name, small }: TrendingCoin) => {
	return (
		<Tooltip describeChild title={name} arrow>
			<a href={`https://www.coingecko.com/en/coins/${id}`}>
				<li className="hover-grow">
					<img src={small} alt={name} />
				</li>
			</a>
		</Tooltip>
	);
};

export default TrendingItem;
