import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import Hero from './components/shell/hero'
import Work from './components/shell/sectionWithImage'
import Partners from './components/partners'
import DesktopSlider from './components/desktopSlider'
import CompanyPageFold from './components/companyPageFold'

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/">
				<App>
					<Hero />
          <DesktopSlider />
					<Work
						link="/work"
						background="https://images.unsplash.com/photo-1587350855729-bab6beeac1ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					/>
          <Partners />
				</App>
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
