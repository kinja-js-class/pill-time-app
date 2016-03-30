import React from 'react';
import * as actions from '../redux/actions'

var AuthComponent = React.createClass({

	logIn: function () {
		this.props.actions.loginUser()
	},

	logOut: function () {
		this.props.actions.logoutUser()
	},

	getUserName: function () {
		return this.props.auth.username
	},

	getActionButton: function () {
		return !this.props.auth.uid ? <button onClick={this.logIn}>Log in</button> : <button onClick={this.logOut}>Log out</button>
	},

	render: function () {

		return (
			<div>
				Hello {this.getUserName()}!
				{this.getActionButton()}
			</div>
		)
	}

});

module.exports = AuthComponent;
