import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => (
	<footer>
		<div className="footer__row">
			<div className="footer__logo"></div>
			<div className="footer__links_container">
				<h3 className="footer__links_title">general</h3>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/about">
						About Us
					</Link>
				</span>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/contact">
						Contact Us
					</Link>
				</span>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/services">
						Services
					</Link>
				</span>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/work">
						our work
					</Link>
				</span>
			</div>
			<div className="footer__links_container">
				<h3 className="footer__links_title">exclusive partner</h3>
				<span className="desktop_nav__link_container">
					<Link className="desktop_nav__link" to="/sonax">
						sonax
					</Link>
				</span>
				{/* <span className="desktop_nav__link_container">
					<Link className="desktop_nav__link">max shine</Link>
				</span> */}
			</div>
			{/* <div className="footer__grow"></div> */}
			<div className="footer__links_container footer__social_media_container">
				<a
					className="footer__social_media"
					href="https://www.instagram.com/sonaxbrunei/"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					className="footer__social_media"
					href="https://www.facebook.com/sonaxbwn/"
				>
					<i className="fab fa-facebook-f"></i>
				</a>
				<a
					className="footer__social_media"
					href="https://www.twitter.com/sonaxbrunei/"
				>
					<i className="fab fa-twitter"></i>
				</a>
				{/* <Link
					className="footer__social_media"
					to="https://www.facebook.com/sonaxbwn/"
				>
					<i className="fab fa-youtube"></i>
				</Link> */}
			</div>
		</div>
		<div className="footer__row">
			{/* <div className="footer__address">
				Copyright Essof Detailer. Block D1 Shakirin Complex, Kiulap B.S.B <br />
				Opening Hours: Monday - Saturday | 9am - 9pm Essof Ent. +6738844011
			</div> */}
			<div className="footer__address">
				Copyright Essof Detailer. All rights reserved.
			</div>
		</div>
		{/* 
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
			
		</div> */}
	</footer>
)

export default Footer