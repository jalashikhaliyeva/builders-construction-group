// components/SwipeUpButton.js

import { useState, useEffect } from 'react';
import styles from './swipeUp.module.css';

const SwipeUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop < lastScrollTop && window.innerHeight + scrollTop >= document.body.offsetHeight - 3000);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${styles.swipeUp} ${showButton ? styles.show : ''}`}
      onClick={scrollToTop}
    >
      <span>&#8593;</span>
    </div>
  );
};

export default SwipeUpButton;
