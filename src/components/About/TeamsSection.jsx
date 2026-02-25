import { teamsData } from '../../data/teamsData';
import TeamCard from './TeamCard';

export default function TeamsSection() {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-roboto-condensed border-b-2 border-white pb-4 inline-block">
            OUR TEAMS
          </h2>
        </div>
        
        {/* Responsive grid that uses full width */}
        <div className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
          justify-items-center
          py-6
        ">
          {teamsData.map(team => (
  /* Add the id attribute here */
  <div key={team.id} id={team.id.toString()} className="w-full max-w-96 transform-gpu p-4">
    <TeamCard team={team} />
  </div>
))}
        </div>
      </div>
    </div>
  );
}