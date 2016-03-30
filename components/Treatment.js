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
						{this.props.treatment.drug} <button onClick={this.handleCompleted}>Nom nom nom...</button>
					</div>
				</li>
			</ul>
		)
	}

});

module.exports = Treatment;
