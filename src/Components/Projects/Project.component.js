import React from 'react';
import './Project.component.css';

function Project(){
    return(     
	<section id="recent">
	<div className="recent-heading">
	<span>Recent Project</span>
	<h3>Recent ongoing Project</h3>
	</div>
	<div className="recent-img">
		<img src="%PUBLIC_URL%/images/recent.png"/>	
	</div>
	<a href="#" className="recent-btn">View Project</a>
	</section>
    )
}
export default Project;