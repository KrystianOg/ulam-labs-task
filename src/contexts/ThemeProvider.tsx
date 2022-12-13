import { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { ReactNode, useMemo } from "react";
import { useDarkMode } from "usehooks-ts";

// prettier-ignore
const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		...(mode === "light"
           ?{
                primary: {
                    main: "hsl(309, 77%, 40%)",
                    dark: "hsl(291, 83%, 37%)",
                    light: "hsl(333, 96%, 70%)",
                    contrastText: "#ffffff",
                },
                secondary: {
                    main: "hsl(268, 88%, 36%)",
                    light: "hsl(276, 72%, 47%)",
                    dark: "hsl(263, 89%, 25%)",
                },
                background: {
                    default: "#FBFBFB",
                    paper: "#E8E8E8",
                },
                text: {
                    primary: "#000000",
                    secondary: "#333333",
                },
            } 
            : {
                primary: {
                    main: "hsl(309, 77%, 40%)",
                    dark: "hsl(291, 83%, 37%)",
                    light: "hsl(333, 96%, 70%)",
                    contrastText: "#ffffff",
                },
                secondary: {
                    main: "hsl(268, 88%, 36%)",
                    light: "hsl(276, 72%, 47%)",
                    dark: "hsl(263, 89%, 25%)",
                },
                background: {
                    default: "#000A06",
                    paper: "#000604",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#dddddd",
                },
            }
        ),
	},
	shape: {
		borderRadius: 16,
	},
});

type Props = {
	children?: ReactNode;
};
const ThemeProvider: React.FC<Props> = ({ children }) => {
	const { isDarkMode } = useDarkMode();

	const theme = useMemo(
		() => createTheme(getDesignTokens(isDarkMode ? "dark" : "light")),
		[isDarkMode]
	);

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
