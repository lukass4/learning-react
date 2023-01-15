import React from "react";
import "./App.css";
import { Country, Person } from "./components/Person";

function App() {
	const getAge = (name: string): number => { // = (input: inputType): returnType => {}
		return 99;
	};

	return (
		<div className="App">
			<Person
				name="Pedro"
				email="pedro@gmail.com"
				age={21}
				isMarried={true}
				friends={["jake", "jessica", "jerry"]}
				country={Country.Brazil} // can only choose on of the countries
			/>
		</div>
	);
}

export default App;
