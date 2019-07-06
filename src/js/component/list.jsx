import React from "react";

export class List extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};

		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	addTask(e) {
		let cont = this.state.list.length;
		let elem = {
			key: cont,
			task: this.taskInput.value
		};
		console.log(elem);
		this.setState({
			list: this.state.list.concat(elem)
		});

		this.taskInput.value = "";

		e.preventDefault();

		console.log(this.state.list);
	}

	removeTask(key) {
		console.log(key);
		let fin = this.state.list.filter(item => item.key !== key);
		console.log(fin);
		this.setState({ list: fin });
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

				<ul>
					{this.state.list.map(item => (
						<li className="square" key={item.key}>
							{item.task}
							<span onClick={this.removeTask}>
								<i className="fas fa-times" />
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
