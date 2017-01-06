import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

import App from '../components/App'
import Dashboard from '../components/routes/Dashboard'
import NoMatch from '../components/routes/NoMatch'

import store from '../store'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
    		<Route path="/" component={App}>
				<IndexRoute component={Dashboard} />
				<Route path="*" component={NoMatch} />
    		</Route>
  		</Router>
	</Provider>
	,
	document.getElementById('app')
)
