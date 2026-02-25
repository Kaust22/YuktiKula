import React from 'react';
import { FaWandMagicSparkles, FaUsers } from 'react-icons/fa6';

const YuktiKulaBoxes = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 my-12">
      <div className="w-[250px] p-5 text-center text-[#face52]">
        <h1 className="text-4xl mb-2 flex justify-center">
          <FaWandMagicSparkles />
        </h1>
        <h1 className="text-3xl my-2">YUKTI</h1>
        <h5 className="text-sm">Yukti stands for Skill</h5>
      </div>

      <div className="w-[250px] p-5 text-center text-[#face52]">
        <h1 className="text-4xl mb-2 flex justify-center">
          <FaUsers />
        </h1>
        <h1 className="text-3xl my-2">KULA</h1>
        <h5 className="text-sm">Kula stands for Community</h5>
      </div>
    </div>
  );
};

export default YuktiKulaBoxes;