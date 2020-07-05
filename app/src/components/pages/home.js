import React from 'react'
import App from '../../App'
import Hero from '../shell/hero'
import Work from '../shell/sectionWithImage'
import Partners from '../partners'
import DesktopSlider from '../desktopSlider'
import video from '../../assets/video.mp4'
import thumb from '../../assets/thumb.jpg'

const HomePage = () => (
	<App>
		<Hero title="Car Wash" subtitle="Head-turning shine guarenteed" video={video} background={thumb}/>
		<DesktopSlider />
		<Work
			link="/work"
			background="https://images.unsplash.com/photo-1587350855729-bab6beeac1ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
		/>
		<Partners />
	</App>
)

export default HomePage