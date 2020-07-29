import React from 'react'
import Card from '../card'
import './services.css'
import Hero from '../shell/hero'
import LeftImageSection from './leftImageSection'

const ServicesPage = () => {
    const servicesItems = services.map(service => <Card title={service.title} description={service.description} link={service.link}/>)
    return (
			<div className="services__container">
				<Hero
					title="our services"
					subtitle="every aspect of your car is covered"
					href="/services"
				/>
				<div className="services__cards_container">{servicesItems}</div>
				<div className="services__cta">
					<LeftImageSection
						title="Book an appointment now"
                        p="if you need assistance please call or email"
                        imgClass="services_cta"
					/>
				</div>
			</div>
		)
}

const services = [
	{
		title: 'washing',
		description: 'description',
		link: '',
	},
	{
		title: 'waxing',
		description: 'description',
		link: '',
	},
	{
		title: 'polish',
		description: 'description',
		link: '',
	},
	{
		title: 'paint correction',
		description: 'description',
		link: '',
	},
	{
		title: 'protection',
		description: 'description',
		link: '',
	},
	{
		title: 'windscreen',
		description: 'description',
		link: '',
	},
	{
		title: 'coating',
		description: 'description',
		link: '',
	},
	{
		title: 'headlight',
		description: 'description',
		link: '',
	},
	{
		title: 'interior cleaning',
		description: 'description',
		link: '',
	},
]

export default ServicesPage