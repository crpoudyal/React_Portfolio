import React from 'react';

import './Skill.component.css';

function Skill(){
    return(
	<section id="skills">
	<div class="skill-text">
		<div class="skill-heading">
		<span>My Skills</span>
		<h2>My Experties</h2>
		</div>
		<div class="s-box-container">
		<div class="skill-box">
		<div class="s-box-icon">
			<i class="fab fa-html5"></i>
		</div>
		<div class="s-box-text">
		<strong>Hyper Text Markup Language(HTML)</strong>
		<p>I have 3 years experience in HTML and i completed 100+ HTML project.</p>
		</div>
		</div>
		<div class="skill-box">
		<div class="s-box-icon">
			<i class="fab fa-css3-alt"></i>
		</div>
		<div class="s-box-text">
		<strong>Cascading Style Sheets(CSS)</strong>
		<p>I have 3 years experience in CSS and i completed 100+ CSS project.</p>
		</div>
		</div>
		<div class="skill-box">
		<div class="s-box-icon">
			<i class="fab fa-js-square"></i>
		</div>
		<div class="s-box-text">
		<strong>JavaScript(Js)</strong>
		<p>I have 3 years experience in JavaScript and i completed 100+ Js project.</p>
		</div>
		</div>
        <div class="skill-box">
		<div class="s-box-icon">
			<i class="fab fa-react"></i>
		</div>
		<div class="s-box-text">
		<strong>React(Js Libary)</strong>
		<p>I have 3 years experience in JavaScript and i completed 100+ Js project.</p>
		</div>
		</div>
        <div class="skill-box">
		<div class="s-box-icon">
			<i class="fab fa-php"></i>
		</div>
		<div class="s-box-text">
		<strong>PHP</strong>
		<p>I have 3 years experience in JavaScript and i completed 100+ Js project.</p>
		</div>
		</div>		
		</div>
	</div>
	<div class="skill-img">
	<img src="%PUBLIC_URL%/Assets/images/skill2.png"/>	
	</div>
	</section>
    )
}

export default Skill;