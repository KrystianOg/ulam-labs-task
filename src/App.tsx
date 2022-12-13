import { CssBaseline, Container } from "@mui/material";
import { NavBar, Hero, Footer, Trending, Chart } from "./components";

function App() {
	return (
		<>
			<CssBaseline />
			<NavBar />
			{/* <Hero /> */}
			<Container>
				<main>
					<Trending />
					<Chart />
					<Hero />
				</main>
				<Footer />
			</Container>
		</>
	);
}

export default App;
