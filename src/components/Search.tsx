import { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useDebounce } from "usehooks-ts";

import "../styles/search-bar.scss";
const Search = () => {
	const [search, setSearch] = useState<string | null>(null);
	const debouncedSearch = useDebounce(search, 700);

	useEffect(
		() => () => {
			// call /search endpoint
			console.log("call /search endpoint");
		},
		[debouncedSearch]
	);

	return (
		<div className="search-bar">
			<input
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
			></input>
			<Box sx={{ display: "flex", alignItems: "flex-end" }}>
				<TextField label="Search" variant="outlined" />
				<AccountCircle />
			</Box>
		</div>
	);
};

export default Search;
