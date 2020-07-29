import React from 'react'
import { Link } from 'react-router-dom'
import './featuredProduct.css'
const FeaturedProduct = () => (
	<div className="featured__container">
		<div className="featured__red featured__top"></div>
		<h1 className="featured__title">Choosen Especially For You</h1>
		<div className="featured__images">
			<div className="featured__product"></div>
		</div>
		<div className="featured__more_container">
			<h3 className="featured__product_title">XTREME Leather Care</h3>
			<p className="featured__prodcut_description">
				Gentle “milk” that cleans and cares for smooth genuine leather,
				artificial leather and perforated leather.
			</p>
			<Link className="featured__more" to="/featured">
				{'learn more >'}
			</Link>
		</div>
		<div className="featured__red featured__bottom"></div>
	</div>
)

export default FeaturedProduct