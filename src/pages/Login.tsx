import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux"; // Dispatch for modifying, selector for getting

export const Login = () => {
	const [newUsername, setNewUsername] = useState<string>("");

	const dispatch = useDispatch();
	const username = useSelector((state: any) => state.user.value.username);

	return (
		<h1>
			This is the login page
			<input
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button onClick={() => dispatch(login({ username: newUsername }))}>
				Submit login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
			<h1>{username}</h1>
		</h1>
	);
};
