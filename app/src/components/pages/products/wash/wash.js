import React from 'react'
import Hero from '../../../shell/hero'
import { GeneralWash } from './generalWash'
import { Switch, Route } from 'react-router-dom'
import '../product_page.css'
import './wash.css'
import StandardWash from './standardWash'

const WashPage = ({ children, match }) => (
	<div className="product_page__container">
		<Hero showContent={false} imgClass="wash_bg" secondaryTitle="wash" />
		<div className="product_page__content">
			<Switch>
				<Route path="/" exact>
					<GeneralWash />
				</Route>
				<Route path="/wash/standard">
					<StandardWash />
				</Route>
				<Route>
					<GeneralWash />
				</Route>
			</Switch>
		</div>
	</div>
)

export default WashPage