import React from 'react'
import Card from '../card'
import './services.css'
import Hero from '../shell/hero'
import LeftImageSection from './leftImageSection'

const ServicesPage = () => {
    const servicesItems = services.map(service => <Card title={service.title} description={service.description} link={service.link} imgClass={service.imgClass} />)
    return (
			<div className="services__container">
				<Hero
					title="our services"
					subtitle="every aspect of your car is covered"
					showLink={false}
					secondaryTitle="ready to serve you"
					imgClass="services_bg"
				/>
				<div className="services__cards_container">{servicesItems}</div>
				<div className="services__cta">
					<LeftImageSection
						title="Book an appointment now"
						p="if you need assistance please call +673 8844011"
						imgClass="services_cta"
					/>
				</div>
			</div>
		)
}

const services = [
	{
		title: 'washing',
		description: 'Car washing your car goes a long way toward maintaining that “new car” look and just making it more pleasant to drive.',
		link: '/wash',
		imgClass: 'services_wash_img'
	},
	{
		title: 'waxing',
		description: `Car wax is a product that protects and enhances a car's paint coating. Wax is best used after cleaning and polishing to make your car’s paintwork shine.`,
		link: '/wax',
		imgClass: 'services_wax_img'
	},
	{
		title: 'polish',
		description: 'Car polish is a product that helps to eliminate surface scratches, swirls, oxidation, dirt, and other minor imperfections.',
		link: '/polish',
		imgClass: 'services_polish_img'
	},
	// {
	// 	title: 'paint correction',
	// 	description: 'description',
	// 	link: '',
	// 	imgClass: 'services_paint'
	// },
	// {
	// 	title: 'protection',
	// 	description: 'description',
	// 	link: '',
	// 	imgClass: 'services_protection'
	// },
	// {
	// 	title: 'windscreen',
	// 	description: 'description',
	// 	link: '',
	// 	imgClass: 'services_windscreen'
	// },
	{
		title: 'coating',
		description: 'Long term protection with resistance to UV, chemicals and aggressive environmental influences such as road salt, tar, and street and industrial pollution.',
		link: '',
		imgClass: 'services_coating_img'
	},
	{
		title: 'headlight',
		description: 'Tired of your cloudy headlights? Discoloured or dull due to oxidation primarily due to UV light and other environmental factors such as road debris impact (stones, sand, etc.) rain, and exposure to caustic chemicals.',
		link: '',
		imgClass: 'services_headlight_img'
	},
	{
		title: 'interior cleaning',
		description: 'Caring for your interior, there are three general areas of interior care: cleaning, protecting, and dressing.',
		link: '',
		imgClass: 'services_interior_img'
	},
]

export default ServicesPage