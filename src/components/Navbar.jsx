import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav_items">
          <a href=""><i> RAGHURAJ SINGH</i> </a>
        </div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#containerexp" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#project" className="nav_items">Projects</a>
          <a href="#contact-container" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
