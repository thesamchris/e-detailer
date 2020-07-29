import React from 'react'
import './mobileSlider.css'

class MobileSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            activeSlide: 0
        }
    }
    render() {
        let { active } = this.state
        return (
					<div className="mobile_slider__container">
						<div className="mobile_slider__section_title">Services</div>
						<div className="mobile_slider__swipeable">
							<div
								className={`${
									active === 0 ? 'mobile_slider__slide_active' : ''
								} mobile_slider__slide mobile_slider__slide_zero`}
							></div>
							<div
								className={`${
									active === 1 ? 'mobile_slider__slide_active' : ''
								} mobile_slider__slide mobile_slider__slide_one`}
							></div>
							<div
								className={`${
									active === 2 ? 'mobile_slider__slide_active' : ''
								} mobile_slider__slide mobile_slider__slide_two`}
							></div>
						</div>
						<div className="mobile_slider__content">
							<div className="mobile_slider__active_title">title</div>
							<div className="mobile_slider__active_subtitle">title</div>
							<div className="mobile_slider__explore">
								<div></div>
								Explore services
							</div>
						</div>
					</div>
				)
    }
}

export default MobileSlider