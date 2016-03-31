let Firebase = require('firebase'),
	fireRef = new Firebase('https://incandescent-fire-8559.firebaseio.com/patients/Anna/treatments')

let normalizeData = function (snapshot) {
	let normalizedData = []
	if (snapshot.numChildren()) {
		let data = snapshot.val(),
			keys = Object.keys(data)

		keys.map(function (key) {
			let obj = data[key]
			obj.id = key
			normalizedData.push(obj)
		})
	}
	return normalizedData
}

module.exports = {
	startListeningToTreatments () {
		return function (dispatch, getState) {
			fireRef.on('value', function (snapshot) {
				//debugger
				dispatch({
					type: 'RECEIVES_TREATMENT_DATA',
					data: normalizeData(snapshot)
				})
			})
		}
	},

	completeTreatment: function (treatment) {

		return function (dispatch, getState) {
			let state = getState()
			if (state.auth.currently === 'LOGGED_IN') {
				// set the treatment done for today
				dispatch({
					type: 'TREATMENT_COMPLETED',
					data: treatment
				})
			}
		}
	}
}
