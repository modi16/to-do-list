import React from "react";

export class List extends React.Component {
	constructor() {
		super();
		this.state = {
			list: ["Make the bed"]
		};

		this.addTask = this.addTask.bind(this);
	}

	addTask(e) {
		let elem = this.taskInput.value;
		console.log(elem);
		this.setState(prevState => {
			return {
				list: prevState.list.concat(elem)
			};
		});

		//this.taskInput.value="";

		e.preventDefault();

		console.log(this.state.list);
	}

	render() {
		return (
			<div className="wrapper">
				<form onSubmit={this.addTask}>
					<input
						id="task"
						className="square"
						type="text"
						placeholder=" What needs to be done?"
						ref={c => (this.taskInput = c)}
					/>
				</form>

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