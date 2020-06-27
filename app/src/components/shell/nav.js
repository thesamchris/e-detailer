import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends React.Component {
    render() {
        return (
					<header>
						<nav>
							<Link className="desktop_nav__logo">
								essof
							</Link>
							<span className="desktop_nav__grow"></span>
							<span className="desktop_nav__link_container">
								<Link className="desktop_nav__link" to="/promotions">
									Promotions
								</Link>
							</span>
							<span className="desktop_nav__link_container">
								<Link className="desktop_nav__link" to="/services">
									Services
								</Link>
							</span>
							<span className="desktop_nav__link_container">
								<Link className="desktop_nav__link" to="/appointment">
									Appointment
								</Link>
							</span>
						</nav>
					</header>
				)
    }
}

export default Nav