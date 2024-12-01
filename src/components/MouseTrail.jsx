import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    // Create a canvas and append it to the body
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.style.position = 'absolute';
    canvas.style.pointerEvents = 'none';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = '9999';

    let particles = [];

    // Resize canvas to match the window's dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class definition
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2; // Random size for each particle
        this.speedX = Math.random() * 3 - 1.5; // Random X speed
        this.speedY = Math.random() * 3 - 1.5; // Random Y speed
        this.opacity = 1; // Full opacity initially
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.1; // Particle size shrinks over time
        this.opacity -= 0.02; // Particle fades over time
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // White color with opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Animation loop for the particles
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      particles = particles.filter((p) => p.size > 0 && p.opacity > 0); // Keep only valid particles
      particles.forEach((particle) => {
        particle.update(); // Update particle position and size
        particle.draw(); // Draw the particle
      });
      requestAnimationFrame(animateParticles); // Request next frame for continuous animation
    };
    animateParticles(); // Start the animation loop immediately

    // Handle mouse movement to generate particles
    const handleMouseMove = (e) => {
      for (let i = 0; i < 10; i++) {  // Increase particle count for a denser trail
        particles.push(new Particle(e.clientX, e.clientY)); // Create new particle at mouse position
      }
    };

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default MouseTrail;
