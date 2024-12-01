import React from 'react'
import Navbar from './components/Navbar' 
import Home from './components/Home' 
import Experiance from './components/Experiance'  
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import CustomPointer from './components/CustomPointer'  

import MouseTrail from './components/MouseTrail'; // Adjust the path as needed


const App = () => {
  return (
    <div>

            <CustomPointer />

      <Navbar/>

      
      <div className="container">
   
      <Home/>
        
      <Experiance/>
      <Skills/>
      <Project/>
      <Contact/>
      <MouseTrail/>
      </div>
    
    </div>
  )
}

export default App