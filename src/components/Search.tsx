import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useDebounce } from "usehooks-ts";
import { useLazySearchQuery } from "../app/api";

import { addSearchedCoin, removeSearchedCoin } from "../app/coins";
import { SearchCoin } from "../types";
import { useSnackbar } from "notistack";

import { useAppSelector, useAppDispatch } from "../hooks/useStore";
import { selectCurrentCoins } from "../app/coins";

import "../styles/chart.scss";

const Search = () => {
	const [search, setSearch] = useState<string | null>(null);
	const [searchCoins, setSearchCoins] = useState<SearchCoin[]>([]);
	const dispatch = useAppDispatch();
	const values = useAppSelector(selectCurrentCoins);

	const debouncedSearch = useDebounce(search, 400);
	const [trigger] = useLazySearchQuery();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		trigger(search ?? "")
			.unwrap()
			.then((data) => {
				setSearchCoins(
					data
						.filter((c) => !values.map((v) => v.id).includes(c.id))
						.slice(0, 8)
				);
			});
	}, [debouncedSearch]);

	const handleChange = (coins: SearchCoin[]) => {
		const add = coins.filter((c) => !values.includes(c))[0];

		if (!add) {
			const remove = values.filter((c) => !coins.includes(c));
			remove.forEach((c) => dispatch(removeSearchedCoin(c)));
			return;
		}

		try {
			dispatch(addSearchedCoin(add)); // TODO: check that [0]
		} catch (e: any) {
			enqueueSnackbar(e.message, {
				variant: "error",
				autoHideDuration: 3000,
			});
		}
	};

	return (
		<Autocomplete
			className="search"
			isOptionEqualToValue={(o, v) => o.id === v.id}
			multiple
			autoComplete
			autoHighlight
			options={searchCoins}
			getOptionLabel={(coin) => coin.id}
			onChange={(_, coins) => handleChange(coins)}
			filterSelectedOptions
			renderInput={(params) => (
				<TextField
					{...params}
					onChange={(e) => setSearch(e.target.value)}
					sx={{ borderWidth: "5px", borderColor: "yellow !important" }}
					variant="outlined"
					label="Search"
				/>
			)}
		/>
	);
};

export default Search;
