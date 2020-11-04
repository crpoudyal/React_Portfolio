import React from 'react';
import './Contact.component.css';

function Contact(){
    return(    
	<section id="contact">
	<img src="/images/contact.svg" alt="contact"/>
	<h3>Get In Touch</h3>
	<div className="contact-input">
		<input type="email" placeholder="Example@gmail.com"/>
		<a href="#main">Continue</a>
	</div>
	</section>
    )
}
export default Contact;