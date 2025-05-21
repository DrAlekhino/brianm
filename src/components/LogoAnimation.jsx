import '../../src/App.css';


import { useEffect } from 'react';

export default function LogoAnimation({ onAnimationComplete }) {
  useEffect(() => {
    // Simulate animation completion (Replace with actual animation logic)
    const animationDuration = 4000; // Adjust this to match your actual animation time

    const timer = setTimeout(() => {
      onAnimationComplete(); // Notify parent when animation is done
    }, animationDuration);

    return () => clearTimeout(timer); 
  }, [onAnimationComplete]);

  return (<figure className="perspective-[-200px]">
          <img
          src="/images/navLogo.png" 
           alt="logo image"
            className="landingLogo"
         />
        </figure>);
}
