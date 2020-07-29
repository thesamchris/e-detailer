import React from 'react'
import App from '../../App'
import Hero from '../shell/hero'
import Work from '../shell/sectionWithImage'
import Partners from '../partners'
import DesktopSlider from '../desktopSlider'
import MobileSlider from '../mobileSlider'
import video from '../../assets/video.mp4'
import thumb from '../../assets/thumb.jpg'
import FeaturedProduct from '../featuredProduct'

const HomePage = () => (
	<App>
		<Hero title="Car Wash" subtitle="Head-turning shine guaranteed" video={video} background={thumb}/>
		<FeaturedProduct />
		<DesktopSlider />
		<MobileSlider />
		<Work
			link="/work"
			background="https://images.unsplash.com/photo-1587350855729-bab6beeac1ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
		/>
		<Partners />
	</App>
)

export default HomePage