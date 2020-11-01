import React from 'react';
import './Navbar.component.css';

function Navbar(){
    return(  
    <section id="main">
        <nav>
            <a href="#" className="logo">
              <img src="/images/logo.png"/>	
            </a>
		 <input className="menu-btn" type="checkbox" id="menu-btn" />
		  <label className="menu-icon" htmlFor="menu-btn">
		    <span className="nav-icon"></span>
		  </label>
	      <ul className="menu">
            <li><a href="#main">Home</a></li>	
            <li><a href="#skills">Skills</a></li>	
            <li><a href="#recent">Recent Project</a></li>	
            <li><a href="#contact">Contact</a></li>	
	     </ul>
	        <a href="https://www.instagram.com/rj_poudyal/" className="hey">Instagram</a>
	   </nav>
    </section> 
    );
}

export default Navbar;