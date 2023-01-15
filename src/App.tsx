import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./pages/create-post/create-post";
import { Login } from "./pages/login";
import { Main } from "./pages/main/main";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Main />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/createpost"
						element={<CreatePost />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
