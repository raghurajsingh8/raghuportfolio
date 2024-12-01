import React, { useEffect } from 'react';
import pdf from '../pdf/ATS70A.pdf';
import Hero from './Data/hero.json';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A Home component that displays a hero image, a typewriter effect
 * with rotating text, and a link to download a resume.
 *
 * The component uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout|setTimeout}
 * function to create the typewriter effect by adding a single character
 * to the text content of an element every 100 milliseconds, and then
 * erasing the text content every 50 milliseconds. The text rotates
 * between two strings: "Hello, I am Raghuraj Singh" and "A Full Stack Web Developer".
 *
 * The component also uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded|DOMContentLoaded}
 * event to start the typewriter effect after the page has finished loading.
 *
 * @returns {JSX.Element} A JSX element representing the Home component.
 * @example
 * <Home />
 */
/******  3bb4a470-ce49-4f2d-8cc6-034734776cce  *******/const Home = () => {
 const textArray = [];
 let textIndex = 0;
 let charIndex = 0;
 let typing = true;
 // Adjusted time settings for smoother typing experience
 const typingSpeed = 300; // Typing speed in milliseconds
 const erasingSpeed = 150; // Erasing speed in milliseconds
 const delayBetweenTexts = 2500; // Delay between switching texts in milliseconds
 useEffect(() => {
 const typewriter = document.getElementById("typewriter-text");

 const type = () => {
if (typing) {
 if (charIndex < textArray[textIndex].length) {
 typewriter.textContent += textArray[textIndex].charAt(charIndex);
 charIndex++;
 setTimeout(type, typingSpeed);
} else {
 typing = false;
 setTimeout(type, delayBetweenTexts);
 }
 } else {
 if (charIndex > 0) {
 typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
 charIndex--;
 setTimeout(type, erasingSpeed);
} else {
     typing = true;
     textIndex = (textIndex + 1) % textArray.length;
     setTimeout(type, typingSpeed);
 }
 }
};

  type(); // Start the typing effect when component mounts
 }, []);

 return (
  <>
   <br>
   <br>
   <br>
    <br>
    <br>
<div className="container home" id="home">
    <div className="left">
     <h1>
      <span className="typewriter" id="typewriter-text"></span>
     </h1>
     <a href={pdf} className="btn btn-outline-warning" target='_blank' download="Resume.pdf">
     Download Resume
     </a>
    </div>
    <div className="right">
     <div className="img">
     <img src={`/assets/${Hero.imgSrc}`} alt="Profile" />
     </div>
    </div>
   </div>
 </>
 );
};

export default Home;
