import Button from "@mui/material/Button";
import { Display } from "@types";
import { SelectDisplayProps } from "./SelectDisplay";

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

export default DisplayButton;
