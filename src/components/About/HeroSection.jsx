import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const phrases = ['Connect', 'Create', 'Innovate', 'Collaborate'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(isDeleting 
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <div className="py-30 px-6 sm:px-8 lg:px-12 text-center">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-roboto-condensed mb-8 border-b-2 border-white pb-4 inline-block">
        ABOUT <span className="text-yellow-400">YUKTIKULA</span> COMMUNITY
      </h1>
      
      <p className="max-w-5xl mx-auto text-xl lg:text-2xl mb-12 leading-relaxed">
        We're a student-led community at GL Bajaj built to connect people, ideas, and opportunities. 
        Our club brings together passionate students from every discipline to create events, initiatives, 
        and experiences that leave a mark on campus.
      </p>
      
      <div className="text-3xl lg:text-4xl font-medium">
        We <span className="text-yellow-400">{text}</span>
        <span className="inline-block w-1 h-8 bg-gray-500 ml-2 animate-blink"></span>
      </div>
    </div>
  );
}