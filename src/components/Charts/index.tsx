import { useState } from "react";
import {
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	LineSeries,
	FlexibleXYPlot,
} from "react-vis";
import { useCoinsMarketChartByIdQuery } from "../../app/api";
import type { Display, SearchCoin } from "../../types";
import { useTheme } from "@mui/material/styles";

import "react-vis/dist/style.css";
import { Tooltip } from "@mui/material";
interface Props {
	coin: SearchCoin;
	display?: Display;
}

const Chart = ({ coin, display = "prices" }: Props) => {
	const [displayType, setDisplayType] = useState<Display>(display);
	const { data } = useCoinsMarketChartByIdQuery(coin.id);
	const {
		palette: { primary },
	} = useTheme();

	if (!data) return null;

	return (
		<div className="item">
			<FlexibleXYPlot
				xType="time"
				yPadding={25}
				margin={{
					left: 60,
				}}
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis title="USD" />
				<LineSeries
					color={primary.main}
					data={data[displayType].map((v) => {
						return { x: v[0], y: v[1] };
					})}
				/>
			</FlexibleXYPlot>
			<Tooltip title={coin.name} className="icon">
				<img src={coin.thumb} alt={coin.name} />
			</Tooltip>
		</div>
	);
};

export default Chart;
