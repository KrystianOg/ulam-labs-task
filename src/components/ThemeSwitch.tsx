import { useDarkMode } from "usehooks-ts";
import "../styles/theme_switch.scss";

const ThemeSwitch = () => {
	const { isDarkMode, toggle } = useDarkMode(true);

	return (
		<div className="card__toggle">
			<input
				id="themeSwitcher"
				className="ThemeToggle"
				type="checkbox"
				checked={!isDarkMode}
				onChange={toggle}
			/>
		</div>
	);
};

export default ThemeSwitch;
