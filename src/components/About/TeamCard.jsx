import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TeamCard({ team }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const location = useLocation();

  const handleFlip = () => setIsFlipped(!isFlipped);
  const handleClose = () => setIsFlipped(false);

  useEffect(() => {
    // Check if the current hash matches this card's ID
    if (location.hash === `#${team.id}`) {
      setIsFlipped(true);
      
      // We use a small timeout to ensure the DOM has finished rendering 
      // before attempting to scroll to the card
      const timer = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // Optional: Close other cards when a new hash is selected
      setIsFlipped(false);
    }
  }, [location.hash, team.id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFlipped && cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlipped]);

  return (
    <div 
      ref={cardRef}
      className={`relative w-full h-[18rem] transition-all duration-300 transform-gpu ${
        isFlipped ? 'scale-105 -translate-y-2 z-10' : 'hover:scale-105 hover:-translate-y-2 z-0'
      }`}
      style={{ perspective: '1000px' }}
    >
      {/* Front */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-300 transform-gpu ${
          isFlipped ? 'opacity-0 rotate-y-180' : 'opacity-100 rotate-y-0'
        } backface-hidden`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-end rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
          <img 
            src={team.image} 
            alt={team.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <h3 className="text-2xl font-bold text-[#f9f9f9] mb-4 z-10">{team.name}</h3>
          <button 
            onClick={handleFlip}
            className="mb-6 px-8 py-3 bg-[#f9f9f91f] bg-opacity-15 backdrop-blur-sm rounded-full text-yellow-400 border border-transparent hover:border-orange-500 hover:text-orange-500 transition-all z-10 text-lg font-semibold"
          >
            Know More
          </button>
        </div>
      </div>

      {/* Back */}
      <div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b1d3d9e] to-[#4a410261] transition-all duration-300 transform-gpu ${
          isFlipped ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
        } backface-hidden`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Sticky Close Button Container */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-20 rounded-t-2xl">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-60 text-white rounded-full flex items-center justify-center font-bold hover:bg-opacity-80 transition-all z-30 text-lg"
          >
            ×
          </button>
        </div>
        
        {/* Scrollable Content with proper scrollbar styling */}
        <div className="pt-16 pb-8 px-6 h-full overflow-y-auto team-card-scroll">
          <div className="pr-2"> {/* Add right padding to compensate for scrollbar */}
            <p className="text-white text-base mb-6 leading-relaxed">{team.description}</p>
            
            <h4 className="text-yellow-300 text-lg font-bold mb-3">Team Lead</h4>
            <ul className="text-white text-base mb-6 ml-5">
              <li className="text-lg">{team.lead}</li>
            </ul>
            
            {team.coLead && (
              <>
                <h4 className="text-yellow-300 text-lg font-bold mb-3">Team Co-Lead</h4>
                <ul className="text-white text-base mb-6 ml-5">
                  <li className="text-lg">{team.coLead}</li>
                </ul>
              </>
            )}
            
            <h4 className="text-yellow-300 text-lg font-bold mb-3">Team Members</h4>
            <ul className="text-white text-base ml-5 space-y-2">
              {team.members.map((member, index) => (
                <li key={index} className="text-lg">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}