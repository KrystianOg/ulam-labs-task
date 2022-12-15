import { useState } from "react";
import Search from "../Search";
import Chart from ".";
import {
	useLazyCoinsMarketsQuery,
	useCoinsMarketChartByIdQuery,
} from "../../app/api";
import type { MarketChart, SearchCoin } from "../../types";
import { useInterval } from "usehooks-ts";
import { selectCurrentCoinsIds } from "../../app/coins";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import "../../styles/chart.scss";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Combined from "./Combined";

interface CoinMarketData {
	coin: SearchCoin;
	data?: MarketChart;
}

const ChartsContainer = () => {
	// for updates
	// const [trigger, result] = useLazyCoinsMarketsQuery();
	// useInterval(() => trigger(coins.map(({ coin }) => coin.id)), 10000);

	// for individual values
	const coins = useAppSelector(selectCurrentCoinsIds);

	return (
		<>
			<div className="charts-grid">
				<Search />
				<div className="selected-coins" />
				<Combined />
				{coins.map((coin, index) => (
					<Chart key={index} coin={coin} display="prices" />
				))}
			</div>
		</>
	);
};

export default ChartsContainer;
