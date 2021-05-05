import React from 'react'
import Hero from '../../shell/hero'
import waxDetails from '../../../data/waxDetails'
import ServiceTemplate from '../serviceTemplate'
import './product_page.css'

const WaxPage = () => (
	<div className="product_page__container">
		<Hero showContent={false} imgClass="wax_bg" secondaryTitle="wax"/>
		<div className="product_page__content">
            <ServiceTemplate data={waxDetails}/>
		</div>
	</div>
)

export default WaxPage