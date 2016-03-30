import React, {Component, PropTypes} from 'react'
import TreatmentList from '../components/TreatmentList'
import AuthComponent from '../components/AuthComponent'

let App = React.createClass({

	render: function () {
		return (
			<div>
				<AuthComponent auth={this.props.auth} actions={this.props.actions}/>
				<TreatmentList treatments={this.props.treatments} actions={this.props.actions}/>
			</div>
		)
	}
});

export default App
