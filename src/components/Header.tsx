import ThemeSwitch from "./ThemeSwitch";
import "../styles/header.scss";

const Header = () => {
	return (
		<header>
			<a href="#" className="logo-wrapper">
				<img src="/images/logo64.png" alt="logo" />
				<h2>Crypto-App</h2>
			</a>
			<ThemeSwitch />
		</header>
	);
};

export default Header;
