import React from 'react';
import * as actions from '../redux/actions'

var AuthComponent = React.createClass({

	logIn: function () {
		this.props.actions.loginUser()
	},

	logOut: function () {
		this.props.actions.logoutUser()
	},

	render: function () {

		return (
			<div>
				<button onClick={this.logIn}>Log in</button>
				<button onClick={this.logOut}>Log out</button>
			</div>
		)
	}

});

module.exports = AuthComponent;
