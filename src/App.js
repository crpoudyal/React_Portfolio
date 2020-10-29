import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner.component';
import Navbar from './Components/Navbar/Navbar.component';
import Skill from './Components/Skill/Skill.component';


function App(){
    return(
        <>
     <Navbar />
     <Banner />
     <Skill />
        </>
    );
}

export default App;