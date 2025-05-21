// JobTitleAnimation.js
import { useState, useEffect } from 'react';

export default function JobTitleAnimation({ jobTitles, className = '' }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout;

    const currentTitle = jobTitles[titleIndex];
    const isLastTitle = titleIndex === jobTitles.length - 1;

    if (!isDeleting && letterIndex < currentTitle.length) {
      // Typing the title
      timeout = setTimeout(() => {
        setDisplayedTitle(currentTitle.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && letterIndex === currentTitle.length) {
      // Pause at the end of the title
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && letterIndex > 0) {
      // Deleting the title
      timeout = setTimeout(() => {
        setDisplayedTitle(currentTitle.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && letterIndex === 0) {
      // Move to the next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex(isLastTitle ? 0 : titleIndex + 1);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [titleIndex, letterIndex, isDeleting, jobTitles]);

  return (
    <h2 className={`${className} text-white`}>
      <span>I am </span>
      <span className='font-extrabold text-[yellow]'>{displayedTitle}</span>
      <span className="blinking-cursor">|</span>
    </h2>
  );
}
