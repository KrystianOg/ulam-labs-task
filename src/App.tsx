import { CssBaseline, Container } from "@mui/material";
import { NavBar, Hero, Footer, Trending, ChartsContainer } from "./components";

function App() {
	return (
		<>
			<CssBaseline />
			<NavBar />
			{/* <Hero /> */}
			<Container>
				<main>
					<Trending />
					<ChartsContainer />
					<Hero />
				</main>
				<Footer />
			</Container>
		</>
	);
}

export default App;
