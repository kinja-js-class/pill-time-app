import React from 'react';

var Treatment = React.createClass({

	handleCompleted: function () {
		this.props.completeTreatment(this.props.treatment);
	},

	render: function () {

		return (
			<div>
				<p>
					<span className="fa fa-medkit"/>&nbsp;
					<span className="">{this.props.treatment.drug}</span>&nbsp;
					<button onClick={this.handleCompleted}>
						<span className="fa fa-heart-o" /> Yum!
					</button>
				</p>
			</div>
		)
	}

});

module.exports = Treatment;
