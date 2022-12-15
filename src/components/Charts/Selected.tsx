import { Button, ButtonGroup } from "@mui/material";
import { Display } from "../../types";

interface Props {
	selected: Display;
	setSelected: (value: Display) => void;
}

const Selected = ({ selected, setSelected }: Props) => {
	return (
		<ButtonGroup fullWidth>
			<Button
				variant={selected === "prices" ? "contained" : "outlined"}
				onClick={() => setSelected("prices")}
			>
				Price
			</Button>
			<Button
				variant={selected === "market_caps" ? "contained" : "outlined"}
				onClick={() => setSelected("market_caps")}
			>
				Cap
			</Button>
			<Button
				variant={selected === "total_volumes" ? "contained" : "outlined"}
				onClick={() => setSelected("total_volumes")}
			>
				Vol
			</Button>
		</ButtonGroup>
	);
};

export default Selected;
