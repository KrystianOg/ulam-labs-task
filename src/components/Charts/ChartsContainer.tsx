import Search from "./Search";
import Selected from "./Selected";
import { useState } from "react";
import Chart from ".";
import type { Display } from "../../types";
import { selectCurrentCoins } from "../../app/coins";
import { useAppSelector } from "../../hooks/useStore";
import Combined from "./Combined";
import { useDarkMode } from "usehooks-ts";
import "../../styles/chart.scss";

const ChartsContainer = () => {
	const [selected, setSelected] = useState<Display>("prices");
	const { isDarkMode } = useDarkMode();
	const coins = useAppSelector(selectCurrentCoins);

	return (
		<>
			<div className={`charts-grid ${isDarkMode ? "dark" : "light"}`}>
				<Search />
				<Selected selected={selected} setSelected={setSelected} />
				<Combined display={selected} />
				{coins.map((coin, index) => (
					<Chart key={index} coin={coin} display="prices" />
				))}
			</div>
		</>
	);
};

export default ChartsContainer;
