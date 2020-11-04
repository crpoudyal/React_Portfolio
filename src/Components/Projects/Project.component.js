import React from 'react';
import './Project.component.css';

function Project(){
    return(     
	<section id="client">
	<div className="client-heading">
	<span>Project</span>
	<h3>Recent's Project</h3>
	</div>
	<div className="c-box-container">
	<div className="client-box">
    <h2>Gardening</h2>
		<img src="http://www.greenspinnaker.co.uk/wp-content/uploads/2015/09/gardening-tools.jpg" alt="gardening"/>
		<div className="star">
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
		</div>
		<p> Gardening is an Website build using HTML CSS AND JavaScript</p>
		<a href="https://github.com/crpoudyal/gardening">Read More</a>
	</div>
	<div className="client-box">
    <h2>Todo-App</h2>
		<img src="https://i.imgur.com/OvMZBs9.jpg" alt="todo-app"/>
		<div className="star">
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="far fa-star"></i>
		</div>
		<p>Todo-App is build using JavaScript Technology</p>
		<a href="https://github.com/crpoudyal/todo-app">Read More</a>
	</div>
	<div className="client-box">
    <h2>Flutter Calculator</h2>
		<img src="https://vuejsexamples.com/content/images/2016/09/20160914225220.jpg" alt="fluttercalc"/>
		<div className="star">
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="fas fa-star"></i>
			<i className="far fa-star"></i>
		</div>
		<p> Flutter Calculator is build using Dart and Flutter Cross Platform Technology</p>
		<a href="https://github.com/crpoudyal/basic_flutter_calculator">Read More</a>
	</div>
	</div>
	</section>
      
    )
}
export default Project;