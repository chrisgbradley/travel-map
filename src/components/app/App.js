import React from "react";

import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import "normalize.css";

import Dashboard from "../dashboard";

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
			<div>
				<h1>hello, world.</h1>
				<Dashboard/>
			</div>
		</BreakpointProvider>
	)
};

export default App;