import React from "react";
import Nav from "./Nav";
import CreateTiles from "./CreateTiles";
import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<CreateTiles hogsData={hogs} />
		</div>
	);
}

export default App;
