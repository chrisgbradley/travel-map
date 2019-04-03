import React, { Fragment } from "react";

import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import "normalize.css";
import "./app.css";

import Dashboard from "../dashboard";
import Header from "../header";

setDefaultBreakpoints([
	{ xs: 0 },
	{ s: 376 },
	{ m: 426 },
	{ l: 769 },
	{ xl: 1025 }
]);

const App = function () {
	return (
		<BreakpointProvider>
			<Fragment>
				<Header/>
				<Dashboard/>
			</Fragment>
		</BreakpointProvider>
	)
};

export default App;