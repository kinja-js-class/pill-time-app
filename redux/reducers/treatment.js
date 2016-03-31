let initialState = require('../initialstate')

module.exports = function (currentState, action) {
	let newState = {};
	switch (action.type) {
		case 'RECEIVES_TREATMENT_DATA':
			return Object.assign({}, currentState, {
				hasreceiveddata: true,
				data: action.data
			})
		case 'TREATMENT_COMPLETED':
			newState.data = currentState.data.filter(function (item, index) {
				console.log(item, index)
				return item.id !== action.data.id
			})
			newState.hasreceiveddata = false
			return newState
		case 'REMOVE_TREATMENTS':
			return []
		default:
			return currentState || initialState.treatments
	}
}
