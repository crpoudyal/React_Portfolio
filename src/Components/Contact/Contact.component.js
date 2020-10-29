import React from 'react';
import './Contact.component.css';

function Contact(){
    return(    
	<section id="contact">
	<img src="%PUBLIC_URL%/Assets/images/contact.svg"/>
	<h3>Get In Touch</h3>
	<div class="contact-input">
		<input type="email" placeholder="Example@gmail.com"/>
		<a href="#">Continue</a>
	</div>
	</section>
    )
}
export default Contact;