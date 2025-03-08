import React from 'react'
import Navbar from './components/Navbar' 
import Home from './components/Home' 
import Experiance from './components/Experiance'  
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import CustomPointer from './components/CustomPointer'  
import GoogleAd from "./components/GoogleAd";


import MouseTrail from './components/MouseTrail'; // Adjust the path as needed


const App = () => {
  return (
    <div>

            <CustomPointer />

      <Navbar/>

      
      <div className="container">
   
      <Home/>
        <h1>Welcome to My Ads</h1>
            <GoogleAd slot="1234567890" width="100%" height="250px" /> 
        
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
