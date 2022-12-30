import Tooltip from "@mui/material/Tooltip";
import { useSnackbar } from "notistack";

import { useAppDispatch } from "@hooks/useStore";
import type { TrendingCoin } from "@types";
import { addSearchedCoin } from "@app/coins";
import { CoinError } from "@errors";

const TrendingItem = (trendingCoin: TrendingCoin) => {
	const dispatch = useAppDispatch();
	const { name, small } = trendingCoin;
	const { enqueueSnackbar } = useSnackbar();

	const handleAddCoin = () => {
		try {
			dispatch(addSearchedCoin(trendingCoin));
		} catch (e: any) {
			if (e instanceof CoinError) e.enqueueSnackBar(enqueueSnackbar);
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

export default TrendingItem;
