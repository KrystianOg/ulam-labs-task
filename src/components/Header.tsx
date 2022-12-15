import "../styles/header.scss";
import { ThemeSwitch } from ".";

const Header = () => {
	return (
		<header>
			<a href="#" className="logo-wrapper">
				<img src="/icons/logo64.png" alt="logo" />
				<h2>Crypto-App</h2>
			</a>
			<ThemeSwitch />
		</header>
	);
};

export default Header;
