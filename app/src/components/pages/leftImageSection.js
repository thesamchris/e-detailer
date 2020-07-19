import React from 'react'
import './leftImageSection.css'

const LeftImageSection = ({
	img = 'https://images.unsplash.com/photo-1587350811536-a8b462a5c081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
	title = 'Headline',
	p = 'text here',
}) => (
	<div>
		<section className="left_image_section__section">
			<div className="left_image_section__desktop_decoration">
				<svg
					height="100%"
					viewBox="0 0 28 11"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					className="clip-svg no-ie"
				>
					<g>
						<polygon points="8 0, 8.1 11,8.1 11,0 11" />
						<rect x={8} y={0} width={12} height={11} />
						<polygon points="19.9 0,28 0,20 11,19.9 11" />
					</g>
				</svg>
				<div className="skew ie">
					<div className="skew-fix"></div>
				</div>
			</div>
			<div className="left_image_section__desktop_content">
				<div className="left_image_section__images">
					<div className="left_image_section__image">
						<div className="left_image_section__image_wrapper">
							<div className="left_image_section__img_container">
								<div className="left_image_section__slider">
									<div
										className="left_image_section__img"
										style={{
											background: `url(${img})`,
											height: '100%',
											backgroundColor: '#f8f8f7',
											backgroundPosition: '50%',
											backgroundSize: 'cover',
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="left_image_section__text">
						<div className="left_image_section__text_rows">
							<div className="left_image_section__text_col">
								<div className="left_image_section__text_wrapper">
									<h2>{title}</h2>
									<p>{p}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/*         
        <section class="block-img-sx-text-dx" id="images-sx-texts-dx">
            <div class="desktop decoration d-flex align-content-center">
                <svg height="100%" viewBox="0 0 28 11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="clip-svg no-ie">
                    <g>
                        <polygon points="8 0, 8.1 11, 8.1 11,0 11">
                        </polygon>
                        <rect x="8" y="0" width="12" height="11"></rect>
                        <polygon points="19.9 0, 28 0, 20 11, 19.9 11">
                        </polygon>
                    </g>
                </svg>
                <div class="skew ie">
                    <div class="skew-fix"></div>
                </div>
            </div>
            <div class="desktop content">
                <div class="row h-100 align-items-stretch"><div class="col-8 images">
                    <div class="slider-container">
                        <div class="simple-slider slider-wrapper">
                            <div class="slide skew active" style="transition-property: transform, opacity; transition-duration: 0s; transition-timing-function: ease-out; z-index: 2;">
                                <div data-srcset="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/overview/SIAN_rds-overview.jpg" class="skew-fix img-loaded" style="background-image: url(&quot;https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/overview/SIAN_rds-overview.jpg&quot;);">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" class="sr-only" alt="Lamborghini Sián Roadster " data-landscape="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/overview/SIAN_rds-overview.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-pagination">
                        </div>
                        </div>
                        <div class="col-4 texts">
                            <div class="row align-items-center h-100">
                                <div class="col-9 offset-1">
                                    <div class="texts-wrapper">
                                        <h2>
                                            <strong>OVERVIEW</strong>
                                        </h2>
                                        <p>The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity, resonating with the inimitable V12 sound from the most powerful Lamborghini engine to date. Limited to only 19 examples, the Sián Roadster advances hybrid technology with the world’s first use of a supercapacitor in a materials-science application unique to the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile d-flex d-md-none"><div class="container"><div class="texts-wrapper"><h2><strong>OVERVIEW</strong></h2><p>The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity, resonating with the inimitable V12 sound from the most powerful Lamborghini engine to date. Limited to only 19 examples, the Sián Roadster advances hybrid technology with the world’s first use of a supercapacitor in a materials-science application unique to the industry.</p></div></div><div class="image"><img data-srcset="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/overview/SIAN_rds-overview_M.jpg 1024w" alt="Lamborghini Sián Roadster " class="img-loaded" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/overview/SIAN_rds-overview_M.jpg"></div></div></section> */}
	</div>
)

export default LeftImageSection