import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends React.Component {
	constructor() {
		super()

		this.state = {
			navOpen: false
		}

		this.onToggleMobileNav = this.onToggleMobileNav.bind(this)
	}

	onToggleMobileNav() {
		let { navOpen } = this.state
		this.setState({
			navOpen: !navOpen
		})
	}

    render() {

		let { navOpen } = this.state

        return (
					<header>
						<nav className="desktop_nav__container">
							<Link className="desktop_nav__logo" to="/">
								<div className="nav__logo"></div>
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
						<nav className="mobile_nav__container">
							<div className="mobile_nav__visual">
								<Link className="desktop_nav__logo" to="/">
									<div className="nav__logo"></div>
								</Link>
								<div className="mobile_nav__grow"></div>
								<div
									aria-expanded={navOpen}
									onClick={this.onToggleMobileNav}
									className="mobile_nav__hamburger"
								>
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
							<div
								className={
									navOpen
										? 'mobile_nav__links_container open'
										: 'mobile_nav__links_container'
								}
							>
								<ul>
									<li>
										<Link to="/promotion">promotions</Link>
									</li>
									<li>
										<Link to="/about-us">about us</Link>
									</li>
									<li>
										<Link to="/">services</Link>
									</li>
									<li>
										<Link to="/">products</Link>
									</li>
								</ul>
							</div>
						</nav>
					</header>
				)
    }
}

export default Nav