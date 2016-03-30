import React from 'react';
import * as actions from '../redux/actions'

var AuthComponent = React.createClass({

	attemptLogin: function () {
		this.props.actions.loginUser()
	},

	render: function () {

		return (
			<button onClick={this.attemptLogin}>Log in</button>
		)
	}

});

module.exports = AuthComponent;
