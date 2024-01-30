import React, { useState, useEffect } from 'react';

const ScrollUp = ({ color = 'black' }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleScrollButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollButton);

    return () => {
      window.removeEventListener('scroll', toggleScrollButton);
    };
  }, []);

  return (
    showScrollButton && (
      <button 
        className="scroll-up" 
        onClick={scrollToTop} 
        style={{ backgroundColor: color }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollUp;