let authActions = require("./auth"),
	treatmentActions = require("./treatment");

module.exports = Object.assign({}, authActions, treatmentActions);
