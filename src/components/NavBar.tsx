import "../styles/navbar.scss";
import { Switch } from "@mui/material";
import { Search } from "../components";

import { useDarkMode } from "usehooks-ts";
const NavBar = () => {
	const { toggle } = useDarkMode();

	return (
		<nav>
			<img src="/iota-logo.svg" alt="logo" />
			<h2>Crypto-App</h2>
			<Search />
			<Switch onChange={toggle} />
		</nav>
	);
};

export default NavBar;
