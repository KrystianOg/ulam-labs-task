import { useCoinsMarketChartByIdQuery } from "@app/api";
import type { Display, SearchCoin } from "@types";
import { Tooltip } from "@mui/material";
import { Chart } from "react-chartjs-2";

interface Props {
	coin: SearchCoin;
	display?: Display;
}

const index = ({ coin, display = "prices" }: Props) => {
	const { data, isLoading } = useCoinsMarketChartByIdQuery(coin.id);

	if (!data) return null;

	return (
		<div className="item">
			<Tooltip title={coin.name} className="icon">
				<img src={coin.thumb} alt={coin.name} />
			</Tooltip>
		</div>
	);
};

export default index;
