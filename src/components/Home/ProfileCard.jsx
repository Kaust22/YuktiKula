import React from 'react';
import HodImage from '../../assets/HOD_CSDS.jpeg';

const ProfileCard = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center rounded-xl w-[80%] max-w-[700px] mx-auto my-12 p-5">
      <img 
        src={HodImage} 
        alt="Dr. Harikesh Singh" 
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mr-0 sm:mr-5 mb-5 sm:mb-0 object-cover"
      />
      <div className="flex-1 text-center sm:text-left">
        <p className="text-sm sm:text-base mb-3 italic">
          "It's a pleasure to see our students' passion driving this club. I believe learning extends beyond classrooms, and initiatives like this foster innovation, collaboration, and real-world experience. My best wishes to the Yuktikula team—keep up the spirit of curiosity and creativity."
        </p>
        <h4 className="m-0 text-base text-[#ff9800]">Dr. Harikesh Singh</h4>
        <h5 className="my-1 text-xs text-[#00aaff]">HOD CSE-DS Department</h5>
      </div>
    </div>
  );
};

export default ProfileCard;