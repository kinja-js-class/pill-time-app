import React from 'react';
import Treatment from './Treatment'

var TreatmentList = React.createClass({

	getTreatment: function () {
		return this.props.treatments.data ? this.getRenderableTreatment() : ''
	},

	getRenderableTreatment: function () {
		let treatments = this.props.treatments.data

		return treatments.map(function (treatment) {
			return (
				<Treatment
					key={treatment.id}
					treatment={treatment}
					completeTreatment={this.props.actions.completeTreatment}/>
			)
		}.bind(this))
	},

	render: function () {

		return (
			<div>
				{this.getTreatment()}
			</div>
		)
	}
});

module.exports = TreatmentList;
