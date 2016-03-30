import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

var finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore);

var configureStore = function (initialState) {
	//initialState = initialState
	return finalCreateStore(rootReducer, initialState);
};

module.exports = configureStore;
