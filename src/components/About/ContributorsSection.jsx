import { contributorsData } from '../../data/contributorsData';

export default function ContributorsSection() {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 bg-gradient-to-b from-[#f9f9f91f] to-[#f9f9f91f] bg-opacity-15 rounded-xl px-8 py-4 text-yellow-400 w-fit font-montserrat mx-auto">
          Meet The Developers of Our Website
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {contributorsData.map((contributor, index) => (
            <div 
              key={index}
              className="bg-[#18263f66] bg-opacity-15 border-2 border-[#e3dac345] border-opacity-20 rounded-2xl p-6 cursor-pointer hover:bg-opacity-25 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="text-yellow-400 font-bold text-xl mb-2">
                {contributor.name}
              </div>
              <div className="text-white text-opacity-90 text-lg">
                {contributor.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}