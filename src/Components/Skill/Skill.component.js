import React from 'react';

import './Skill.component.css';

function Skill(){
    return(
	<section id="skills">
	<div className="skill-text">
		<div className="skill-heading">
		<span>My Skills</span>
		<h2>My Experties</h2>
		</div>
		<div className="s-box-container">
		<div className="skill-box">
		<div className="s-box-icon">
			<i className="fab fa-html5"></i>
		</div>
		<div className="s-box-text">
		<strong>Hyper Text Markup Language(HTML)</strong>
		</div>
		</div>
		<div className="skill-box">
		<div className="s-box-icon">
			<i className="fab fa-css3-alt"></i>
		</div>
		<div className="s-box-text">
		<strong>Cascading Style Sheets(CSS)</strong>
		</div>
		</div>
		<div className="skill-box">
		<div className="s-box-icon">
			<i className="fab fa-js-square"></i>
		</div>
		<div className="s-box-text">
		<strong>JavaScript(Js)</strong>
		</div>
		</div>
        <div className="skill-box">
		<div className="s-box-icon">
			<i className="fab fa-react"></i>
		</div>
		<div className="s-box-text">
		<strong>React(Js Libary)</strong>
		</div>
		</div>
        <div className="skill-box">
		<div className="s-box-icon">
			<i className="fab fa-php"></i>
		</div>
		<div className="s-box-text">
		<strong>PHP</strong>
		</div>
		</div>		
		</div>
	</div>
	<div className="skill-img">
	<img src="/images/skill2.png" alt="skill"/>	
	</div>
	</section>
    )
}

export default Skill;