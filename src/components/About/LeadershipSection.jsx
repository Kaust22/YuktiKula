import { leadershipData } from '../../data/leadershipData';

export default function LeadershipSection() {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Leaders Row */}
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {/* HOD */}
            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300 border-2 border-[#46402e3c]">
              <img 
                src={leadershipData.hod.image} 
                alt={leadershipData.hod.name}
                className="w-52 h-52 rounded-full object-cover mx-auto mb-6 border-4 border-yellow-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.hod.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.hod.role}
                </div>
              </div>
            </div>

            {/* Faculty Coordinator */}
            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.faculty.image} 
                alt={leadershipData.faculty.name}
                className="w-52 h-52 rounded-full object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.faculty.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.faculty.role}
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Section */}
          <div className="text-center">
            <div className="mb-8">
              <img 
                src={leadershipData.coreTeam.image} 
                alt="Core Team"
                className="w-80 h-auto rounded-2xl mx-auto border-2 border-[#e3dac345] border-opacity-20 shadow-2xl"
              />
            </div>
            <div className="space-y-4 text-left inline-block">
              {leadershipData.coreTeam.members.map((member, index) => (
                <div key={index} className="text-white text-lg">
                  <span className="text-yellow-400 font-semibold text-xl">{member.role}: </span>
                  <span className="text-gray-300 text-xl">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}