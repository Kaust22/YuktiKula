import { leadershipData } from '../../data/leadershipData';

export default function LeadershipSection() {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <h3 className="text-6xl font-bold text-white mb-8 mt-2">Our Faculty Coordinators</h3>
        <div className=" grid grid-cols-1 lg:grid-cols-1 gap-10 items-start ">
          
          {/* Leaders Row */}
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {/* HOD */}
            <div className="w-200r bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300 border-2 border-[#46402e3c]">
              <img 
                src={leadershipData.hod.image} 
                alt={leadershipData.hod.name}
                className="rounded-2xl object-cover mx-auto mb-6 border-4 border-yellow-300"
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
          <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.Rachna.image} 
                alt={leadershipData.Rachna.name}
                className="rounded-4xl object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.Rachna.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.Rachna.role}
                </div>
              </div>
            </div>

            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.Priya.image} 
                alt={leadershipData.Priya.name}
                className="rounded-4xl object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.Priya.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.Priya.role}
                </div>
              </div>
            </div>

            
          </div>

          

          {/* Core Team Section */}
          <h3 className="text-6xl font-bold text-white mb-1 mt-8">Core Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.coreTeam.president.image} 
                alt={leadershipData.coreTeam.president.name}
                className="rounded-4xl object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.coreTeam.president.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.coreTeam.president.role}
                </div>
              </div>
            </div>

            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.coreTeam.vicePresident.image} 
                alt={leadershipData.coreTeam.vicePresident.name}
                className="rounded-4xl object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.coreTeam.vicePresident.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.coreTeam.vicePresident.role}
                </div>
              </div>
            </div>

            <div className="bg-[#5b5b624c] bg-opacity-10 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:-translate-y-3 transition-transform duration-300" >
              <img 
                src={leadershipData.coreTeam.secretary.image} 
                alt={leadershipData.coreTeam.secretary.name}
                className="rounded-4xl object-cover mx-auto mb-6 border-4 border-gray-300"
              />
              <div className="text-center">
                <div className="text-white text-2xl font-bold font-roboto-condensed">
                  {leadershipData.coreTeam.secretary.name}
                </div>
                <div className="text-gray-400 text-lg mt-2">
                  {leadershipData.coreTeam.secretary.role}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}