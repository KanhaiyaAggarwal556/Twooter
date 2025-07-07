import { useState, useEffect } from 'react';

export const useScrollDetection = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };
    
    const container = document.querySelector('.posts-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [threshold]);
  
  return isScrolled;
};