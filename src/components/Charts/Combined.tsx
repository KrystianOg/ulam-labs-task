import { selectCurrentCoinsIds } from "@app/coins";
import { selectAllCoinsMarketData } from "@app/api";
import { useAppSelector } from "@hooks/useStore";
import { Display } from "@types";

interface CombinedProps {
	display?: Display;
}

const Combined = ({ display = "prices" }: CombinedProps) => {
	const ids = useAppSelector(selectCurrentCoinsIds);
	const coins = useAppSelector(selectAllCoinsMarketData(ids));

	if (ids.length === 0) return null;

	return (
		<div className="charts-combined">
			{/* <FlexibleXYPlot
				xType="time"
				yPadding={25}
				margin={{
					left: 60,
				}}
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<YAxis title="USD" />
				<XAxis />
				{coins.map((coin: { [x: string]: any[] }, index: number) => {
					if (!coin) return null;

					return (
						<LineSeries
							key={index}
							data={coin[display].map((v) => {
								return { x: v[0], y: v[1] };
							})}
						/>
					);
				})}
			</FlexibleXYPlot> */}
		</div>
	);
};

export default Combined;
