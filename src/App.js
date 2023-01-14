import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("PedroTech");

	const client = new QueryClient({
		defaultOptions: {
			queries: { refetchOnWindowFocus: false },
		},
	});

	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<AppContext.Provider value={{ username, setUsername }}>
					<Router>
						<Navbar />
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/profile"
								element={<Profile />}
							/>
							<Route
								path="/contact"
								element={<Contact />}
							/>
							<Route
								path="*"
								element={<h1>404 not found</h1>}
							/>
						</Routes>
					</Router>
				</AppContext.Provider>
			</QueryClientProvider>
		</div>
	);
}

export default App;
