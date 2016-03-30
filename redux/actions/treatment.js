let Firebase = require('firebase'),
	fireRef = new Firebase('https://incandescent-fire-8559.firebaseio.com/patients')

module.exports = {
	startListeningToTreatments: function () {
		return function (dispatch, getState) {
			fireRef.on('value', function (snapshot) {
				dispatch({
					type: 'RECEIVES_TREATMENT_DATA',
					data: snapshot.val()
				})
			})
		}
	},

	completeTreatment: function () {
		return function (dispatch, getState) {
			let state = getState(),
				username = state.auth.username,
				uid = state.auth.uid
		}
	}
}
