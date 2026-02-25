import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../../data/homeData';

const TeamsGrid = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold sm:text-3xl my-12 sm:my-24">
        Teams In Yuktikula
      </h1>

      <div className="w-[90%] max-w-[1200px] mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {teams.map((team, index) => (
          <div 
            key={index} 
            className="bg-[rgba(255,255,255,0.05)] h-30 p-3 border border-[rgba(255,200,0,0.83)] rounded-xl text-center transition-all duration-300 cursor-pointer hover:scale-105 hover:z-10 hover:shadow-lg hover:border-2 group"
          >
            {/* The 'to' prop uses the team ID as a hash (e.g., /about#1).
              This allows the About page to know which card to flip.
            */}
            <Link 
              to={`/about#${team.id}`} 
              className="no-underline text-inherit block h-full flex flex-col justify-center"
            >
              <h3 className="text-[#face52] text-lg font-bold">
                {team.name}
              </h3>
              <p className="opacity-0 text-[#afafe7] text-[10px] sm:text-xs overflow-hidden transition-all duration-300 group-hover:opacity-100 h-0 group-hover:h-auto">
                click to know more
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamsGrid;