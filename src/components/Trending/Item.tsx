import type { TrendingCoin } from "../../types";
import { Tooltip } from "@mui/material";

const TrendingItem = ({ id, name, small }: TrendingCoin) => {
	return (
		<Tooltip describeChild title={name} arrow>
			<li className="hover-grow">
				<a href={`https://www.coingecko.com/en/coins/${id}`}>
					<img src={small} alt={name} />
				</a>
			</li>
		</Tooltip>
	);
};

export default TrendingItem;
