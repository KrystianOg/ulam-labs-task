import "../styles/navbar.scss";
import { ThemeSwitch } from "../components";

const NavBar = () => {
	return (
		<nav>
			<img src="/iota-logo.svg" alt="logo" />
			<h2 className="no-wrap">Crypto-App</h2>
			<ThemeSwitch />
		</nav>
	);
};

export default NavBar;
