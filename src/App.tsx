import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<div className="App">
			<Router>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/contact">Contact</Link>
				<Provider store={store}>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
					</Routes>
				</Provider>
			</Router>
		</div>
	);
}

export default App;
