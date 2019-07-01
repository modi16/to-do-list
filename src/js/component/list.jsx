import React from "react";

export class List extends React.Component {
	constructor() {
		super();
		this.state = {
			list: ["Make the bed"],
			value: ""
		};
	}

	render() {
		return (
			<div>
				<input
					id="task"
					className="square"
					type="text"
					placeholder=" What needs to be done?"
					//onChange={() => this.addTask()}
				/>

				<ul className="square">
					{this.state.list.map(item => (
						<li key={item}>
							{item}
							<span>
								<i className="fas fa-times" />
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
