import React from 'react';

var Treatment = React.createClass({

	handleCompleted: function () {
		this.props.completeTreatment(this.props.treatment.id);
	},

	render: function () {

		return (
			<ul>
				<li>
					<div>
						{this.props.treatment}
					</div>
					<button onClick={this.handleCompleted}>Completed</button>
				</li>
			</ul>
		)
	}

});

module.exports = Treatment;
