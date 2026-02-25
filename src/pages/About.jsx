import HeroSection from '../components/About/HeroSection';
import LeadershipSection from '../components/About/LeadershipSection';
import TeamsSection from '../components/About/TeamsSection';
import ContributorsSection from '../components/About/ContributorsSection';
import ContactSection from '../components/About/ContactSection';

export default function About() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="max-w-full mx-auto"> {/* Remove max-width restriction */}
        <HeroSection />
        <LeadershipSection />
        <TeamsSection />
        <ContributorsSection />
        <ContactSection />
      </div>
    </div>
  );
}