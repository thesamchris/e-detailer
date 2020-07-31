import React from 'react'
import Hero from '../shell/hero'
import './contact.css'

const ContactPage = () => (
	<div className="contact__content">
		<Hero
			showContent={false}
			secondaryTitle="Contact us"
			imgClass="contact_us_bg"
		/>
		<div className="contact__form">
			<form name="contact" method="post">
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label>
						Your Name <input type="text" name="name" />
					</label>
				</p>
				<p className="contact_us__flex">
					<label>
						Your Email <input type="email" name="email" />
					</label>
					<label>
						Your Contact <input type="number" name="phone" />
					</label>
				</p>
				<p>
					<label>
						Subject <input type="text" name="subject" />
					</label>
				</p>
				<p>
					<label>
						Message <textarea name="message"></textarea>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
		<div className="contact_us__map">
			<h1 className="contact_us__map_title">where to find us</h1>
			<div className="contact_us__map_container">
				<iframe
					title="company_location"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15900.847706609848!2d114.9276221!3d4.9041659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a8ec923595993ed!2sEssof%20Enterprise%20(Sonax)!5e0!3m2!1sen!2ssg!4v1596192578444!5m2!1sen!2ssg"
					width="600"
					height="450"
					frameborder="0"
					style={{ border: '0' }}
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
			</div>
		</div>
	</div>
)

export default ContactPage