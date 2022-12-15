import { useState } from "react";
import { CssBaseline, Container } from "@mui/material";
import { NavBar, Trending, ChartsContainer, CoinGecko } from "./components";

function App() {
	//for starters check all endpoints
	const [query, setQuery] = useState<string | null>(null);

	return (
		<>
			<Container maxWidth="lg">
				<CssBaseline />
				<NavBar />
				{/* <Hero /> */}
				<main>
					{/* <Hero /> */}
					<Trending />
					<ChartsContainer />
				</main>
				<CoinGecko />
			</Container>
		</>
	);
}

export default App;
