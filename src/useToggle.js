import { useState } from "react";

export const useToggle = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toggle = () => {
		setState(!state);
	};

	return [state, toggle]; //using an array so you can change variable name in component
};
