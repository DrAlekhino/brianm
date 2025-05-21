// TypingAnimation.js
import { useState, useEffect } from 'react';

export default function TypingAnimation({ onAnimationComplete, className = '' }) {
  const text = "Hello, I am Brian";
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingSpeed = 100;
  const blinkInterval = 500;
  const blinkCount = 4;
  let blinkCounter = 0;

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[displayedText.length]);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Start cursor blinking after the text is fully typed
      const blinkTimeout = setInterval(() => {
        setCursorVisible((prev) => !prev);
        blinkCounter += 1;

        if (blinkCounter >= blinkCount) {
          clearInterval(blinkTimeout);
          setCursorVisible(false);
          if (onAnimationComplete) onAnimationComplete();
        }
      }, blinkInterval);

      return () => clearInterval(blinkTimeout);
    }
  }, [displayedText]);

  return (
    <h1 className={`${className} text-white font-bold`}>
      {displayedText}
      {cursorVisible && <span className="blinking-cursor">|</span>}
    </h1>
  );
}
