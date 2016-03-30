import React from 'react';
import Treatment from './Treatment'

var TreatmentList = React.createClass({

	render: function () {

		return (
			<div>
				{
					this.props.treatments.data ?
						this.props.treatments.data.sanyi.treatments.map(function (treatment) {
							return (
								<Treatment
									key={treatment.id}
									treatment={treatment}
									completeTreatment={this.props.actions.completeTreatment}/>
							)
						}.bind(this)) : ''
				}

			</div>
		)
	}
});

module.exports = TreatmentList;
