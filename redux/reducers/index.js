var Redux = require("redux"),
	authReducer = require("./auth"),
	treatmentReducer = require("./treatment");

var rootReducer = Redux.combineReducers({
	auth: authReducer,
	treatments: treatmentReducer
});

module.exports = rootReducer;
