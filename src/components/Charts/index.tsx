import { useState } from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	LineSeries,
	makeVisFlexible,
	FlexibleXYPlot,
} from "react-vis";
import { useCoinsMarketChartByIdQuery } from "../../app/api";
import type { MarketChart, Display } from "../../types";
import "react-vis/dist/style.css";
import "../../styles/vis.scss";
import { useTheme } from "@mui/material/styles";
interface Props {
	coin: string;
	display?: Display;
}

const Chart = ({ coin, display = "prices" }: Props) => {
	// add change display for particular chart
	const [displayType, setDisplayType] = useState<Display>(display);
	const { data, isLoading } = useCoinsMarketChartByIdQuery(coin);
	const FlexibleXYPlot = makeVisFlexible(XYPlot);
	const {
		palette: { primary, secondary },
	} = useTheme();

	const time = new Date().getTime();

	//crosshair
	//zoom

	// const [crosshairValues, setCrosshairValues] = useState()

	if (!data) return null;

	return (
		<FlexibleXYPlot
			xType="time"
			className="item"
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
	);
};

export default Chart;
