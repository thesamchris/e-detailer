import React from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
import './servicesSection.css'

const ServicesSection = () => (
	<div className="services_section">
		<div className="services_section__background"></div>
		<div className="services_section__dimmer"></div>
		<div className="services_section__content">
			<h1 className="services_section__title">how can we serve you?</h1>
			<div className="services_section__cards_container">
				<Card
					title="WASH"
                    description="Car washing your car goes a long way toward maintaining that “new car” look and just making it more pleasant to drive."
                    imgClass="services_wash_img"
				/>
				<Card
					title="WAX"
                    description="Car wax is a product that protects and enhances a car's paint coating. Wax is best used after cleaning and polishing to make your car’s paintwork shine."
                    imgClass="services_wax_img"
				/>
				<Card
					title="POLISH"
                    description="Car polish is a product that helps to eliminate surface scratches, swirls, oxidation, dirt, and other minor imperfections."
                    imgClass="services_polish_img"
				/>
			</div>
			<div className="desktop_nav__link_container">
				<Link to="/services" className="desktop_nav__link">
					{'view more services'}
				</Link>
			</div>
		</div>
	</div>
)

export default ServicesSection