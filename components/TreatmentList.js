import React from 'react';
import Treatment from './Treatment'

let TreatmentList = React.createClass({

	getTreatment () {
		return this.props.treatments.data ? this.getRenderableTreatment() : ''
	},

	getRenderableTreatment () {
		let treatments = this.props.treatments.data
		if (treatments.length) {
			return treatments.map(function (treatment) {
				return (
					<Treatment
						key={treatment.id}
						treatment={treatment}
						completeTreatment={this.props.actions.completeTreatment}/>
				)
			}.bind(this))
		} else {
			return (
				<p>There is no more pills to take today, check back tomorrow :(</p>
			)
		}
	},

	render () {
		return (
			<div className="treatments">
				{this.getTreatment()}
			</div>
		)
	}
});

module.exports = TreatmentList;
