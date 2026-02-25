import React, { useState, useEffect } from 'react';
import { words } from '../../data/homeData';

const BlinkingWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center font-bold text-4xl sm:text-6xl md:text-7xl text-[#face52] my-12 sm:my-24 font-titillium animate-fadeInOut">
      {words[currentWordIndex]}
    </div>
  );
};

export default BlinkingWords;