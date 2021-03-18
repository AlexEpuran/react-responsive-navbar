import React from "react";
import Header from "./Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Main from "./Main";
import Footer from "./Footer";
import { faCheckSquare, faCoffee, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faSearch, faBars, faTimes);

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
