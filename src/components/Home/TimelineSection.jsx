import React from 'react';
import { timelineItems } from '../../data/homeData';

const TimelineSection = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="text-center font-commissioner">
        <h2 className="mt-5 font-bold text-[#face52] text-2xl sm:text-3xl">
          Why Yuktikula ?
        </h2>
        <p className="mt-1 font-medium text-white text-sm sm:text-base mb-5">
          What Yuktikula has in the bank to offer.
        </p>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {/* Vertical Line - Hidden on mobile */}
        {/* <div className="absolute top-[99px] left-[68px] w-1 bg-gradient-to-r from-white to-white shadow-[0_0_15px_#00f5ff] h-[calc(100%-190px)] hidden sm:block"></div> */}

        {timelineItems.map((item) => (
          <div key={item.id} className="flex flex-row justify-center items-center gap-5 w-full my-6 px-5">
            <div className="flex flex-row justify-center items-center gap-5">
              {/* Circle - Hidden on mobile */}
              <div className="hidden sm:flex h-12 w-12 rounded-full bg-gradient-to-br from-[#ffe031] to-[#ff9f55] items-center justify-center z-10"></div>
              
              {/* Content Box */}
              <div className="w-full sm:w-[520px] p-5 rounded-2xl bg-gradient-to-br from-[rgba(92,92,92,0.2)] to-[rgba(222,220,220,0.45)] font-roboto-condensed flex flex-col justify-center gap-4 shadow-lg transition-all duration-200 hover:scale-105">
                <h3 className="text-[#00d4ff] text-base sm:text-lg font-bold w-[90%]">
                  {item.title}
                </h3>
                <p className="text-white font-light w-[90%] text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;