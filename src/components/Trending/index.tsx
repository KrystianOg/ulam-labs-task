import TrendingItem from "./Item";
import { useSearchTrendingQuery } from "../../app/api";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { Box } from "@mui/material";

import "../../styles/trending.scss";
const index = () => {
	const { data, isLoading } = useSearchTrendingQuery();

	if (isLoading) return <div>Loading...</div>;

	return (
		<ul className="trending-carousel">
			{data?.map((coin) => (
				<TrendingItem key={coin.name} {...coin} />
			))}
		</ul>
	);
};

export default index;
