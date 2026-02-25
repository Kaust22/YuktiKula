import React from 'react';

const RecruitmentSection = () => {
  return (
    <div className="flex w-[90%] sm:w-[70%] max-w-[800px] mx-auto my-24 pl-[18px] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.2)] rounded-xl shadow-lg overflow-hidden relative animate-slideInRight">
      <div className="w-[18px] bg-gradient-to-b from-[#f5c518] to-[#7ed957] absolute left-0 top-0 bottom-0"></div>
      <div className="p-8 flex-1 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#face52] my-2">
          Be a part of Yuktikula
        </h1>
        <p className="leading-relaxed text-sm sm:text-base text-[#c7c7d9] mb-8">
          This layout is crafted to deliver a balance of elegance and functionality. The gradient accent adds vibrancy, while the dark theme ensures focus and readability.
        </p>
        <a 
          href="#" 
          className="inline-block px-5 py-2 text-sm font-bold text-[#1c1c28] bg-gradient-to-r from-[#f5c518] to-[#face52] rounded-lg text-center no-underline shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7ed957] hover:to-[#f5c518] hover:-translate-y-1 hover:shadow-lg hover:opacity-100 opacity-70 w-fit"
        >
          Recruitment Coming Soon
        </a>
      </div>
    </div>
  );
};

export default RecruitmentSection;