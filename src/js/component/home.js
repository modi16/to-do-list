import React from "react";

import { List } from "./list.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container ">
				<p className="text-center">todos</p>
				<div>
					<List />
				</div>
			</div>
		);
	}
}
