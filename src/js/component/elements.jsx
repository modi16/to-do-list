import React from "react";
import PropTypes from "prop-types";

export class Elements extends React.Component {
	constructor(props) {
		super(props);
	}

	delete(key) {
		this.props.delete(key);
	}

	render() {
		let items = this.props.list.map(item => {
			return (
				<li className="square" key={item.key}>
					{item.task}
					<span onClick={() => this.delete(item.key)}>
						<i className="fas fa-times" />
					</span>
				</li>
			);
		});

		return (
			<div>
				<ul>{items}</ul>
			</div>
		);
	}
}

Elements.propTypes = {
	delete: PropTypes.func,
	list: PropTypes.array
};
