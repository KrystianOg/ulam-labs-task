import { Button, ButtonGroup } from "@mui/material";
import { Display } from "../../types";

interface SelectDisplayProps {
	selected: Display;
	setSelected: (value: Display) => void;
}

type DisplayButtonProps = {
	label: string;
	toSelect: Display;
} & SelectDisplayProps;

const DisplayButton = ({
	selected,
	setSelected,
	label,
	toSelect,
}: DisplayButtonProps) => (
	<Button
		variant={selected === toSelect ? "contained" : "outlined"}
		onClick={() => setSelected(toSelect)}
		sx={{ fontWeight: "bold" }}
	>
		{label}
	</Button>
);

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
