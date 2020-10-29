import React from 'react';
import './Project.component.css';

function Project(){
    return(     
	<section id="recent">
	<div class="recent-heading">
	<span>Recent Project</span>
	<h3>Recent ongoing Project</h3>
	</div>
	<div class="recent-img">
		<img src="%PUBLIC_URL%/Assets/images/recent.png"/>	
	</div>
	<a href="#" class="recent-btn">View Project</a>
	</section>
    )
}
export default Project;