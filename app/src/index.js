import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import CompanyPageFold from './components/companyPageFold'
import HomePage from './components/pages/home'
import LeftImageSection from './components/pages/leftImageSection'

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/">
				<HomePage />
				{/* <LeftImageSection /> */}
			</Route>
			<Route path="/company">
				<App>
					hi
					<CompanyPageFold />
				</App>
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
