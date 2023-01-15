import { useState } from "react";

interface Props {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
	friends: string[]; // list of strings
	country: Country;
}

export enum Country { // How to make sure a variable is only one of x options	Brazil = "Brazil",
	Brazil = "Brazil",
	Canada = "Canada",
	France = "France",
}

export const Person = (props: Props) => {
	const [name, setName] = useState<string>(""); // how to specify type of a state
	return (
		<div>
			<h1>Name: {props.name}</h1>
			<h1>Email: {props.email}</h1>
			<h1>Age: {props.age}</h1>
			<h1>This person {props.isMarried ? "is" : "is not"} married</h1>
			{props.friends.map((friend: string) => (
				<h1>{friend}</h1>
			))}

			<h1>Country: {props.country}</h1>
		</div>
	);
};
