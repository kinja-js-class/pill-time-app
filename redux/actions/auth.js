// firebase action creator

const credentials = require('../../credentials')

let Firebase = require('firebase'),
	fireRef = new Firebase('https://incandescent-fire-8559.firebaseio.com/patients')

module.exports = {
	startListeningToAuth: function () {
		return function (dispatch, getState) {
			fireRef.onAuth(function (authData) {
				if (authData) {
					dispatch({
						type: 'LOGIN_USER',
						uid: authData.uid,
						username: authData.password.email
					})
				} else {
					if (getState().auth.currently !== 'ANONYMOUS') {
						dispatch({
							type: 'LOGOUT'
						})
					}
				}
			})
		}
	},

	loginUser: function () {
		return function (dispatch, getState) {
			dispatch({
				type: 'ATTEMPTING_LOGIN'
			})
			fireRef.authWithPassword({
				email: credentials.email,
				password: credentials.password
			}, function (data) {
				console.log(data)
			})
		}
	},

	logoutUser: function () {
		return function (dispatch, getState) {
			dispatch({
				type: 'LOGOUT'
			})
			fireRef.unauth()
		}
	}
}
