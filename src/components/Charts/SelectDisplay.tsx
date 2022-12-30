import ButtonGroup from "@mui/material/ButtonGroup";
import DisplayButton from "./DisplayButton";
import { Display } from "@types";

interface SelectDisplayProps {
	selected: Display;
	setSelected: (value: Display) => void;
}

const buttons: {
	label: string;
	toSelect: Display;
}[] = [
	{ label: "Price", toSelect: "prices" },
	{ label: "Cap", toSelect: "market_caps" },
	{ label: "Vol", toSelect: "total_volumes" },
];

const SelectDisplay = ({ selected, setSelected }: SelectDisplayProps) => {
	return (
		<ButtonGroup fullWidth>
			{buttons.map((button) => (
				<DisplayButton
					key={button.toSelect}
					selected={selected}
					setSelected={setSelected}
					{...button}
				/>
			))}
		</ButtonGroup>
	);
};

export default SelectDisplay;

export type { SelectDisplayProps };
