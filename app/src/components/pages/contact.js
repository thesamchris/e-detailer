import React from 'react'

const ContactPage = () => (
    <div className="contact__content">
        <div className="contact__form">
            <form action="POST" data-netlify="true">
                <label htmlFor="type"></label>
                <select id="type">
                    <option>Support</option>
                    <option>Customer Service</option>
                </select>
                <input type="text" id="name" placeholder="Name"/>
                <input type="number" id="contact" placeholder="Contant"/>
                <input type="email" id="email" placeholder="Email"/>
                <input type="text" id="subject"/>
                <input type="text" id="message"/>
                <div data-netlify-recaptcha="true"></div>
                <button type="submit">send message</button>
            </form>
        </div>
    </div>
)

export default ContactPage