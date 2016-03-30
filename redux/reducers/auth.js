let initialState = require('../initialstate');

module.exports = function (currentstate, action) {
	switch (action.type) {
		case 'ATTEMPTING_LOGIN':
			return {
				currently: 'AWAITING_AUTH_RESPONSE',
				username: 'guest',
				uid: null
			};
		case 'LOGOUT':
			return {
				currently: 'ANONYMOUS',
				username: 'guest',
				uid: null
			};
		case 'LOGIN_USER':
			return {
				currently: 'LOGGED_IN',
				username: action.username,
				uid: action.uid
			};
		default:
			return currentstate || initialState.auth;
	}
}
