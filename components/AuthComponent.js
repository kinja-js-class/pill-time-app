import React from 'react';

let AuthComponent = React.createClass({

	logIn () {
		this.props.actions.loginUser()
	},

	logOut () {
		this.props.actions.logoutUser()
	},

	getUserName () {
		return this.props.auth.username
	},

	getActionButton () {
		return !this.props.auth.uid ? <button onClick={this.logIn}>Log in</button> :
			<button onClick={this.logOut}>Log out</button>
	},

	render () {

		return (
			<div>
				Hello {this.getUserName()}!
				{this.getActionButton()}
			</div>
		)
	}

});

module.exports = AuthComponent;
