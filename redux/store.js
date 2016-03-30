import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore);

let configureStore = function (initialState) {
	return finalCreateStore(rootReducer, initialState);
};

module.exports = configureStore;
