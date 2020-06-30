import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => (
	<footer>
		<div className="footer__links_and_address">
			<div className="footer__links">
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/company">
						Company
					</Link>
				</span>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/site-map">
						Site Map
					</Link>
				</span>
			</div>
			<div className="footer__address">
				Copyright Essof Detailer. Block D1 Shakirin Complex, Kiulap B.S.B <br />
				Opening Hours: Monday - Saturday | 9am - 9pm Essof Ent. +6738844011
			</div>
		</div>
		<div className="footer__social_media_container">
			<Link
				className="footer__social_media"
				to="https://www.instagram.com/sonaxbrunei/"
			>
				<i class="fab fa-instagram"></i>
			</Link>
			<Link
				className="footer__social_media"
				to="https://www.facebook.com/sonaxbwn/"
			>
				<i class="fab fa-facebook-f"></i>
			</Link>
		</div>
	</footer>
)

export default Footer