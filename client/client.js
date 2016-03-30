import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from '../redux/actions'
import App from '../containers/App';

var initialState = {
	treatments: []
}

var store = require('../redux/store')(initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

store.dispatch(actions.startListeningToAuth());
