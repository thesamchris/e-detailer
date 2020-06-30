import React from 'react'
import Right from '../../svg/right'
import './hero.css'
const Hero = ({
	subtitle = 'Subtitle',
	title = 'title',
	background = 'https://images.unsplash.com/photo-1550564956-8f914edc0477?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
}) => (
	<div className="hero__container">
		<section className="hero__section">
			<div className="hero__bg_container">
				<div className="hero__bg_gradient"></div>
				<div
					className="hero__bg_img"
					style={{
						background: `url(${background})`,
						backgroundSize: `cover`,
						backgroundPosition: `center center`,
					}}
				></div>
			</div>
            <div className="hero__content">
                <h4 className="hero__subtitle">{subtitle}</h4>
                <h1 className="hero__title">{title}</h1>
                <Right link="/appointment"/>
            </div>
		</section>
	</div>
)

export default Hero