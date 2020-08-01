import React from 'react'
import LeftImageSection from './leftImageSection'
import Hero from '../shell/hero'

const WorkPage = () => (
	<div className="work__container">
		<div className="work__items">
			<Hero
				title="Our work"
				subtitle="let the cars speak"
				secondaryTitle="looking forward to serve you"
                imgClass="work_bg"
				showLink={false}
			/>
			<Testimonial testimonial={testimonials.one} />
			<Testimonial testimonial={testimonials.two} />
			<Testimonial testimonial={testimonials.three} />
		</div>
	</div>
)

let testimonials = {
	one: {
		text:
			'Was truly amazed and satisfied by the end results of the detailing process. I am one happy customer 😊 will definitely be going back for their service. Highly recommended',
		rating: '5',
		image: 'testimonial_one',
	},
	three: {
		text:
			'Premium products with professional, passionate and friendly staffs are what Sonax is offering! Always feel safe to leave my precious cars to them to keep them shines bright like a diamond.',
		rating: '5',
		image: 'testimonial_three',
	},
	two: {
		text: '5 Star Service',
		rating: '5',
		image: 'testimonial_two',
	},
}

let Testimonial = ({ testimonial }) => (
    <div className="work__testimonial">
        <LeftImageSection imgClass={testimonial.image} title={`${testimonial.rating}/5 Rating`} p={testimonial.text}/>
    </div>
)

export default WorkPage