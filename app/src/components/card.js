import React from 'react'
// import { Link } from 'react-router-dom'
import Right from '../svg/right'
import './card.css'

const Card = ({ title, description, imgClass, link = '' }) => (
	<div className="card">
		<div className={`card__image ${imgClass}`} />
		<div className="card__image_dimmer" />
		<div className="card__content">
			<h3 className="card__title">{title}</h3>
			<p className="card__description">{description}</p>
			{link ? <div style={{position: 'absolute', bottom: '10px'}}><Right link={link} width={'40px'} /></div> : ''}
		</div>
	</div>
)

export default Card