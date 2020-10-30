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
		<img src="/images/recent.png"/>	
	</div>
	<a href="https://github.com/crpoudyal?tab=repositories" className="recent-btn">View Project</a>
	</section>
    )
}
export default Project;