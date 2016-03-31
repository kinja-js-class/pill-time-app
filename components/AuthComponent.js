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
		return !this.props.auth.uid ? <button className="pure-button button-auth" onClick={this.logIn}>Log in</button> :
			<button className="pure-button button-auth" onClick={this.logOut}>Log out</button>
	},

	render () {

		return (
			<div className="auth">
				<span className="message">Hello {this.getUserName()}!</span>
				{this.getActionButton()}

			</div>
		)
	}

});

module.exports = AuthComponent;
