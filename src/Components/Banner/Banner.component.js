import React from 'react';
import './Banner.component.css';

function Banner(){
    return(    
	<div className="content">
	<div className="model">
		<img src="/images/model.png" alt="Model.png"/>	
	</div>
	<div className="main-text">
		<h1>Hello, I am CR Poudyal</h1>
		<p>"<b>Developer</b>" is a big tag, me CR poudyal as a <b>WEB Developer</b> i am always ready for new challanges and journey of my development</p>
		<a href="#" className="portfolio-btn">See My Portfolio</a>
	</div>
	</div>
    )
}

export default Banner;