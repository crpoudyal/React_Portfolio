import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner.component';
import Navbar from './Components/Navbar/Navbar.component';
import Skill from './Components/Skill/Skill.component';
import Project from './Components/Projects/Project.component';



function App(){
    return(
        <>
     <Navbar />
     <Banner />
     <Skill />
     <Project />
        </>
    );
}

export default App;