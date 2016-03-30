let initialState = require('../initialstate')

module.exports = function (currentState, action) {
	let newState;
	switch (action.type) {
		case 'RECEIVES_TREATMENT_DATA':
			return Object.assign({}, currentState, {
				hasreceiveddata: true,
				data: action.data
			})
		default:
			return currentState || initialState.treatments
	}
}