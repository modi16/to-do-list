import React from "react";
import { Elements } from "./elements.jsx";
import shortid from "shortid";

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
			key: shortid.generate(),
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
		let fin = this.state.list.filter(item => item.key !== key);
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
				<Elements list={this.state.list} delete={this.removeTask} />
			</div>
		);
	}
}
