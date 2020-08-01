import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
// import CompanyPageFold from './components/companyPageFold'
import HomePage from './components/pages/home'
// import LeftImageSection from './components/pages/leftImageSection'
import WorkPage from './components/pages/work'
import ServicesPage from './components/pages/services'
import AboutPage from './components/pages/about'
import SonaxPage from './components/pages/sonax'
import ContactPage from './components/pages/contact'
import WaxPage from './components/pages/products/wax'
import PolishPage from './components/pages/products/polish'
import WashPage from './components/pages/products/wash'
import PromotionsPage from './components/pages/promotions'

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/">
				<HomePage />
				{/* <LeftImageSection /> */}
			</Route>
			<Route path="/about">
				<App>
					<AboutPage />
					{/* <CompanyPageFold /> */}
				</App>
			</Route>
			<Route path="/work">
				<App>
					<WorkPage />
				</App>
			</Route>
			<Route path="/services">
				<App>
					<ServicesPage />
				</App>
			</Route>
			<Route path="/sonax">
				<App>
					<SonaxPage />
				</App>
			</Route>
			<Route path="/contact">
				<App>
					<ContactPage />
				</App>
			</Route>
			<Route path="/wax">
				<App>
					<WaxPage />
				</App>
			</Route>
			<Route path="/polish">
				<App>
					<PolishPage />
				</App>
			</Route>
			<Route path="/wash">
				<App>
					<WashPage />
				</App>
			</Route>
			<Route path="/promotions">
				<App>
					<PromotionsPage />
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
