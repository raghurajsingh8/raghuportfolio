import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container"  id="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out through any of the following platforms:</p>
      
      <div className="contact-icons">
        <a href="https://www.instagram.com/i_am_raghurajsingh/" target="_blank" rel="noopener noreferrer" className="contact-icon" style={{ color: "#E1306C" }}>
          <FaInstagram />
          <span>Instagram</span>
        </a>
        
        <a href="https://www.linkedin.com/in/raghuraj-pratap-singh-kietians/" target="_blank" rel="noopener noreferrer" className="contact-icon" style={{ color: "#0077B5" }}>
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        
        <a href="mailto:raghurajsingh83170754477@gmail.com" className="contact-icon" style={{ color: "#D44638" }}>
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a href="https://wa.me/+918317075477" target="_blank" rel="noopener noreferrer" className="contact-icon" style={{ color: "#25D366" }}>
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
        
        <a href="https://github.com/Raghurajsingh8" target="_blank" rel="noopener noreferrer" className="contact-icon" style={{ color: "#333" }}>
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="https://x.com/Developer_minds" target="_blank" rel="noopener noreferrer" className="contact-icon" style={{ color: "black",border:"3px solid black" }}>
  <svg  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
  <span>X</span>
</a>


        
      </div>
    </div>
  );
}

export default Contact;
