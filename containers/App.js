import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import App from '../components/AppComponent'

let mapStateToProps = function (state) {
	return {
		auth: state.auth,
		treatments: state.treatments
	}
}

let mapDispatchToProps = function (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
