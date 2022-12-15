import { CssBaseline, Container } from "@mui/material";
import { NavBar, Trending, ChartsContainer, CoinGecko } from "./components";

function App() {
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
