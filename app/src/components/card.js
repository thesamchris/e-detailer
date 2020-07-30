import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ title, description, imgClass, showLink = false }) => (
	<div className="card">
		<div className={`card__image ${imgClass}`} />
		<div className="card__image_dimmer" />
		<div className="card__content">
			<h3 className="card__title">{title}</h3>
			<p className="card__description">{description}</p>
			{showLink ? (
				<Link className="card__learn" to="googs.com">
					{'learn more >'}
				</Link>
			) : (
				''
			)}
		</div>
	</div>
)

export default Card