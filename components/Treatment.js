/*@flow */

import React from 'react';

let Treatment = React.createClass({

	handleCompleted (): void {
		this.props.completeTreatment(this.props.treatment);
	},

	render () {

		return (
			<div>
				<p>
					<span className="fa fa-medkit"/>&nbsp;
					<span className="drug">{this.props.treatment.drug}</span>
					<button className="pure-button button-confirm" onClick={this.handleCompleted}>
						<span className="fa fa-heart-o"/> Yum!
					</button>
				</p>
			</div>
		)
	}

});

module.exports = Treatment;
