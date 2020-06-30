import React from 'react'
import './desktopSlider.css'

const DesktopSlide = ({ active = false, index, img }) => (
    <div className={active ? "slide active" : "slide"} data-index={index}>
        <div className="skew">
            <div className="skew-fix">
                <img data-srcset={img} alt="Lamborghini Urus Pearl Capsule" className="img-loaded" src={img} />
            </div>
        </div>
    </div>
)

// const DesktopInactiveSlide = () => (
//     <div className="slide" data-index="1">
//         <div className="skew">
//             <div className="skew-fix">
//                 <img data-srcset="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/Aventador_SVJ_Verde_Compositing_4terzi_00.jpg" alt="Lamborghini Aventador SVJ" className="img-loaded" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/Aventador_SVJ_Verde_Compositing_4terzi_00.jpg" />
//             </div>
//         </div>
//     </div>
// )

const SliderText = ({ title = 'title', subtitle = 'subtitle' }) => (
	<div className="slide-texts inner-wrapper col-5 offset-1">
		<div className="controls">
			<div className="control-title text-uppercase">our services</div>
			<div className="ctrl-buttonset">
				<button type="button" className="on-dark btn-prev prev">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50.464 58.271"
						className="exagon left"
					>
						<g strokeWidth={1} transform="translate(-1624 -187.923)">
							<path
								className="background exagon"
								d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
								transform="translate(1623.5 187.345)"
							/>
							<path
								className="foreground left"
								d="M0 5.675L7.432 0l7.432 5.675"
								transform="rotate(-90 935.432 -711.068)"
							/>
						</g>
					</svg>
				</button>
				<button type="button" className="on-dark btn-next next">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50.464 58.271"
						className="exagon"
					>
						<g strokeWidth={1} transform="translate(-1624 -187.923)">
							<path
								className="background exagon"
								d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
								transform="translate(1623.5 187.345)"
							/>
							<path
								className="foreground right"
								d="M0 0l7.432 5.674L14.864 0"
								transform="rotate(-90 935.432 -711.068)"
							/>
						</g>
					</svg>
				</button>
			</div>
		</div>
		<div className="slide-info">
			<div className="animated-text">
				<h2 className="service-name" data-name={title}>
					<div style={{ position: 'relative', display: 'inline-block' }}>
                        { title }
					</div>
				</h2>
				<h3 className="service-payoff" style={{}}>
					{ subtitle }
				</h3>
			</div>
			<div className="service-controls ctrl-buttonset">
                <button
					type="button"
					className="on-dark btn-explore explore-models button-wrapper"
					data-layer="showModels,Models Slider,Show"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50.464 58.271"
						className="exagon plus"
					>
						<g strokeWidth="1.5" transform="translate(-1624 -187.923)">
							<path
								className="background exagon"
								d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
								transform="translate(1623.5 187.345)"
							/>
							<g className="foreground plus" transform="translate(627 -5248.5)">
								<path d="M0 0v15" transform="translate(1022.5 5458.5)" />
								<path d="M0 0v15" transform="rotate(90 -2218 3248)" />
							</g>
						</g>
					</svg>
					<span>
						Explore the
						<br />
						services
					</span>
				</button>
			</div>
		</div>
	</div>
)

const DesktopSlider = () => (
	<div className="desktop-slider-container">
		<SliderText />
		<div className="slider">
			<div className="slides">
				<DesktopSlide
					active={false}
					img="https://images.unsplash.com/photo-1565689876404-edf59093ce9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					index="1"
				/>
				<DesktopSlide
					active={false}
					img="https://images.unsplash.com/photo-1571348500628-1e9b6aa00dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					index="2"
				/>
				<DesktopSlide
					active={true}
					img="https://images.unsplash.com/photo-1526518604528-b927bd350668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					index="0"
				/>
			</div>
		</div>
	</div>
)

export default DesktopSlider