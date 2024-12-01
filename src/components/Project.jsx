import React from 'react'
import project from "./Data/projects.json"
const Project = () => {
  return (
    <>
<div className="container project"  id="project">

  <h1>PROJECTS</h1>
  


  <div className="items">
    {project.map((data)=>(

      <>
      <div className="item" key={data.id}>
        
         <h3>{data.title}</h3>
         <img src={data.imageSrc} alt="" />
         <p>{data.description}</p>
          <div className="codebuttons">
            <a href={data.source}>Source</a>
            <a href={data.demo}>Demo</a>
          </div>
      </div>
      </>
    ))}
  </div>
 
</div>
    </>
  )
}

export default Project