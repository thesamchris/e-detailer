import React from 'react'
import Right from '../../svg/right'
import Video from '../video'
import './hero.css'

const Hero = ({
	subtitle = 'Subtitle',
	title = 'title',
	background = '',
	imgClass = '',
	video = '',
	link = '',
	showContent = true,
	secondaryTitle = 'Secondary title',
}) => (
	<div className="hero__container">
		<section className="hero__section">
			<div className="hero__bg_container">
				<div className="hero__bg_gradient"></div>
				<div
					className={`hero__bg_img ${imgClass}`}
				></div>
				{video ? (
					<div className="hero__bg_video">
						<Video video={video} />
					</div>
				) : (
					''
				)}
			</div>
			{showContent ? (
				<div className="hero__content">
					<h4 className="hero__subtitle">{subtitle}</h4>
					<h1 className="hero__title">{title}</h1>
					{link ? <Right link={link} width={'40px'} /> : ''}
				</div>
			) : (
				''
			)}
		</section>
		{secondaryTitle ? (
			<div className="hero__secondary_title">{secondaryTitle}</div>
		) : (
			''
		)}
	</div>
)

export default Hero