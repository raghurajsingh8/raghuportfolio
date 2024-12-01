import React, { useEffect } from 'react';
import './CustomPointer.css'; // Create a CSS file for styles

const CustomPointer = () => {
  useEffect(() => {
    // Create the pointer element dynamically
    const pointer = document.createElement('div');
    pointer.className = 'custom-pointer';
    document.body.appendChild(pointer);

    // Update pointer position
    const updatePointerPosition = (e) => {
      pointer.style.top = `${e.clientY}px`;
      pointer.style.left = `${e.clientX}px`;
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePointerPosition);

    // Cleanup event listeners and pointer on component unmount
    return () => {
      document.removeEventListener('mousemove', updatePointerPosition);
      document.body.removeChild(pointer);
    };
  }, []);

  return null; // No visible JSX, just adds the pointer functionality
};

export default CustomPointer;
