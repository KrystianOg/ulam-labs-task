import { XYPlot, LineSeries } from "react-vis";
import type { MarketChart } from "../types";
import marketChartBtc from "../static/market-chart-btc.json";

const Chart = () => {
	const chartBtc = (marketChartBtc as MarketChart).prices;
	const data: { x: number; y: number }[] = chartBtc.map((pair) => ({
		x: pair[0],
		y: pair[1],
	}));

	return (
		<div>
			<XYPlot height={300} width={600}>
				<LineSeries data={data} />
			</XYPlot>
		</div>
	);
};

export default Chart;
