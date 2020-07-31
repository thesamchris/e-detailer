import React from 'react'

const ContactPage = () => (
	<div className="contact__content">
		<div className="contact__form">
			<form name="contact" method="post">
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label>
						Your Name: <input type="text" name="name" />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message"></textarea>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
			{/* <form action="POST" name="contact_form">
				<label htmlFor="type"></label>
				<input type="hidden" name="form-name" value="contact_form" />
				<select name="type " id="type">
					<option>Support</option>
					<option>Customer Service</option>
				</select>
				<input type="text" id="name" name="name" placeholder="Name" />
				<input
					name="contact"
					type="number"
					id="contact"
					placeholder="Contant"
				/>
				<input name="email" type="email" id="email" placeholder="Email" />
				<input name="subject" type="text" id="subject" />
				<input name="message" type="text" id="message" />
				<div data-netlify-recaptcha="true"></div>
				<button type="submit">send message</button>
			</form> */}
		</div>
	</div>
)

export default ContactPage