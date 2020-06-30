import React from 'react'
import Right from '../../svg/right'
import './sectionWithImage.css'

const SectionWithImage = ({
	subtitle = 'subtitle',
	title = 'title',
	link = '/',
	background = 'pink',
}) => (
	<div className="section_with_image__section">
		<section className="section_with_image__container">
			<div className="section_with_image__bg_container">
				<div className="section_with_image__bg_gradient"></div>
				<div
					className="section_with_image__bg_img"
					style={{
						background: `url(${background})`,
						backgroundSize: `cover`,
						backgroundPosition: `center center`,
					}}
				></div>
			</div>
			<div className="section_with_image__content">
				<h4 className="section_with_image__subtitle">{subtitle}</h4>
				<h1 className="section_with_image__title">{title}</h1>
				<Right link={link} width="40px"/>
			</div>
		</section>
	</div>
)

export default SectionWithImage