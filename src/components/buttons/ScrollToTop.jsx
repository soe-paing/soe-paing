import React, { useState, useEffect } from 'react';
import './scrollToTop.css';
import { Button } from './Btn';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user has scrolled down 100 pixels or more
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button className={`scroll-to-top ${isVisible ? 'visible' : ''} btn btn-sm`} onClick={scrollToTop}>
      <i className='fas text-light fa-arrow-up'></i>
    </Button>
  );
};

export default ScrollToTop;
