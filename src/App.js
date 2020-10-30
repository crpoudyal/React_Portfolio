import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner.component';
import Navbar from './Components/Navbar/Navbar.component';
import Skill from './Components/Skill/Skill.component';
import Project from './Components/Projects/Project.component';
import Contact from './Components/Contact/Contact.component';
import Footer from './Components/Footer/Footer.component';



function App(){
    return(
        <>
     <Navbar />
     <Banner />
     <Skill />
     <Project />
     <Contact />
     <Footer />
        </>
    );
}

export default App;