let Redux = require("redux"),
	authReducer = require("./auth"),
	treatmentReducer = require("./treatment");

let rootReducer = Redux.combineReducers({
	auth: authReducer,
	treatments: treatmentReducer
});

module.exports = rootReducer;
