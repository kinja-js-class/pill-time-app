import React from 'react';
import Treatment from './Treatment'

let TreatmentList = React.createClass({

	getTreatment () {
		return this.props.treatments.data ? this.getRenderableTreatment() : ''
	},

	getRenderableTreatment () {
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

	render () {

		return (
			<div>
				{this.getTreatment()}
			</div>
		)
	}
});

module.exports = TreatmentList;
